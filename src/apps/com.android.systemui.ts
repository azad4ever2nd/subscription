import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.systemui',
  name: '系统界面',
  groups: [
    {
      key: 1,
      name: '允许 USB 调试吗，一律允许使用这台计算机进行调试，勾选',
      desc: '260406',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.android.systemui.usb.UsbDebuggingActivity',
          matches:
            '[vid="alertTitle"][text="允许 USB 调试吗？"] <<n * + * [id="android:id/checkbox"][checked=false][text="一律允许使用这台计算机进行调试"]',
        },
      ],
    },
    {
      key: 2,
      name: '允许 USB 调试吗，勾选后，确定',
      desc: '260406，不建议打开',
      rules: [
        {
          preKeys: [1],
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.android.systemui.usb.UsbDebuggingActivity',
          matches:
            '[id="android:id/checkbox"][text="一律允许使用这台计算机进行调试"][checked=true] <<n * + * [id="android:id/button1"][text="确定"]',
        },
      ],
    },
    {
      key: 3,
      name: '允许 USB 调试吗，一律允许使用这台计算机进行调试，勾选2',
      desc: '260611',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matches:
            'LinearLayout > LinearLayout > [text="一律允许使用这台计算机进行调试"][checked=false]',
        },
      ],
    },
    {
      key: 4,
      name: '允许 USB 调试吗，勾选后，确定2',
      desc: '260611',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matches:
            '[text="一律允许使用这台计算机进行调试"][checked=true] <2 LinearLayout < LinearLayout[vid="contentPanel"] + LinearLayout[vid="buttonPanel"] > LinearLayout > Button[id="android:id/button1"][text="确定"]',
        },
      ],
    },
    {
      key: 5,
      name: '通知，To Do，点击',
      desc: '261107',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 5000,
          activityIds: 'com.miui.home.launcher.Launcher',
          matches:
            '@FrameLayout[vid="status_bar_latest_event_content"][clickable=false][visibleToUser=true] > ImageView[vid="app_icon"][desc="To Do"] + LinearLayout[vid="notification_main_column"]',
        },
      ],
    },
    {
      key: 6,
      name: '通知，To do，完成',
      desc: '261108',
      rules: [
        {
          resetMatch: 'match',
          actionDelay: 5000, //延时5秒
          actionCd: 3000,
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches:
            'FrameLayout[vid="status_bar_latest_event_content"][clickable=false][visibleToUser=true] > ImageView[vid="app_icon"][desc="To Do"] + LinearLayout > FrameLayout > LinearLayout[vid="actions"] > @TextView[text="完成"][clickable=true][visibleToUser=true] + TextView[text="推迟"]',
        },
      ],
    },
    {
      key: 7,
      name: '通知，日历，闹钟，关闭闹钟',
      desc: '261112',
      rules: [
        {
          resetMatch: 'match',
          actionDelay: 5000, //延时5秒
          actionCd: 3000,
          activityIds: 'com.miui.home.launcher.Launcher',
          anyMatches: [
            'FrameLayout[vid="status_bar_latest_event_content"] > ImageView[vid="app_icon"][desc="日历"] + LinearLayout[vid="notification_main_column"] + TextView[vid="miui_action"][text="关闭闹钟"][clickable=true][visibleToUser=true]',
            'FrameLayout[vid="status_bar_latest_event_content"] > ImageView[vid="app_icon"][desc="日历"] + LinearLayout[vid="notification_action_list_margin_target"] > FrameLayout[vid="actions_container"] > LinearLayout > TextView[text="关闭闹钟"][clickable=true][visibleToUser=true]', //261113，新布局，关闭闹钟
          ],
        },
      ],
    },
  ],
});
