import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.coolapk.market',
  name: '酷安',
  groups: [
    {
      key: 1,
      name: '请开启推送通知权限,以后再说',
      desc: '251207,',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.coolapk.market.view.main.MainActivity',
          matches:
            '[vid="alertTitle"][text="请开启推送通知权限"] <<n [vid="topPanel"] +n [vid="buttonPanel"] [id="android:id/button2"][text="以后再说"]',
        },
      ],
    },
  ],
});
