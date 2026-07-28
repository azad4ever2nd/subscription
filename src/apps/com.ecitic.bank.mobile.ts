import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260629，签到改版，[text="会员签到"] [text="立即签到"]',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 8,
          action: 'clickCenter',
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            '([text="去签到，按钮"]) || (View > View > TextView[text="会员专属活动"] + Image1) || (View > TextView[text="会员专属活动"] + View >10 Button[text="立即签到"][clickable=true][visibleToUser=true]) || (View > View > View > View > View > View > Button[text="立即签到"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 2,
      name: '开启消息通知',
      desc: '260722，',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            '([vid="alert_title"][text="开启消息通知"] <n * +n * > [vid="alert_cancel"][text="取消"]) || (@[vid="alert_cancel"][text="取消"] + [vid="alert_confirm"][text="立即开启"]) || (TextView[text="开启消息通知"] < FrameLayout +n LinearLayout > Button[vid="alert_cancel"][clickable=true][visibleToUser=true][text="取消"])',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗2',
      desc: '260720',
      rules: [
        {
          resetMatch: 'match',
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
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds:
            'com.ecitic.bank.mobile.ui.webview.CordovaExternalWebViewActivity',
          matches:
            'View > View + Button[clickable=true][visibleToUser=true][text="我知道了"]',
        },
      ],
    },
    {
      key: 5,
      name: '抽奖，弹窗',
      desc: '251208，D',
      rules: [
        {
          matches: ['Dialog [text="close"]'],
          resetMatch: 'match',
          activityIds: ['com.citic.jk.activity.H5ContainerAty'],
        },
      ],
    },
  ],
});
