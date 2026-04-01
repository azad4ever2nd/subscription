import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.yitong.mbank.psbc',
  name: '邮储银行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '251205,',
      rules: [
        {
          matches: ['[vid="bt_cancel"][text="暂不更新"]'],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '权益去领取',
      desc: '251215，添加集邮活动，火爆了',
      rules: [
        {
          matches: [
            '([text^="恭喜您抢到一张" && text*="邮票图片"] +2 Image) || ([text="权益二选一"] +3 [text="去领取"]) || ([text*="火爆"] <<n * + [text^="我已知晓"])',
          ],
          matchDelay: 5000,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="iv_theme"] + [vid="iv_theme_close_btn"]'],
          actionCdKey: 1,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '消息通知',
      desc: '',
      rules: [
        {
          matches: ['[vid="picture"] + * > [vid="iv_left_btn"]'],
          actionCdKey: 1,
          fastQuery: true,
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '温馨提示（无障碍）',
      desc: '251203',
      rules: [
        {
          matches: [
            '[vid="mTitle"][text="温馨提示"] <<n * +n [vid="mIKnow"][text="确定"]',
          ],
          actionCdKey: 1,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '五星好评，X',
      desc: '260103',
      rules: [
        {
          matches: ['@[vid="tv_cancel"] + [vid="mContent"][text*="好评"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '修改密码弹窗',
      desc: '260304',
      rules: [
        {
          matches: [
            '[vid="ll_dialog_common"][desc*="修改登录密码"] +n * > [vid="mLeftBtn"][text="下次再说"]',
          ],
          actionCdKey: 1,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.yitong.mbank.psbc.module.home.view.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '山东邮储，支付0.01抽奖',
      desc: '260315，活动到3/31止，每天9点开始',
      rules: [
        {
          matches: [
            '*[clickable=true] [text="0d4cafa48c61477aa8b38819f069bb91"]',
          ],
          actionCd: 500,
          resetMatch: 'match',
          activityIds: ['com.unionpay.cordova.UPActivityWeb'],
        },
      ],
    },
    {
      key: 9,
      name: '任务完成，返回',
      desc: '260401',
      rules: [
        {
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          resetMatch: 'match',
          matches: '@*[clickable=true] [text="返回活动"]',
        },
      ],
    },
  ],
});
