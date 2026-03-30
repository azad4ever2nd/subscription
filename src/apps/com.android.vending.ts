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
          activityIds:
            'com.google.android.finsky.activities.MarketDeepLinkHandlerActivity',
          matches:
            '[vid="0_resource_name_obfuscated"] [vid="0_resource_name_obfuscated"][desc="Close"]',
        },
      ],
    },
  ],
});
