import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gzrcb.mobilebank',
  name: '广州农商银行',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.yitong.mobile.biz.launcher.app.main.MainActivity',
          matches:
            '[vid="img_advertisement"] + [vid="img_advertisement_close"]',
        },
      ],
    },
  ],
});
