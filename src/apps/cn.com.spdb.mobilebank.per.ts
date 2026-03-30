import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.spdb.mobilebank.per',
  name: '浦发银行',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '',
      rules: [
        {
          matches: ['[text="去签到"]'],
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: [
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebX5Activity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '财篮子签到',
      desc: '260110',
      rules: [
        {
          matches: ['[text="万理财体验金"] + @* + [text^="已累计签到"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageOutLinkActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '收藏基金',
      desc: '260130',
      rules: [
        {
          matches: ['@View > [text="收藏"]'],
          resetMatch: 'match',
          activityIds: [
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '交易，确定',
      desc: '260202',
      rules: [
        {
          matches: [
            '([text^="交易确认"] [text="确定"]) || ([text="交易确认"] <<n * + * [text="确定"]) || ([text*="确定要终止定投计划吗"] [text="终止投资"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '我知道了',
      desc: '260220',
      rules: [
        {
          matches: ['[text="我知道了"]'],
          resetMatch: 'match',
          activityIds: [
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageOutLinkActivity',
          ],
        },
      ],
    },
  ],
});
