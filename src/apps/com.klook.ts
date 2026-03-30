import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.klook',
  name: 'Klook客路旅行',
  groups: [
    {
      key: 1,
      name: '通知提醒',
      desc: '260228',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.klooklib.MainActivity',
          matches: '@[desc="关闭"] +n [desc$="开启通知"]',
        },
      ],
    },
  ],
});
