import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magnet.rainbowmagnet',
  name: '彩虹磁力',
  groups: [
    {
      key: 1,
      name: '弹窗，复制链接',
      desc: '260922',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          action: 'clickCenter',
          actionCd: 10000,
          activityIds: 'com.magnet.rainbowmagnet.MainActivity',
          anyMatches: [
            'View > View > @View[desc="复制链接"][clickable=true][visibleToUser=true] + View[desc="收藏链接"]',
          ],
        },
      ],
    },
  ],
});
