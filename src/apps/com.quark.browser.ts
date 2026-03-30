import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.quark.browser',
  name: '夸克',
  groups: [
    {
      key: 1,
      name: '更新',
      desc: '260110',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.ucpro.BrowserActivity',
          matches: '[vid="upgrade_title"] <<n * +n * > [text="暂不更新"]',
        },
      ],
    },
  ],
});
