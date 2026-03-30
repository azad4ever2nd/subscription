import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: 1,
      name: '开启消息通知',
      desc: '260221',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cmcc.wallet.mocam.activity.home.WalletHomeActivity',
          matches: '[vid="activityImg"] + [vid="closeImg"]',
        },
      ],
    },
  ],
});
