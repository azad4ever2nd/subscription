import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.idlefish',
  name: '闲鱼',
  groups: [
    {
      key: 1,
      name: '悬浮弹权限',
      desc: '',
      rules: [
        {
          matches: ['[text*="开启悬浮窗权限"] <<4 * + * [text="否"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.fleamarket.yunlive.arch.component.mini.PermissionActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '小额免密',
      desc: '260101,([text="闲鱼社区小额免密 推荐你"] <2 * +2 * > [text="关闭"]) || ',
      rules: [
        {
          matches: ['([text^="闲鱼社区小额免密"] <<n * +n * > [text="关闭"])'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '开启系统通知',
      desc: '',
      rules: [
        {
          matches: ['[desc^="开启系统通知"] > *'],
          resetMatch: 'match',
          activityIds: [
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '直播间立即购买',
      desc: '251201，整合瑞幸，汉堡王',
      rules: [
        {
          matches: [
            '[desc^="优惠已抵￥2."] -n [desc*="瑞幸-生椰拿铁特惠点单" || desc*="汉堡王代下单汉堡4选1"] <<n * +n [desc="收藏"] +n @[desc="按钮"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.fleamarket.yunlive.LiveAudienceFlowActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '直播间确认购买',
      desc: '251202，整合瑞幸，汉堡王',
      rules: [
        {
          matches: [
            '[desc^="¥7."] - [desc*="瑞幸-生椰拿铁特惠点单" || desc*="汉堡王代下单汉堡4选1"] <<n * + [desc^="确认购买 7."]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '进入直播间失败',
      desc: '251201',
      rules: [
        {
          matches: [
            '[vid="title"][text^="进入直播间失败"] + * > [vid="confirm"][text="确定"]',
          ],
          fastQuery: true,
          activityIds: ['com.fleamarket.yunlive.LiveAudienceFlowActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '直播间购物车去购买',
      desc: '251202，相当于立即购买',
      rules: [
        {
          matches: [
            '[text*="瑞幸-生椰拿铁特惠点单"] +n [text="¥"] + [text="7"] +n [text="去购买"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.fleamarket.yunlive.LiveAudienceFlowActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '立即支付',
      desc: '251203',
      rules: [
        {
          matches: ['[desc="选择支付方式"] <<n * +n * [desc="立即支付"]'],
          resetMatch: 'match',
          activityIds: [
            'com.idlefish.flutterbridge.AIOService.ApiService.handlers.cashier.CashierDialogActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '闲鱼红包',
      desc: '251206',
      rules: [
        {
          matches: ['View [text^="¥" && text$="商品专属红包"]'],
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: ['com.taobao.idlefish.webview.WebHybridActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '分享，立即查看',
      desc: '251213,增加ids',
      rules: [
        {
          matches: [
            '@[vid="goDetail"][text="立即查看"] <<n * + [vid="ivClose"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.idlefish.webview.WebHybridActivity',
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
            'com.fleamarket.yunlive.LiveAudienceFlowActivity',
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '提取卡券跳转，返回',
      desc: '251208',
      rules: [
        {
          matches: ['@[vid="bar_left"] + [vid="center_text"][text="下单选品"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.taobao.idlefish.webview.WebHybridActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '新版本',
      desc: '251209',
      rules: [
        {
          matches: [
            '[vid="title"][text*="新版本" || text*="升级"] +n * > [vid="left"][text="暂不升级"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '订单支付完成，返回',
      desc: '251215，方便重复下单',
      rules: [
        {
          action: 'back',
          matches: ['[desc^="支付成功\\n返回首页\\n查看订单"]'],
          resetMatch: 'match',
          activityIds: [
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '放弃本次付款',
      desc: '251215 ',
      rules: [
        {
          matches: ['[text="是否放弃本次付款？"] < * +n * [text="放弃"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '直播间价格不对，返回',
      desc: '251225',
      rules: [
        {
          action: 'back',
          matches: [
            '[desc="返回"] +n [desc^="立即购买 ¥9." || desc^="立即购买 ¥8."]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.fleamarket.yunlive.LiveAudienceFlowActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '直播间列表进去',
      desc: '251227，需要汉堡王可添加 text*="汉堡王代下单汉堡4选1" || ',
      rules: [
        {
          matches: ['[text*="瑞幸-生椰拿铁"] < @* +n [text="去购买"]'],
          resetMatch: 'match',
          activityIds: ['com.fleamarket.yunlive.LiveAudienceFlowActivity'],
        },
      ],
    },
    {
      key: 18,
      name: '确认购买价格不对，返回',
      desc: '251228',
      rules: [
        {
          action: 'back',
          matches: [
            '[desc*="瑞幸-生椰拿铁" || desc*="汉堡王代下单汉堡4选1"] <<n * +n [desc^="确认购买 9." || desc^="确认购买 8."]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.idlefish.flutterbridge.flutterboost.boost.FishFlutterBoostTransparencyActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '首页弹窗',
      desc: '260327',
      rules: [
        {
          matches: [
            '[text^="O1CN01mEcanQ1FdcvgegTFb_!!6000000000510-2-tps-96-96"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.idlefish.maincontainer.activity.MainActivity',
          ],
        },
      ],
    },
  ],
});
