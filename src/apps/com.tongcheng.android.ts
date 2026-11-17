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
          anyMatches: [
            'View > TextView[text="广告"] +n View[clickable=false] > Image[text="close_icon"][clickable=false][visibleToUser=true]',
            'TextView[text="广告"] +n @View[clickable=true] > Image[text="close_icon"]',
            'Image < View + @View[clickable=true] > [text="close_icon"]',
            '@View[clickable=true] > Image[text="close_icon"]',
          ],
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
            'View > TextView[text="广告"] +n View[clickable=false] > Image[text="close_icon"][clickable=false][visibleToUser=true]',
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
      desc: '261003，添加 广东文旅',
      rules: [
        {
          actionCd: 500,
          action: 'clickCenter',
          resetMatch: 'match',
          actionMaximum: 15,
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          anyMatches: [
            'View > View > Image[text="1NZmP5zb7wI"] + @View[clickable=true][visibleToUser=true] >  Image[text="1LBYVwKptxS"]',
            'WebView[text*="暑假当然来广东"] > View > View > View > Image[text="1NZmP5zb7wI"] + View > Image[text="1LBYVwKptxS"]',
          ],
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
      desc: '261013，添加 酒店权益已到账',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tongcheng.android.module.webapp.WebViewActivity',
          anyMatches: [
            'View > View > @TextView[text="残忍离开"][visibleToUser=true] + TextView',
            'View > TextView[text="酒店权益已到账"] +n View > Image[text*="close"][clickable=false][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '给评价',
      desc: '261013，添加 惊喜弹窗，IDS',
      rules: [
        {
          forcedTime: 3000,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tongcheng.android.TongchengMainActivity',
            'com.tongcheng.android.LoadingActivity',
          ],
          anyMatches: [
            'ViewGroup > ViewGroup[vid="not_disturb_layout"] + ImageView[vid="second_close"][clickable=true][visibleToUser=true]',
            'ViewGroup > FrameLayout[vid="surprise_box_ctn_top"] + ImageView[clickable=true][visibleToUser=true]',
            'LinearLayout > ImageView[vid="second_close"][clickable=true][visibleToUser=true]',
            '[vid="top_iv" || vid="flADLayout" || vid="flContainer"] + [vid="iv_close" ]',
            '[vid="top_iv" || vid="flADLayout" || vid="flContainer"] + [vid="ivClose"]',
            'LinearLayout > FrameLayout[vid="flADLayout"] + ImageView[vid="ivClose"]',
            '@ImageView[clickable=true][visibleToUser=true][vid="iv_close"] - ImageView[vid="top_iv"] < FrameLayout + LinearLayout > TextView[text*="好评"]',
          ],
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
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.elong.android.flutter.TCELFlutterBoostActivity',
          anyMatches: [
            'LinearLayout > TextView[vid="tv_dialog_title"][text*="定位"] +n LinearLayout > @TextView[vid="btn_dialog_left"][text="稍后开启"][clickable=true][visibleToUser=true] + TextView[text="去设置"][clickable=true]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '每月17旅行节，直播补贴，领取',
      desc: '261116',
      rules: [
        {
          forcedTime: 3000,
          actionCd: 700,
          resetMatch: 'match',
          anyMatches: [
            'ViewGroup[vid="coupon_entry_container"] > ImageView[vid="tv_coupon_title"] + RecyclerView[vid="rv_coupon"] > @FrameLayout[vid="coupon_chip_root"][clickable=true][visibleToUser=true] > LinearLayout  > TextView[vid="tv_coupon_name"][text="17旅行节｜门票7.1折券"]', //261117，直播节入口
            'ViewGroup[vid="coupon_entry_container"] > ImageView[vid="tv_coupon_title"] + RecyclerView[vid="rv_coupon"] > @FrameLayout[vid="coupon_chip_root"][clickable=true] > LinearLayout  > TextView[vid="tv_coupon_name"][text="17旅行节｜门票7.1折券"]', //261117，直播节入口
            //'ViewGroup[vid="coupon_entry_container"] > @LinearLayout[vid="tv_coupon_receive"][clickable=true][visibleToUser=true] > TextView[text="领取"]',
          ],
          activityIds: ['.module.live.TCLiveRoomActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '直播补贴，门票7.1折券，去领取',
      desc: '261116',
      rules: [
        {
          actionCd: 300,
          forcedTime: 3000,
          resetMatch: 'match',
          actionMaximum: 5,
          anyMatches: [
            'ViewGroup[vid="root"][clickable=true][visibleToUser=true] > TextView[vid="tv_name"][text="17旅行节｜门票7.1折券"] + TextView[vid="tv_rule"] + TextView[vid="tv_action"][text*="去领取"][clickable=true][visibleToUser=true]', //261117，弹窗，直播补贴，门票7.1折券，去领取
            'ViewGroup[vid="root"] > TextView[vid="tv_name"][text*="17旅行节" && text*="门票7.1折"] + TextView[vid="tv_rule"] + TextView[vid="tv_action"][text*="去领取"][clickable=true]',
          ],
          activityIds: ['.module.live.TCLiveRoomActivity'],
        },
      ],
    },
  ],
});
