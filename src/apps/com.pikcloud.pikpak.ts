import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pikcloud.pikpak',
  name: 'PikPak',
  groups: [
    {
      key: 1,
      name: '删除文件',
      desc: '260614，增加IDS，规则精简，添加清除，删除，广告弹窗',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.pikcloud.xpan.xpan.pan.activity.XPanFileBrowserActivity',
            'com.pikcloud.download.DownloadGroupSubTasksActivity',
            'com.pikcloud.xpan.xpan.pan.recyclebin.XPanRecycleBinActivity',
            'com.pikcloud.xpan.xpan.pan.activity.XPanHistoryActivity',
            'com.pikcloud.xpan.xpan.main.MainTabActivity',
            'com.pikcloud.download.DownloadTaskListActivity',
          ],
          matches:
            '([vid="iv_close"]) || ([vid="watch_ad"][text="免费试用"]) || ([vid="cl_operation"] + [vid="close"]) ||(ViewGroup > TextView[vid="dlg_title"][text*="删除" || text*="清除"] +n ViewGroup > LinearLayout > TextView[vid="dlg_confirm_btn"][text="确认"])',
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
      desc: '260510，添加IDS',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.pikcloud.vodplayer.vodmix.MixPlayerActivity',
            'com.pikcloud.xpan.xpan.main.MainTabActivity',
          ],
          matches:
            '[vid="top_title"][text*="允许使用通知栏"] +n * > [vid="cancel_button"][text="以后再说"]',
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
    {
      key: 5,
      name: '识别到剪贴板链接，高速云下载',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 3000,
          activityIds: 'com.pikcloud.xpan.clipboard.ClipboardAddUrlActivity',
          matches:
            'ViewGroup[vid="cl_add_url_dialog"] > TextView[text="识别到剪贴板链接"] +n TextView[clickable=true][visibleToUser=true][vid="add"][text="高速云下载"]',
        },
      ],
    },
  ],
});
