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
          anyMatches: [
            'WebView[text="立减金"] > View  > View  > View  > View > View[id="normal"] +3 TextView[clickable=false][visibleToUser=true]',
            '[id="normal"] +3 *',
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
          anyMatches: [
            'View[childCount=3] > [text^="立减金+" && text$="元"] +2 TextView',
            '[text="立减金"] [text^="立减金+"] + View + *',
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
          anyMatches: [
            'LinearLayout > Button[vid="positiveButton"] + Button[vid="negativeButton"][clickable=true][visibleToUser=true][text="下次再说"]',
            '[vid="positiveButton"] + [vid="negativeButton"][text="下次再说"]',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '弹窗，协议更新提示，同意',
      desc: '261118',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: '.modules.accountcenter.ui.ChangeAgreementActivity',
          matches:
            'LinearLayout > TextView[text="协议更新提示"][vid="wopay_privacy_title_tv"] + ScrollView + LinearLayout > Button[text="暂不使用"] + Button[text="同意"][vid="wopay_privacy_button_agree"]', //261118，协议更新提示，同意
        },
      ],
    },
  ],
});
