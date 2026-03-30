import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.androidqqmail',
  name: 'QQ邮箱',
  groups: [
    {
      key: 1,
      name: '开启通知',
      desc: '260131',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tencent.qqmail.activity.setting.GesturePwdActivity',
          matches: '@[text="以后再说"] + [text="立刻开启"]',
        },
      ],
    },
  ],
});
