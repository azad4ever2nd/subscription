import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.contacts',
  name: '通讯录与拨号',
  groups: [
    {
      key: 1,
      name: '删除通话记录',
      resetMatch: 'match',
      desc: '小米      matchTime:10000,',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.android.contacts.activities.PeopleActivity',
          matches:
            '[text*="删除"] < [vid="topPanel"] +2 [vid="buttonPanel"] > [text*="删除"]',
        },
      ],
    },
  ],
});
