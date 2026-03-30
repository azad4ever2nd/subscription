import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.gallery',
  name: '相册',
  groups: [
    {
      key: 1,
      name: '小米相册，删除',
      desc: '260310，添加回收站永久删除',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.miui.gallery.activity.AlbumDetailGroupingActivity',
            'com.miui.gallery.activity.TrashActivity',
            'com.miui.gallery.activity.AlbumDetailActivity',
            'com.miui.gallery.activity.AllPhotosActivity',
            'com.miui.gallery.activity.HomePageActivity',
            'com.miui.gallery.activity.InternalPhotoPageActivity',
          ],
          matches:
            '[vid="alertTitle"][text*="删除"] <n * +n [vid="buttonPanel"] > [text*="删除" || text="确定"]',
        },
      ],
    },
  ],
});
