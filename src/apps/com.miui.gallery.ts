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
          actionCd: 800,
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
    {
      key: 2,
      name: '弹窗，移动',
      desc: '260916',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.gallery.ui.addtoalbum.AddToAlbumPageActivity',
          matches:
            'ScrollView > ViewGroup > ListView > @TextView[text="移动"][id="android:id/text1"][clickable=true][visibleToUser=true] + TextView[text="复制"][id="android:id/text1"]',
        },
      ],
    },
  ],
});
