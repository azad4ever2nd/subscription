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
          actionMaximum: 2,
          forcedTime: 2000,
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
      desc: '260831，添加 弹窗，云朵领取成功',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 350,
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            '(View > Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII=1"]) || (TextView[text="移动云盘体验评价"] < View + Image[clickable=false][visibleToUser=true][text="wMHmBwYPo98SAAAAABJRU5ErkJggg=="]) || ([text="立即前往"] <3 View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="]) || (TextView[text="订购结果"] < View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="]) || (TextView[text*="转存成功"] < View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="]) || (Dialog > View > View > TextView[text="知道啦"] + Image[clickable=false][visibleToUser=true][text="wMHmBwYPo98SAAAAABJRU5ErkJggg=="]) || ([text="我知道了"] <n View + Image[text="+SOMf8vIwWVqABk0AAAAASUVORK5CYII="][clickable=false][visibleToUser=true])',
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
      key: 8,
      name: '我的云朵，领云朵',
      desc: '260719',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            'WebView[text="移动云盘云朵中心"] > View > View > View > View > @TextView[clickable=false][visibleToUser=true][text.length=0] -n View > View > TextView[text="完成任务"]',
        },
      ],
    },
    {
      key: 9,
      name: '新活动12点兑换，第1步，立即兑换',
      desc: '260720',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            'WebView[text="兑换奖品"] > View > View > View > Button[clickable=true][visibleToUser=true][text="立即兑换"]',
        },
      ],
    },
    {
      key: 10,
      name: '新活动12点兑换，第2步，确认兑换',
      desc: '260720',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          order: -10,
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            'Dialog > View > View > TextView[text="取消"] + TextView[text="确认兑换"]',
        },
      ],
    },
    {
      key: 11,
      name: '弹窗，签到N天，X掉',
      desc: '260904，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            'Dialog > View > View > @Image[text="wMHmBwYPo98SAAAAABJRU5ErkJggg=="][clickable=true][visibleToUser=true] - View > TextView[text="移动云盘体验评价"]',
        },
      ],
    },
    {
      key: 12,
      name: '弹窗，登陆，X掉',
      desc: '260904，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.chinamobile.mcloud.client.component.web.H5WebViewMainActivity',
          matches:
            'View[id="msg-login-pop"] > View > Button[text="发送验证码"] + TextView + Button[text="登录"] +n TextView[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 13,
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
      key: 14,
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
      key: 15,
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
      key: 16,
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
