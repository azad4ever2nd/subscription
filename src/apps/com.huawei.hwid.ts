import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      key: 1,
      name: '发送通知，禁止',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.huawei.hms.runtimekit.stub.HMSKitSingleInstanceCoreTransparentActivity4',
          matches:
            'TextView[id="android:id/alertTitle"][text*="发送通知"] < LinearLayout < LinearLayout +2 LinearLayout[id="android:id/buttonPanel"] > LinearLayout > Button[id="android:id/button2"][text="禁止"]',
        },
      ],
    },
  ],
});
