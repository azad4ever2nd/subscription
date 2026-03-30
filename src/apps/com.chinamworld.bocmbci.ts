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
      name: '弹窗',
      desc: '251120添加新弹窗',
      rules: [
        {
          matches: [
            '([text="0740728-T204411NSMB8Y202511100918500188675-1"] <<n * + Image) || ([id="app"] > [id="homePage_0000" || id="personalPage_0000"] +3 * >3 Image) || ([id="app"] > [id="lifePage_0000"] +2 * >3 Image)',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.boc.bocsoft.mobile.bocmobile.buss.system.main.ui.MainActivity',
          ],
        },
      ],
    },
    {
      key: 3,
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
      key: 4,
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
      key: 5,
      name: '活动火爆，确定',
      desc: '260314',
      rules: [
        {
          matches: ['[text*="活动火爆"] + * > @* > [text="确定"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.boc.android.foundation.h5.WebViewContainerActivity',
          ],
        },
      ],
    },
  ],
});
