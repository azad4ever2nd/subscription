import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.fvcorp.android.aijiasuclient',
  name: '爱加速',
  groups: [
    {
      key: 1,
      name: '新版本，以后再说',
      desc: '260218',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.fvcorp.android.fvclient.activity.MainActivity',
          matches:
            '@[vid="negativeButton"][text="以后再说"] +n [vid="positiveButton"]',
        },
      ],
    },
  ],
});
