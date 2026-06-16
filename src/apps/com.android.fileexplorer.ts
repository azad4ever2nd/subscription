import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.fileexplorer',
  name: '文件管理',
  groups: [
    {
      key: 1,
      name: '远程管理，启动服务',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.android.fileexplorer.activity.ServerControlActivity',
          matches:
            'TextView <2 LinearLayout < LinearLayout + FrameLayout > TextView[vid="start_stop_button_text"][text="启动服务"]',
        },
      ],
    },
    {
      key: 2,
      name: '远程管理，启动服务，内部存储设备',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.android.fileexplorer.activity.ServerControlActivity',
          matches:
            'ScrollView > ViewGroup > ListView > TextView[id="android:id/text1"][clickable=true][text="内部存储设备"]',
        },
      ],
    },
  ],
});
