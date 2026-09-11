import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.hebao',
  name: '和包',
  groups: [
    {
      key: 1,
      name: '弹窗，开启消息通知，X掉',
      desc: '260911',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 3000,
          action: 'clickCenter',
          activityIds: 'com.cmcc.wallet.mocam.activity.home.WalletHomeActivity',
          anyMatches: [
            '[vid="activityImg"] + [vid="closeImg"]',
            'RelativeLayout > ImageView[vid="activityImg"] + ImageView[vid="closeImg"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
