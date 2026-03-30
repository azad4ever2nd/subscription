import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wudaokou.hippo',
  name: '盒马',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '260106',
      rules: [
        {
          matches: ['[vid="home_pop_close"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wudaokou.hippo.launcher.splash.SplashActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '新版上线',
      desc: '260106',
      rules: [
        {
          matches: [
            '[vid="update_title_tv"] <<n * + [vid="update_imageview_cancel_v2"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wudaokou.hippo.launcher.splash.SplashActivity'],
        },
      ],
    },
  ],
});
