import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.MobileTicket',
  name: '铁路12306',
  groups: [
    {
      key: 1,
      name: '新版本升级，稍后再说',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.MobileTicket.ui.activity.MainActivity',
          matches:
            'LinearLayout > @TextView[vid="cancel_btn"][text="稍后再说"] + TextView[vid="ok_btn"][text="立即安装"]',
        },
      ],
    },
  ],
});
