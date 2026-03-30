import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.starbucks.cn',
  name: '星巴克',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.starbucks.cn.home.revamp.RevampMainActivity',
          matches: '[vid="cardView"] + [vid="ivClose"]',
        },
      ],
    },
  ],
});
