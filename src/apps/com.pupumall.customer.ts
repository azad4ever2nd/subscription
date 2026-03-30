import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.pupumall.customer',
  name: '朴朴超市',
  groups: [
    {
      key: 1,
      name: '弹窗1',
      desc: '260103，整合4条弹窗，|| (@[text="1"] <<n [vid="view_normal"])',
      rules: [
        {
          matches: [
            '([vid="iv_ad"] + [vid="iv_close"]) || ([vid="tv_title"][text="尚未开启系统通知"] +n [vid="btn_close"][text="跳过"]) || ([id="app"] [text^="此图片未加标签"]) || ([id="J-webglCanvas"] - View >2 Image) ',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.pupumall.customer.activity.SplashActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '残忍离开',
      desc: '251222',
      rules: [
        {
          matches: ['[text="残忍离开"]'],
          resetMatch: 'match',
          activityIds: ['com.pupumall.webview.page.PuPuWebViewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '发现新版本，关闭',
      desc: '251228',
      rules: [
        {
          matches: [
            '[vid="tv_update_now"][text="立即更新"] <<n * + [vid="iv_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.pupumall.customer.activity.SplashActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '弹窗2',
      desc: '260109，如果需要fastquery则从1中独立出来',
      rules: [
        {
          matches: ['[vid="iv_ad"] + [vid="iv_close"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.pupumall.customer.activity.SplashActivity'],
        },
      ],
    },
  ],
});
