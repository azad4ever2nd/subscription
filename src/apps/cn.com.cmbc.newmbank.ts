import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.cmbc.newmbank',
  name: '民生银行',
  groups: [
    {
      key: 1,
      name: '打开消息通知',
      desc: '251130',
      rules: [
        {
          matches: [
            '[vid="tv_alert_msg_cancel"] - [vid="tv_alert_msg_confirm"][text="立即开启"] <n * + [vid="iv_alert_msg_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.com.cmbc.newmbank.activity.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: 'V+任务领卡券',
      desc: '251206,整合浏览任务完成',
      rules: [
        {
          matches: [
            '([text="4Sf0Hfm7X8Ar14i2VC1FrsAAAAASUVORK5CYII="] <<n * + * > [text="wG3E8rLbFftjgAAAABJRU5ErkJggg=="]) || ([vid="tv_countdown_over"][text*="任务完成"])',
          ],
          activityIds: ['cn.com.cmbc.newmbank.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '复制券码弹窗',
      desc: '260117',
      rules: [
        {
          matches: [
            '[text="提示"] + [text^="兑换码已复制成功"] + * > [text="确定"]',
          ],
          resetMatch: 'match',
          activityIds: ['cn.com.cmbc.newmbank.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: 'V+任务，每月一次，去完成',
      desc: '260201，',
      rules: [
        {
          matches: [
            '[text^="每月一次" && text$="产品浏览"] < * +2 [text="去完成"]',
          ],
          resetMatch: 'match',
          activityIds: ['cn.com.cmbc.newmbank.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 5,
      name: 'V+任务完成，抽奖结果弹窗',
      desc: '260201',
      rules: [
        {
          matches: ['[text^="恭喜获奖"] + [text="开心收下"]'],
          resetMatch: 'match',
          activityIds: ['cn.com.cmbc.newmbank.activity.WebViewActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '民生V+任务，抽奖',
      desc: '260202',
      rules: [
        {
          matches: [
            '@Image < * + [text="您还有1次抽奖机会"] + * > [text=" 我的奖品"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['cn.com.cmbc.newmbank.activity.WebViewActivity'],
        },
      ],
    },
  ],
});
