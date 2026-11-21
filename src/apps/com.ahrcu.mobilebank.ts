import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ahrcu.mobilebank',
  name: '安徽农金',
  groups: [
    {
      key: 1,
      name: '弹窗，检测到您的手机当前开启了无障碍模式，继续使用',
      desc: '261121',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.yitong.mtd.activity.RiskAlertActivity',
          matches:
            'TextView[text*="无障碍模式"] < LinearLayout +2 LinearLayout > Button[text="退出"][vid="dialog_btn_cancel"] + View + Button[text="继续使用"][vid="dialog_btn_confirm"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，人脸识别，勾选 同意',
      desc: '261121',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 10000,
          actionMaximum: 1,
          activityIds: 'com.yitong.mobile.h5biz.H5ContainerActivity',
          matches:
            '@TextView[visibleToUser=true] < View < View < View + View > TextView[text^="同意安徽农信"] + TextView[text="《人脸识别服务用户授权书》"]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，人脸识别，勾选同意，开始识别',
      desc: '261121',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [2],
          activityIds: 'com.yitong.mobile.h5biz.H5ContainerActivity',
          matches:
            'View > View > Button[text="开始识别"][clickable=true][visibleToUser=true][focusable=true]',
        },
      ],
    },
  ],
});
