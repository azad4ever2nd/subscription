import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.browser',
  name: '浏览器',
  groups: [
    {
      key: 1,
      name: '掌上周五红包雨1，立即领取',
      desc: '251220',
      rules: [
        {
          matches: ['[id="app"] > [desc="picture"][index=1]'],
          resetMatch: 'match',
          activityIds: ['com.huawei.browser.BrowserMainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '掌上周五红包雨2，有的打开',
      desc: '251220',
      rules: [
        {
          preKeys: [1],
          matches: ['[text^="手机安装"] + * > [text="有的，打开"]'],
          resetMatch: 'match',
          activityIds: ['com.huawei.browser.BrowserMainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '此网站请求打开app，打开',
      desc: '251220',
      rules: [
        {
          preKeys: [2],
          matches: ['[vid="ll_snack_bar_text_open"] > [text="打开"]'],
          fastQuery: true,
          order: -1,
          resetMatch: 'match',
          activityIds: ['com.huawei.browser.BrowserMainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '掌上周五红包雨2，立 即 打 开',
      desc: '251220',
      rules: [
        {
          preKeys: [2],
          matches: ['[id="invokeButton"][text="立 即 打 开"]'],
          resetMatch: 'match',
          activityIds: ['com.huawei.browser.BrowserMainActivity'],
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
