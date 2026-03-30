import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '手机管家',
  groups: [
    {
      key: 1,
      name: '拦截短信，全部删除',
      desc: '260202',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.antispam.ui.activity.MainActivity',
          matches:
            '[vid="alertTitle"][text*="删除"] < [vid="topPanel"] +n [vid="buttonPanel"] > [id="android:id/button1"][text*="删除"]',
        },
      ],
    },
  ],
});
