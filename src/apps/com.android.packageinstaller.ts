import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.packageinstaller',
  name: '软件包安装程序',
  groups: [
    {
      key: 1,
      name: '要更新此应用吗？更新',
      desc: '260606',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.android.packageinstaller.PackageInstallerActivity',
          matches:
            'TextView[vid="install_confirm_question_update"][text="要更新此应用吗？"] <<3 FrameLayout + ScrollView > LinearLayout > [id="android:id/button1"][text="更新"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，已安装应用，打开 或 完成',
      desc: '261001',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: '.InstallSuccess',
          anyMatches: [
            'ScrollView > LinearLayout > Button[id="android:id/button2"][text="完成"] + Button[id="android:id/button1"][text="打开"][clickable=true][visibleToUser=true]',
            'ScrollView > LinearLayout > @Button[id="android:id/button2"][text="完成"] + Button[id="android:id/button1"][text="打开"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
  ],
});
