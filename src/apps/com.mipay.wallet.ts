import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '开启通知，取消',
      desc: '260213',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
          matches: '[vid="title"][text*="通知"] +n * > [vid="cancel"]',
        },
      ],
    },
  ],
});
