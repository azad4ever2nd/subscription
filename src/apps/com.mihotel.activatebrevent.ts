import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mihotel.activatebrevent',
  name: '用Shizuku激活',
  groups: [
    {
      key: 1,
      name: '激活黑阈',
      desc: '261118',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 10000,
          activityIds: '.activity.MainActivity',
          actionMaximum: 1,
          matches:
            '@LinearLayout[clickable=true][visibleToUser=true] > RelativeLayout > TextView[text="激活黑阈"][id="android:id/title"]',
        },
      ],
    },
  ],
});
