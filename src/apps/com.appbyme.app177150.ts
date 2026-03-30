import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.appbyme.app177150',
  name: '卡农社区',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          matches: '[vid="iv_close_ad"]',
        },
      ],
    },
  ],
});
