import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.szt.pay',
  name: '深圳通',
  groups: [
    {
      key: 1,
      name: '发现新版本，下次再说',
      desc: '260423',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.szt.pay.fragment.MainActivity',
          matches:
            '[vid="tv_tip"][text*="发现新版本"] +n * > [vid="btn_cancel"]',
        },
      ],
    },
  ],
});
