import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
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
      key: 2,
      name: '拼多多会员无门槛5元',
      desc: '251130,解决兑满时不点击，整合兑换成功，确认兑换，积分兑换',
      rules: [
        {
          matches: [
            ' (*[childCount=4] > [text="无门槛券"] + [text="100"] + [text="积分兑换"])',
          ],
          actionCd: 0,
          actionMaximum: 15,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '百亿补贴无门槛抽奖',
      desc: '260605',
      rules: [
        {
          actionMaximum: 15,
          actionCd: 0,
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text="限时抽神券"] +n [text="无门槛券"] + * [text="立即抽奖"]) || (TextView[text="限时抽神券"] -2 TextView[text="无门槛券"] + View >3 TextView[text="立即抽奖"])',
        },
      ],
    },
    {
      key: 4,
      name: '会员打卡成功',
      desc: '',
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
      key: 5,
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
      key: 6,
      name: '积分兑无门槛券确认兑换',
      desc: '',
      rules: [
        {
          matches: ['@[text="确认兑换"] + * > [text="查看可用商品"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 7,
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
      key: 8,
      name: '弹窗',
      desc: '260322，下单完成分享弹窗，先用后付资格，百亿补贴弹窗  || (View[childCount=4] > [text="webp"] +3 *',
      rules: [
        {
          matches: [
            '([text="关闭弹窗"]) || (ImageView < @* - ViewGroup [text="支付成功"])  || ([text="如何领取福袋奖励"] +n [text="去首页解锁"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 9,
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
      key: 10,
      name: '关闭弹窗',
      desc: '251130',
      rules: [
        {
          matches: ['[text="关闭弹窗"]'],
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageMaskActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '放弃发真实带图评价',
      desc: '260616',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(@Button[text="关闭按钮"] +n [text^="还差1人" || text^="拼单已发起"]) || ([vid="pdd"] < @[vid="pdd"] + [vid="pdd"] > [text="评价拍摄"]) || (@[vid="pdd"][desc="返回"] < * +n * > [vid="tv_title"][text="发表评价" || text="发表真实评价"]) || (TextView[text="继续编辑"] < FrameLayout < ViewGroup + @ViewGroup[clickable=true] > FrameLayout > TextView[text="退出"])',
        },
      ],
    },
    {
      key: 12,
      name: '弹窗2',
      desc: '260602，添加发真实评价选择返回，',
      rules: [
        {
          matches: [
            '(@Button[text="关闭按钮"] +n [text^="还差1人" || text^="拼单已发起"]) || ([text="邀请好友拼单"] + [text="去首页逛逛"]) || ([text="继续编辑"] <<n *[clickable=true] + @*[clickable=true] >n [text="放弃领券"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '邀请好友抽福袋',
      desc: '260223',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches: '[text="邀请好友抽福袋"] <n * + TextView[childCount=0]',
        },
      ],
    },
    {
      key: 14,
      name: '确认要放弃付款吗，暂时放弃',
      desc: '260531',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches:
            '([text="暂时放弃"] <<n @* + [text="继续支付"]) || ([text="暂时放弃"] <<n @*[clickable=true] + [text="继续支付"])',
        },
      ],
    },
    {
      key: 15,
      name: '邀请你加入队伍，立即加入抽福袋',
      desc: '260531，2台手机布局不一样',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text^="邀请你加入队伍"] < *  +n @*[visibleToUser=true] > [text="立即加入抽福袋"]) || ([text^="邀请你加入队伍"] +n @*[clickable=true][visibleToUser=true] > [text="立即加入抽福袋"])',
        },
      ],
    },
    {
      key: 16,
      name: '添加物流助手到桌面，X掉',
      desc: '260531',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '([text="添加物流助手到桌面"] <<n * + @ViewGroup[visibleToUser=true] ImageView) || ([text="添加物流助手到桌面"] <<n * + @ViewGroup[clickable=true][visibleToUser=true] ImageView)',
        },
      ],
    },
    {
      key: 17,
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
      key: 18,
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
      name: '抽到限时神券，X掉',
      desc: '260614',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          matches:
            '(@Image[text="webp"][clickable=true] - View > View > TextView[text$="折"] + TextView[text^="最高减"] + TextView[text="专场可用"]) || (TextView[text="专场可用"] - TextView[text^="最高减"] - TextView[text$="折"] < View < View + Image[text="webp"][clickable=true])',
        },
      ],
    },
    {
      key: 21,
      name: '下单成功，X掉',
      desc: '260615',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageMaskActivity',
          matches:
            'WebView > View > View > View > @Button[text="关闭弹窗"] +n Button[text^="继续逛逛"]',
        },
      ],
    },
  ],
});
