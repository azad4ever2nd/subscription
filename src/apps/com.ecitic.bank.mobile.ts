import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260503,签到改版，[text="会员签到"] [text="立即签到"]',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 3,
          action: 'clickCenter',
          activityIds: 'com.ecitic.bank.mobile.ui.MainActivity',
          matches:
            '([text="会员签到"] >n [text="立即签到"]) || ([text="会员专属活动"] + Image[clickable=true])',
        },
      ],
    },
    {
      key: 2,
      name: '开启消息通知',
      desc: '',
      rules: [
        {
          matches: [
            '@[vid="alert_cancel"][text="取消"] + [vid="alert_confirm"][text="立即开启"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.ecitic.bank.mobile.ui.MainActivity'],
        },
      ],
    },
    {
      key: 3,
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
      key: 4,
      name: '浏览任务完成',
      desc: '260218，D,返回，容易导出退出软件',
      rules: [
        {
          action: 'back',
          matches: ['[text="任务已完成点击查看奖励"]'],
          resetMatch: 'match',
          activityIds: [
            'com.ecitic.bank.mobile.ui.webview.CordovaWebViewActivity',
            'com.ecitic.bank.mobile.ui.MainActivity',
          ],
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
    {
      key: 6,
      name: '新版签到',
      desc: '260503',
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
  ],
});
