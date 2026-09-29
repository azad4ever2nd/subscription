import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.captiveportallogin',
  name: 'CaptivePortalLogin',
  groups: [
    {
      key: 1,
      name: '登陆',
      desc: '260929',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 1500,
          actionCd: 2000,
          activityIds: '.CaptivePortalLoginActivity',
          excludeMatches: 'View[text*="认证成功" || text*="已登陆"]',
          matches:
            'View[id="account_form"] > @Button[id="account_form_submitBtn"][text="登录"][clickable=true][visibleToUser=true] - View > View > EditText[id="account_form_pwd"][text.length=8]',
        },
      ],
    },
  ],
});
