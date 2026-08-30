import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.whrcbank.mbank',
  name: '武汉农商银行',
  groups: [
    {
      key: 1,
      name: '弹窗，广告，退出提示',
      desc: '260830',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.yitong.mobile.biz.launcher.secondapp.activity.SecondMainActivity',
          matches:
            '(LinearLayout[vid="dialog_iostitleokcanccle_top_lin"] > LinearLayout > Button[text="取消"] + Button[text="确定"][clickable=true][visibleToUser=true]) || (FrameLayout > RelativeLayout > LinearLayout[vid="page_indicator"] + ImageView[vid="close_image"][clickable=true][visibleToUser=true]) || ( (FrameLayout > RelativeLayout > LinearLayout[vid="ll_pics"] + ImageView[vid="close_image"][clickable=true][visibleToUser=true]))',
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
