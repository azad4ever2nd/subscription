import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mipay.wallet',
  name: '钱包',
  groups: [
    {
      key: 1,
      name: '开启通知，取消',
      desc: '261112',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.xiaomi.jr.app.MiFinanceActivity',
          matches:
            'LinearLayout > TextView[text="通知权限提醒"][vid="title"] + * + LinearLayout[vid="buttons"] > @Button[text="取消"][vid="cancel"][clickable=true][visibleToUser=true] + Button[text="设置"][vid="confirm"][clickable=true][visibleToUser=true]', //261112，弹窗，获取通知权限，取消
        },
      ],
    },
  ],
});
