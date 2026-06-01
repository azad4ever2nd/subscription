import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 1,
      name: '本月不再提示',
      desc: '260601',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: '@CheckBox[checked=false] + [text="本月不再提示"]',
        },
      ],
    },
    {
      key: 2,
      name: '转出提示，继续转出',
      desc: '260601',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'CheckBox[checked=true] + [text="本月不再提示"] +n [text="继续转出"]',
        },
      ],
    },
  ],
});
