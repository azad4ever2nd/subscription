import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tpshop.znwgywy.sgapp',
  name: '海鸥极速版',
  groups: [
    {
      key: 1,
      name: '广告1，关闭',
      desc: '260505',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.windmill.sdk.widget.InterstitialView_4012003',
          matches:
            '(@*[clickable=true] > [text="关闭"]) || (@*[clickable=true] > [vid="tobid_interstitial_skip_text"][text="关闭"]) ',
        },
      ],
    },
    {
      key: 2,
      name: '签到点击广告后，X掉',
      desc: '260507',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches: '[text="恭喜获得奖励"] < * +n *[childCount=1] > *',
        },
      ],
    },
    {
      key: 3,
      name: '签到弹窗，确认',
      desc: '260507',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          matches:
            '[text*="广告签到"] <<n * + * [id="android:id/button2"] + [id="android:id/button1"]',
        },
      ],
    },
    {
      key: 4,
      name: '请关闭 获取运动方向权限 和 快应用权限，确定',
      desc: '260507',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'tool.seagull.v.ui.MainActivity',
          matches:
            '[text^="请关闭 获取运动方向权限 和 快应用权限"] <<n * + * [id="android:id/button1"][text="确定"]',
        },
      ],
    },
  ],
});
