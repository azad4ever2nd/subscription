import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.bocmbci',
  name: '中国银行',
  groups: [
    {
      key: 1,
      name: '签到完成',
      desc: '',
      rules: [
        {
          matches: [
            '[text="签到活动"] [text="jTwlF83QpPYxVQhU3JZSNS8K1OY6t0zf4H7ibaKKXXyC5AAAAAElFTkSuQmCC"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.boc.bocsoft.mobile.bocmobile.base.activity.generalcontainer.GeneralCordovaActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '分享到微信',
      desc: '260212',
      rules: [
        {
          matches: ['@[desc="分享到微信"] <<n * +n [vid="btn_share_cancel"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.boc.bocsoft.mobile.bocmobile.base.activity.generalcontainer.GeneralCordovaActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: 'D，251120，添加新弹窗',
      rules: [
        {
          anyMatches: [
            '[text="0740728-T204411NSMB8Y202511100918500188675-1"] <<n * + Image',
            '[id="app"] > [id="homePage_0000" || id="personalPage_0000"] +3 * >3 Image',
            '[id="app"] > [id="lifePage_0000"] +2 * >3 Image',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '维护通知',
      desc: '',
      rules: [
        {
          matches: ['[vid="rl_pager"] + [vid="btn_action"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.boc.bocsoft.mobile.bocmobile.buss.login.ui.LoginBaseActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '活动火爆，确定',
      desc: '260314',
      rules: [
        {
          matches: ['[text*="活动火爆"] + * > @* > [text="确定"]'],
          actionCd: 300,
          resetMatch: 'match',
          activityIds: [
            'com.boc.android.foundation.h5.WebViewContainerActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗，未中奖，我知道了 或 X掉',
      desc: '261029',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.boc.android.foundation.h5.WebViewContainerActivity',
          matches:
            'View > TextView[text="我知道了"][clickable=true][visibleToUser=true] + Image[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 7,
      name: '弹窗，当前不在有效抽奖时间内，确定',
      desc: '261108',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.boc.android.foundation.h5.WebViewContainerActivity',
          anyMatches: [
            'View > View[text^="您当前不在有效抽奖时间内"] + View > @View[clickable=true][visibleToUser=true] > TextView[text="确定"][clickable=false][visibleToUser=true]', //261108，弹窗，不在有效抽奖时间内，确定
          ],
        },
      ],
    },
    {
      key: 8,
      name: '弹窗，获取个人信息，勾选 同意',
      desc: '261127',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          actionCd: 5000,
          excludeMatches: [
            'LinearLayout > LinearLayout > TextView[text="免责声明"][vid="tv_dialog_disclaimer_title"]', //261127，排除 弹窗 免责声明
          ],
          activityIds: 'com.boc.android.foundation.h5.WebViewContainerActivity',
          matches:
            'View > View > @View[text="未确认"][clickable=true][visibleToUser=true] + View > TextView[text^="我已阅读并同意《对客服务协议》《用户授权协议》。"]',
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，获取个人信息，勾选 同意，允许',
      desc: '261127',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 5000,
          preKeys: [8],
          excludeMatches: [
            'LinearLayout > LinearLayout > TextView[text="免责声明"][vid="tv_dialog_disclaimer_title"]', //261127，排除 弹窗 免责声明
          ],
          activityIds: 'com.boc.android.foundation.h5.WebViewContainerActivity',
          matches:
            'View > View > View > @View[clickable=true][visibleToUser=true] > TextView[text="允许"]',
        },
      ],
    },
    {
      key: 10,
      name: '弹窗，免责声明，我知道了',
      desc: '261127',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.boc.bocsoft.mobile.bocmobile.base.activity.generalcontainer.GeneralCordovaActivity',
          matches:
            'LinearLayout > LinearLayout > TextView[text="免责声明"][vid="tv_dialog_disclaimer_title"] +n Button[text="我知道了"][vid="btn_dialog_disclaimer_close"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
