import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 1,
      name: '新版本',
      desc: '251118',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.dianping.v1.NovaMainActivity',
          matches:
            '@[vid="update_close_icon"] + [vid="update_title"][text*="新版本"]',
        },
      ],
    },
  ],
});
