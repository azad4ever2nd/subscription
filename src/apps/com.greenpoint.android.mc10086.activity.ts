import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '开启推送通知',
      desc: '',
      rules: [
        {
          resetMatch: 'app',
          fastQuery: true,

          matches: ['@[vid="iv_top_close"] + [vid="rl_top_bg"]'],

          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
    {
      key: 2,
      name: '更新',
      desc: '',
      rules: [
        {
          matches: ['@[text="暂不更新"] + [text="立即体验"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,

          matches: ['[vid="close_btn"][desc="关闭"]'],

          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
    {
      key: 4,
      name: '签到有礼',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          matches: ['[text="恭喜您获得"] +3 [text="开心收下"] + TextView'],

          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '获取验证码',
      desc: '',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'activity',
          matches: ['[desc="获取验证码"]'],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 6,
      name: '兑换成功',
      desc: '260304，添加兑换中，签到成功领奖',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          matches: [
            '([text="兑换成功"] + Image) || (@* +2 * > [text="恭喜获得"]) || ([text="兑换中"] < * +n [text="我知道了"])',
          ],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '签到奖励，X掉',
      desc: '260402',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            '[text="累计签到奖励"] +n [text="去使用"] + *[clickable=true]',
        },
      ],
    },
    {
      key: 8,
      name: '周三充值弹窗，X掉',
      desc: '260410',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches: '[vid="ad_image"] < * + [vid="close_btn"][desc="关闭"]',
        },
      ],
    },
  ],
});
