import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.browser',
  name: '浏览器',
  groups: [
    {
      key: 1,
      name: '当前网站请求打开，允许',
      desc: '260218',
      rules: [
        {
          matches: [
            '([vid="message"][text*="打开" || text^="当前网站请求打开"] <<n * + * > [id="android:id/button1"][text="允许"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '移动云盘签到',
      desc: '',
      rules: [
        {
          matches: ['[text="今日签到"] + * > Button'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '掌上周五红包雨1，立即领取',
      desc: '251220',
      rules: [
        {
          matches: ['[id="app"] > [desc="picture"][index=1]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '掌上周五红包雨2，有的打开',
      desc: '251220，第3步是请求打开，有现成的规则',
      rules: [
        {
          matches: ['[text^="手机安装"] + * > [text="有的，打开"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '掌上周五红包雨，立 即 打 开',
      desc: '251220',
      rules: [
        {
          matches: ['[id="invokeButton"][text="立 即 打 开"]'],
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '请求打开2',
      desc: '251220，D',
      rules: [
        {
          matches: [
            '([vid="message"][text*="打开"] <<n * + * > [id="android:id/button1"][text="允许"])',
          ],
          resetMatch: 'match',
          activityIds: ['*'],
        },
      ],
    },
    {
      key: 7,
      name: '打开移动云盘',
      desc: '251222',
      rules: [
        {
          matches: [
            '[text="中国移动云盘，中国移动官方网盘应用"] [text="点击打开 >"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '打开中国银行app',
      desc: '260202',
      rules: [
        {
          matches: ['[text="中国银行微银行"] [text="打开手机银行App"]'],
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '打开武农商',
      desc: '260227',
      rules: [
        {
          matches: ['[text="立即下载"] + [text="打开APP"]'],
          resetMatch: 'match',
          activityIds: ['com.android.browser.BrowserActivity'],
        },
      ],
    },
  ],
});
