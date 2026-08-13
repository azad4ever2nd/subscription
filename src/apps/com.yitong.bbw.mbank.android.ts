import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yitong.bbw.mbank.android',
  name: '广西北部湾银行',
  groups: [
    {
      key: 1,
      name: '每日签到，立即签到',
      desc: '260813',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 3000,
          forcedTime: 6000,
          actionCd: 2000,
          actionMaximum: 2,
          activityIds: 'com.yitong.mobile.biz.h5.container.WebViewActivity',
          matches:
            'WebView[text="每日签到"] > View > View > TextView[id="submit"][clickable=false][visibleToUser=true][text="立即签到"]',
        },
      ],
    },
    {
      key: 2,
      name: '签到成功，确定',
      desc: '260813',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.yitong.mobile.biz.h5.container.WebViewActivity',
          matches:
            'View > View > View > TextView[text*="请勿重复点击" || text="签到成功" || text^="已签到"] + View > Button[id="msg_box_ok"][clickable=true][visibleToUser=true][text="确定"]',
        },
      ],
    },
  ],
});
