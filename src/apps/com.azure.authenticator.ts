import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.azure.authenticator',
  name: 'Authenticator',
  groups: [
    {
      key: 1,
      name: '弹窗，找不到通知，确定',
      desc: '261016',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: '.ui.MainActivity',
          matches:
            'TextView[text="找不到通知。"][vid="error_message"] <<n FrameLayout + ScrollView > LinearLayout > Button[text="确定"][id="android:id/button1"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
