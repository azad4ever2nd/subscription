import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ebank.creditcard',
  name: '阳光惠生活',
  groups: [
    {
      key: 1,
      name: '首面分期弹窗',
      desc: '',
      rules: [
        {
          matches: ['@* + [text*="限时优惠"] +6 [text="立即办理"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[id="app"] + * > TextView + TextView'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 3,
      name: '开启消息通知',
      desc: '',
      rules: [
        {
          matches: ['[text="仅开启服务通知"] - [text="开启全部通知"] < * - *'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 4,
      name: '确认购买',
      desc: '260101',
      rules: [
        {
          matches: ['@[text="确认购买"] + [text="提醒我"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '优惠券不在销售时间内，确认',
      desc: '260101',
      rules: [
        {
          matches: [
            '[vid="dialog_content"][text*="优惠券不在销售时间内"] < * +n * > [vid="dialog_button_positive"][text="确认"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 6,
      name: '太火爆了，确认',
      desc: '260101',
      rules: [
        {
          matches: [
            '[vid="dialog_content"][text*="火爆"] < * +n * > [vid="dialog_button_positive"][text="确认"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '每日/每月限购',
      desc: '260126',
      rules: [
        {
          matches: [
            '[vid="dialog_content"][text*="仅可购买1张" || text^="每个用户每月仅可购买2张" || text^="每个用户每日仅可购买1张" ] <<n * +n * > [vid="dialog_button_negative"][text="取消"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 8,
      name: '开启系统通知，取消',
      desc: '260120',
      rules: [
        {
          matches: [
            '[text="提示"] + [text*="系统通知" || text*="推送功能"] +n * > [text="取消"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 9,
      name: '抢购网络太堵啦，确定',
      desc: '260126',
      rules: [
        {
          matches: [
            '[vid="dialog_content"][text^="现在网络太堵啦" || text*="请稍后再试一次吧"] <<n * +n * > [vid="dialog_button_positive"][text="确定"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
  ],
});
