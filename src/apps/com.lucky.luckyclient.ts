import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.lucky.luckyclient',
  name: '瑞幸咖啡',
  groups: [
    {
      key: 1,
      name: '立即更新',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.luckin.commclient.update.UpdateActivity',
          matches: '*[index=1] <n * + [vid="dismiss_btn"]',
        },
      ],
    },
  ],
});
