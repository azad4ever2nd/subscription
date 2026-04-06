import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinatelecom.bestpayclient',
  name: '翼支付',
  groups: [
    {
      key: 1,
      name: '开启消息通知',
      desc: '251130，添加弹窗',
      rules: [
        {
          matches: [
            '([vid="iv_dialog_close_one"]) || ([vid="msg_notification_open_title"] +n [vid="msg_notification_skip_btn"][text="跳过"]) || ([vid="iv_dialog_bg"] +n [vid="iv_dialog_close"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.chinatelecom.bestpayclient.ui.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '新版本',
      desc: '260103',
      rules: [
        {
          matches: [
            '[vid="bupdate_tv_title"][text="新版本上线啦！"] <n * + * [vid="bupdate_tv_bottom_tip"][text="下次再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.chinatelecom.bestpayclient.ui.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '开启通知',
      desc: '260131',
      rules: [
        {
          matches: ['@* + [text*="开启系统通知"] + [text="立即开启"]'],
          resetMatch: 'match',
          activityIds: ['com.mpaas.mriver.integration.MriverActivityBase$Main'],
        },
      ],
    },
    {
      key: 4,
      name: '弹窗2',
      desc: '260406',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 100,
          activityIds: 'com.mpaas.mriver.integration.MriverActivityBase$Main',
          matches: '[vid="llLandscape"] [vid="ivLandscapeClose"]',
        },
      ],
    },
  ],
});
