import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.mybank.android.phone',
  name: '网商银行',
  groups: [
    {
      key: 1,
      name: '弹窗，体验存款，X掉',
      desc: '261113',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.alipay.mobile.quinox.LauncherActivity',
          matches:
            'LinearLayout > @ImageView[id="com.alipay.android.phone.commonbiz:id/market_delete"][clickable=true][visibleToUser=true] + ImageView[id="com.alipay.android.phone.commonbiz:id/market_iv"]', //261113，弹窗，体验存款，X掉
        },
      ],
    },
  ],
});
