import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whrcbank.mbank',
  name: '武汉农商银行',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      desc: '251205',
      rules: [
        {
          matches: ['[vid="ll_pics"] + [vid="close_image"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.yitong.mobile.biz.launcher.secondapp.activity.SecondMainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '一马当先周五抢鲜，外面指定产品',
      desc: '260118',
      rules: [
        {
          matches: ['[text="德佑 儿童卫生湿巾"] + [text!="未开始"]'],
          resetMatch: 'match',
          activityIds: ['com.yitong.mobile.biz.h5.container.WebViewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '一马当先周五抢鲜，',
      desc: '260220,text*="开始" || text*="立即" || text*="购" || ',
      rules: [
        {
          matches: [
            '[text="我的订单"] + [text="活动规则"] + [text="返回会场"] + [text="立即领取"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.yitong.mobile.biz.h5.container.WebViewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '商品已抢完，返回',
      desc: '260220',
      rules: [
        {
          action: 'back',
          matches: ['[text="商品已抢完"] + [text="我知道了"]'],
          resetMatch: 'match',
          activityIds: ['com.yitong.mobile.biz.h5.container.WebViewActivity'],
        },
      ],
    },
  ],
});
