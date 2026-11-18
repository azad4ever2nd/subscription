import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.alibaba.wireless',
  name: '阿里巴巴',
  groups: [
    {
      key: 1,
      name: '滑块验证',
      desc: '261118',
      rules: [
        {
          resetMatch: 'match',
          action: 'swipe',
          swipeArg: {
            start: {
              x: 'left+18',
              y: 'top+height/2',
            },
            end: {
              x: 'right',
              y: 'top+height/2',
            },
            duration: 1000, //滑动时长
          },
          activityIds: '.security.open.middletier.fc.ui.ContainerActivity',
          anyMatches:
            'TextView[text="通过验证以确保正常访问"] + View > View > View > View',
        },
      ],
    },
  ],
});
