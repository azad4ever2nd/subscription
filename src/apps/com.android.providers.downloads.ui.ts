import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.providers.downloads.ui',
  name: '下载管理',
  groups: [
    {
      key: 1,
      name: '删除任务，删除',
      desc: '260615',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.android.providers.downloads.ui.activity.DownloadFilterListActivity',
          matches:
            'TextView[text*="删除"] < LinearLayout +2 LinearLayout > Button[text="删除"][clickable=true]',
        },
      ],
    },
  ],
});
