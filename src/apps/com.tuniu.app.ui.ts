import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tuniu.app.ui',
  name: '途牛旅游',
  groups: [
    {
      key: 1,
      name: '新版本升级，取消',
      desc: '260403',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tuniu.app.ui.homepage.MainFragmentActivity',
          matches:
            '[id="android:id/message"][text*="新版本" || text*="升级"] <<n * + * [id="android:id/button2"][text="取消"]',
        },
      ],
    },
  ],
});
