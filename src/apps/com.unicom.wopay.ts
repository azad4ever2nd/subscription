import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unicom.wopay',
  name: '沃钱包',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260723',
      rules: [
        {
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds:
            'com.unicom.wopay.modules.h5module.ui.WopayWebViewActivity',
          matches:
            '([id="normal"] +3 *) || (WebView[text="立减金"] > View  > View  > View  > View > View[id="normal"] +3 TextView[clickable=false][visibleToUser=true] )',
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
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.unicom.wopay.app.MainActivity',
          matches:
            '([vid="positiveButton"] + [vid="negativeButton"][text="下次再说"]) || (LinearLayout > Button[vid="positiveButton"] + Button[vid="negativeButton"][clickable=true][visibleToUser=true][text="下次再说"])',
        },
      ],
    },
  ],
});
