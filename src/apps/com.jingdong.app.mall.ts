import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jingdong.app.mall',
  name: '京东',
  groups: [
    {
      key: 1,
      name: '签到领豆',
      desc: '251226',
      rules: [
        {
          matches: [
            '([id="SignButton"][childCount=1 || childCount=0]) || ([id="homeSignButton"] > [text="签到领豆"])',
          ],
          actionMaximum: 2,
          resetMatch: 'app',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '黑五鸡蛋',
      desc: '260116,页面变动，暂时不加sku',
      rules: [
        {
          matches: [
            '([text^="券后¥4.90"] <<n * -n [text*="15枚" && text*="蛋"] +n [text*="领券抢"]) || ([text*="15枚" && text*="蛋"] +n [text^="券后¥4.90"] +n [text*="领券抢"]) || ([text*="15枚" && text*="蛋"] +n [text^="券后¥4.90"] +n * > [text*="领券抢"]) || ([text*="15枚" && text*="蛋"] + [text^="券后¥4.90"] <n * + [text*="领券抢"]) || ([text*="15枚" && text*="蛋"] +n @[text*="领券抢"] + * > [text^="券后¥4.90"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '下单后领京豆',
      desc: '260227',
      rules: [
        {
          matches: ['[text^="恭喜"] + * [text$="京豆"] +n [text="立即领取"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'activity',
          activityIds: [
            'com.jingdong.app.mall.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '签到完成返回',
      desc: '',
      rules: [
        {
          action: 'back',
          matches: ['[text="今天已签到，获得奖励"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.jingdong.app.mall.WebActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '下单后抽奖',
      desc: '',
      rules: [
        {
          matches: ['[vid="a0k"] > * +4 * >2 ImageView'],
          actionMaximum: 1,
          resetMatch: 'activity',
          activityIds: [
            'com.jingdong.app.mall.bundle.cashierfinish.view.CashierUserContentCompleteActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '黑五预约',
      desc: '',
      rules: [
        {
          matches: ['Image -2 * > [text="提醒我抢购"]'],
          resetMatch: 'match',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '开启通知（物流）',
      desc: '251230,添加物流，促销，消息通知',
      rules: [
        {
          matches: [
            '([text*="开启消息通知"] <<n * + [desc="关闭"]) || (@[id="com.jd.lib.message.feature:id/h7"] > [id="com.jd.lib.message.feature:id/h6"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jingdong.app.mall.MainFrameActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '领金豆页面的幸运奖励',
      desc: '251119',
      rules: [
        {
          matches: ['[text="幸运奖励"] +2 [text="点击领取"]'],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '通知权限未开启',
      desc: '251123',
      rules: [
        {
          matches: [
            '[vid="bn"][text="通知权限未开启，无法成功提醒到您，去开启吧~"] <<n * + * > [vid="br"][text="取消"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '京东秒送1分够',
      desc: '251218',
      rules: [
        {
          matches: ['[text="0153148071ca2233"] <<n * + * > [text="¥0.01"]'],
          resetMatch: 'match',
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '黑五纸巾',
      desc: '260306,页面变动，暂时不加sku，([text^="券后¥"] - [text*="纸巾"] <<n * + [text="领券抢"]) ||',
      rules: [
        {
          matches: [
            '([text^="券后¥5.90"] <<n * -n [text*="12卷" && text*="纸"] +n [text*="领券抢"]) || ([text*="12卷" && text*="纸"] +n [text^="券后¥5.90"] +n [text*="领券抢"]) || ([text*="12卷" && text*="纸"] +n [text^="券后¥5.90"] +n * > [text*="领券抢"]) || ([text*="12卷" && text*="纸"] + [text^="券后¥5.90"] <n * + [text*="领券抢"]) || ([text*="12卷" && text*="纸"] +n @[text*="领券抢"] + * > [text^="券后¥5.90"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '定位提示',
      desc: '251226',
      rules: [
        {
          matches: [
            '([vid="bv"][text*="定位"] +n * > [vid="br"][text="取消"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.jingdong.app.mall.WebActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '秒杀自提一分购',
      desc: '260118',
      rules: [
        {
          matches: ['@Image <<n * + * > [text="到手价"] + [text="¥0.01"]'],
          resetMatch: 'match',
          activityIds: ['com.jd.lib.babel.view.activity.BabelActivity'],
        },
      ],
    },
    {
      key: 14,
      name: '补贴价0.01，立即购买',
      desc: '260118',
      rules: [
        {
          matches: ['LinearLayout > @FrameLayout [text="补贴价¥0.01"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.lib.productdetail.ProductDetailPopActivity'],
        },
      ],
    },
    {
      key: 15,
      name: '补贴价0.01，去抢购',
      desc: '260118',
      rules: [
        {
          matches: ['[text="0点01元 已补 9.99元"] <n * + * > [text="去抢购"]'],
          fastQuery: true,
          activityIds: ['com.jingdong.manto.card.MantoLightActivity'],
        },
      ],
    },
    {
      key: 16,
      name: '黑五秒杀鸡蛋，误点弹窗，X掉',
      desc: '260125',
      rules: [
        {
          matches: [
            '@TextView - View > [text="¥"] + [text="5.90" || text="4.90"] + [text="黑五价"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['com.jd.lib.ttt.page.TTTMultiPageActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '开启刷脸支付',
      desc: '260310',
      rules: [
        {
          matches: [
            '@[id="com.jd.lib.jdpaysdk.feature:id/afl"][desc="关闭"] <n * +n * [id="com.jd.lib.jdpaysdk.feature:id/a8"][text="同意协议并立即开启"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.wangyin.payment.jdpaysdk.counter.ui.pay.CounterActivity',
          ],
        },
      ],
    },
  ],
});
