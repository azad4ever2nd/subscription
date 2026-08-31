import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.cgbchina.xpt',
  name: '广发银行',
  groups: [
    {
      key: 1,
      name: '带不再提示的弹窗，X掉',
      desc: '260831',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 2000,
          activityIds:
            'com.cgb.mobilebank.sit.launcher.module.main.activity.IndexActivity',
          matches:
            'View > @ImageView[clickable=true][visibleToUser=true] + ImageView + ImageView[desc=" 不再提示"]',
        },
      ],
    },
    {
      key: 2,
      name: '发现新版本，稍后再说',
      desc: '260726',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 1000,
          activityIds:
            'com.cgb.mobilebank.sit.launcher.module.main.activity.IndexActivity',
          matches:
            'TextView[text*="新版本"] < LinearLayout +n LinearLayout > TextView[clickable=true][visibleToUser=true][vid="tv_left"][text="稍后再说"]',
        },
      ],
    },
    {
      key: 3,
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
      name: '天天领福利，签到',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View[text="0"] < View < View - View > @Image[clickable=true][visibleToUser=true] + View',
        },
      ],
    },
    {
      key: 6,
      name: '签到页面，去抽奖',
      desc: '260710',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '(View[text="1"] < View < View - View > @Image[clickable=true][visibleToUser=true][text.length=0] + View[text^="已连续签到"]) || (View[text="1"] < View < View +(6,10) View > View > Image[clickable=true][visibleToUser=true][text="20260629113116910808676207755"])',
        },
      ],
    },
    {
      key: 7,
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
      key: 8,
      name: '幸运大抽奖，还有次数，8积分抽',
      desc: '260710',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View[text="1"] < View < View - View > View > View[id="luckDraw"] + @View[clickable=true][visibleToUser=true] > Image[text.length=0]',
        },
      ],
    },
    {
      key: 9,
      name: '抽奖提示，确认',
      desc: '260710',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'Dialog > View[text="温馨提示"] + View[text^="抽奖一次消耗您的8积分"] + View > Button[clickable=true][visibleToUser=true][text="确认 "]',
        },
      ],
    },
    {
      key: 10,
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
    {
      key: 11,
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
  ],
});
