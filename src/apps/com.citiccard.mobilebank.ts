import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 1,
      name: '开启消息通知弹窗2，X掉',
      desc: '260721',
      rules: [
        {
          matchTime: 1000,
          resetMatch: 'match',
          activityIds: 'com.citiccard.mobilebank.web.applet.NewAppletActivity',
          matches:
            'ViewGroup > ImageView[vid="ivNotificationBg"] +n ImageView[clickable=true][visibleToUser=true][vid="ivClose"]',
        },
      ],
    },
    {
      key: 2,
      name: '分期弹窗',
      desc: '260308',
      rules: [
        {
          matchTime: 1000,
          matches: ['[vid="dialog"] + [vid="cancelArea"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.citiccard.mobilebank.web.applet.NewAppletActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '笔笔返未到时间',
      desc: '',
      rules: [
        {
          matches: ['[text="礼品未到领取时间！"] + [text="我知道了"]'],
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 4,
      name: '笔笔返开始，5元',
      desc: '260706，clickable=false，+ [text!="100%"]',
      rules: [
        {
          actionCd: 0,
          order: -2,
          action: 'clickCenter',
          resetMatch: 'match',
          matches:
            '([text="当前剩余领取次数 1"] + * TextView[text="5 元"] + TextView[text="立即领取"]) || (TextView[text="当前剩余领取次数 1"] + View > View > View > View > View > View > TextView[text="5 元"] + TextView[clickable=false][visibleToUser=true][text="立即领取"])',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
        },
      ],
    },
    {
      key: 5,
      name: '笔笔返开始，2元',
      desc: '260706， clickable=false，+ [text!="100%"]',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          order: -1,
          action: 'clickCenter',
          matches:
            '([text="当前剩余领取次数 1"] + * TextView[text="2 元"] + TextView[text="立即领取"]) || (TextView[text="当前剩余领取次数 1"] + View > View > View > View > View > View > TextView[text="2 元"] + TextView[clickable=false][visibleToUser=true][text="立即领取"])',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
        },
      ],
    },
    {
      key: 6,
      name: '笔笔返开始，1.5元',
      desc: '260706，clickable=false， + [text!="100%"]',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          action: 'clickCenter',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches:
            '([text="当前剩余领取次数 1"] + * TextView[text="1.5 元"] + TextView[text="立即领取"]) || (TextView[text="当前剩余领取次数 1"] + View > View > View > View > View > View > TextView[text="1.5 元"] + TextView[clickable=false][visibleToUser=true][text="立即领取"])',
        },
      ],
    },
    {
      key: 7,
      name: '笔笔返额外奖励弹窗',
      desc: '',
      rules: [
        {
          matches: [
            '[text="中信银行信用卡"] [text="u+10W+quXxu5mKQe9j8msoSIIVyQoAAAAABJRU5ErkJggg=="]',
          ],
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 8,
      name: '支付完成后弹窗',
      desc: '251208',
      rules: [
        {
          matches: ['[text="202512041727537784"] + View'],
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 9,
      name: '幸运草清零提醒',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches:
            'View > @TextView - View > Image[text="4656869f9eb3431d87476a3e387ca50b"]',
        },
      ],
    },
    {
      key: 10,
      name: '绿色能量',
      desc: '260727,添加自助还款，电子账单，运动和支付',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches:
            '(@Image[clickable=false][visibleToUser=true][text="0OtyvnGzoNS+5EoIAAAAASUVORK5CYII=bak"] +n TextView[text$="电子账单" || text="动卡空间自助还款"]) || (ListView > View > @Image[clickable=false][visibleToUser=true][text="VK8fr6+sLwGnB552X3pvyv71EBhCUCcrVq1euHOf09gevPFGYnvp1uJmTJr399ksvPdXrcL8DlWgBfyVLJ3IAAAAASUVORK5CYII="] + TextView[text^="绿色"])',
        },
      ],
    },
    {
      key: 11,
      name: '合成三叶草',
      desc: '260802,增加三叶草清零抽奖提示',
      rules: [
        {
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 500,
          matches:
            '([text="恭喜你"] +3 [text="开心收下"]) || (* - * > [text="9b4b1bdec2d54f369d23adfb8099d075"]) || (View > View > View > TextView[text="恭喜你"] +3 Button[clickable=true][visibleToUser=true][text="开心收下"])',
        },
      ],
    },
    {
      key: 12,
      name: '绿色能量，弹窗',
      desc: '260305',
      rules: [
        {
          matches: [
            '[text="4510f582e365476090afa7c73685b7ba"] < * + TextView[clickable=true]',
          ],
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 13,
      name: '开启消息通知弹窗 ，X掉',
      desc: '260406',
      rules: [
        {
          matchTime: 1000,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches: '[vid="btOpenNotification"] + [vid="ivClose"]',
        },
      ],
    },
    {
      key: 14,
      name: '跳至第三方易百信息技术，知道了',
      desc: '260417',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches:
            '[vid="tv_title"][text="服务提示"] +n * [vid="btn_confirm"][text="我知道了"]',
        },
      ],
    },
    {
      key: 15,
      name: '易百信息技术申请获取，授权并登录',
      desc: '260417',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches: '[text^="易百信息技术"] +n [text="授权并登录"]',
        },
      ],
    },
    {
      key: 16,
      name: '365权益兑换还没开始，我知道了',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches:
            'View > View > TextView[text="温馨提醒"] + TextView[text="权益兑换暂未开始！"] + View > TextView[clickable=false][visibleToUser=true][text="我知道了"]',
        },
      ],
    },
    {
      key: 17,
      name: '系统检测到VPN，继续使用',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'click',
          activityIds:
            'com.citiccard.mobilebank.newconfig.appconstruct.TabsAppHomeActivity',
          matches:
            'TextView[text*="VPN"] < LinearLayout +2 LinearLayout > Button[vid="btn_confirm"][clickable=true][visibleToUser=true][text="继续使用"]',
        },
      ],
    },
    {
      key: 18,
      name: '弹窗广告',
      desc: '260621，添加分期弹窗',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 1000,
          activityIds: [
            'com.citiccard.mobilebank.newconfig.appconstruct.TabsAppHomeActivity',
            'com.citiccard.mobilebank..newconfig.appconstruct.TabsAppHomeActivity',
          ],
          matches:
            '([vid="dialog"] + [vid="cancelArea"]) || (FrameLayout > RelativeLayout > ImageView[vid="dialog"] + ImageView[vid="cancelArea"][clickable=true])',
        },
      ],
    },
  ],
});
