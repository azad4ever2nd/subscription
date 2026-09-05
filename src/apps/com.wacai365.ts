import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.wacai365',
  name: '挖财记账',
  groups: [
    {
      key: 1,
      name: '个人信息保护政策 更新，同意',
      desc: '260726',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.wacai365.LicenseActivity',
          matches:
            '([vid="agreement_tips"][text*="个人信息保护政策"] <<n * + * [vid="txt_right"][text="已阅读同意bak"]) || (TextView[text*="个人信息"] < LinearLayout + LinearLayout > LinearLayout > TextView[vid="txt_right"][text="已阅读同意"])',
        },
      ],
    },
    {
      key: 2,
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
      key: 3,
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
      key: 4,
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
    {
      key: 7,
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
      key: 8,
      name: '开通会员，关闭',
      desc: '260905',
      rules: [
        {
          forcedTime: 3000,
          matchTime: 3000,
          matches: [
            'ViewGroup > ImageView[vid="privilegeClose"][clickable=true][visibleToUser=true]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.wacai365.newtrade.TradeActivity'],
        },
      ],
    },
  ],
});
