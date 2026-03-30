import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.photos',
  name: '图库',
  groups: [
    {
      key: 1,
      name: '是否删除，确认',
      desc: '260319',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.huawei.gallery.recycle.app.RecycleAlbumActivity',
            'com.huawei.gallery.app.HwCameraPhotoActivityPortrait',
            'com.huawei.gallery.app.GalleryMain',
            'com.huawei.gallery.app.SlotAlbumActivity',
          ],
          matches:
            '[id="android:id/message"][text*="是否删除"] <<n * + * [id="android:id/button1"][text="永久删除" || text="删除"]',
        },
      ],
    },
  ],
});
