import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.HwMultiScreenShot',
  name: '滚动截屏',
  groups: [
    {
      key: 1,
      name: '是否删除图片，删除',
      desc: '251229',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.huawei.screenshot.PhotoEditorActivity2',
          matches:
            '[id="android:id/message"][text="是否删除图片？"] <<n * + * [id="android:id/button1"][text="删除"]',
        },
      ],
    },
  ],
});
