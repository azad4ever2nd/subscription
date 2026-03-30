import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '打开通知提醒',
      desc: '251125',
      rules: [
        {
          matches: [
            '[vid="tv_title1"][text="打开通知提醒"] + [vid="iv_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.mainbox.main.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，查看我的金条',
      desc: '251130',
      rules: [
        {
          matches: ['TextView + * > [text="查看我的金条"]'],
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '发现新版本',
      desc: '260103',
      rules: [
        {
          matches: [
            '[vid="tv_title"][text*="新版本"] <<n * + [vid="ib_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.mainbox.main.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '开通贷款功能',
      desc: '260110',
      rules: [
        {
          matches: [
            '@TextView[text=""] +n [text="立即领取"] + [text*="同意报送"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '将本页添加到首页中',
      desc: '260221',
      rules: [
        {
          matches: [
            '@[vid="jrapp_web_btm_close"] <<n * +n [vid="jrapp_web_btm_know"][text="我知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
        },
      ],
    },
  ],
});
