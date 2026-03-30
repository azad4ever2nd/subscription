import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.microsoft.office.outlook',
  name: 'Outlook',
  groups: [
    {
      key: 1,
      name: '是否永久删除邮件，永久删除',
      desc: '260227',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.acompli.acompli.CentralActivity',
          matches:
            '[id="android:id/message"][text^="是否永久删除" && text$="邮件?"] <<n * + * [id="android:id/button1"][text="永久删除"]',
        },
      ],
    },
  ],
});
