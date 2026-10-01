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
          excludeMatches:
            'View[text*="认证成功" || text^="账号已登录"][text!*="请点击登录完成认证"]',
          anyMatches: [
            'View[id="account_form"] > @Button[id="account_form_submitBtn"][text="登录"][clickable=true][visibleToUser=true] - View > View > EditText[id="account_form_pwd"][text.length=8]',
            'TextView[text="账号已登录，请点击登录完成认证。"] < View + Button[text="登录"][id="account_form_submitBtn"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
