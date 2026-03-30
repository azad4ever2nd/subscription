import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whpe.qrcode.hunan_xiangtan',
  name: '湘潭出行',
  groups: [
    {
      key: 1,
      name: '更新',
      desc: '260213',
      rules: [
        {
          matches: ['[text="立即更新"] + [text="以后再说"]'],
          resetMatch: 'match',
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
      name: '位置权限',
      desc: '260213',
      rules: [
        {
          matches: [
            '[text*="位置"] <<n [id="android:id/contentPanel"] + [id="android:id/buttonPanel"] [id="android:id/button1"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['io.dcloud.PandoraEntryActivity'],
        },
      ],
    },
  ],
});
