import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.unionpay',
  name: '云闪付',
  groups: [
    {
      key: 1,
      name: '首页定位提示',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="tv_content"][text*="开启定位"] +2 [vid="view_locate_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unionpay.activity.UPActivityMain'],
        },
      ],
    },
    {
      key: 2,
      name: '开启定位',
      desc: '260125，修复提示BUG，添加ids, + [vid="btn_ok"]',
      rules: [
        {
          matches: [
            '[vid="tv_dialog_title"][text="开启手机定位服务"] < * +n * > @[vid="btn_cancel"][text="取 消"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.activity.react.UPActivityReactNative',
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '0元购',
      desc: 'D',
      rules: [
        {
          matches: ['[text="￥ 0"] + [text="预估到手价"] + [text="立即抢购"]'],
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '0元购上限',
      desc: 'D',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="￥ 0"] + [text="预估到手价"] + [text*="达到限购次数"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.unionpay.liteapp.app.UPLiteAppActivity1'],
        },
      ],
    },
    {
      key: 5,
      name: '0元购已抢光',
      desc: 'D',
      rules: [
        {
          action: 'back',
          matches: ['[text="￥ 0"] + [text="预估到手价"] + [text="已抢光"]'],
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '幸运扭蛋机，点击抽奖',
      desc: '',
      rules: [
        {
          action: 'clickCenter',
          matches: ['[text!*="0"][text$="次 抽奖机会"]'],
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '幸运扭蛋机 开心收下',
      desc: '260220，修复积点BUG，text$="到账后7*24小时内使用有效"',
      rules: [
        {
          matches: [
            '([text="请前往“会员中心”查看"] -n [text="查看积点攻略"] - [text*="立减券" || text="积点"] <n * + *) || (@* - * > [text="立减券"] + [text="去查看"] +n [text$="使用有效"]) || (@TextView - * > [text="积点"] + [text="去查看"] + [text="请前往“会员中心”查看"]) || ([text*="立减券" || text="积点"] +n [text="请前往“会员中心”查看"] + *) || ([text*="立减券" || text="积点"] + [text="查看积点攻略"] +n [text="请前往“会员中心”查看"] <n * + *) || ([text="去查看"] +n [text$="使用有效"] + *) || ([text*="立减券" || text="积点"] + [text="开心收下"]) || ([text="浦发立减券"] + [text="去查看"] <n * + TextView) || ([text="去查看"] + [text="票券有效期7*24小时"] + View)',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '签到成功',
      desc: '',
      rules: [
        {
          matches: ['[text="签到成功"] + TextView'],
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '暂不领取权益',
      desc: '双标卡权益,D',
      rules: [
        {
          matches: ['@View - View [text="立即兑换"]'],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '0元购上限+抢光',
      desc: 'D',
      rules: [
        {
          action: 'back',
          matches: [
            '([text="￥ 0"] + [text="预估到手价"] + [text*="达到限购次数"]) || ([text="￥ 0"] + [text="预估到手价"] + [text="已抢光"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.liteapp.app.UPLiteAppActivity1',
            'com.unionpay.liteapp.app.UPLiteAppActivity2',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '开启消息通知',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="view_dialog_other_container"] [vid="view_alert_cancel"]',
          ],
          fastQuery: true,
          activityIds: ['com.unionpay.activity.UPActivityMain'],
        },
      ],
    },
    {
      key: 12,
      name: '领取成功提示',
      desc: '也可去卡包查看[text="去查看"]',
      rules: [
        {
          matches: ['[text="恭喜您领取成功"] +n * > [text="知道了"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unionpay.activity.react.UPActivityReactNative'],
        },
      ],
    },
    {
      key: 13,
      name: '立即领取',
      desc: '251128,D',
      rules: [
        {
          matches: [
            '[text="中国银联"] +n [text^="今日剩余"] <<n * +2 * [text="立即领取"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.unionpay.activity.react.UPActivityReactNative'],
        },
      ],
    },
    {
      key: 14,
      name: '无界卡每月一次星巴克，去领取',
      desc: '260131',
      rules: [
        {
          matches: [
            '@[id="wjGetGuestBoxBonusRightGroup06FromCreditCardPage"][text="去领取"] + [text^="用户每月可领一次"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.unionpay.cordova.UPActivityCordovaWeb'],
        },
      ],
    },
    {
      key: 15,
      name: '开通指纹支付，以后再说',
      desc: '260303',
      rules: [
        {
          matches: ['[text="开通指纹支付"] +n @* > [text="稍后再说"]'],
          actionCd: 500,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.unionpay.activity.react.UPActivityReactNative'],
        },
      ],
    },
    {
      key: 16,
      name: '发现新版本，稍后再说',
      desc: '260327',
      rules: [
        {
          matches: [
            '[vid="tv_dialog_info"][text^="发现新版本"] + * > [vid="btn_cancel"][text="稍候再说"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.unionpay.activity.UPActivityMain',
            'com.unionpay.mobile.pay.activity.PayWalletActivity',
          ],
        },
      ],
    },
  ],
});
