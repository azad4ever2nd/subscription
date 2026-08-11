import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.appbyme.app177150',
  name: '卡农社区',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '260811',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'net.duohuo.magappx.main.IndexTabActivity',
          matches:
            '([vid="iv_close_ad"]) || (ImageView[vid="iv_close_ad"][clickable=true][visibleToUser=true])',
        },
      ],
    },
  ],
});
