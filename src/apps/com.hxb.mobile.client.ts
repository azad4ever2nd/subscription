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
      desc: '251217',
      rules: [
        {
          matches: ['[text$="能量分"] +n * > [text="立即兑换"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 4,
      name: '周五能量兑换2，确认兑换',
      desc: '251220',
      rules: [
        {
          matches: ['[text*="是否确认兑换"] + * > [text="确认"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '周五能量兑换3，火爆，知道了',
      desc: '260102',
      rules: [
        {
          matches: [
            '[text="活动太火爆了，请稍后再试！"] + * > [text="知道了"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
  ],
});
