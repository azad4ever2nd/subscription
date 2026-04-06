import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jxj',
  name: '京粉',
  groups: [
    {
      key: 1,
      name: '新版本，勾选不再提示',
      desc: '260406',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.jd.jxj.transfer.ui.activity.TransferMainActivity',
          matches:
            '[vid="upgrade_title"] +n [vid="upgrade_reject"][checked=false]',
        },
      ],
    },
    {
      key: 2,
      name: '新版本，勾选不再提示后，取消',
      desc: '260406',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          preKeys: [1],
          activityIds: 'com.jd.jxj.transfer.ui.activity.TransferMainActivity',
          matches:
            '[vid="upgrade_reject"][checked=true] + * > [vid="upgrade_cancel"][text="取消"]',
        },
      ],
    },
  ],
});
