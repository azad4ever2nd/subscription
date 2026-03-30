import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 1,
      name: '转出提示，继续转出',
      desc: '260204',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: '[text="转出规则"] +n [text="暂不转出"] + [text="继续转出"]',
        },
      ],
    },
  ],
});
