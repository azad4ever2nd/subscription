import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cib.xyk',
  name: '兴业生活',
  groups: [
    {
      key: 1,
      name: '定位服务',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cib.fintech.activity.MainActivity',
          matches:
            '[vid="mobile_web_dialog_title"][text="定位服务"] +n * > [text="知道了"]',
        },
      ],
    },
    {
      key: 2,
      name: '新版本，以后再说',
      desc: '260426',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cib.fintech.activity.MainActivity',
          matches:
            '[vid="mobile_kits_txt_title"][text*="版本" || text*="更新"] < * +n * [vid="btn_neg"][text="以后再说"]',
        },
      ],
    },
  ],
});
