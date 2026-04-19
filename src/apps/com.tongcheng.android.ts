import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tongcheng.android',
  name: '同程旅行',
  groups: [
    {
      key: 1,
      name: '下单后弹窗',
      desc: '260417，添加浏览订单时的弹窗',
      rules: [
        {
		  actionCd:0,
		  action:'clickCenter',
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          matches: '([text="广告"] +n @* > [text="close_icon"]) || (Image < View + View > [text="close_icon"]) || (@View > [text="close_icon"])',
        },
      ],
    },
    {
      key: 2,
      name: '需要打开系统定位开关',
      desc: '260202，增加 IDS',
      rules: [
        {
          matches: [
            '[vid="tv_dialog_title"][text*="定位"] +n * > [vid="btn_dialog_left"][text="稍后开启"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tongcheng.android.module.webapp.WebViewActivity',
            'com.elong.android.flutter.TCELFlutterBoostActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '美美星期五1',
      desc: '260109',
      rules: [
        {
          matches: ['[text="1Iqxem34OZy"] < * + * > *[index=2]'],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '美美星期五，提交订单',
      desc: '260109',
      rules: [
        {
          matches: ['[text="订单金额：￥1"] + @* > [text="提交订单"]'],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.module.webapp.WebViewActivity'],
        },
      ],
    },
    {
      key: 5,
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
      key: 6,
      name: '给评价',
      desc: '260315，添加弹窗',
      rules: [
        {
          matches: [
            '([vid="top_iv" || vid="flADLayout" || vid="flContainer"] + [vid="iv_close" ])|| ([vid="top_iv" || vid="flADLayout" || vid="flContainer"] + [vid="ivClose"])',
          ],
          actionCdKey: 1,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tongcheng.android.TongchengMainActivity'],
        },
      ],
    },
    {
      key: 7,
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
      key: 8,
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
      key: 9,
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
  ],
});
