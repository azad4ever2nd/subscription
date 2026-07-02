import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamobile.mcloud',
  name: '中国移动云盘',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches: '[text="去领取"] -2 [text="今日签到"]',
        },
      ],
    },
    {
      key: 2,
      name: '领奖',
      desc: '260615',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            '([text="去领取"] -2 [text="立即领奖"]) || (WebView > View > View > View > TextView[text="立即领奖"])',
        },
      ],
    },
    {
      key: 3,
      name: '领奖完成',
      desc: '260611',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            '(View > Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="]) || ([text="立即前往"] <3 View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="]) || (TextView[text="订购结果"] < View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="]) || (TextView[text*="转存成功"] < View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="])',
        },
      ],
    },
    {
      key: 4,
      name: '1云朵喝奶茶',
      desc: '',
      rules: [
        {
          matches: [
            '([text="移动云盘云朵中心"] [text="喜茶"] + [text*="券"] + * + *) || ([text="移动云盘云朵中心"] [text="蜜雪冰城"] + [text*="券"] + * + *) || ([text="移动云盘云朵中心"] [text="霸王茶姬" ] + [text*="券"] + * + *)',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '云朵兑换，1云朵抢',
      desc: '',
      rules: [
        {
          matches: ['[text="兑换奖品"] Button[text="1云朵抢"]'],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '云朵兑换，获取验证码',
      desc: '',
      rules: [
        {
          matches: ['@[text="获取验证码"] + [text="取消"] + [text="确认兑换"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '弹窗',
      desc: '251118，增加开启通知',
      rules: [
        {
          matches: [
            '([vid="rl_container"] + [vid="iv_close"]) || (@[vid="btn_push_notice_close_dialog"] + * > [vid="tv_header_title"][text="开启中国移动云盘通知"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.chinamobile.mcloud.client.ui.MenuActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '获取验证码',
      desc: '251205，领奖与获取验证码在同一页面，容易冲突',
      rules: [
        {
          matches: ['@[text="获得验证码"] + [text="确认办理"]'],
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: [
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '开启通知',
      desc: '251205',
      rules: [
        {
          matches: [
            '* + @[vid="btn_push_notice_close_dialog"] + * [vid="btn_push_notice_open"][text="马上开启"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.chinamobile.mcloud.client.ui.MenuActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '发现新版本',
      desc: '251208',
      rules: [
        {
          matches: [
            '@[vid="bn_cancel"] + [vid="upgrade_title"][text="发现新版本"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.chinamobile.mcloud.client.ui.setting.UpgradeActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '服务通知，X掉',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.mcloud.circle.ui.main.CircleMainActivity',
          matches:
            'LinearLayout > ImageView[vid="ad_iv"] + ImageView[vid="close_iv"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
