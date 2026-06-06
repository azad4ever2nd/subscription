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
  ],
});
