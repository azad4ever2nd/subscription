import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ccb.longjiLife',
  name: '建行生活',
  groups: [
    {
      key: 1,
      name: '活粒签到',
      desc: '260220,添加首页签到成功, ([text="签到成功"] < * + TextView) || ',
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '(@[text="知道了"] <n * + TextView) || ([text="签到成功"] +4 [text="我知道了"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.ccb.longjiLife.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '0元抢',
      rules: [
        {
          matches: ['[text="0元抢"]'],
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '活动太火爆了',
      desc: '',
      rules: [
        {
          matches: ['[text^="活动太火爆"] +3 * > [text="知道了"]'],
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '优惠券已抢光',
      desc: '      matchTime:10000,action:"back",',
      rules: [
        {
          action: 'back',
          matches: ['[text^="优惠券已抢光"] +3 * > [text="知道了"]'],
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '弹窗',
      desc: '251118',
      rules: [
        {
          matches: ['[id="app"] >2 *[index=1][childCount=2] > Image[index=1]'],
          resetMatch: 'match',
          activityIds: ['com.ccb.longjiLife.MainActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '未中奖，弹窗',
      desc: '',
      rules: [
        {
          matches: ['[text="cancel.ca07b919"]'],
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '已抢光',
      desc: '25123 [text*="欢乐周末惠"] <<n * +n * > [text="已抢光"]',
      rules: [
        {
          action: 'back',
          matches: ['[text="已抢光"]'],
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '弹窗2',
      desc: '251205,，匹配规则是图形按钮',
      rules: [
        {
          matches: [
            '[text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="]',
          ],
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '财富会员，中间横幅，社保卡活动',
      desc: '260114',
      rules: [
        {
          matches: [
            '[text="身份信息验证"] +n CheckBox[checked=false] || ([text="身份信息验证"] +n [text="loginBtn.f302f730"]) || ([text="温馨提示"] + * > [text="好的"]) || ([text*="活动期间每周三15:00起开放报名领券入口"] <<n * + [text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="]) || ([text="温馨提示"] + [text*="报名人数已满" || text="今日报名人数已满，您可下个领券日再来~" || text^="活动期间每周三"] + * > [text="好的"])',
          ],
          actionCd: 100,
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '财富会员，中间横幅，社保卡活动，身份信息验证',
      desc: '260114',
      rules: [
        {
          matches: ['[text="身份信息验证"] +n CheckBox[checked=false]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.ccb.cloudmerchant.view.WebViewActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '签到成功奖励弹窗，',
      desc: '260218',
      rules: [
        {
          matches: [
            '[text="签到成功"] + [text^="奖励8选1" || text$="领取"] +n [text="确定领取"] + TextView[index=parent.childCount.minus(1)]',
          ],
          resetMatch: 'match',
          activityIds: ['com.ccb.longjiLife.MainActivity'],
        },
      ],
    },
  ],
});
