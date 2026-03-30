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
          matches:
            '([id="mys-content"] View > Button) || ([id="mys-content"] [text="关闭"]) || ([id="app-interstitial-slot"] + * Button) || ([id="close-button"] > [text="关闭广告并继续打开应用"] + *)',
        },
      ],
    },
  ],
});
