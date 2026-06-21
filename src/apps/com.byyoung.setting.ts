import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.byyoung.setting',
  name: '爱玩机工具箱',
  groups: [
    {
      key: 1,
      name: '发现新版本，待会更新',
      desc: '260621',
      rules: [
        {
          fastQuery: true,
          activityIds: 'com.byyoung.setting.HomePage.activitys.MainActivity',
          matches:
            'ScrollView > LinearLayout > Button[id="android:id/button3"][text="待会更新"]',
        },
      ],
    },
  ],
});
