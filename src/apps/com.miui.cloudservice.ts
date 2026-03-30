import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.cloudservice',
  name: '小米云服务',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '260218，如果无效果，换action',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.cloudservice.ad.AdPopupActivity',
          matches: '@[vid="ad_popup_close_iv"] + [vid="ad_popup_iv"]',
        },
      ],
    },
  ],
});
