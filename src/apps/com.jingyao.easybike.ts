import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingyao.easybike',
  name: '哈啰',
  groups: [
    {
      key: 1,
      name: '请打开定位服务',
      desc: '',
      rules: [
        {
          matches: [
            '[desc^="请打开定位服务"] +2 @[desc="取消"] + [desc="去设置"]',
          ],
          resetMatch: 'app',
          activityIds: [
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '系统定位服务已关闭',
      desc: '260325,添加打开定位服务，,添加IDS,消息通知 com.hellobike.business.hitch.common.home.HLPHHomeActivity',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 0,
          activityIds: [
            'com.hellobike.atlas.business.portal.PortalActivity',
            'com.hellobike.business.hitch.common.home.HLPHHomeActivity',
          ],
          matches:
            '[text^="请打开定位服务" || text="开启消息通知" || text="系统定位服务已关闭"] <<n * +n * [text="取消"]',
        },
      ],
    },
    {
      key: 3,
      name: '请授权以下权限',
      desc: '251121',
      rules: [
        {
          matches: [
            '[vid="alertTitle"][text*="权限"] <<2 * +2 * [text="稍后再说"]',
          ],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: [
            'com.hellobike.atlas.business.portal.PortalActivity',
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '确认开锁',
      desc: '260322，原[desc^="骑行结束"] < * +2 [desc="确认开锁"]',
      rules: [
        {
          matches: ['[desc="骑行卡"] <n * +n [desc="确认开锁"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '骑行完弹窗',
      desc: '260309,添加有无故障弹窗',
      rules: [
        {
          matches: [
            '([text="gENrrooPRRSKS2nmR644j"]) || ([text="有故障"] + [text="没故障"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '一键收碳',
      desc: '',
      rules: [
        {
          matches: ['[text^="骑行领碳积分"] + * > [text="一键收碳"]'],
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '月卡弹窗',
      desc: '260323，添加IDS，哈罗快送跑腿弹窗',
      rules: [
        {
          matches: [
            '([vid="hbDialogLayout"] +n [vid="actionDialogClose"]) || ([vid="creativeContainer"] + [vid="actionDialogClose"])',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.atlas.business.portal.PortalActivity',
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '哈啰还不知道您在哪里',
      desc: '251119',
      rules: [
        {
          matches: [
            '[vid="title_tv"][text="哈啰还不知道您在哪里"] +2 @[vid="sign_out_tv"][text="暂不开启"] + [vid="agreement_tv"][text="快速开启定位"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '秒杀价月卡',
      desc: '251213，增加价格变化，0.01,0.99,1.99,7天无限次卡',
      rules: [
        {
          matches: [
            '[text="单车30天不限次卡" || text="单车7天不限次卡"] + [text="秒杀价"]  +n [text^="仅剩"] + [text="quality,q_80"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulacore.ui.H5Activity',
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '碳积分奖励',
      desc: '251130，添加 开心收下 ([text="E1IR6_Z5_Group121582"] < * - [text$="碳积分"] < * + * > TextView) || ([text="10碳积分"] < * + * > *)',
      rules: [
        {
          matches: ['Image < * - [text$="0碳积分"] < View + View > TextView'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 11,
      name: '秒杀月卡付款',
      desc: '260305[text="立即支付¥6.9"]',
      rules: [
        {
          preKeys: [9],
          matches: ['[vid="paySubmitTv"][text^="立即支付"]'],
          actionCdKey: 9,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 12,
      name: '首页领取奖励',
      desc: '251205，',
      rules: [
        {
          matches: [
            '[text="单车"] - [text^="+"] - ImageView <<n * +n * >2 [text="领取"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '签到奖励弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="ivTopBg"] +n [vid="ivClose"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 14,
      name: '领奖励',
      desc: '251216，添加知道了，clik无反应就clickCenter',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text="会员单单返"] + [text="领奖励"]) ||  ([text="在App任意完成以下订单，回来领奖励金"] +n [text="知道了"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 15,
      name: '开启消息通知，返回',
      desc: '251208',
      rules: [
        {
          action: 'back',
          matches: ['[vid="tvPushTip"] + [vid="ivIcon"] + [vid="tvOpen"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.hitch.business.homenew.HitchHomeActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '签到',
      desc: '251216',
      rules: [
        {
          matches: ['[text="会员日日有惊喜"] +n * > Button[text="签到"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 17,
      name: '单单返',
      desc: '260322，clik无反应就clickCenter',
      rules: [
        {
          action: 'clickNode',
          matches: [
            '(@View[childCount>=1] + [text="App单单返"]) || (@View[clickable=true] [text="单单返"][parent.childCount=2])',
          ],
          actionCd: 0,
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 18,
      name: '新人首单，X',
      desc: '260111',
      rules: [
        {
          matches: [
            '@TextView[clickable=true] + [text="新人首单，兑免费骑车"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 19,
      name: '260308',
      desc: '侍款弹窗',
      rules: [
        {
          matches: [
            '[vid="pay_inner_title"][text="付款金额"] + [vid="pay_close_iv"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '骑车抽免单弹窗，',
      desc: '260325',
      rules: [
        {
          matches: ['[vid="creativeContainer"] + [vid="actionDialogClose"]'],
          actionCd: 0,
          fastQuery: true,
          order: -1,
          resetMatch: 'match',
          activityIds: [
            'com.hellobike.flutter.platform.android.flutterboost.FlutterHostFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '奖励金入口',
      desc: '260327',
      rules: [
        {
          matches: ['@ViewGroup[clickable=true] [text="奖励金"]'],
          actionCd: 0,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.hellobike.atlas.business.portal.PortalActivity'],
        },
      ],
    },
    {
      key: 22,
      name: '碳积分，去领取',
      desc: '260416',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          actionCd: 300,
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches: '@View > [text="碳积分"] + * + [text="去领取"]',
        },
      ],
    },
    {
      key: 23,
      name: '请打开系统定位开关后用车,X掉',
      desc: '260416',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          actionCd: 0,
          activityIds:
            'com.hellobike.moped.platform.offline.web.OhoRealmWebActivity',
          matches:
            '[text="请打开系统定位开关后用车"] <n * + @*[clickable=true] +n [text="去开启"]',
        },
      ],
    },
    {
      key: 24,
      name: '奖励金页面，签到',
      desc: '260416',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          actionCd: 300,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text="请点击下方按钮，立即签到"] + * [text="签到"]',
        },
      ],
    },
    {
      key: 25,
      name: '领奖页面，签到完成，明日再来，X掉',
      desc: '260416',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          actionCd: 300,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '@TextView[clickable=true] +n [text="明日再来"]',
        },
      ],
    },
  ],
});
