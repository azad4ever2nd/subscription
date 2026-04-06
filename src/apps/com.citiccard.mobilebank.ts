import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.citiccard.mobilebank',
  name: '动卡空间',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      desc: '',
      rules: [
        {
          matches: ['[vid="dialog"] + [vid="cancelArea"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.citiccard.mobilebank.newconfig.appconstruct.TabsAppHomeActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '绿色能量',
      desc: '260323,添加自助还款，电子账单，运动和支付',
      rules: [
        {
          matches: [
            '(@[text="0OtyvnGzoNS+5EoIAAAAASUVORK5CYII="] +n [text$="电子账单" || text="动卡空间自助还款"]) || ([text="绿色运动" || text="绿色支付" || text="绿色消费"] - [text="VK8fr6+sLwGnB552X3pvyv71EBhCUCcrVq1euHOf09gevPFGYnvp1uJmTJr399ksvPdXrcL8DlWgBfyVLJ3IAAAAASUVORK5CYII="])',
          ],
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 3,
      name: '合成三叶草',
      desc: '251221,增加三叶草清零抽奖提示',
      rules: [
        {
          matches: [
            '([text="恭喜你"] +3 [text="开心收下"]) || (* - * > [text="9b4b1bdec2d54f369d23adfb8099d075"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 4,
      name: '笔笔返开始',
      desc: '260114， + [text!="100%"]',
      rules: [
        {
          matches: [
            '[text="当前剩余领取次数 1"] + * [text="1.5 元"] + [text="立即领取"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.citiccard.mobilebank.web.webpage.CommonWebPage'],
        },
      ],
    },
    {
      key: 5,
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
      key: 6,
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
      key: 7,
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
      key: 8,
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
      key: 9,
      name: '分期弹窗',
      desc: '260308',
      rules: [
        {
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
      key: 10,
      name: '开启消息通知弹窗 ，X掉',
      desc: '260406',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.citiccard.mobilebank.web.webpage.CommonWebPage',
          matches: '[vid="btOpenNotification"] + [vid="ivClose"]',
        },
      ],
    },
  ],
});
