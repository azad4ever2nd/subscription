import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.tpshop.znwgywy.sgapp',
  name: '海鸥极速版',
  groups: [
    {
      key: 1,
      name: 'welcome，立刻出发',
      desc: '260705',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'LinearLayout > Button[clickable=true][visibleToUser=true][text="立刻出发！"]',
        },
      ],
    },
    {
      key: 2,
      name: '请关闭 获取运动方向权限 和 快应用权限，确定',
      desc: '260904，添加 付费版弹窗',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches: [
            '([text^="请关闭 获取运动方向权限 和 快应用权限" || text*="付费订阅版"] <<n * + * [id="android:id/button1"][text="确定"])',
            '(ScrollView > LinearLayout > Button[text="确定"][id="android:id/button1"][clickable=true][visibleToUser=true])',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '签到弹窗，确认',
      desc: '260507',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            '[text*="广告签到"] <<n * + * [id="android:id/button2"] + [id="android:id/button1"]',
        },
      ],
    },
    {
      key: 4,
      name: '签到后广告弹窗',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'TextView[vid="checkin_button"][text^="已签"] + FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout[childCount=1] > View[clickable=false]',
        },
      ],
    },
    {
      key: 5,
      name: '签到页面广告弹窗，X掉',
      desc: '260624',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'TextView[text="签到"] + FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout > LinearLayout +2 ImageView - FrameLayout[childCount=1] > View',
        },
      ],
    },
    {
      key: 6,
      name: '签到页面广告弹窗2，X掉',
      desc: '260706，不管连接与否，匹配弹窗',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'ImageView[vid="vpnSwitchButton"] +n ScrollView > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout[childCount=1] > View',
        },
      ],
    },
    {
      key: 7,
      name: '签到完广告弹窗，X掉',
      desc: '260806',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'TextView[vid="checkin_button"][text^="已签"] + FrameLayout[vid="banner_container"] > FrameLayout > FrameLayout > FrameLayout > LinearLayout[childCount=3] > FrameLayout[childCount=3] > @FrameLayout[clickable=false][visibleToUser=true] > ImageView',
        },
      ],
    },
    {
      key: 8,
      name: '连接弹窗1',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'FrameLayout > TextView[id="com.zj.zk.allmodules:id/wm_pop_pic_close"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 9,
      name: '连接页面广告弹窗',
      desc: '260625',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'ImageView[vid="vpnSwitchButton"][desc="连接"] + FrameLayout + ScrollView > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout[childCount=1] > View',
        },
      ],
    },
    {
      key: 10,
      name: '服务器列表广告1',
      desc: '260625',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            '[vid="server_list_banner_ad"] >7 LinearLayout + ImageView + FrameLayout > View[parent.childCount=1]',
        },
      ],
    },
    {
      key: 11,
      name: '服务器列表广告2',
      desc: '260625',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'FrameLayout[vid="server_list_banner_ad"] > RelativeLayout > FrameLayout > RelativeLayout > RelativeLayout > ImageView[clickable=true]',
        },
      ],
    },
    {
      key: 12,
      name: '服务器列表广告3',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'FrameLayout[vid="server_list_banner_ad"] FrameLayout > ImageView - FrameLayout[childCount=1] > View',
        },
      ],
    },
    {
      key: 13,
      name: '连接后广告窗',
      desc: '260615',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'ScrollView[vid="banner_scroll"] > FrameLayout >5 ImageView - FrameLayout > View',
        },
      ],
    },
    {
      key: 14,
      name: '连接后广告窗3',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'RelativeLayout > RelativeLayout > TextView[text="X"][clickable=true]',
        },
      ],
    },
    {
      key: 15,
      name: '连接后广告弹窗4',
      desc: '20260628',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'ImageView[vid="vpnSwitchButton"][desc="停止"] +2 ScrollView > FrameLayout > FrameLayout > FrameLayout > FrameLayout > LinearLayout > FrameLayout[childCount=3] > FrameLayout[index=2] > ImageView',
        },
      ],
    },
    {
      key: 16,
      name: '连接后广告弹窗5',
      desc: '260703',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'ImageView[vid="vpnSwitchButton"][desc="停止"] +n ScrollView > FrameLayout > FrameLayout > FrameLayout > FrameLayout > FrameLayout > ImageView + FrameLayout[childCount=1] > View',
        },
      ],
    },
    {
      key: 17,
      name: '连接后广告弹窗6',
      desc: '260719，有提示 摇动或点击跳转至详情页或第三方应用',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'FrameLayout > LinearLayout +2 ImageView - FrameLayout > View[clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 18,
      name: '看广告签到获取金币，确认',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          anyMatches:
            'TextView[text="签到"] < LinearLayout < LinearLayout +2 ScrollView > LinearLayout > Button[id="android:id/button1"][clickable=true][visibleToUser=true][text="确认"]',
        },
      ],
    },
    {
      key: 19,
      name: '连接后下方广告',
      desc: '260909',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'tool.seagull.v.ui.MainActivity',
          matches:
            'FrameLayout[vid="banner_container"] LinearLayout > FrameLayout > FrameLayout[childCount=1] > View[clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 20,
      name: '连接后广告窗2',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          anyMatches: 'View > View > View > TextView[id="close_btn"]',
        },
      ],
    },
    {
      key: 21,
      name: '广告1，关闭',
      desc: '260513',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.windmill.sdk.widget.InterstitialView_4012003',
          anyMatches:
            '(@*[clickable=true] > [text="关闭"]) || (@*[clickable=true] > [vid="tobid_interstitial_skip_text"][text="关闭"]) || (@[vid="tobid_interstitial_skip_ll"][clickable=true] > [text="关闭"])',
        },
      ],
    },
    {
      key: 22,
      name: '奖励已下发，跳过',
      desc: '260510',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sigmob.sdk.base.common.PortraitAdActivity',
          anyMatches: '[text="奖励已下发"] + [text="跳过"]',
        },
      ],
    },
    {
      key: 23,
      name: '反馈，close_btn',
      desc: '260510',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          anyMatches: '[text="反馈"] + [id="close_btn"]',
        },
      ],
    },
    {
      key: 24,
      name: '签到完广告弹窗，跳过',
      desc: '260511',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          anyMatches: '[id="close_btn"][text="跳过"]',
        },
      ],
    },
    {
      key: 25,
      name: '点击广告拿奖励',
      desc: '260531',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          anyMatches:
            '[text="点击广告，即可获得奖励"] <<n * + * [text="点击广告拿奖励"]',
        },
      ],
    },
    {
      key: 26,
      name: '恭喜获得奖励2',
      desc: '260526',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          anyMatches: '[text="恭喜获得奖励！"] < * + *[clickable=true]',
        },
      ],
    },
    {
      key: 27,
      name: '恭喜获得奖励3',
      desc: '260607',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          anyMatches:
            '([text="恭喜获得奖励"] < FrameLayout < FrameLayout < FrameLayout + FrameLayout > FrameLayout > FrameLayout ImageView)',
        },
      ],
    },
    {
      key: 28,
      name: '签到点击广告后，X掉',
      desc: '260507',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          anyMatches: '[text="恭喜获得奖励"] < * +n *[childCount=1] > *',
        },
      ],
    },
    {
      key: 29,
      name: '弹窗，连接后新版浮动广告，关闭',
      desc: '260908',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.windmill.sdk.widget.InterstitialView_4012001',
          matches:
            'RelativeLayout[vid="tobid_interstitial_ad_detail"] LinearLayout[clickable=true][visibleToUser=true] > TextView[text="关闭"]',
        },
      ],
    },
  ],
});
