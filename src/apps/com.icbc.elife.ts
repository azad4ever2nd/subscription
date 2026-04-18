import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc.elife',
  name: '工银e生活',
  groups: [
    {
      key: 1,
      name: '发现新版本，取消',
      desc: '260416',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.icbc.elife.MainActivity',
          matches:
            '[vid="hint_dialog_title"][text="发现新版本"] < * + * > [vid="gologinbutton"][text="取消"]',
        },
      ],
    },
  ],
});
