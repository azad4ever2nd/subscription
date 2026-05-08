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
    {
      key: 2,
      name: 'RUN WORKFLOW,自动点击脚本执行',
      desc: '260508',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.github.android.main.MainActivity',
          matches: '[text="RUN WORKFLOW"] + @Button <<n * + * [text="CHANGE"]',
        },
      ],
    },
  ],
});
