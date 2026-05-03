import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.android',
  name: 'GitHub',
  groups: [
    {
      key: 1,
      name: '登陆验证完成，CLOSE',
      desc: '260503',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.github.android.twofactor.TwoFactorActivity',
          matches:
            '[text="Authentication request was approved."] + @*[clickable=true] > [text="CLOSE"]',
        },
      ],
    },
  ],
});
