import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cebbank.yaoyao',
  name: '云缴费',
  groups: [
    {
      key: 1,
      name: '检测到新版本，暂不更新',
      desc: '260312',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cebbank.yaoyao.startup.GuideActivity',
          matches: '[vid="tv_text"] < * +n * > [vid="btn_cancel_update"]',
        },
      ],
    },
  ],
});
