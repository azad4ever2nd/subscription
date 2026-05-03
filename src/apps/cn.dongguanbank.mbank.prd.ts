import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.dongguanbank.mbank.prd',
  name: '东莞银行',
  groups: [
    {
      key: 1,
      name: '签完到弹窗，X掉',
      desc: '260502',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@Image +n [text="恭喜获得"] +n [text="积分"] + [text="分享好友还可再领积分噢!"]',
        },
      ],
    },
  ],
});
