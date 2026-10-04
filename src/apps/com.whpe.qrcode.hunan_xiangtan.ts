import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whpe.qrcode.hunan_xiangtan',
  name: '湘潭出行',
  groups: [
    {
      key: 1,
      name: '更新',
      desc: '261003',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          matches:
            'WebView > View > View > TextView[text*="更新"] +n TextView[text="立即更新"][clickable=true][visibleToUser=true] + TextView[text="以后再说"][clickable=true][visibleToUser=true]',
          activityIds: ['io.dcloud.PandoraEntryActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '视频广告',
      desc: '260213',
      rules: [
        {
          matches: ['[desc="top_close_button"]'],
          resetMatch: 'match',
          activityIds: ['io.dcloud.PandoraEntryActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗1',
      desc: '260213',
      rules: [
        {
          matches: [
            '[id="android:id/contentPanel"] + [id="android:id/buttonPanel"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['io.dcloud.PandoraEntryActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '弹窗，系统定位服务GPS已关闭，取消',
      desc: '261004',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 3000,
          anyMatches: [
            '[text*="系统定位服务"] <<n FrameLayout[id="android:id/contentPanel"] + ScrollView[id="android:id/buttonPanel"] > LinearLayout > Button[id="android:id/button1"][text="取消"][clickable=true][visibleToUser=true]',
          ],
          activityIds: ['io.dcloud.PandoraEntryActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '应用还没有授权位置权限，是否立即去设置开启？取消',
      desc: '261004',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 3000,
          activityIds: 'io.dcloud.PandoraEntryActivity',
          matches:
            'TextView[id="android:id/message"][text*="位置权限"] < LinearLayout < ScrollView < FrameLayout + ScrollView > LinearLayout > Button[text="去设置"][id="android:id/button2"] + Button[id="android:id/button1"][text="取消"]',
        },
      ],
    },
  ],
});
