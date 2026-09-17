import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.woaika.kashen',
  name: '我爱卡',
  groups: [
    {
      key: 1,
      name: '弹窗，需以下权限，知道了',
      desc: '260917',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.woaika.kashen.ui.LauncherActivity',
          matches:
            'LinearLayout > TextView[text^="需以下权限"] + * +n TextView[text="知道了"][vid="tvPermissionDescDialogConfirm"]',
        },
      ],
    },
  ],
});
