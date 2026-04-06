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
  ],
});
