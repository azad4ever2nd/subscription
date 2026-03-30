import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wm.dmall',
  name: '多点',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '251124,增加开启通知',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.wm.dmall.MainActivity',
          matches:
            '([vid="advert_image"] + [vid="advert_close"][desc="多点"]) || ([vid="notification_close"])',
        },
      ],
    },
    {
      key: 2,
      name: '版本更新啦',
      desc: '251229',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.wm.dmall.MainActivity',
          matches: '[vid="update_title"] <<n * + [vid="close_btn"]',
        },
      ],
    },
  ],
});
