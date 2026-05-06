import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.mcdonalds.gma.cn',
  name: '麦当劳',
  groups: [
    {
      key: 1,
      name: '1积分兑换',
      desc: '260107',
      rules: [
        {
          matches: [
            '@[vid="ctl_bottom"] > [vid="tv_product_price"][text="1"] + * > [vid="tv_shop_now"][text="积分兑换"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.mall.activity.MallDetailActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '1积分，提交订单',
      desc: '260107',
      rules: [
        {
          matches: [
            '[vid="tv_total_price"][text="1"] - [vid="tv_price_total"] < * + [vid="tv_to_pay"][text="提交订单"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.mall.activity.OrderConfirmActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '火爆，确定',
      desc: '260107',
      rules: [
        {
          matches: [
            '[vid="tv_title"] + [vid="tv_content"][text*="火爆"] + [vid="tv_ok"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.mall.activity.OrderConfirmActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '库存不足，试试先返回',
      desc: '260107',
      rules: [
        {
          action: 'back',
          matches: [
            '[vid="tv_title"] + [vid="tv_content"][text="很抱歉，库存不足，请重新选购"] + [vid="tv_ok"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.mall.activity.OrderConfirmActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '获取设备信息，否',
      desc: '260110，添加位置',
      rules: [
        {
          matches: [
            '[vid="tv_title"][text*="设备信息" || text*="位置"] +n * > [vid="tv_cancel"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcdonalds.gma.cn.activity.MainActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '通知服务，取消',
      desc: '260110',
      rules: [
        {
          matches: ['[vid="tv_message"][text*="通知"] + * > [vid="tv_cancel"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcdonalds.gma.cn.activity.MainActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '下单返回提示残忍离开',
      desc: '260111',
      rules: [
        {
          matches: [
            '@[vid="cancel_button"][text="残忍离开"] + [vid="confirm_button"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.product.activity.ProductMdsListActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '开启通知2',
      desc: '260209',
      rules: [
        {
          matches: ['[vid="iv_dialog"] + [vid="v_cancel"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.order.activity.OrderDetailActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '地理位置',
      desc: '260209',
      rules: [
        {
          matches: ['[vid="tv_title"][text*="位置"] +n * > [vid="tv_cancel"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mcd.product.activity.ProductFcListActivity'],
        },
      ],
    },
    {
      key: 10,
      name: 'app升级啦，暂不升级',
      desc: '260606',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.mcdonalds.gma.cn.activity.MainActivity',
          matches: '[vid="tv_confirm"] + [vid="tv_cancel"][text="暂不升级"]',
        },
      ],
    },
    {
      key: 11,
      name: '条款更新，同意',
      desc: '260505',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.mcdonalds.gma.cn.activity.LaunchActivity',
          matches:
            '[vid="tv_title"][text="麦当劳条款更新提示"] +n [vid="tv_agree"]',
        },
      ],
    },
    {
      key: 12,
      name: '网络不给力，请稍后重试，重新加载',
      desc: '260506，添加活动太火爆了，请稍后重试',
      rules: [
        {
          activityIds: 'com.mcd.web.activity.BaseWebActivity',
          resetMatch: 'match',
          actionCd: 0,
          matches:
            '[text*="网络不给力，请稍后重试"] + [id="reLoad"][text="重新加载"]',
        },
      ],
    },
  ],
});
