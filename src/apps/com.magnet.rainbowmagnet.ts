import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.magnet.rainbowmagnet',
  name: '彩虹磁力',
  groups: [
    {
      key: 1,
      name: '复制链接',
      desc: '260908',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
		  action:'clickCenter',
          actionCd: 3000,
          activityIds: 'com.magnet.rainbowmagnet.MainActivity',
          anyMatches:[
		    'View >  @View[desc="复制链接"][clickable=true][visibleToUser=true] + View[desc="收藏链接"]',
            'View > View > @View[clickable=true][visibleToUser=true][desc="复制链接"] + View[desc="收藏链接"]',
			].
        },
      ],
    },
  ],
});
