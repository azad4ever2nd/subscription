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
  ],
});
