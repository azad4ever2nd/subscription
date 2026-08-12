import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '260703',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
          matches: 'ViewGroup > ViewGroup[desc="关闭"] > ImageView',
        },
      ],
    },
    {
      key: 2,
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
      key: 3,
      name: '签到',
      desc: '260810，测试matchDelay,time,添加补签成功[text="知道啦"] < * + * > Image',
      rules: [
        {
          actionCd: 0,
          matchDelay: 3000,
          forcedTime: 10000,
          resetMatch: 'match',
          matchRoot: true,
          activityIds: [
            'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
            'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
          ],
          matches:
            '(View > TextView[text="补签成功"] +3 TextView[clickable=false][text.length=0]) || (View > View > TextView[text="签到成功"] + TextView[text^="恭喜您获得" && text$="签到金"] + TextView[text.length=0][clickable=false][visibleToUser=true]) || (View > View > TextView[text="签到成功"] + TextView[text^="恭喜您获得" && text$="签到金"] +n View > Image[clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 4,
      name: '湖北签到金限量兑换公告',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          matchDelay: 3000,
          forcedTime: 10000,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            '([text="立即查看"] < View + View > *) || (TextView[text="立即查看"] < View + View > Image[clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 5,
      name: '升级公告',
      desc: '[text="知道啦"] < * + * > Image',
      rules: [
        {
          matches: ['[text="签到功能升级公告"] +2 * > Image'],
          fastQuery: true,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '签到多少天抽奖',
      desc: '260810',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            '(WebView > View > View > View > View > View > TextView[text^="抽中" && text$="个签到金"] + TextView[clickable=false][visibleToUser=true]) || (View > View > TextView[text^="抽中" && text$="个签到金"] + TextView[text.length=0][clickable=false][visibleToUser=true] )',
        },
      ],
    },
    {
      key: 7,
      name: '3元优惠券，立即兑换',
      desc: '260728"',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches:
            'TextView[text^="（剩余" && text!="（剩余0张）"] - View > @TextView[clickable=false][visibleToUser=true][text="立即兑换"] - ListView > View[text="3元"]',
        },
      ],
    },
    {
      key: 8,
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
      key: 9,
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
    {
      key: 10,
      name: '新版本，暂不升级',
      desc: '260503',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 1000,
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.MyReactActivity',
          matches: '[text^="本次升级" || text*="更新"] + * > *',
        },
      ],
    },
    {
      key: 11,
      name: '评价，关闭',
      desc: '260606',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 1000,
          fastQuery: true,
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.MyReactActivity',
          matches:
            'TextView[text*="进行评价"] <2 ViewGroup + ViewGroup > ViewGroup > TextView[text="关闭"]',
        },
      ],
    },
  ],
});
