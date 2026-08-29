import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.custom.zktimehelp',
  name: 'ZK助手',
  groups: [
    {
      key: 1,
      name: '开启悬浮',
      desc: '260829',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 5000,
          activityIds: 'com.custom.zktimehelp.ui.MainActivity',
          matches:
            'RelativeLayout > TextView[text="开启悬浮"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
