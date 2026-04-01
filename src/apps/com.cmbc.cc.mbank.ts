import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmbc.cc.mbank',
  name: '全民生活',
  groups: [
    {
      key: 1,
      name: '火锅券',
      desc: '251212',
      rules: [
        {
          matches: [
            '[text="民生借记卡专属"] +n [text^="今日剩余" && text$="%"] + [text="50d230ef35357706bbfe" || text="e2df8c32b64d20560e14"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cmbc.cc.mbank.module.web.activity.WebViewActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗',
      desc: '260401，不限于身份证过期',
      rules: [
        {
          matches: [
            '@[vid="views_close_main_alert_window_middle"] + [vid="views_image_main_alert_window"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cmbc.cc.mbank.module.main.HomeActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '开启通知',
      desc: '251216',
      rules: [
        {
          matches: ['@[vid="tv_close"] +n * > [vid="iv_notification_bg"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cmbc.cc.mbank.module.main.HomeActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '定位，我知道了',
      desc: '251223',
      rules: [
        {
          matches: ['[text*="定位"] + [text="我知道了"]'],
          resetMatch: 'match',
          activityIds: [
            'com.cmbc.cc.mbank.module.web.activity.WebViewActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '定位服务',
      desc: '260129',
      rules: [
        {
          matches: ['[text="提示"] + [text*="定位服务"] +n * > [text="确认"]'],
          resetMatch: 'match',
          activityIds: [
            'com.cmbc.cc.mbank.module.web.activity.WebViewActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗',
      desc: '260401，占位，与规则2重复',
      rules: [
        {
          matches: [
            '@[vid="views_close_main_alert_window_middle"] + [vid="views_image_main_alert_window"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cmbc.cc.mbank.module.main.HomeActivity'],
        },
      ],
    },
  ],
});
