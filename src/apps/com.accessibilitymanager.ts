import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.accessibilitymanager',
  name: '无障碍管理器',
  groups: [
    {
      key: 1,
      name: '弹窗，服务详细信息，知道了',
      desc: '261119',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: '.MainActivity',
          matches:
            'TextView[text^="服务类名："] <<n FrameLayout + ScrollView > LinearLayout > Button[text="知道了"][id="android:id/button1"][clickable=true][visibleToUser=true]', //261119，弹窗，服务详细信息，知道了
        },
      ],
    },
  ],
});
