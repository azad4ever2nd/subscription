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
            'RelativeLayout > ImageView[vid="activityImg"] + ImageView[vid="closeImg"][clickable=true][visibleToUser=true]',
            '[vid="activityImg"] + [vid="closeImg"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '签到攒话费，立即签到',
      desc: '261019',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: '.webview.activity.WebViewActivity',
          anyMatches: [
            'WebView[text="签到攒话费"] > View > View > TextView[text="登录"] +4 TextView[text.length=0][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，恭喜您签到成功，X掉',
      desc: '261019',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.webview.activity.WebViewActivity',
          anyMatches: [
            'View > View > TextView[text.length=0][clickable=true][visibleToUser=true] - View > TextView[text="开心收下"][clickable=true][visibleToUser=true]',
            'View > View > @TextView[text.length=0][clickable=true][visibleToUser=true] - View > TextView[text="开心收下"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '签到攒话费，做任务赚话费豆，去领取',
      desc: '261019',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.webview.activity.WebViewActivity',
          matches:
            'ListView > View > Button[text="去领取"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 5,
      name: '签到攒话费，天天抽话费满减券，立即抽',
      desc: '261019，限1次',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: '.webview.activity.WebViewActivity',
          matches:
            'WebView[text="签到攒话费"] > View > View > View > Button[text.length=0][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 6,
      name: '弹窗，签到攒话费，报名成功，X掉',
      desc: '261019',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.webview.activity.WebViewActivity',
          matches:
            'View > View > TextView[text="报名成功"] +(3,5) Image[text="5lTpogM0hsACYGPj2O6ZD9JhpP0B2R6AL57EVeKuDYpp0i5G+fNnc84ZlMMBYsgDDyMVwtzqw4sKqtFK2GrfAQMwhmDJ0U1B0PHUIdeROwLMdUwHT6euFIAAAAASUVORK5CYII="][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
