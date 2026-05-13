import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mobileqq',
  name: 'QQ',
  groups: [
    {
      key: 1,
      name: '发现新版本，关闭',
      desc: '260513',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tencent.mobileqq.upgrade.ui.dialog.UpgradeActivity',
          matches: '[text="发现新版本"] <n * + [desc="关闭"]',
        },
      ],
    },
  ],
});
