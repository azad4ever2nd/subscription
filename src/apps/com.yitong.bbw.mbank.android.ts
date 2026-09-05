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
          resetMatch: 'app',
          matchDelay: 3000,
          forcedTime: 5000,
          actionCd: 5000,
          actionMaximum: 1,
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
            'View > View > View > TextView[text*="请稍后重试" || text*="请勿重复点击" || text="签到成功" || text^="已签到"] + View > Button[id="msg_box_ok"][clickable=true][visibleToUser=true][text="确定"]',
        },
      ],
    },
    {
      key: 3,
      name: '立减金兑换，复制',
      desc: '260830',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.yitong.mobile.biz.h5.container.WebViewActivity',
          actionCd: 8000,
          matches:
            'View > View[text="卡号："] +2 TextView[text="复制"][clickable=false][visibleToUser=true]',
          actionMaximum: 1,
        },
      ],
    },
    {
      key: 4,
      name: '弹窗，复制成功，确定',
      desc: '260830',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.yitong.mobile.biz.h5.container.WebViewActivity',
          matches:
            'View > TextView[text="复制成功"] + View > Button[text="确定"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 5,
      name: '立减金兑换，立即兑换',
      desc: '260830，',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 5000,
          actionMaximum: 1,
          excludeMatches: [
            'View > TextView[text="复制成功"] + View > Button[text="确定"][clickable=true][visibleToUser=true]',
          ],
          activityIds: 'com.yitong.mobile.biz.h5.container.WebViewActivity',
          matches:
            'WebView[text="卡券信息"] > View > View > View > TextView[id="toLijianquan"][text="立即兑换"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 6,
      name: '弹窗，立减金兑换，同意前往',
      desc: '260830',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 3000,
          activityIds: 'com.yitong.mobile.biz.h5.container.WebViewActivity',
          matches:
            'ViewGroup > TextView[text="暂不前往"] + TextView[text="同意前往"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
