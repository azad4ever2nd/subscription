import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.xunmeng.pinduoduo',
  name: '拼多多',
  groups: [
    {
      key: 1,
      name: '积分兑无门槛5元整合版',
      desc: '261026,',
      rules: [
        {
          actionCd: 10,
          forcedTime: 3000,
          order: -1,
          resetMatch: 'match',
          anyMatches: [
            'View > View > @Image[text="webp"][clickable=true][visibleToUser=true] + TextView[text="确认消耗"] +n View >  * + TextView[text!="百亿补贴无门槛券"] + TextView', //弹窗，其他类型的券，X掉
            'View > View > @Image[text="webp"][clickable=false][visibleToUser=true] + TextView[text="确认消耗"] +n View >  * + TextView[text!="百亿补贴无门槛券"] + TextView', //弹窗，其他类型的券，X掉
            'View > View > @Image[text="webp"][clickable=true][visibleToUser=true] + TextView[text="积分不足 去获取更多积分吧"]', //积分不足
            'TextView[text*="百亿补贴无门槛券" || text$="无门槛券"] <n View + TextView[text="确认兑换"][clickable=false][visibleToUser=true]', //弹窗，确认兑换无门槛券
            '@View[childCount=4] > TextView[text="无门槛券"] + View[text="100"] + TextView[text="积分兑换"]', //兑换无门槛券
          ],
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '积分兑无门槛5元',
      desc: '260918,',
      rules: [
        {
          actionCd: 0,
          forcedTime: 800,
          order: -1,
          resetMatch: 'match',
          anyMatches: [
            '@View[childCount=4][clickable=true][visibleToUser=true] > TextView[text="无门槛券"] + View[text="100"] + TextView[text="积分兑换"]',
            '@View[clickable=false][visibleToUser=true][childCount=4] > TextView[text="无门槛券"] +  View[text="100"] +  TextView[text="积分兑换"]',
          ],
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '积分兑无门槛券确认兑换',
      desc: '261007，增加 排除非百亿补贴无门槛券 和 积分不足',
      rules: [
        {
          anyMatches: [
            'TextView[text*="百亿补贴无门槛券" || text$="无门槛券"] <n View + TextView[text="确认兑换"][clickable=false][visibleToUser=true]',
            'View > View > @Image[text="webp"][clickable=true][visibleToUser=true] + TextView[text="确认消耗"] +n View >  * + TextView[text!="百亿补贴无门槛券"] + TextView',
            'View > View > @Image[text="webp"][clickable=false][visibleToUser=true] + TextView[text="确认消耗"] +n View >  * + TextView[text!="百亿补贴无门槛券"] + TextView',
            'View > View > @Image[text="webp"][clickable=true][visibleToUser=true] + TextView[text="积分不足 去获取更多积分吧"]',
          ],
          actionCd: 0,
          forcedTime: 1000,
          resetMatch: 'match',
          order: -2,
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '积分兑无门槛券兑换成功',
      desc: '260905，fastQuery=false，限次数',
      rules: [
        {
          anyMatches: ['@* + [text="兑换成功"] +4 [text="去使用"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '积分兑无门槛券抢光',
      desc: 'D，整合每周2张封顶，券已抢光，下周再来',
      rules: [
        {
          action: 'back',
          anyMatches: ['[vid="pdd"][text*="再来"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗，X掉1',
      desc: '261005，fastQuery=true，clickable=true',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 300,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'TextView[text="继续编辑"] < FrameLayout + @FrameLayout[clickable=true][visibleToUser=true] > TextView[text="放弃打款"]',
            'TextView[text="继续编辑"] < FrameLayout < ViewGroup + @ViewGroup[clickable=true] > FrameLayout > TextView[text="退出"]',
            '[vid="pdd"] < @[vid="pdd"] + [vid="pdd"] > [text="评价拍摄"]',
            'TextView[text="放弃打款"] <<n ViewGroup + @ViewGroup[clickable=true][visibleToUser=true] > FrameLayout > TextView[text.length=1][clickable=false][visibleToUser=true]',
            'ImageView < @FrameLayout[vid="pdd"][clickable=true][visibleToUser=true] - ViewGroup > TextView[vid="tv_title"][text="可参与的拼单"]', //可参与的拼单，X掉
            '[text="继续编辑"] <<n *[clickable=true] + @*[clickable=true] >n [text="放弃领券"]',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '弹窗，X掉2',
      desc: '260905，fastQuery=true，clickable=false',
      rules: [
        {
          anyMatches: [
            '[text="邀请好友拼单"] + [text="去首页逛逛"]',
            '@[vid="pdd"][desc="返回"] < * +n * > [vid="tv_title"][text="发表评价" || text="发表真实评价"]', //发表评价，返回',
            'TextView[text="因通知关闭，无法接收物流消息"] < FrameLayout +2 ViewGroup > @ViewGroup > FrameLayout > TextView[text="拒绝接收"]', //通知关闭，拒绝接收
            '[text="确认收货成功"] <<n * + * @[vid="pdd"] > [desc="返回"]', //确认收货成功，返回
          ],
          actionCd: 300,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '百亿补贴，无门槛抽奖',
      desc: '261027，fastQuery=false,clickable=true',
      rules: [
        {
          actionMaximum: 5,
          actionCd: 2000,
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'View >  TextView[text$="元无门槛券"] + @View[clickable=true][visibleToUser=true] > TextView[text="立即抽奖"]',
            'View >  TextView[text*="点抢最高16元无门槛券"] + @View[clickable=true][visibleToUser=true] > TextView[text="立即抽奖"]',
            'TextView[text="限时抽神券"] -2 TextView[text="无门槛券"] + View >3 TextView[text="立即抽奖"]',
            '[text="限时抽神券"] +n [text="无门槛券"] + * [text="立即抽奖"]',
            'TextView[text="放弃优惠并退出"] < FrameLayout <<n ViewGroup + @ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > ImageView',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，邀请你加入队伍，立即加入抽福袋',
      desc: '260928，2台手机布局不一样，fastQuery=false，',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            '[text^="邀请你加入队伍"] +n @*[clickable=true][visibleToUser=true] > [text="立即加入抽福袋"]',
            '[text^="邀请你加入队伍"] < *  +n @*[visibleToUser=true] > [text="立即加入抽福袋"]',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '会员打卡',
      desc: '261028,整合打卡布局有变，打卡成功，fastQuery=false，限次数',
      rules: [
        {
          actionMaximum: 2,
          resetMatch: 'match',
          anyMatches: [
            'View > TextView[text="打卡送积分"] + View + TextView[text="打卡"][clickable=true][visibleToUser=true]',
            'View > TextView[text="打卡送积分"] + View + TextView[text="打卡"][clickable=false][visibleToUser=true]',
            '@[text="抽奖"] - View > Image[text="webp"]',
            '[text*="打卡成功"] +4 *',
          ],
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '会员打卡成功',
      desc: 'D，fastQuery=false，限次数',
      rules: [
        {
          anyMatches: ['[text*="打卡成功"] +4 *'],
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '5折点亮任务完成，去解锁',
      desc: '260706，fastQuery=false，clickable=false',
      rules: [
        {
          resetMatch: 'app',
          action: 'click',
          actionMaximum: 1,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches:
            'TextView[text="点亮任务已完成"] +n View > View > TextView[clickable=false][visibleToUser=true][text="去解锁"]',
        },
      ],
    },
    {
      key: 13,
      name: '立即点亮',
      desc: '260928，fastQuery=false，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 750,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'View > View > TextView[text="立即点亮"][clickable=false][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '弹窗，X掉3',
      desc: '261017，fastQuery=false，clickable=false，添加 提前锁定，神券',
      rules: [
        {
          resetMatch: 'match',
          action: 'click',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'TextView[id="sticky_Yf2L"] + View > View > View >  Image[text="800x9999%3E"][clickable=false][visibleToUser=true]',
            'View > View > View > TextView[text="恭喜获得专属惊喜券"] + TextView[text*="已成功点亮" || text$="明日可继续点亮"] +(3,4)  Image[text="webp"][visibleToUser=true]',
            'TextView[text="海量商品可用"] - TextView < View +n TextView[index=parent.childCount.minus(1)][clickable=false][visibleToUser=true]',
            'View >  TextView[text*="点抢最高16元无门槛券"] + @View[clickable=false][visibleToUser=true] > TextView[text="立即抽奖"]',
            'View >  TextView[text*="点抢最高16元无门槛券"] + View[clickable=false][visibleToUser=true] > TextView[text="立即抽奖"][clickable=false][visibleToUser=true]',
            'View > @Image[text="webp"][clickable=false][visibleToUser=true] - View >n TextView[text*="元券"] - View > Image[text="webp"]',
            'View > @Image[text="webp"][clickable=false][visibleToUser=true] -n View > TextView[text^="好友已加入队伍"]',
            'View > @View[clickable=false][visibleToUser=true] + TextView[text="进入消费券活动页领券"]',
            'View > TextView[text="如何解锁?" || text="如何解锁点亮?"] + TextView[clickable=false][text="去首页"]',
            'View > TextView[text="解锁消费券"] + TextView + TextView[clickable=false][visibleToUser=true][text="去首页领券"]',
            'View > View > View > TextView[text*="浏览商品10秒"] +n TextView[clickable=false][visibleToUser=true][text^="去看看"]',
            'View > View > View > View > TextView[text^="恭喜提前锁定"] +n TextView[text="开心收下"][clickable=false][visibleToUser=true]',
            'TextView[text^="剩余"] + View > View > TextView[text^="还差"] + ListView + TextView[text="去首页逛逛"]',
            '[text="添加物流助手到桌面"] <<n * + @ViewGroup[clickable=false][visibleToUser=true] ImageView',
            'WebView > WebView > View > View > View > Button[text="关闭弹窗"]',
            '[text="暂时放弃"] <<n @* + [text="继续支付"]',
            'ImageView < @* - ViewGroup [text="支付成功"]',
            '[text="如何领取福袋奖励"] +n [text="去首页解锁"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '弹窗，福袋奖励，X掉',
      desc: '260905，fastQuery=false，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          action: 'click',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'View > View > View > @Image[text="webp"] + View > View > View > View > TextView[text*="折最高减"]',
            'View > @Image[text="webp"] + View > TextView[text="消费券福袋奖励"]',
            'View > @Image[text="webp"] + Image + TextView[text$="后过期"]',
            'View > View > @Image[text="webp"][clickable=false] - View > View > TextView[text$="元"] + TextView[text="无门槛券" || text="专场可用"]',
            'View > View > View > View > TextView[clickable=false][text="开心收下"] + Image[clickable=false][visibleToUser=true][text="webp"]', //提前锁定限时翻倍券， X掉
          ],
        },
      ],
    },
    {
      key: 16,
      name: '弹窗，X掉4',
      desc: '261028，fastQuery=false，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'View > Image + @Image[clickable=true] + View > TextView[text="消费券福袋奖励"] - View > TextView[text$="折"] + TextView[text^="最高减"]',
            '@Image[text="webp"][clickable=true][visibleToUser=true] - View > View > TextView[text$="折"] + TextView[text^="最高减"] + TextView[text="专场可用"]',
            '@Image[text="webp"][clickable=true][visibleToUser=true] - View > View > TextView + TextView[text="无门槛券"]', //弹窗，2元无门槛券
            'View > @Image[text="webp"][clickable=true][visibleToUser=true] - View >n TextView[text*="元券"] - View > Image[text="webp"]',
            'TextView +n @Image[text="webp"][clickable=true][visibleToUser=true] -n View > View > TextView[text$="后过期"]',
            'TextView[text="专场可用"] - TextView[text^="最高减"] - TextView[text$="折"] < View < View + Image[text="webp"][clickable=true]',
            'TextView[text="添加物流助手到桌面"] < FrameLayout < ViewGroup < ViewGroup < ViewGroup < ViewGroup + ViewGroup[clickable=true][visibleToUser=true] > ViewGroup > ImageView',
            'TextView[text="添加物流助手到桌面"] <<n * + @ViewGroup[clickable=true][visibleToUser=true] ImageView',
            'View  > @Image[text="webp"][clickable=true][visibleToUser=true] -n View >  TextView[text^="好友已加入队伍"]',
            'View > View > View > TextView[text="恭喜获得专属惊喜券"] + TextView[text*="已成功点亮" || text$="明日可继续点亮"] +(3,4)  Image[text="webp"][clickable=true][visibleToUser=true]',
            'TextView[text="待使用"] <<n ViewGroup + ViewGroup > ImageView[clickable=true][visibleToUser=true]',
            'TextView[text="先去逛逛"] <<n ViewGroup + ViewGroup > ImageView[clickable=true][visibleToUser=true]',
            'View > @Button[text="关闭弹窗"][clickable=true][visibleToUser=true] +n View > TextView[text$="已支付"] + TextView[text*="邀请好友来拼单"]', //下单完后弹窗，还差1人，赶快邀请好友来拼单吧
            'View > @Button[text="关闭弹窗"][clickable=true][visibleToUser=true] + View > Button[text="查看订单详情"] - View > TextView[text="开心收下"]', //下单完后弹窗，下单成功，预计4小时内发货，开心收下，查看订单详情
          ],
        },
      ],
    },
    {
      key: 17,
      name: '弹窗，有名字的按钮',
      desc: '2601028，添加组队成功，fastQuery=false，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 750,
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            '[text="暂时放弃"] <<n @*[clickable=true] + [text="继续支付"]',
            'View > View > View > TextView[text^="浏览商品10秒" || text$="即可点亮1次"] +n TextView[text^="去看看"][clickable=true][visibleToUser=true]',
            'View > View > View > TextView[text^="如何解锁" || text="如何解锁点亮?"] + TextView[text="去首页"][clickable=true][visibleToUser=true]',
            'View > @View[clickable=true][visibleToUser=true] + TextView[text="进入消费券活动页领券"]', //页面，非弹窗
            'WebView > WebView > View > View > View > Button[text="关闭弹窗"][clickable=true]',
            'View > @Button[text="关闭按钮"][clickable=true][visibleToUser=true] + TextView[text^="余额¥" && text$="购物可直接抵扣"]',
            'LinearLayout > TextView[id="com.xunmeng.pinduoduo:id/pdd"][text="确认删除最近搜索记录吗？"] + LinearLayout > TextView[text="删除"][clickable=true][visibleToUser=true]',
            'View > View > View > View > TextView[text^="恭喜提前锁定"] +n TextView[text="开心收下"][clickable=true][visibleToUser=true]', //
            'LinearLayout > TextView[vid="pdd"][text="取消"] +n TextView[clickable=true][visibleToUser=true][vid="pdd"][text="退出"]', //此次评价未完成，退出
            'View > @Button[text="关闭弹窗"][clickable=true][visibleToUser=true] + View > Button[text="查看订单详情"] - View > TextView[text="开心收下"]', //下单完后弹窗
          ],
        },
      ],
    },
    {
      key: 18,
      name: '邀请好友抽福袋,X掉',
      desc: 'D,260223，fastQuery=false，',
      rules: [
        {
          action: 'click',
          resetMatch: 'match',
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'View > @TextView[index=parent.childCount.minus(1)] - View > TextView[text="邀请好友抽福袋"]',
            '[text="邀请好友抽福袋"] <n * + TextView[childCount=0]',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '浏览当前页面10秒即可点亮',
      desc: '260929，fastQuery=false，下滑操作',
      rules: [
        {
          resetMatch: 'match',
          action: 'swipe',
          swipeArg: {
            start: {
              x: 538,
              y: 2325,
            },
            end: {
              x: 538,
              y: 1000,
            },
            duration: 800, //滑动时长
          },
          activityIds: 'com.xunmeng.pinduoduo.activity.NewPageActivity',
          anyMatches: [
            'View[id^="sticky_"] > TextView[text="滑动浏览当前页面"] +2 TextView[text="秒即可点亮"]',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '百亿补贴消费券天天抢，点击领取消费券（激活）',
      desc: '260911，fastQuery=false，添加 Ids ',
      rules: [
        {
          resetMatch: 'match',
          activityIds: [
            'com.xunmeng.pinduoduo.ui.activity.MainFrameActivity',
            'com.xunmeng.pinduoduo.ui.activity.HomeActivity',
          ],
          anyMatches: [
            'ViewGroup[childCount=3] > ImageView + @ViewGroup[childCount=2][clickable=true] > ViewGroup[childCount=2] > ViewGroup[childCount=3] + ImageView[clickable=false][visibleToUser=true]',
            'ViewGroup[childCount=3] > ImageView + ViewGroup[childCount=2][clickable=true] > ViewGroup[childCount=2] > ViewGroup[childCount=3] + ImageView[clickable=false][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
