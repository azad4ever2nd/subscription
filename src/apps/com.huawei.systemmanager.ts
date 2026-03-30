import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.systemmanager',
  name: '手机管家',
  groups: [
    {
      key: 1,
      name: '确认删除',
      desc: '251121',
      rules: [
        {
          matches: [
            '[text^="是否删除"] <<n [id="android:id/contentPanel"] + [id="android:id/buttonPanel"] >2 @[text*="删除"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.harassmentinterception.ui.InterceptionActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '自启改为手动，',
      desc: '260118',
      rules: [
        {
          matches: [
            '[id="android:id/alertTitle"][text="手动管理"] <<n * +n * [id="android:id/button1"][text="确定"]',
          ],
          actionDelay: 20000,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.systemmanager.appcontrol.activity.StartupAppControlActivity',
          ],
        },
      ],
    },
  ],
});
