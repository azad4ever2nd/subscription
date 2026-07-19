import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.securitycenter',
  name: '手机管家',
  groups: [
    {
      key: 1,
      name: '拦截短信，全部删除',
      desc: '260202',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.antispam.ui.activity.MainActivity',
          matches:
            '[vid="alertTitle"][text*="删除"] < [vid="topPanel"] +n [vid="buttonPanel"] > [id="android:id/button1"][text*="删除"]',
        },
      ],
    },
    {
      key: 2,
      name: '勾选 我已知晓可能存在的风险',
      desc: '260719',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
          matches:
            'ViewGroup > @CheckBox[clickable=true][visibleToUser=true][checked=false][vid="check_box"] + TextView[text^="我已知晓可能存在的风险"] + Button + Button',
        },
      ],
    },
    {
      key: 3,
      name: '我已知晓可能存在的风险，确定',
      desc: '260719',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.miui.permcenter.privacymanager.SpecialPermissionInterceptActivity',
          matches:
            'ViewGroup > CheckBox[checked=true][vid="check_box"] + TextView[text^="我已知晓可能存在的风险"] + Button + Button[clickable=true][visibleToUser=true][vid="intercept_warn_allow"][text="确定"]',
        },
      ],
    },
  ],
});
