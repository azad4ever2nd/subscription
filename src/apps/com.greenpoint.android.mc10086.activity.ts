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
          matches: ['@[vid="iv_top_close"] + [vid="rl_top_bg"]'],
          fastQuery: true,
          resetMatch: 'app',
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
          matches: ['[vid="close_btn"][desc="关闭"]'],
          fastQuery: true,
          resetMatch: 'match',
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
          matches: ['[text="恭喜您获得"] +3 [text="开心收下"] + TextView'],
          resetMatch: 'match',
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
          matches: ['[desc="获取验证码"]'],
          actionMaximum: 1,
          resetMatch: 'activity',
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
          matches: [
            '([text="兑换成功"] + Image) || (@* +2 * > [text="恭喜获得"]) || ([text="兑换中"] < * +n [text="我知道了"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
  ],
});
