import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'me.ele',
  name: '淘宝闪购',
  groups: [
    {
      key: 1,
      name: '应用内更新权限，取消',
      desc: '260611',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          fastQuery: true,
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches:
            'TextView[vid="title"][text="应用内更新权限"] < LinearLayout[vid="titleFrame"] +2 TextView[vid="buttonDefaultNegative"][text="取消"]',
        },
      ],
    },
    {
      key: 2,
      name: '定位服务未开启，取消',
      desc: '260611',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'me.ele.application.ui.address.ChangeAddressActivity',
          matches:
            'RelativeLayout[vid="dialog_container"] > LinearLayout > TextView[vid="title"][text="定位服务未开启"] +2 LinearLayout > TextView[vid="negative_btn"][text="取消"]',
        },
      ],
    },
    {
      key: 3,
      name: '应用内更新权限2，取消',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'me.ele.search.XSearchActivity',
          matches:
            'ViewGroup > @TextView[vid="buttonDefaultNegative"][clickable=true][text="取消"] + TextView[vid="buttonDefaultPositive"][text="立即设置"] -3 LinearLayout > TextView[vid="title"][text="应用内更新权限"]',
        },
      ],
    },
  ],
});
