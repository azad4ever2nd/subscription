import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinaunicom.bol.cloudapp',
  name: '联通云盘',
  groups: [
    {
      key: 1,
      name: '更新，取消',
      desc: '260221',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.chinaunicom.bol.cloudapp.v.activity.MainActivity',
          matches: '([vid="update_button_cancel"]) || ([vid="iv_act_close"])',
        },
      ],
    },
  ],
});
