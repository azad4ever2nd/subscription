import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ecitic.bank.mobile',
  name: '中信银行',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '[text="会员签到"] [text="立即签到"]',
      rules: [
        {
          action: 'clickCenter',
          matches: ['[text="立即签到"]'],
          actionCd: 0,
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: ['com.ecitic.bank.mobile.ui.MainActivity'],
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
  ],
});
