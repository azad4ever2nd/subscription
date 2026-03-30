import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cgbchina.xpt',
  name: '广发银行',
  groups: [
    {
      key: 1,
      name: '广告,弹窗',
      desc: '251120',
      rules: [
        {
          fastQuery: true,
          activityIds: [
            'com.cgb.mobilebank.sit.launcher.module.main.activity.IndexActivity',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
          matches: '@[vid="ad_table_close"] + [vid="ad_table_view_base"]',
        },
      ],
    },
  ],
});
