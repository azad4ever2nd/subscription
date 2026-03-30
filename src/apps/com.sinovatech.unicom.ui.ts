import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sinovatech.unicom.ui',
  name: '中国联通',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '',
      rules: [
        {
          matches: ['[text="广告"] + Image + Image'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.sinovatech.unicom.basic.ui.activity.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '半价话费',
      desc: '251225',
      rules: [
        {
          matches: ['[text="50元话费券"] +n * > [text="立即抢"]'],
          resetMatch: 'match',
          activityIds: [
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '确认要离开收银台,确认离开',
      desc: '260129',
      rules: [
        {
          matches: ['[text="确认要离开收银台？"] +n * > [text="确认离开"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unicom.pay.normal.order.ui.WPOrderActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '放弃优惠',
      desc: '260205',
      rules: [
        {
          matches: ['@[text="放弃优惠"] +n [text="享受优惠"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unicom.pay.normal.order.ui.WPOrderActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '签到成功，关闭',
      desc: '260303',
      rules: [
        {
          matches: [
            '[text*="签到成功" || text*="继续做任务"] +n [text="X8DC9OwtmT2bwAAAABJRU5ErkJggg=="]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '签到后弹窗',
      desc: '260228',
      rules: [
        {
          matches: ['[text="b6RVEJpvijzQgAAAABJRU5ErkJggg=="]'],
          resetMatch: 'match',
          activityIds: [
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '权益超市抽奖，弹窗',
      desc: '260312',
      rules: [
        {
          matches: ['@* > [text="close.8ce8930c"]'],
          actionDelay: 1000,
          resetMatch: 'match',
          activityIds: [
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '支付成功，完成',
      desc: '260319',
      rules: [
        {
          matches: ['[vid="wopay_pay_result_confirm_btn"][text="完成"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unicom.pay.modules.result.ui.WPPayResultActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '交费成功，退出',
      desc: '260319',
      rules: [
        {
          matches: [
            '[vid="webdetail_title_textview"][text="交费完成"] < * + * > [vid="web_close"][desc="退出"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.sinovatech.unicom.basic.ui.activity.WebDetailActivity',
          ],
        },
      ],
    },
  ],
});
