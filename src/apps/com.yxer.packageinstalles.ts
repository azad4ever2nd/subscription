import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yxer.packageinstalles',
  name: 'R-安装组件',
  groups: [
    {
      key: 1,
      name: '确认安装',
      desc: '251207，',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.yxer.packageinstalles.InstallActivity',
          matches:
            '[vid="confirm_checkbox2"] <<n [vid="linearLayout_id3"] +n [vid="linearLayout_actions"] > [vid="btn_confirm"][text="确认"]',
        },
      ],
    },
  ],
});
