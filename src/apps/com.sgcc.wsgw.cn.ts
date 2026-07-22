import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260719，添加补签成功[text="知道啦"] < * + * > Image',
      rules: [
        {
          resetMatch: 'match',
          activityIds: [
            'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
            'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
          ],
          matches:
            '([text="签到成功"] + [text^="恭喜您获得1" || text*="签到金1"] + *) || ([text="签到成功"] +2 @* + * > Image) || ([text="补签成功"] +3 *) || (View > View > TextView[text="签到成功"] + TextView[text^="恭喜您获得" || text$="签到金"] + TextView[clickable=false][visibleToUser=true][text.length=0])',
        },
      ],
    },
    {
      key: 2,
      name: '升级公告',
      desc: '[text="知道啦"] < * + * > Image',
      rules: [
        {
          matches: ['[text="签到功能升级公告"] +2 * > Image'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '签到多少天抽奖',
      desc: '260722',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            '([text^="抽中"] + *) || (WebView > View > View > View > View > View > TextView[text^="抽中" && text$="个签到金"] + TextView[clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 4,
      name: '系统升级公告',
      desc: '',
      rules: [
        {
          matches: ['@[desc="关闭"] > *'],
          resetMatch: 'match',
          activityIds: ['com.sgcc.wsgw.rnbundle.activity.HomeReactActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '湖北签到金限量兑换公告',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            '([text="立即查看"] < View + View > *) || (TextView[text="立即查看"] < View + View > Image[clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 6,
      name: '新版本，暂不升级',
      desc: '260503',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.MyReactActivity',
          matches: '[text^="本次升级" || text*="更新"] + * > *',
        },
      ],
    },
    {
      key: 7,
      name: '评价，关闭',
      desc: '260606',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.MyReactActivity',
          matches:
            'TextView[text*="进行评价"] <2 ViewGroup + ViewGroup > ViewGroup > TextView[text="关闭"]',
        },
      ],
    },
    {
      key: 8,
      name: '弹窗',
      desc: '260703',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
          matches: 'ViewGroup > ViewGroup[desc="关闭"] > ImageView',
        },
      ],
    },
    {
      key: 9,
      name: '3元优惠券，立即兑换',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            'TextView[text^="（剩余" && text="（剩余0张）"] - View > @TextView[clickable=false][visibleToUser=true][text="立即兑换"] - ListView > View[text="3元"]',
        },
      ],
    },
    {
      key: 10,
      name: '【湖北省】3元优惠券，确认兑换',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            'View > TextView[text="【湖北省】3元优惠券"] + TextView + TextView[text="取消"] + TextView[clickable=false][visibleToUser=true][text="确认兑换"]',
        },
      ],
    },
    {
      key: 11,
      name: '优惠券已被抢光～，知道啦',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            'View > TextView[text="来晚啦！"] + TextView[text="优惠券已被抢光～"] + TextView + TextView[clickable=false][visibleToUser=true][text="知道啦"]',
        },
      ],
    },
  ],
});
