import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.ccb.longjiLife',
  name: '建行生活',
  groups: [
    {
      key: 1,
      name: '每日签到，成功了',
      desc: '260705,添加首页签到成功, ([text="签到成功"] < * + TextView) || (@[text="知道了"] <n * + TextView) ||',
      rules: [
        {
          actionCd: 100,
          resetMatch: 'match',
          activityIds: 'com.ccb.longjiLife.MainActivity',
          matches:
            ' ([text="签到成功"] +n [text="知道了"]) || (View > TextView +n TextView[text="知道了"][clickable=false]) || (View > View > TextView[text="签到成功"] +3 TextView[text="确定领取"] + TextView)',
        },
      ],
    },
    {
      key: 2,
      name: '签到成功奖励弹窗，',
      desc: '260218',
      rules: [
        {
          resetMatch: 'match',
          matches:
            '[text="签到成功"] + [text^="奖励8选1" || text$="领取"] +n [text="确定领取"] + TextView[index=parent.childCount.minus(1)]',
          activityIds: 'com.ccb.longjiLife.MainActivity',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: '251118',
      rules: [
        {
          resetMatch: 'match',
          matches: '[id="app"] >2 *[index=1][childCount=2] > Image[index=1]',
          activityIds: 'com.ccb.longjiLife.MainActivity',
        },
      ],
    },
    {
      key: 4,
      name: '0元抢',
      rules: [
        {
          matches: '[text="0元抢"]',
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },
    {
      key: 5,
      name: '活动太火爆了',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          matches: '[text^="活动太火爆"] +3 * > [text="知道了"]',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },
    {
      key: 6,
      name: '优惠券已抢光',
      desc: '',
      rules: [
        {
          action: 'back',
          resetMatch: 'match',
          matches: '[text^="优惠券已抢光"] +3 * > [text="知道了"]',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
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
          resetMatch: 'match',
          matches: '[text="已抢光"]',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },
    {
      key: 8,
      name: '未中奖，弹窗',
      desc: 'D',
      rules: [
        {
          resetMatch: 'match',
          matches: '[text="cancel.ca07b919"]',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },
    {
      key: 9,
      name: '低碳生活，一键收取',
      desc: '260806',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
          matches:
            '(WebView[text="低碳生活"] >n View > Image[clickable=false][visibleToUser=true][text="oneKey"]) || (WebView[text="低碳生活"] > View > Image[clickable=false][visibleToUser=true][text="oneKey"])',
        },
      ],
    },
    {
      key: 10,
      name: '弹窗2',
      desc: '251205,D，匹配规则是图形按钮',
      rules: [
        {
          resetMatch: 'match',
          matches:
            '[text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="]',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },
    {
      key: 11,
      name: '财富会员，中间横幅，社保卡活动',
      desc: '260114',
      rules: [
        {
          actionCd: 100,
          resetMatch: 'match',
          matches:
            '[text="身份信息验证"] +n CheckBox[checked=false] || ([text="身份信息验证"] +n [text="loginBtn.f302f730"]) || ([text="温馨提示"] + * > [text="好的"]) || ([text*="活动期间每周三15:00起开放报名领券入口"] <<n * + [text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="]) || ([text="温馨提示"] + [text*="报名人数已满" || text="今日报名人数已满，您可下个领券日再来~" || text^="活动期间每周三"] + * > [text="好的"])',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },
    {
      key: 12,
      name: '财富会员，中间横幅，社保卡活动，身份信息验证',
      desc: '260114',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          matches: '[text="身份信息验证"] +n CheckBox[checked=false]',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
        },
      ],
    },

    {
      key: 13,
      name: '建行社保卡，公告，X掉',
      desc: '260806',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          action: 'clickCenter',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
          matches:
            'WebView[text*="建行社保卡"] > View > View > View > @Image[text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="] - View > TextView[text*="建行社保福利日" || text="尊敬的客户："] ',
        },
      ],
    },
    {
      key: 14,
      name: '建行社保卡，勾选同意',
      desc: '260806',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          action: 'clickCenter',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
          matches:
            'WebView[text*="建行社保卡"] > View > View > View > CheckBox[checked=false]',
        },
      ],
    },
    {
      key: 15,
      name: '建行社保卡，勾选同意后，立即参与',
      desc: '260806',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          action: 'clickCenter',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
          matches:
            'WebView[text*="建行社保卡"] > View > View > View > CheckBox[checked=true] +2 CheckBox[checked=true] +2 Image[clickable=false][visibleToUser=true][text="loginBtn.f302f730"]',
        },
      ],
    },
    {
      key: 16,
      name: '建行社保卡，火暴',
      desc: '260806',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          action: 'clickCenter',
          activityIds: 'com.ccb.cloudmerchant.view.WebViewActivity',
          matches:
            '(WebView[text*="建行社保卡"] > View > View > @Image[visibleToUser=true][clickable=true][text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="] - View > View > TextView[text^="尊敬的客户"]) || (WebView[text*="建行社保卡"] > View > Dialog > View > Button[text="好的"])',
        },
      ],
    },
  ],
});
