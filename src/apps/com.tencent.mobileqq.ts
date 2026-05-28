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
    {
      key: 2,
      name: 'QQ邮箱 申请使用，同意或确认',
      desc: '260528',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.tencent.open.agent.PublicFragmentActivityForOpenSDK',
          matches:
            '[text="QQ邮箱 申请使用"] <<n * +n * > Button[text="确认" || text="同意"]',
        },
      ],
    },
  ],
});
