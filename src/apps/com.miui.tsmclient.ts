import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.miui.tsmclient',
  name: '小米智能卡',
  groups: [
    {
      key: 1,
      name: '同意 移卡用户协议',
      desc: '260221',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.miui.tsmclient.ui.TransferOutIntroActivity',
          matches:
            '([vid="nextpay_transfer_out_ll_protocols"][desc^="同意"][checked=false]) || (@[vid="nextpay_transfer_out_chk_contracts"][checked=false] + [vid="transfer_out_intro_tv_protocols"][text^="同意"])',
        },
      ],
    },
  ],
});
