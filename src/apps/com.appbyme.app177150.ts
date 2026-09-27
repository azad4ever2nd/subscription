import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.appbyme.app177150',
  name: '卡农社区',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '260831',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 3000,
          action: 'clickCenter',
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          anyMatches: [
            'RelativeLayout > ImageView[vid="iv_close_ad"][clickable=true][visibleToUser=true]',
            'ImageView[vid="iv_close_ad"][clickable=true][visibleToUser=true]',
            '[vid="iv_close_ad"]',
          ],
        },
      ],
    },
  ],
});
