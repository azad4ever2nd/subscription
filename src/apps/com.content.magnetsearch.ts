import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.content.magnetsearch',
  name: '磁力搜索',
  groups: [
    {
      key: 1,
      name: '广告',
      desc: '260406',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          actionCd: 100,
          activityIds: 'com.google.android.gms.ads.AdActivity',
          matches:
            '(@[id="close-button"] > [text="关闭广告并继续打开应用" || text="继续使用应用"] + View) || ([text="Close" || text="关闭"][clickable=true])',
        },
      ],
    },
  ],
});
