import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.miui.tsmclient',
  name: '小米智能卡',
  groups: [
    {
      key: 1,
      name: '同意 移卡用户协议',
      desc: '260503，添加 同意移出',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.tsmclient.ui.TransferOutIntroActivity',
          matches:
            '([vid="nextpay_transfer_out_ll_protocols"][desc^="同意"][checked=false]) || (@[vid="nextpay_transfer_out_chk_contracts"][checked=false] + [vid="transfer_out_intro_tv_protocols"][text^="同意"]) || ([vid="nextpay_transfer_out_chk_contracts"][checkable=true] < * + [vid="nextpay_transfer_out_btn_accept"][text="确定移出"])',
        },
      ],
    },
    {
      key: 2,
      name: '提示 移入移出成功，完成',
      desc: '260830',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 1500,
          activityIds: 'com.miui.tsmclient.ui.result.TransitResultActivity',
          matches:
            'TextView[text="移出成功" || text="移入成功"] < LinearLayout <n RelativeLayout < ScrollView + LinearLayout > Button[text="完成"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 3,
      name: '提示 打开NFC，去设置',
      desc: '260503',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.tsmclient.ui.MifareCardListActivity',
          matches:
            '[vid="message"][text="请开启NFC功能"] <<n * + * [id="android:id/button1"]',
        },
      ],
    },
    {
      key: 4,
      name: '去开启NFC',
      desc: '260505',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.tsmclient.ui.quick.DoubleClickActivity',
          matches: '[vid="button_retry"][text="去开启NFC"]',
        },
      ],
    },
    {
      key: 5,
      name: '提示，请开启NFC功能，设置',
      desc: '260829',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.miui.tsmclient.ui.TransitEntryActivity',
          matches:
            '[vid="message"][text="请开启NFC功能"] <<n ScrollView + LinearLayout > Button + Button[id="android:id/button1"][text="设置"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
