import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unicom.wopay',
  name: '沃钱包',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '251127',
      rules: [
        {
          matches: ['[id="normal"] +3 *'],
          actionMaximum: 1,
          matchDelay: 1000,
          resetMatch: 'match',
          activityIds: [
            'com.unicom.wopay.modules.h5module.ui.WopayWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '签到领奖完成',
      desc: '260225',
      rules: [
        {
          matches: [
            '([text="立减金"] [text^="立减金+"] + View + *) || (View[childCount=3] > [text^="立减金+" && text$="元"] +2 TextView)',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.unicom.wopay.modules.h5module.ui.WopayWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '首页弹窗',
      desc: '251201，',
      rules: [
        {
          matches: ['View[childCount=2] > ImageView + ImageView'],
          activityIds: ['com.unicom.wopay.app.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '更新，下次再说',
      desc: '260208',
      rules: [
        {
          matches: [
            '[vid="positiveButton"] + [vid="negativeButton"][text="下次再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unicom.wopay.app.MainActivity'],
        },
      ],
    },
  ],
});
