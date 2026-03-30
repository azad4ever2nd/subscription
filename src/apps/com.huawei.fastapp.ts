import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.fastapp',
  name: '快应用中心',
  groups: [
    {
      key: 1,
      name: '弹窗如何找到，退出',
      desc: '260309',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.huawei.fastapp.app.processManager.RpkLoaderActivityEntry0',
          matches:
            '[vid="exit_find_path_tv"][text="前往“应用市场”>“首页”>“快应用”。"] <<n * + * [id="android:id/button2"][text="退出"]',
        },
      ],
    },
  ],
});
