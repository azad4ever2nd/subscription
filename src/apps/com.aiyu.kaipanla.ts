import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.aiyu.kaipanla',
  name: '开盘啦',
  groups: [
    {
      key: 1,
      name: '新手礼包',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.aiyu.kaipanla.newindex.ui.main.MainActivity',
          matches:
            '[vid="image_bg"] +2 [vid="tv_collect_later"][text="稍后领取"]',
        },
      ],
    },
  ],
});
