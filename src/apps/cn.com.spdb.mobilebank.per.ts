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
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebX5Activity',
        },
      ],
    },
    {
      key: 2,
      name: '收藏基金',
      desc: '260803',
      rules: [
        {
          matches:
            '(TextView[text="收藏"] - Image < @View[clickable=false][visibleToUser=true] <2 View + View > Button[text="定投"] + Button[text="购买"])',
          resetMatch: 'match',
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
        },
      ],
    },
    {
      key: 3,
      name: '交易，确定',
      desc: '260202',
      rules: [
        {
          matches: [
            '([text^="交易确认"] [text="确定"]) || ([text="交易确认"] <<n * + * [text="确定"]) || ([text*="确定要终止定投计划吗"] [text="终止投资"])',
          ],
          resetMatch: 'match',
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
        },
      ],
    },
    {
      key: 4,
      name: '我知道了',
      desc: '260220',
      rules: [
        {
          matches: ['[text="我知道了"]'],
          resetMatch: 'match',
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageOutLinkActivity',
        },
      ],
    },
    {
      key: 5,
      name: '财篮子签到',
      desc: '260110',
      rules: [
        {
          matches: ['[text="万理财体验金"] + @* + [text^="已累计签到"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageOutLinkActivity',
        },
      ],
    },
    {
      key: 6,
      name: '取消关注，确定',
      desc: '260803',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
          matches:
            'WebView > View > View > View[text*="确定取消关注"] > View > View > View > Button[clickable=true][visibleToUser=true][text="确定"]',
        },
      ],
    },
    {
      key: 7,
      name: '基金体验金，更换 活动奖励发放',
      desc: '260905',
      rules: [
        {
          resetMatch: 'match',
          matchTime: 3000,
          forcedTime: 3000,
          actionMaximum: 1,
          excludeMatches:
            'View > View[text^="选择账户"][clickable=true][visibleToUser=true]',
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
          matches:
            'View > View > TextView[text="活动奖励发放"] + @View[clickable=true][visibleToUser=true] > TextView[text="更换"]',
        },
      ],
    },
    {
      key: 8,
      name: '弹窗，交易确认，确定',
      desc: '260905',
      rules: [
        {
          resetMatch: 'match',
          actionDelay: 3000,
          activityIds:
            'cn.com.spdb.mobilebank.per.activity.web.stage.StageCommonWebActivity',
          matches:
            'TextView[text="交易确认"] <<n View + View > View > Button[text="取消"] + Button[text="确定"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
