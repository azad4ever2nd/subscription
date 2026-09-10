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
    {
      key: 2,
      name: '签到',
      desc: '260910，先占位，再补规则',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 2000,
          activityIds: 'info.muge.appshare.MainActivity',
          matches:
            'View > ScrollView > ImageView[desc="签到成功"] +n @View[clickable=true][visibleToUser=true] > TextView[text="我知道了"] + Button',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，签到成功，知道了',
      desc: '260910',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 2000,
          activityIds: 'info.muge.appshare.MainActivity',
          matches:
            'View > ScrollView > ImageView[desc="签到成功"] +n @View[clickable=true][visibleToUser=true] > TextView[text="我知道了"] + Button',
        },
      ],
    },
  ],
});
