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
      desc: '251204，[text="限时抽神券"] +2 [text="无门槛券"]',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '[text="限时抽神券"] +n [text="无门槛券"] + * [text="立即抽奖"]',
          ],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
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
      name: '无明显特征弹窗',
      desc: '占位',
      rules: [
        {
          matches: [
            '[vid="pdd"] ViewGroup[childCount=1] > ImageView[childCount=0]',
          ],
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.ui.activity.MainFrameActivity'],
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
      desc: '260313，',
      rules: [
        {
          matches: [
            '(@Button[text="关闭按钮"] +n [text^="还差1人" || text^="拼单已发起"]) || ([vid="pdd"] < @[vid="pdd"] + [vid="pdd"] > [text="评价拍摄"]) || (@[vid="pdd"][desc="返回"] < * +n * > [vid="tv_title"][text="发表评价" || text="发表真实评价"]) || ([text="继续编辑"] <<n * + * >n [text="退出"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '弹窗2',
      desc: '260304，添加发真实评价选择返回，|| ([text="放弃打款"] <<n *[depth=9] + * >n TextView[text=""]) ',
      rules: [
        {
          matches: [
            '(@Button[text="关闭按钮"] +n [text^="还差1人" || text^="拼单已发起"]) || ([text="邀请好友拼单"] + [text="去首页逛逛"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xunmeng.pinduoduo.activity.NewPageActivity'],
        },
      ],
    },
  ],
});
