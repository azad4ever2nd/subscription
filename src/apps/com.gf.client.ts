import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.gf.client',
  name: '广发易淘金',
  groups: [
    {
      key: 1,
      name: '重要公告，我知道了',
      desc: '260513',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.gf.mobile.module.home.HomeActivity',
          matches:
            '[vid="gf_titleFrame"] +n [vid="gd_positive_button"][text="我知道了"]',
        },
      ],
    },
  ],
});
