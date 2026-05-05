import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.google.android.gms',
  name: 'Google Play 服务',
  groups: [
    {
      key: 1,
      name: '无法获取位置信息，关闭',
      desc: '260505',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.google.android.gms.location.settings.LocationOffWarningActivity',
          matches:
            '[vid="alertTitle"][text="无法获取位置信息"] <<n * +n * [id="android:id/button2"]',
        },
      ],
    },
  ],
});
