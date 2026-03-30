import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinarainbow.tft',
  name: '天府通',
  groups: [
    {
      key: 1,
      name: '发现新版本，稍后升级',
      desc: '251210',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.chinarainbow.tft.mvp.ui.activity.MainActivity',
          matches:
            '[vid="tv_title"][text="发现新版本"] +n * > [vid="btn_upgrade_delay"][text="稍后升级"]',
        },
      ],
    },
  ],
});
