import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.iwannasee.magnetbee',
  name: '磁力搜索神器',
  groups: [
    {
      key: 1,
      name: '广告',
      desc: '251123，添加广告',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          anyMatches: [
            '[id="mys-content"] View > Button',
            '[id="mys-content"] [text="关闭"]',
            '[id="app-interstitial-slot"] + * Button',
            '[id="close-button"] > [text="关闭广告并继续打开应用"] + *',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，复制链接',
      desc: '261109',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 5000,
          activityIds: 'com.see.main.MainActivity',
          matches:
            'FrameLayout > ListView > TextView[text="复制链接"][id="android:id/text1"][clickable=true][visibleToUser=true]', //261109，弹窗，复制链接
        },
      ],
    },
  ],
});
