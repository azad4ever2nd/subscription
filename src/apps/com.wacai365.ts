import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="promote_banner_img"] - [vid="promote_banner_close_2"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.HomeActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '悬浮按钮',
      desc: '',
      rules: [
        {
          matches: ['[vid="ribbon_img"] + [vid="ribbon_close_img"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.HomeActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '放弃编辑',
      desc: '',
      rules: [
        {
          matches: [
            '@[vid="quit_edit"][text="放弃编辑"] +2 [text="取消"][vid="cancel"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.newtrade.TradeActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '新版本',
      desc: '260112',
      rules: [
        {
          matches: ['[vid="tv_title"][text*="新版本"] + [vid="tv_cancel"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.HomeActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '分享，关闭',
      desc: '260213',
      rules: [
        {
          matches: ['@[vid="btn_close"] + [vid="btn_share"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.HomeActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '开通会员，关闭',
      desc: '260218',
      rules: [
        {
          matches: ['@[vid="privilegeClose"] + [vid="privilegeImage"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.newtrade.TradeActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '评价弹窗，下次再说',
      desc: '260221',
      rules: [
        {
          matches: [
            '[vid="firstButton"] +n [vid="thirdButton"][text="下次再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.HomeActivity'],
        },
      ],
    },
  ],
});
