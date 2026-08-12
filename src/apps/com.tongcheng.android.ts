import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    {
      key: 1,
      name: '需要打开系统定位开关',
      desc: '260811，com.elong.android.flutter.TCELFlutterBoostActivity,增加 IDS',
      rules: [
        {
          matches: [
            '[vid="tv_dialog_title"][text*="定位"] +n * > [vid="btn_dialog_left"][text="稍后开启"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '限时免费福利弹窗，X掉',
      desc: '260426',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          matches: '[text="tc-ad"] + View[clickable=true]',
        },
      ],
    },
    {
      key: 3,
      name: '下单后弹窗',
      desc: '260810，clickable=true,添加浏览订单时的弹窗',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          matches:
            '(@View[clickable=true] > Image[text="close_icon"]) ||(Image < View + @View[clickable=true] > [text="close_icon"]) || (TextView[text="广告"] +n @View[clickable=true] > Image[text="close_icon"]) || (View > TextView[text="广告"] +n View[clickable=false] > Image[text="close_icon"][clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 4,
      name: '下单后弹窗2',
      desc: '260810，clickable=false，添加浏览订单时的弹窗',
      rules: [
        {
          action: 'click',
          resetMatch: 'match',
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          matches:
            '(View > TextView[text="广告"] +n View[clickable=false] > Image[text="close_icon"][clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 5,
      name: '0点广州票根惠民券，抢券，',
      desc: '260319',
      rules: [
        {
          matches: ['[text="1KJ63vcuJvq"] + @* > [text!="1IPvL3872o0"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '0点广州票根惠民券，抢券，抢完返回 ',
      desc: '260319',
      rules: [
        {
          action: 'back',
          matches: ['[text="1KJ63vcuJvq"] + @* > [text="1IPvL3872o0"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '广东文旅消费券，旅游景区券',
      desc: '260115',
      rules: [
        {
          matches: [
            '[text="2026请到广东过大年"] [text="1JkEZih3lfi"] + @* > [text="1JkIoUfneDu"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '广东文旅消费券，旅游景区券，已领完，返回',
      desc: '260322，添加暂未开始text="1IPvLxOd9gA"',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="2026请到广东过大年"] [text="1JkEZih3lfi"] + * > [text="1IPvL3872o0" || text="1IPvLxOd9gA"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '2026暑假当然来广东，抢旅游景区券',
      desc: '260811',
      rules: [
        {
          actionCd: 500,
          resetMatch: 'match',
          actionMaximum: 10,
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          matches:
            'WebView[text*="暑假当然来广东"] > View > View > View > Image[text="1NZmP5zb7wI"] + View > Image[text="1LBYVwKptxS"]',
        },
      ],
    },
    {
      key: 10,
      name: '美美星期五1',
      desc: '260109',
      rules: [
        {
          matches: ['[text="1Iqxem34OZy"] < * + * > *[index=2]'],
          actionCdKey: 4,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '美美星期五，提交订单',
      desc: '260109',
      rules: [
        {
          matches: ['[text="订单金额：￥1"] + @* > [text="提交订单"]'],
          actionCdKey: 4,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '恭喜获得红包，残忍离开',
      desc: '260812，添加 酒店权益已到账',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          matches:
            '(View > View > @TextView[text="残忍离开"][clickable=false][visibleToUser=true] + TextView) || (View > TextView[text="酒店权益已到账"] +n View > Image[text*="close"][clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 13,
      name: '给评价',
      desc: '260726，添加 IDS，添加弹窗',
      rules: [
        {
          matchTime: 1500,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tongcheng.android.TongchengMainActivity',
            'com.tongcheng.android.LoadingActivity',
          ],
          matches:
            '([vid="top_iv" || vid="flADLayout" || vid="flContainer"] + [vid="iv_close" ])|| ([vid="top_iv" || vid="flADLayout" || vid="flContainer"] + [vid="ivClose"]) || (LinearLayout > FrameLayout[vid="flADLayout"] + ImageView[vid="ivClose"]) || (@ImageView[clickable=true][visibleToUser=true][vid="iv_close"] - ImageView[vid="top_iv"] < FrameLayout + LinearLayout > TextView[text*="好评"])',
        },
      ],
    },
    {
      key: 14,
      name: '需要打开系统定位开关，稍后开启',
      desc: '260811，clickable=true,fastquery=true',
      rules: [
        {
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.elong.android.flutter.TCELFlutterBoostActivity',
          matches:
            'LinearLayout > TextView[vid="tv_dialog_title"][text*="定位"] +n LinearLayout > @TextView[vid="btn_dialog_left"][text="稍后开启"][clickable=true][visibleToUser=true] + TextView[text="去设置"][clickable=true]',
        },
      ],
    },
  ],
});
