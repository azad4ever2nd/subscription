import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tpshop.znwgywy.sgapp',
  name: '海鸥极速版',
  groups: [
    {
      key: 1,
      name: '广告1，关闭',
      desc: '260505',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.windmill.sdk.widget.InterstitialView_4012003',
          matches:
            '(@*[clickable=true] > [text="关闭"]) || (@*[clickable=true] > [vid="tobid_interstitial_skip_text"][text="关闭"]) ',
        },
      ],
    },
  ],
});
