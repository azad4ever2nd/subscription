import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '积分兑无门槛5元',
      desc: '260829，排除确认兑换',
      rules: [
        {
          actionCd: 200,
          actionMaximum: 15,
          order: -1,
          resetMatch: 'match',
          excludeMatches:
            'TextView[text="确认兑换"][clickable=false][visibleToUser=true] + View > TextView[text="查看可用商品"][visibleToUser=true]',
          matches:
            '@View[childCount=4][clickable=true][visibleToUser=true] > TextView[text="无门槛券"] + View[text="100"] + TextView[text="积分兑换"]',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '积分兑无门槛券确认兑换',
      desc: '260829',
      rules: [
        {
          matches:
            'TextView[text*="百亿补贴无门槛券" || text$="无门槛券"] <n View + TextView[text="确认兑换"][clickable=false][visibleToUser=true]',
          actionCd: 100,
          resetMatch: 'match',
          order: -2,
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '积分兑无门槛券兑换成功',
      desc: '',
      rules: [
        {
          matches: ['@* + [text="兑换成功"] +4 [text="去使用"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '积分兑无门槛券抢光',
      desc: '整合每周2张封顶，券已抢光，下周再来',
      rules: [
        {
          action: 'back',
          matches: ['[vid="pdd"][text*="再来"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '百亿补贴无门槛抽奖',
      desc: '260605',
      rules: [
        {
          actionMaximum: 15,
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text="限时抽神券"] +n [text="无门槛券"] + * [text="立即抽奖"]) || (TextView[text="限时抽神券"] -2 TextView[text="无门槛券"] + View >3 TextView[text="立即抽奖"])',
        },
      ],
    },
    {
      key: 6,
      name: '邀请你加入队伍，立即加入抽福袋',
      desc: '260531，2台手机布局不一样',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 1500,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text^="邀请你加入队伍"] < *  +n @*[visibleToUser=true] > [text="立即加入抽福袋"]) || ([text^="邀请你加入队伍"] +n @*[clickable=true][visibleToUser=true] > [text="立即加入抽福袋"])',
        },
      ],
    },
    {
      key: 7,
      name: '会员打卡',
      desc: '260116,整合打卡布局有变，打卡成功，@View >n [text="打卡"]',
      rules: [
        {
          matches: [
            '([text="打卡送积分"] +n [text="打卡"]) || (View > [text="+"] + TextView + * + [text="打卡"]) || (@[text="抽奖"] - View > Image[text="webp"]) || ([text*="打卡成功"] +4 *)',
          ],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '会员打卡成功',
      desc: 'D,',
      rules: [
        {
          matches: ['[text*="打卡成功"] +4 *'],
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '弹窗',
      desc: '260626，添加福袋，下单完成分享弹窗，先用后付资格，百亿补贴弹窗  || (View[childCount=4] > [text="webp"] +3 *',
      rules: [
        {
          matches: [
            '([text="关闭弹窗1"]) || (ImageView < @* - ViewGroup [text="支付成功"])  || ([text="如何领取福袋奖励"] +n [text="去首页解锁"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '确认收货成功，返回',
      desc: '260522',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '[text="确认收货成功"] <<n * + * @[vid="pdd"] > [desc="返回"]',
        },
      ],
    },
    {
      key: 11,
      name: '放弃发真实带图评价，退出',
      desc: '260806， || (TextView[text="继续编辑" || text="放弃打款"] < FrameLayout  <n ViewGroup + ViewGroup[clickable=true]) || (@[vid="pdd"][desc="返回"] < * +n * > [vid="tv_title"][text="发表评价" || text="发表真实评价"]) || ',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 300,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(@Button[text="关闭按钮"] +n [text^="还差1人" || text^="拼单已发起"]) || ([vid="pdd"] < @[vid="pdd"] + [vid="pdd"] > [text="评价拍摄"]) || (TextView[text="继续编辑"] < FrameLayout < ViewGroup + @ViewGroup[clickable=true] > FrameLayout > TextView[text="退出"])',
        },
      ],
    },
    {
      key: 12,
      name: '此次评价未完成，退出',
      desc: '260723',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          actionCd: 300,
          matches:
            'LinearLayout > TextView[vid="pdd"][text="取消"] +n TextView[clickable=true][visibleToUser=true][vid="pdd"][text="退出"]',
        },
      ],
    },
    {
      key: 13,
      name: '弹窗2，添加发真实评价选择返回',
      desc: '260602，',
      rules: [
        {
          matches: [
            '(@Button[text="关闭按钮"] +n [text^="还差1人" || text^="拼单已发起"]) || ([text="邀请好友拼单"] + [text="去首页逛逛"]) || ([text="继续编辑"] <<n *[clickable=true] + @*[clickable=true] >n [text="放弃领券"])',
          ],
          actionCd: 300,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '邀请好友抽福袋,X掉',
      desc: '260223，D',
      rules: [
        {
          action: 'click',
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text="邀请好友抽福袋"] <n * + TextView[childCount=0]) || (View > @TextView[index=parent.childCount.minus(1)] - View > TextView[text="邀请好友抽福袋"])',
        },
      ],
    },
    {
      key: 15,
      name: '福袋奖励，X掉',
      desc: '260613',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'View > Image + @Image[clickable=true] + View > TextView[text="消费券福袋奖励"] - View > TextView[text$="折"] + TextView[text^="最高减"]',
        },
      ],
    },
    {
      key: 16,
      name: '抽到消费福袋奖励，X掉',
      desc: '260624',
      rules: [
        {
          resetMatch: 'match',
          action: 'click',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(View > View > View > @Image[text="webp"] + View > View > View > View > TextView[text*="折最高减"]) || (View > @Image[text="webp"] + View > TextView[text="消费券福袋奖励"]) || (View > @Image[text="webp"] + Image + TextView[text$="后过期"])',
        },
      ],
    },
    {
      key: 17,
      name: '抽到限时神券，X掉',
      desc: '260628',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(@Image[text="webp"][clickable=true] - View > View > TextView[text$="折"] + TextView[text^="最高减"] + TextView[text="专场可用"]) || (TextView[text="专场可用"] - TextView[text^="最高减"] - TextView[text$="折"] < View < View + Image[text="webp"][clickable=true]) || (View > View > @Image[text="webp"][clickable=false] - View > View > TextView[text$="元"] + TextView[text="无门槛券" || text="专场可用"])',
        },
      ],
    },
    {
      key: 18,
      name: '添加物流助手到桌面，X掉',
      desc: '260702',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text="添加物流助手到桌面"] <<n * + @ViewGroup[visibleToUser=true] ImageView) || ([text="添加物流助手到桌面"] <<n * + @ViewGroup[clickable=true][visibleToUser=true] ImageView) || (TextView[text="添加物流助手到桌面"] < FrameLayout < ViewGroup < ViewGroup < ViewGroup < ViewGroup + ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > ImageView)',
        },
      ],
    },
    {
      key: 19,
      name: '拼单完成，返回首页',
      desc: '260613',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text^="剩余"] + View > View > TextView[text^="还差"] + ListView + TextView[text="去首页逛逛"]',
        },
      ],
    },
    {
      key: 20,
      name: '如何解锁，去首页',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          action: 'click',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(View > TextView[text="解锁消费券"] + TextView + TextView[clickable=false][visibleToUser=true][text="去首页领券"]) || (View > TextView[text="如何解锁?" || text="如何解锁点亮?"] + TextView[clickable=false][text="去首页"]) || (View > View > View > TextView[text*="浏览商品10秒"] +n TextView[clickable=false][visibleToUser=true][text^="去看看"])',
        },
      ],
    },
    {
      key: 21,
      name: '5折点亮任务完成，去解锁',
      desc: '260706',
      rules: [
        {
          resetMatch: 'app',
          action: 'click',
          actionMaximum: 1,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'TextView[text="点亮任务已完成"] +n View > View > TextView[clickable=false][visibleToUser=true][text="去解锁"]',
        },
      ],
    },
    {
      key: 22,
      name: '确认删除最近搜索记录吗？删除',
      desc: '260710',
      rules: [
        {
          resetMatch: 'match',
          action: 'click',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'LinearLayout > TextView[id="com.xunmeng.pinduoduo:id/pdd"][text="确认删除最近搜索记录吗？"] + LinearLayout > TextView[clickable=true][visibleToUser=true][text="删除"]',
        },
      ],
    },
    {
      key: 23,
      name: '下单成功弹窗，X掉',
      desc: '260626',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches:
            '(WebView > WebView > View > View > View > Button[text="关闭弹窗"]) || (WebView > WebView > View > View > View > Button[text="关闭弹窗"][clickable=true])',
        },
      ],
    },
    {
      key: 24,
      name: '确认要放弃付款吗，暂时放弃',
      desc: '260531',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 300,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches:
            '([text="暂时放弃"] <<n @* + [text="继续支付"]) || ([text="暂时放弃"] <<n @*[clickable=true] + [text="继续支付"])',
        },
      ],
    },
    {
      key: 25,
      name: '发表评价，返回',
      desc: '260806',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '@[vid="pdd"][desc="返回"] < * +n * > [vid="tv_title"][text="发表评价" || text="发表真实评价"]',
        },
      ],
    },
    {
      key: 26,
      name: '提前锁定限时翻倍券，开心收下 或 X掉',
      desc: '260807',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(View > View > View > View > TextView[clickable=false][text="开心收下"] + Image[clickable=false][visibleToUser=true][text="webp"])',
        },
      ],
    },
    {
      key: 27,
      name: '弹窗，余额可抵扣，X掉',
      desc: '260829',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'View > @Button[text="关闭按钮"][clickable=true][visibleToUser=true] + TextView[text^="余额¥" && text$="购物可直接抵扣"]',
        },
      ],
    },
    {
      key: 28,
      name: '立即点亮',
      desc: '260829',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'View > View > TextView[text="立即点亮"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 29,
      name: '浏览当前页面10秒即可点亮',
      desc: '260829',
      rules: [
        {
          resetMatch: 'match',
          action: 'swipe',
          swipeArg: {
            start: {
              x: 538,
              y: 2052,
            },
            end: {
              x: 538,
              y: 1000,
            },
            duration: 800, //滑动时长
          },
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            'View[id="sticky_Gffa"] > TextView[text="滑动浏览当前页面"] +2 TextView[text="秒即可点亮"]',
        },
      ],
    },
    {
      key: 30,
      name: '通知关闭，拒绝接收',
      desc: '260609',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
          matches:
            'TextView[text="因通知关闭，无法接收物流消息"] < FrameLayout +2 ViewGroup > @ViewGroup > FrameLayout > TextView[text="拒绝接收"]',
        },
      ],
    },
    {
      key: 28,
      name: '百亿补贴消费券天天抢，点击领取消费券（激活）',
      desc: '260814',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
          matches:
            'ViewGroup[childCount=3] > ImageView + @ViewGroup[childCount=2][clickable=true] > ViewGroup[childCount=2] > ViewGroup[childCount=3] + ImageView[clickable=false][visibleToUser=true]',
        },
      ],
    },
  ],
});
