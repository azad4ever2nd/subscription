import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pikcloud.pikpak',
  name: 'PikPak',
  groups: [
    {
      key: 1,
      name: '删除文件',
      desc: '251218,规则精简，添加清除，删除，广告弹窗',
      rules: [
        {
          matches: [
            '([vid="iv_close"]) || ([vid="watch_ad"][text="免费试用"]) || ([vid="cl_operation"] + [vid="close"]) || ([vid="dlg_title"][text*="删除" || text*="清除"] +n * >n [vid="dlg_confirm_btn"][text="确认"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.pikcloud.download.DownloadGroupSubTasksActivity',
            'com.pikcloud.xpan.xpan.pan.recyclebin.XPanRecycleBinActivity',
            'com.pikcloud.xpan.xpan.pan.activity.XPanHistoryActivity',
            'com.pikcloud.xpan.xpan.main.MainTabActivity',
            'com.pikcloud.download.DownloadTaskListActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '广告',
      desc: '251123',
      rules: [
        {
          matches: [
            '([id="app-interstitial-slot"] + * Button) || ([id="close-button"] > [text="关闭广告并继续打开应用"] + *)',
          ],
          resetMatch: 'match',
          activityIds: ['com.google.android.gms.ads.AdActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '允许使用通知栏，以后再说',
      desc: '251219',
      rules: [
        {
          matches: [
            '[vid="top_title"][text*="允许使用通知栏"] +n * > [vid="cancel_button"][text="以后再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.pikcloud.xpan.xpan.main.MainTabActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '发现新版本',
      desc: '260306',
      rules: [
        {
          matches: ['@[vid="iv_close"] + [vid="dlg_title"][text="发现新版本"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.pikcloud.xpan.xpan.main.activity.XPanSettingActivity',
            'com.pikcloud.xpan.clipboard.ClipboardAddUrlActivity',
            'com.pikcloud.xpan.xpan.translist.LiXianBtSubTasksActivity',
          ],
        },
      ],
    },
  ],
});
