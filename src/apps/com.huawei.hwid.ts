import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.hwid',
  name: 'HMS Core',
  groups: [
    {
      key: 1,
      name: '发送通知',
      desc: '禁止',
      resetMatch: 'match',
      rules: [
        {
          matches: [
            '[text*="发送通知"] <<n [id="android:id/topPanel"] +2 [id="android:id/buttonPanel"] [text="禁止"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.huawei.hms.runtimekit.stub.HMSKitSingleInstanceCoreTransparentActivity4',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '发送通知占位',
      desc: '禁止',
      resetMatch: 'match',
      rules: [
        {
          matches: [
            '[text*="发送通知"] <<n [id="android:id/topPanel"] +2 [id="android:id/buttonPanel"] [text="禁止"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.huawei.hms.runtimekit.stub.HMSKitSingleInstanceCoreTransparentActivity4',
          ],
        },
      ],
    },
  ],
});
