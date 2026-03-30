import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xiaomi.market',
  name: '应用商店',
  groups: [
    {
      key: 1,
      name: '开启通知栏提醒店',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="buttonPanel"] > [text="不了，谢谢"] + [text="立即开启"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xiaomi.market.business_ui.main.MarketTabActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '国补弹窗',
      desc: '260131',
      rules: [
        {
          matches: ['View + Button[text="关闭"]'],
          resetMatch: 'match',
          activityIds: ['com.xiaomi.market.ui.FloatWebActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '下载队列，删除',
      desc: '260201',
      rules: [
        {
          matches: [
            '@[vid="delete"] + [vid="download_progress_btn"] [desc="继续"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.xiaomi.market.ui.DownloadListActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '下载队列，确认删除',
      desc: '260201',
      rules: [
        {
          matches: [
            '([vid="alertTitle"][text="删除下载"] <<n * +n * > [id="android:id/button1"][text="删除"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xiaomi.market.ui.DownloadListActivity'],
        },
      ],
    },
  ],
});
