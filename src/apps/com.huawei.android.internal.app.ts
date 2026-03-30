import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.android.internal.app',
  name: 'System Share',
  groups: [
    {
      key: 1,
      name: '直接调用闲鱼',
      desc: '251214 ',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.huawei.android.internal.app.HwResolverActivity',
          matches:
            '[id="android:id/text1"][text="闲鱼"] <<n * + * [id="android:id/button_once"][text="仅此一次"]',
        },
      ],
    },
  ],
});
