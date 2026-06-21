import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cgbchina.xpt',
  name: '广发银行',
  groups: [
    {
      key: 1,
      name: '广告,弹窗',
      desc: '260417，添加 IDS',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.cgb.mobilebank.sit.launcher.module.main.activity.IndexActivity',
            'com.alipay.mobile.nebulacore.ui.H5Activity',
          ],
          matches: '@[vid="ad_table_close"] + [vid="ad_table_view_base"]',
        },
      ],
    },
    {
      key: 2,
      name: '影音娱乐充值弹窗，确定',
      desc: '260417',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '[vid="tv_title"] +n [vid="tip"][text^="广发银行不承担影娱充值产品"] + * > [vid="tv_right"][text="确定"]',
        },
      ],
    },
    {
      key: 3,
      name: '带不再提示的弹窗，X掉',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cgb.mobilebank.sit.launcher.module.main.activity.IndexActivity',
          matches:
            '@ImageView[clickable=true] + ImageView + ImageView[desc=" 不再提示"]',
        },
      ],
    },
  ],
});
