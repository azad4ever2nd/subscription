import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'info.muge.appshare',
  name: 'AppShare',
  groups: [
    {
      key: 1,
      name: '新版本，忽略',
      desc: '260807',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 0,
          actionMaximum: 3,
          activityIds: 'info.muge.appshare.MainActivity',
          matches:
            '@Button[clickable=false][visibleToUser=true] - TextView[text="忽略"] < View + View > TextView[text="更新"] + Button',
        },
      ],
    },
  ],
});
