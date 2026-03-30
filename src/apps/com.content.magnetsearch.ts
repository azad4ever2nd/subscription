import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.content.magnetsearch',
  name: '磁力搜索',
  groups: [
    {
      key: 1,
      name: '广告',
      desc: '260116',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '([id="mys-content"] >n Button) || ([id="close-button"] > [text="关闭广告并继续打开应用"] + View) || ([id="dismiss-button" || id="mys-content"][text="关闭"]) || ([id="dismiss-button" || id="mys-content"] [text="关闭"])',
        },
      ],
    },
  ],
});
