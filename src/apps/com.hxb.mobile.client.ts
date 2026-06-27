import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hxb.mobile.client',
  name: '华夏银行',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="rvMarketing"] +2 [vid="ivCloseCur"]'],
          fastQuery: true,
          activityIds: ['com.yt.hxmb50.mainpages.ui.main.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '260202',
      rules: [
        {
          matches: [
            '@[vid="dialog_update_tv_cancel"][text="下次再说"] + [vid="dialog_update_tv_update"][text="立即更新"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.yt.hxmb50.mainpages.ui.main.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '周五能量兑换1，立即兑换',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text$="能量分"] +n * > [text="立即兑换"]) || (WebView[text="权益详情"] > View > View > View[text$="能量分"] +(1,2) View > Button[text="立即兑换"])',
        },
      ],
    },
    {
      key: 4,
      name: '周五能量兑换2，确认兑换',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          order: -1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text*="是否确认兑换"] + * > [text="确认"]',
        },
      ],
    },
    {
      key: 5,
      name: '周五能量兑换3，火爆，知道了',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          order: -2,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text="活动太火爆了，请稍后再试！"] + * > [text="知道了"]',
        },
      ],
    },
  ],
});
