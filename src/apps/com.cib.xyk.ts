import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cib.xyk',
  name: '兴业生活',
  groups: [
    {
      key: 1,
      name: '定位服务',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cib.fintech.activity.MainActivity',
          matches:
            '[vid="mobile_web_dialog_title"][text="定位服务"] +n * > [text="知道了"]',
        },
      ],
    },
  ],
});
