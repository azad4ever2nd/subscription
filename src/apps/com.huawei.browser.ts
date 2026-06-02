import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.browser',
  name: '浏览器',
  groups: [
    {
      key: 1,
      name: '掌上周五红包雨1，立即领取',
      desc: '260602',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: 'com.huawei.browser.BrowserMainActivity',
          matches:
            '[text*="红包雨"] [id="app"] > [desc="picture"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 2,
      name: '掌上周五红包雨2，有的打开',
      desc: '260602',
      rules: [
        {
          order: -1,
          actionMaximum: 1,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.huawei.browser.BrowserMainActivity',
          matches:
            '[text="提示"] +n * > @[text="有的，打开"] + [text="我要下载"]',
        },
      ],
    },
    {
      key: 3,
      name: '掌上周五红包雨3，此网站请求打开 App，打开',
      desc: '260602',
      rules: [
        {
          order: -2,
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.huawei.browser.BrowserMainActivity',
          matches:
            '[vid="tv_snack_bar_main_title"][text^="此网站请求打开"] < * + * > @*[clickable=true] > [text="打开"]',
        },
      ],
    },
    {
      key: 4,
      name: '掌上周五红包雨2，立 即 打 开',
      desc: '260602',
      rules: [
        {
          actionMaximum: 1,
          actionCd: 0,
          order: -1,
          resetMatch: 'match',
          activityIds: 'com.huawei.browser.BrowserMainActivity',
          matches:
            '[text="掌上生活"] + * [id="invokeButton"][text="立 即 打 开"]',
        },
      ],
    },
    {
      key: 5,
      name: '确认下载弹窗，下载',
      desc: '260410',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.huawei.browser.download.DownloadRecordsActivity',
          matches:
            '[id="android:id/alertTitle"][text="下载"] <<n * +n * [id="android:id/button3"][text="取消"] + [id="android:id/button1"][text="下载"]',
        },
      ],
    },
  ],
});
