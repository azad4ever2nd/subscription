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
    {
      key: 4,
      name: '手机银行天天领福利，抽奖弹窗',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView[text="手机银行天天领福利"] > View > View > Image + View + @Image[clickable=true][visibleToUser=true] + Image[text="prizeDialogBtn.13fe7a56"] + View',
        },
      ],
    },
    {
      key: 5,
      name: '恭喜您完成任务，去领奖',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View > View > View[text="恭喜您完成任务"] + Button[clickable=true][visibleToUser=true][text="去领奖"]',
        },
      ],
    },
    {
      key: 6,
      name: '手机银行天天领福利，未中奖，知道了',
      desc: '260703，添加开盲盒',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '(View > Image + Image[text="noPrizeDialogBtn.e21b1317"][clickable=true]) || (View > Image + Image[text="prizeDialogBtn.cf846fd8"][clickable=true])',
        },
      ],
    },
  ],
});
