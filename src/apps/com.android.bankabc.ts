import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="iv_notification_reminder_dialog"] + [vid="iv_notification_reminder_dialog_close"][desc="进入掌银首页"]',
          ],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: ['com.android.bankabc.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '获取位置',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="tv_title"][text*="位置"] +3 * [vid="tv_cancel"][text="取消"]',
          ],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: ['com.android.bankabc.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '确认退出',
      desc: '',
      rules: [
        {
          matches: ['[text*="退出应用"] +n [vid="tv_sure"][text="确认"]'],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: ['com.android.bankabc.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '茶饮优惠享-购买',
      desc: '',
      rules: [
        {
          matches: ['[text="茶影优惠享"] [text="立即购买"][clickable=true]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '商品已抢完',
      desc: '',
      rules: [
        {
          action: 'back',
          matches: ['[text^="本期活动商品已抢完"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 6,
      name: '茶饮优惠享-提交',
      desc: '',
      rules: [
        {
          matches: ['[text="茶影优惠享"] [text="提交订单"][clickable=true]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '同意授权',
      desc: '',
      rules: [
        {
          matches: ['[id="auth-main"] > [text="拒绝"] + [text="同意授权"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 8,
      name: '车主弹窗',
      desc: '',
      rules: [
        {
          matches: ['* > [text="8BaplhYfHjrWAAAAAASUVORK5CYII="]'],
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 9,
      name: '游戏，我知道了',
      desc: '251219，添加抽奖机会用完',
      rules: [
        {
          action: 'back',
          matches: [
            '([text="岁末感恩扭扭蛋"] >n [text="svta36gxSfhe8oa7NDxe1IY0halKYx+WLrcKk1JEgbKKk0YEEPKSk0MEYDCak0Axuhdn5cN+l9D9BL6aCwaS+jTbtDYRmNpN6LRjdhGt7bS6IwWazR3Y6wwBhpjlDKHOH989AdXRuZ6RysjszOs52uCPFefrgn+gpKvRu+4GvlLmbUOHpwYU1ue52H5AAAAAElFTkSuQmCC"]) || ([text="抽奖机会已用完"] < * + * > [text="svta36gxSfhe8oa7NDxe1IY0halKYx+WLrcKk1JEgbKKk0YEEPKSk0MEYDCak0Axuhdn5cN+l9D9BL6aCwaS+jTbtDYRmNpN6LRjdhGt7bS6IwWazR3Y6wwBhpjlDKHOH989AdXRuZ6RysjszOs52uCPFefrgn+gpKvRu+4GvlLmbUOHpwYU1ue52H5AAAAAElFTkSuQmCC"]) || ([text="温馨提示"] +n [text="我知道了"] + *) || ([text="我知道了"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 10,
      name: '每日签到抽奖',
      desc: '',
      rules: [
        {
          matches: [
            '[id="beanAnswer"] > [text="b7ee290527094f0e8348e372f7db9eaf9900032820250102"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 11,
      name: '小豆立即抽奖',
      desc: '',
      rules: [
        {
          matches: ['[text="每日签到抽小豆"] +2 View'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 12,
      name: '信用卡弹窗',
      desc: '251117',
      rules: [
        {
          matches: ['[text="信用卡申请"] [text="7天内不再提示"] + Image'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 13,
      name: '开启消息通知',
      desc: '251120',
      rules: [
        {
          matches: [
            '[vid="dialog_notification_imageView"] +n [vid="dialog_notification_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['abc.feinno.uilibrary.activitys.PublicListActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '免责提示，知道了',
      desc: '260218',
      rules: [
        {
          matches: [
            '[vid="tv_title"][text="免责提示"] +n [vid="tv_sure"][text="知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.android.bankabc.MainActivity'],
        },
      ],
    },
  ],
});
