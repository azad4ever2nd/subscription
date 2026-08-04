import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 1,
      name: '请打开定位服务',
      desc: '260616',
      rules: [
        {
          activityIds:
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          matches:
            'View > View[desc^="请打开定位服务"] +2 View[desc="取消"][clickable=true]',
          resetMatch: 'match',
          actionCd: 0,
        },
      ],
    },
    {
      key: 2,
      name: '确认开锁',
      desc: '260416，原[desc^="骑行结束"] < * +2 [desc="确认开锁"]',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          matches: '[desc="骑行卡" || desc="主题卡"] <n * +n [desc="确认开锁"]',
        },
      ],
    },
    {
      key: 3,
      name: '骑车抽免单弹窗，',
      desc: '260325',
      rules: [
        {
          fastQuery: true,
          order: -1,
          resetMatch: 'match',
          activityIds:
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          matches: '[vid="creativeContainer"] + [vid="actionDialogClose"]',
        },
      ],
    },
    {
      key: 4,
      name: '请授权以下权限',
      desc: '260505',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
            'com.hellobike.atlas.business.portal.PortalActivity',
          ],
          matches:
            '[vid="alertTitle"][text*="权限"] <<n * +n * [id="android:id/button2"][text="稍后再说"]',
        },
      ],
    },
    {
      key: 5,
      name: '哈啰还不知道您在哪里',
      desc: '251119',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches:
            '[vid="title_tv"][text="哈啰还不知道您在哪里"] +2 @[vid="sign_out_tv"][text="暂不开启"] + [vid="agreement_tv"][text="快速开启定位"]',
        },
      ],
    },
    {
      key: 6,
      name: '首页领取奖励',
      desc: '251205，',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches:
            '[text="单车"] - [text^="+"] - ImageView <<n * +n * >2 [text="领取"]',
        },
      ],
    },
    {
      key: 7,
      name: '奖励金入口',
      desc: '260615',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches:
            '(@ViewGroup[clickable=true] [text="奖励金"]) || (ViewGroup > ViewGroup > @ViewGroup[clickable=true] > ViewGroup > TextView[text="奖励金"])',
        },
      ],
    },
    {
      key: 8,
      name: '月卡弹窗',
      desc: '260711，添加车主福利弹窗，IDS，哈罗快送跑腿弹窗',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          fastQuery: true,
          activityIds: 'com.hellobike.atlas.business.portal.PortalActivity',
          matches:
            '([vid="hbDialogLayout"] +n [vid="actionDialogClose"]) || ([vid="creativeContainer"] + [vid="actionDialogClose"]) || (FrameLayout > LinearLayout > LinearLayout[vid="hbDialogLayout"] + View + ImageView[vid="actionDialogClose"]) || (LinearLayout > FrameLayout[vid="creativeContainer"] + ImageView[vid="actionDialogClose"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 9,
      name: '系统定位服务已关闭',
      desc: '260616，添加matchroo测试，添加打开定位服务，,添加IDS,消息通知 com.hellobike.business.hitch.common.home.HLPHHomeActivity',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          action: 'clickCenter',
          matchRoot: false,
          activityIds: [
            'com.hellobike.atlas.business.portal.PortalActivity',
            'com.hellobike.business.hitch.common.home.HLPHHomeActivity',
          ],
          matches:
            '([text^="请打开定位服务"] <<n * +n * [text="取消"]) || ([text="开启消息通知"]  <<n * +n * [text="取消"]) || (TextView[text="系统定位服务已关闭"] < FrameLayout +2 FrameLayout > LinearLayout > Button[text="取消"]) || (TextView[text*="定位服务"] < FrameLayout + FrameLayout[id="com.jingyao.easybike:id/bottomContainer"] > LinearLayout > Button[text="取消"][clickable=true])',
        },
      ],
    },
    {
      key: 10,
      name: '开启消息通知，返回',
      desc: '251208',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          fastQuery: true,
          activityIds: 'com.hellobike.hitch.business.homenew.HitchHomeActivity',
          matches: '[vid="tvPushTip"] + [vid="ivIcon"] + [vid="tvOpen"]',
        },
      ],
    },
    {
      key: 11,
      name: '签到',
      desc: '260513',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text="会员日日有惊喜"] +n * > Button[text="签到"]) || ([text="签到"])',
        },
      ],
    },
    {
      key: 12,
      name: '奖励金页面，签到',
      desc: '260513，测试matchRoot',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          matchRoot: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text="请点击下方按钮，立即签到"] + * [text="签到"]) || ([text="签到"])',
        },
      ],
    },
    {
      key: 13,
      name: '奖励金页面，上方，今日签到',
      desc: '260513',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '@*[clickable=true] > *[childCount=2] > [text="今日签到"]',
        },
      ],
    },
    {
      key: 14,
      name: '签到奖励弹窗',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[vid="ivTopBg"] +n [vid="ivClose"]',
        },
      ],
    },
    {
      key: 15,
      name: '领奖页面，签到完成，明日再来，X掉',
      desc: '260416',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '@TextView[clickable=true] +n [text="明日再来"]',
        },
      ],
    },
    {
      key: 16,
      name: '碳积分奖励',
      desc: '251130，添加 开心收下 ([text="E1IR6_Z5_Group121582"] < * - [text$="碳积分"] < * + * > TextView) || ([text="10碳积分"] < * + * > *)',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: 'Image < * - [text$="0碳积分"] < View + View > TextView',
        },
      ],
    },
    {
      key: 17,
      name: '领奖励',
      desc: '260616， ([text="在App任意完成以下订单，回来领奖励金"] +n [text="知道了"]) || clik无反应就clickCenter',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text="会员单单返"] + [text="领奖励"]) || (View > View > View > TextView[text*="奖励金"] + View + TextView[text="知道了"][clickable=true])',
        },
      ],
    },
    {
      key: 18,
      name: '单单返',
      desc: '260511，改进单单返BUG，数字TextView+单单返，图标Image+单单返，clik无反应就clickCenter',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@View[clickable=true] TextView + [text="单单返"][parent.childCount=2]',
        },
      ],
    },
    {
      key: 19,
      name: '秒杀月卡付款',
      desc: '251123[text="立即支付¥6.9"]',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[vid="paySubmitTv"][text="立即支付¥0.01"]',
        },
      ],
    },
    {
      key: 20,
      name: '新人首单，X',
      desc: '260111',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '@TextView[clickable=true] + [text="新人首单，兑免费骑车"]',
        },
      ],
    },
    {
      key: 21,
      name: '请打开系统定位开关后用车,X掉',
      desc: '260416',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '[text="请打开系统定位开关后用车"] <n * + @*[clickable=true] +n [text="去开启"]',
        },
      ],
    },
    {
      key: 22,
      name: '领行完领奖励金',
      desc: '260727',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            'View[id="monad-return-ball"] > @View[clickable=false][visibleToUser=true] > TextView[text="奖励金"] - TextView - View > Image[text="c628086d6b3a4923907c57bc4326aa13_mask"]',
        },
      ],
    },
    {
      key: 23,
      name: '一键收碳',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '([text^="骑行领碳积分"] + * > [text="一键收碳"]) || (View > View > View > TextView[text="一键收碳"])',
        },
      ],
    },
    {
      key: 24,
      name: '碳积分，去领取',
      desc: '260703',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 10,
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '(@View > [text="碳积分"] + * + [text="去领取"]) || (Image[text="ea6cf0c3c8f6483c9dbbe484a2ea60e3_icon_green_c"] < View + TextView + View > TextView[text="去领取"]) || (View > View > View > TextView - @View > Image[text="aab668b57491499e89ee4a5b766bcf77_35"])',
        },
      ],
    },
    {
      key: 25,
      name: '低碳会员页面，碳积分奖励，',
      desc: '260509',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches: '@View Image[text="aab668b57491499e89ee4a5b766bcf77_35"]',
        },
      ],
    },
    {
      key: 26,
      name: '侍款弹窗',
      desc: '260308',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '[vid="pay_inner_title"][text="付款金额"] + [vid="pay_close_iv"]',
        },
      ],
    },
    {
      key: 27,
      name: '骑行完弹窗',
      desc: '260309,添加有无故障弹窗',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '([text="gENrrooPRRSKS2nmR644j"]) || ([text="有故障"] + [text="没故障"])',
        },
      ],
    },
    {
      key: 28,
      name: '秒杀价月卡',
      desc: '251213，增加价格变化，0.01,0.99,1.99,7天无限次卡',
      rules: [
        {
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
          matches:
            '[text="单车30天不限次卡" || text="单车7天不限次卡"] + [text="秒杀价"] + [text="￥0.01" || text="￥1.99" || text="￥0.99"] +n [text^="仅剩"] + [text="quality,q_80"]',
        },
      ],
    },
    {
      key: 29,
      name: '骑行任务弹窗，关闭',
      desc: '260505',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.hellobike.ride.components.taskactivty.RideTaskDialogActivity',
          matches: '[vid="iv_close"]',
        },
      ],
    },
  ],
});
