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
      desc: '260912',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 2000,
          activityIds: 'info.muge.appshare.MainActivity',
          matches:
            'View > View > ImageView[desc="头像"] +n @View[clickable=true][visibleToUser=true] > TextView[text="签到"] + Button',
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
    {
      key: 4,
      name: '弹窗，公告，收到',
      desc: '260912',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 2000,
          activityIds: 'info.muge.appshare.MainActivity',
          matches:
            'ScrollView > TextView[text="公告通知"] +n @View[clickable=true][visibleToUser=true] > TextView[text="收到"] + Button',
        },
      ],
    },
    {
      key: 5,
      name: '首页，签到',
      desc: '20261016',
      rules: [
        {
          resetMatch: 'app',
          action: 'clickCenter',
          actionMaximum: 1,
          activityIds: '.MainActivity',
          matches:
            'TextView[text="分类"] < View + @View[clickable=true][visibleToUser=true] > TextView[text="签到"] + Button',
        },
      ],
    },
    {
      key: 6,
      name: '每日签到，立即签到',
      desc: '261016',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: '.MainActivity',
          matches:
            '@View[clickable=true][visibleToUser=true] > TextView[text="立即签到"] + Button',
        },
      ],
    },
  ],
});
