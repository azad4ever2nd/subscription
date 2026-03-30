import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 1,
      name: '定位服务未开启',
      desc: '251120',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.ss.android.ugc.aweme.main.MainActivity',
          matches:
            '[vid="tv_title"] +n * > @[vid="tv_left"][text="暂不"] +n [vid="tv_right"][text="去设置"]',
        },
      ],
    },
    {
      key: 2,
      name: '激活并领取弹窗',
      desc: '251123',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.ss.android.ugc.aweme.live.LiveDummyActivity',
          matches:
            '[text="激活并领取"] <<n * + * > [text="4cb74c07b577a2ffbb5d03a2f7b52aa3.png~tplv-49obo7mizy-image"]',
        },
      ],
    },
    {
      key: 3,
      name: '放弃优惠返回',
      desc: '251123',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.ss.android.ugc.aweme.live.LiveDummyActivity',
          matches: '[text="残忍放弃"]',
        },
      ],
    },
    {
      key: 4,
      name: '放心借',
      desc: '260103',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'com.ss.android.ugc.aweme.live.LiveDummyHybridTransparentActivity',
          matches:
            '@[text="nP+4b4Fvph+LH7BflfZL59fXG8FbypvT29wHRtvomTDEmschByvH4e15zIyfoUePE2IHIa5Bv+NCu9cAAAAASUVORK5CYII="] < * +n * [text="同意协议并查看额度"]',
        },
      ],
    },
    {
      key: 5,
      name: '猫眼确认支付',
      desc: '251129',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.tt.miniapphost.placeholder.MiniAppChildProcessMultiInsActivity0',
          matches: '[text*="猫眼抖音小程序"] <<n * + * > [text$="确认支付"]',
        },
      ],
    },
    {
      key: 6,
      name: '放弃支付',
      desc: '251212',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.ss.android.ugc.aweme.bullet.ui.BulletContainerActivity',
          matches: '@[desc="放弃支付,按钮"] + [desc="继续支付,按钮"]',
        },
      ],
    },
  ],
});
