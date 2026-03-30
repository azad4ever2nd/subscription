import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.maidanba',
  name: '买单吧',
  groups: [
    {
      key: 1,
      name: '最红星期五',
      desc: '',
      rules: [
        {
          matches: [
            '@[id="copy"][text*="立即购买"] <<n * - * [text="最红星期五"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.bankcomm.maidanba.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '首页弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="ivAD"] +2 [vid="ivADClose"]'],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: ['com.bankcomm.maidanba.activity.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '还款后开启消息通知',
      desc: '251206,添加首页弹',
      rules: [
        {
          matches: ['[vid="tv_title"][text="开启消息通知"] + [vid="im_close"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.maidanba.activity.MainActivity',
            'com.bankcomm.maidanba.creditcardpay.RepaymentResultActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '专属权限弹窗',
      desc: '251127',
      rules: [
        {
          matches: ['[vid="iv_dialog_guide_to_install_close"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.maidanba.creditcardpay.CreditCardListActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '领取买单币',
      desc: '251201',
      rules: [
        {
          matches: ['[text^="领"] + [text="领取"]'],
          resetMatch: 'match',
          activityIds: ['com.bankcomm.maidanba.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '给好评',
      desc: '251207',
      rules: [
        {
          matches: ['[vid="goodReputationLoop"] + [vid="rl_close"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.bankcomm.maidanba.activity.MainActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '开启消息通知，关闭',
      desc: '251220',
      rules: [
        {
          matches: ['@* + [text="开启消息通知"] +n [text="去开启"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.bankcomm.maidanba.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '周三抽奖，确定，收下',
      desc: '260313',
      rules: [
        {
          matches: [
            '([text="消耗100买单币抽奖一次"] < * + * > [text="确定"]) || ([text="恭喜抽中"] +n [text="收下"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.bankcomm.maidanba.activity.WebViewActivity'],
        },
      ],
    },
  ],
});
