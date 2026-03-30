import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.achievo.vipshop',
  name: '唯品会',
  groups: [
    {
      key: 1,
      name: '软件更新，忽略',
      desc: '251210',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.achievo.vipshop.activity.LodingActivity',
          matches:
            '[vid="content"] <n [vid="dialog_container"] + [vid="left_button"]',
        },
      ],
    },
  ],
});
