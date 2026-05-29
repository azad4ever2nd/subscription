import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tpshop.znwgywy.sgapp',
  name: '海鸥极速版',
  groups: [
    {
      key: 1,
      name: '广告1，关闭',
      desc: '260513',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 100,
          activityIds: 'com.windmill.sdk.widget.InterstitialView_4012003',
          matches:
            '(@*[clickable=true] > [text="关闭"]) || (@*[clickable=true] > [vid="tobid_interstitial_skip_text"][text="关闭"]) || (@[vid="tobid_interstitial_skip_ll"][clickable=true] > [text="关闭"])',
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
    {
      key: 5,
      name: '奖励已下发，跳过',
      desc: '260510',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sigmob.sdk.base.common.PortraitAdActivity',
          matches: '[text="奖励已下发"] + [text="跳过"]',
        },
      ],
    },
    {
      key: 6,
      name: '反馈，close_btn',
      desc: '260510',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: '[text="反馈"] + [id="close_btn"]',
        },
      ],
    },
    {
      key: 7,
      name: '签到完广告弹窗，跳过',
      desc: '260511',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.sigmob.sdk.base.common.PortraitTransparentAdActivity',
          matches: '[id="close_btn"][text="跳过"]',
        },
      ],
    },
    {
      key: 8,
      name: '恭喜获得奖励2',
      desc: '260526',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches: '[text="恭喜获得奖励！"] < * + *[clickable=true]',
        },
      ],
    },
    {
      key: 9,
      name: '恭喜获得奖励3',
      desc: '260529',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.qq.e.ads.PortraitADActivity',
          matches:
            '[text="恭喜获得奖励"] <<n * + FrameLayout > FrameLayout[index=parent.childCount.minus(1)]',
        },
      ],
    },
  ],
});
