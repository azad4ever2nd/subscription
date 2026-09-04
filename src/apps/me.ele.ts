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
      name: '弹窗，请选择你的收货地址，X掉',
      desc: '260829',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
          matches:
            'RelativeLayout[vid="dialog_container"] > ImageView[vid="close_btn"][desc="关闭"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，天降红包，X掉',
      desc: '260904,fastquery=false,',
      rules: [
        {
          activityIds: 'me.ele.application.ui.Launcher.LauncherActivity',
		  matchTime:2000,
		  forcedTime:2000,
          matches:[
            'ViewGroup[vid="id_magex_mist_view"] > ViewGroup > ViewGroup > ImageView[clickable=true][visibleToUser=true]',
			'ViewGroup[vid="id_magex_mist_view"] > ViewGroup > ImageView[clickable=true][visibleToUser=true]'
		],
        },
      ],
    },
    {
      key: 4,
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
      key: 5,
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
    {
      key: 6,
      name: '下单后弹出开启订单通知，X掉',
      desc: '260629',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'me.ele.message.ui.PushMessageGuideActivity',
          matches:
            'TextView[text*="通知"] - TextView < LinearLayout + @FrameLayout[vid="view_close"][clickable=true] > View',
        },
      ],
    },
    {
      key: 7,
      name: '任务完成，返回领奖',
      desc: '260804，返回领奖，去领奖',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
          matches:
            '(View > @View[clickable=true][visibleToUser=true] > TextView[text="任务完成"] + TextView[text="返回领奖"]) || (@View[clickable=true][visibleToUser=true] > Image + TextView + TextView[text="任务完成"] + TextView[text="返回领奖"]) || (@View[clickable=true] > TextView[text="任务完成"] + TextView[text*="领奖"])',
        },
      ],
    },
    {
      key: 8,
      name: '爷爷不泡茶，0.1购',
      desc: '260720',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          actionMaximum: 2,
          activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
          matches:
            '(TextView[text="¥"] - TextView[text="0.1"] < View +n View > TextView[clickable=true][visibleToUser=true][text^="立即配送"]) || (TextView[text="0.1"] - TextView[text="¥"] < View +n View > TextView[clickable=true][visibleToUser=true][text^="立即配送"])',
        },
      ],
    },
    {
      key: 9,
      name: '秋奶，立即抢',
      desc: '260807',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          actionMaximum: 20,
          activityIds: 'me.ele.component.webcontainer.view.AppUCWebActivity',
          matches:
            'View > TextView[text="11.9元通兑券"] +n TextView[clickable=true][visibleToUser=true][text="立即抢"]',
        },
      ],
    },
    {
      key: 10,
      name: '弹窗，天降红包2，X掉',
      desc: '260904',
      rules: [
        {
          resetMatch: 'match',
		  matchTime:2000,
          forcedTime: 2000,
          activityIds:
            'me.ele.android.themis_alsc.eleme.container.EleTMSActivity',
          matches:
            'ViewGroup[vid="id_magex_mist_view"] > ViewGroup > ImageView[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 11,
      name: '弹窗，单单返现金，X掉',
      desc: '260904',
      rules: [
        {
          activityIds:
            'me.ele.android.themis_alsc.eleme.container.EleTMSActivity',
          resetMatch: 'match',
		  matchTime:2000,
		  forcedTime:2000,
          matches:
            'ViewGroup[vid="id_magex_mist_view"] > ViewGroup > ViewGroup > ImageView[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 12,
      name: '弹窗，大额红包，X掉',
      desc: '260829',
      rules: [
        {
          activityIds:
            'me.ele.android.themis_alsc.eleme.container.EleTMSActivity',
          resetMatch: 'match',
          matches:
            'ViewGroup[vid="id_magex_mistview"] > ViewGroup[clickable=true][visibleToUser=true]',
        },
      ],
    },

    {
      key: 13,
      name: '位置权限使用说明',
      desc: '260829',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'me.ele.runtimepermission.PermissionActivity',
          matches:
            'FrameLayout > RelativeLayout > TextView[text="位置权限使用说明"] +n Button[text="拒绝"][clickable=true][visibleToUser=true] + Button[text="同意"][clickable=true]',
        },
      ],
    },
    {
      key: 14,
      name: '吃货豆兑名单红包',
      desc: '260829',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'me.ele.android.emagex.container.EMagexActivity',
          matches:
            'ViewGroup[vid="id_magex_mistview"] > ImageView + ImageView[clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
