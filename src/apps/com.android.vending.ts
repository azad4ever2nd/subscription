import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.vending',
  name: 'Google Play 商店',
  groups: [
    {
      key: 1,
      name: '广告',
      desc: '25118',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.google.android.finsky.activities.MarketDeepLinkHandlerActivity',
          matches:
            '[vid="0_resource_name_obfuscated"] [vid="0_resource_name_obfuscated"][desc="Close"]',
        },
      ],
    },
    {
      key: 2,
      name: '更新，取消',
      desc: '261125',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.google.android.finsky.activities.MainActivity',
          matches:
            'ComposeView > View > View > View > View + ImageView[desc="重试"] + ImageView[desc="取消"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
