import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'mark.via',
  name: 'Via',
  groups: [
    {
      key: 1,
      name: '允许网站打开 * 吗？，确定',
      desc: '260213',
      rules: [
        {
          matches: ['[text^="打开" || text^="允许网站打开"] + [text="确定"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['mark.via.Shell'],
        },
      ],
    },
    {
      key: 2,
      name: '掌上周五红包雨1，立即领取',
      desc: '251220',
      rules: [
        {
          matches: ['[id="app"] > [desc="picture"][index=1]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['mark.via.Shell'],
        },
      ],
    },
    {
      key: 3,
      name: '掌上周五红包雨2，有的打开',
      desc: '251220',
      rules: [
        {
          matches: ['[text^="手机安装"] + * > [text="有的，打开"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['mark.via.Shell'],
        },
      ],
    },
    {
      key: 4,
      name: '掌上周五红包雨，立 即 打 开',
      desc: '251220',
      rules: [
        {
          matches: ['[id="invokeButton"][text="立 即 打 开"]'],
          resetMatch: 'match',
          activityIds: ['mark.via.Shell'],
        },
      ],
    },
    {
      key: 5,
      name: '弹窗，使用Chrome浏览器，继续',
      desc: '260401',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'mark.via.Shell',
          matches: '[text="Chrome浏览器"] + [desc="继续"][clickable=true]',
        },
      ],
    },
    {
      key: 6,
      name: '弹窗，继续你不用浏览器',
      desc: '260426',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'mark.via.Shell',
          matches: '[text="浏览器"] + View > [id="sacs_close"][text="继续"]',
        },
      ],
    },
    {
      key: 7,
      name: '是否在app内阅读全文，取消',
      desc: '260518',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'mark.via.Shell',
          matches: '[text^="是否在" && text$="内阅读全文"] + [text="取消"]',
        },
      ],
    },
    {
      key: 8,
      name: '跳登陆弹窗，X掉',
      desc: '260518',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'mark.via.Shell',
          matches:
            '[id="passportbox"] > [text="kSihFDy2c7KQEqcV0vSv1iGQ+L8m86x4W2K+8EMSAJLbEOIXoCSgCU+SYCSQLwqqW8HQBqAhcNeEiNRhmbxnW87QOhw2nlcotaaZQiK5w4A3V7JjEuNT3vsPDROQfiL6WXsk7gVH1e4vf7EtRwQfjt8JuharvVsHQNM4ykDX94FYhBKOJraAAAAAElFTkSuQmCC"]',
        },
      ],
    },
    {
      key: 9,
      name: 'PDD半价助力，无可用码，弹窗',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'mark.via.Shell',
          matches:
            'Dialog[text="暂无可用码"] > View > Button[clickable=true][visibleToUser=true][text="好的"]',
        },
      ],
    },
  ],
});
