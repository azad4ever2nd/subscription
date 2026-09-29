import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.dianping.v1',
  name: '大众点评',
  groups: [
    {
      key: 1,
      name: '新版本',
      desc: '251118',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.dianping.v1.NovaMainActivity',
          matches:
            '@[vid="update_close_icon"] + [vid="update_title"][text*="新版本"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，恭喜获得能量，立即收下 或 X掉',
      desc: '260929，1.立即收下，2.X掉',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickNode',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            'TextView[text^="+" && text$="0"] <n FrameLayout <n FrameLayout + @FrameLayout[clickable=true] > ImageView[desc=""][clickable=false][visibleToUser=true]',
            '@ImageView[clickable=true][visibleToUser=true] - FrameLayout >n TextView[text^="+" && text$="0"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，签到获得宝箱，立即去签到 或 X掉',
      desc: '260929，添加 立即开启，1.立即收下（立即开启），2.X掉',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickNode',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            '@FrameLayout[clickable=true][visibleToUser=true] > ImageView + TextView[text="立即去签到" || text="立即开启"]',
            '@ImageView[clickable=true][visibleToUser=true] - FrameLayout >n TextView[text="立即去签到" || text="立即开启"]',
            '@FrameLayout[clickable=true][visibleToUser=true] > ImageView + TextView[text="立即去签到"]',
            '@FrameLayout[clickable=true][visibleToUser=true] > ImageView + TextView[text="立即开启"]',
            '@ImageView[clickable=true][visibleToUser=true] - FrameLayout >n TextView[text="立即去签到"]',
            '@ImageView[clickable=true][visibleToUser=true] - FrameLayout >n TextView[text="立即开启"]',
          ],
        },
      ],
    },

    {
      key: 4,
      name: '弹窗，是否放弃天降评友好礼，领取 或 X掉',
      desc: '260929，1.去领取，2.X掉',
      rules: [
        {
          action: 'clickNode',
          resetMatch: 'match',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            'FrameLayout > TextView[text="是否放弃天降评友好礼?"] +n  @FrameLayout[clickable=true][visibleToUser=true] > TextView[text="去领取"]',
            'TextView[text="是否放弃天降评友好礼?"] < FrameLayout + FrameLayout[clickable=true][visibleToUser=true] > ImageView',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '弹窗，天降评友好礼，立即领取 或 X掉',
      desc: '260929，，1.立即领取，2.X掉',
      rules: [
        {
          action: 'clickNode',
          resetMatch: 'match',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            'FrameLayout > @TextView[text="立即领取"][clickable=true][visibleToUser=true] + ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true]',
            'FrameLayout > TextView[text="立即领取"][clickable=true][visibleToUser=true] + ImageView[index=parent.childCount.minus(1)][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗，订阅活动通知，X掉',
      desc: '260929',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          matches:
            'FrameLayout > TextView[text^="订阅" && text*="活动通知"] + ImageView',
        },
      ],
    },
    {
      key: 7,
      name: '弹窗，国庆免费签到，去看看 或 X掉',
      desc: '260929，所有文本全是ImageView 1.去看看，2.X掉',
      rules: [
        {
          action: 'clickNode',
          resetMatch: 'match',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            '@ImageView[clickable=true][visibleToUser=true][desc.length=0] - ImageView[desc.length=0] < FrameLayout[childCount=2] < FrameLayout + FrameLayout[childCount=1] > ImageView[clickable=true][visibleToUser=true]',
            'ImageView[clickable=true][visibleToUser=true][desc.length=0] - ImageView[desc.length=0] < FrameLayout[childCount=2] < FrameLayout + FrameLayout[childCount=1] > ImageView[clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '弹窗，在路上奖励等你解锁，我知道了 或 X掉',
      desc: '260929，所有文本全是ImageView 1.我知道了，2.X掉',
      rules: [
        {
          action: 'clickNode',
          resetMatch: 'match',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            'ImageView[clickable=true][visibleToUser=true][desc.length=0] - FrameLayout > ImageView + @FrameLayout[clickable=true][visibleToUser=true][childCount=1] > ImageView[desc.length=0]',
            '@ImageView[clickable=true][visibleToUser=true][desc.length=0] - FrameLayout > ImageView + FrameLayout[clickable=true][visibleToUser=true][childCount=1] > ImageView[desc.length=0]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，集周边，我知道了 或 X掉',
      desc: '260929',
      rules: [
        {
          action: 'clickNode',
          resetMatch: 'match',
          activityIds: 'com.dianping.nova.picasso.DPPicassoBoxActivity',
          anyMatches: [
            'FrameLayout > FrameLayout > FrameLayout[childCount=3] > ImageView[desc.length=0] + @ImageView[clickable=true][visibleToUser=true][desc.length=0] + ImageView[clickable=true][visibleToUser=true][desc.length=0]',
            'FrameLayout > FrameLayout > FrameLayout[childCount=3] > ImageView[desc.length=0] + ImageView[clickable=true][visibleToUser=true][desc.length=0] + ImageView[clickable=true][visibleToUser=true][desc.length=0]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，开启推送通知，X掉',
      desc: '260927',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.dianping.social.activity.UserProfilePicassoActivity',
          matches:
            '@ImageView[clickable=true][visibleToUser=true] <n FrameLayout + FrameLayout > TextView[text="立即开启"]',
        },
      ],
    },
  ],
});
