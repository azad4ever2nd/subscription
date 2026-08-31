import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260730，签到改版，[text="会员签到"] [text="立即签到"]',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 4,
          action: 'clickCenter',
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            '([text="去签到，按钮1"]) || (View > View > TextView[text="会员专属活动1"] + Image) || (View > TextView[text="会员专属活动1"] + View >10 Button[text="立即签到1"][clickable=true][visibleToUser=true]) || (View > View > View > View > View > View > Button[text="立即签到"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 2,
      name: '开启消息通知',
      desc: '260830，',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 3000,
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            '(LinearLayout > @Button[vid="alert_cancel"][text="取消"][clickable=true][visibleToUser=true] + Button[vid="alert_confirm"][text="立即开启"]) || (TextView[text="开启消息通知"] < FrameLayout +n LinearLayout > Button[vid="alert_cancel"][text="取消"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗2',
      desc: '260831',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 2000,
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            'RelativeLayout > RelativeLayout[vid="id_cordova_view"] + ImageView[clickable=true][visibleToUser=true][vid="close_product_send"]',
        },
      ],
    },
    {
      key: 4,
      name: '浏览任务完成，点击返回',
      desc: '260522',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: [
            'com.ecitic.bank.mobile.ui.MainActivity',
            'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
          ],
          matches: '[text="任务已完成点击查看奖励"]',
        },
      ],
    },
    {
      key: 5,
      name: '财富周游记，',
      desc: '251210，抽奖完成',
      rules: [
        {
          matches: [
            '([text="1765279045133733545"] + Image) || ([text="恭喜中奖"] + [text="确定"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
            'com.ecitic.bank.mobile.ui.webview.CordovaExternalWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '新版签到',
      desc: '260503，D',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 3,
          activityIds:
            'com.ecitic.bank.mobile.ui.webview.CordovaExternalWebViewActivity',
          matches: '[text="立即签到"]',
        },
      ],
    },
    {
      key: 7,
      name: '弹窗，活动公告，我知道了',
      desc: '260803，添加 抽奖公告',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.ecitic.bank.mobile.ui.webview.CordovaExternalWebViewActivity',
          matches:
            '(View > View + Button[clickable=true][visibleToUser=true][text="我知道了"]) || (View > @Button[clickable=true][text="我知道了"] - View > TextView[text.length=1][clickable=false])',
        },
      ],
    },
    {
      key: 8,
      name: '恭喜中奖，确定',
      desc: '260806，添加领取成功',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.ecitic.bank.mobile.ui.webview.CordovaExternalWebViewActivity',
          matches:
            '(View > TextView[text="恭喜中奖"] +n Button[clickable=true][visibleToUser=true][text="确定"]) || (View > View > View > TextView[text="领取成功"] +n Button[clickable=true][visibleToUser=true][text="确定"])',
        },
      ],
    },
    {
      key: 9,
      name: '抽奖，弹窗',
      desc: '251208，D',
      rules: [
        {
          matchDelay: 1000,
          matches: ['Dialog [text="close"]'],
          resetMatch: 'match',
          activityIds: ['com.citic.jk.activity.H5ContainerAty'],
        },
      ],
    },
  ],
});
