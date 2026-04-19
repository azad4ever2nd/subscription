import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pingan.paces.ccms',
  name: '平安口袋银行',
  groups: [
    {
      key: 1,
      name: '授权定位',
      desc: '',
      rules: [
        {
          matches: [
            '[text="未授权定位"] < * + * > @[text="取消"] + [text="去设置"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.pingan.componet.hybrid.webUrl.WebUrlActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '通知权限',
      desc: '251126',
      rules: [
        {
          matches: [
            '[vid="tvAlertContent"][text*="通知权限"] <<n [vid="alertHeader"] + [vid="horizontalFoot"] [vid="tvCancel"][desc="取消"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.pingan.launcher.activity.LauncherActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '支付会员周周领好礼,立即领取',
      desc: '260211',
      rules: [
        {
          matches: ['[text="支付会员周周领好礼"] @View > [text="立即领取"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.pingan.componet.hybrid.webUrl.WebUrlActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '抽奖弹窗',
      desc: '260211',
      rules: [
        {
          matches: ['[text="恭喜您获得"] +n TextView[clickable=true]'],
          resetMatch: 'match',
          activityIds: ['com.pingan.componet.hybrid.webUrl.WebUrlActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '订单支付完后广告弹窗',
      desc: '260227',
      rules: [
        {
          matches: ['@[id="dialogClose"] + [id="dialogHref"][desc="广告弹窗"]'],
          resetMatch: 'match',
          activityIds: ['com.pingan.core.base.PocketWebViewActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '直播弹窗',
      desc: '260416',
      rules: [
        {
          resetMatch:'match',
          fastQuery: true,
          activityIds: 'com.pingan.launcher.activity.LauncherActivity',
          matches: '[vid="bottom_close_image"][desc="点击关闭按钮"]',
        },
      ],
    },
  ],
});
