import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.antfortune.wealth',
  name: '蚂蚁财富',
  groups: [
    {
      key: 1,
      name: '内测更新，X掉',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 750,
          matchTime: 1000,
          activityIds: 'com.alipay.mobile.quinox.LauncherActivity',
          matches:
            'FrameLayout > ImageView + ImageView[clickable=true][visibleToUser=true][id="com.alipay.mobile.android.security.upgrade:id/update_cancel_tv"]',
        },
      ],
    },
    {
      key: 2,
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
      key: 3,
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
    {
      key: 4,
      name: '弹窗',
      desc: '260802，财运红包',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@TextView[clickable=true][visibleToUser=true] < View +2 TextView[text="已学习，去使用"]',
        },
      ],
    },
  ],
});
