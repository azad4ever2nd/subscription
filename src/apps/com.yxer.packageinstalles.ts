import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yxer.packageinstalles',
  name: 'R-安装组件',
  groups: [
    {
      key: 1,
      name: '安装弹窗，确认',
      desc: '260410',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.yxer.packageinstalles.InstallActivity',
          matches:
            '[id="android:id/title"] <n * +n * > [vid="btn_cancel"] +n [vid="btn_confirm"][text="确认"]',
        },
      ],
    },
  ],
});
