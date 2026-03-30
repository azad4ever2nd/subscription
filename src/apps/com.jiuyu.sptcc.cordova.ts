import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jiuyu.sptcc.cordova',
  name: '上海交通卡',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="imageHomeGG_Middle"] + [vid="imageHomeGG_Close"]'],
          fastQuery: true,
          matchTime: 10000,
          resetMatch: 'match',
          activityIds: ['com.jy.sptcc.ui.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '打开消息通知',
      desc: '251119',
      rules: [
        {
          matches: ['@[vid="dialog_cancel"] + [vid="ll_dialog_content_view"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jy.sptcc.ui.MainActivity'],
        },
      ],
    },
  ],
});
