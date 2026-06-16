import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cebbank.mobile.cemb',
  name: '光大银行',
  groups: [
    {
      key: 1,
      name: '发现新版本',
      desc: '251118',
      rules: [
        {
          matches: [
            '[vid="dialog_tv_title"][text*="新版本"] +n * > @[vid="dialog_btn_negative"][text="不再提示"] +n [vid="dialog_btn_positive"][text="立即更新"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cebbank.mobile.cemb.ui.activity.SplashActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '免责',
      desc: '251127，不再提示',
      rules: [
        {
          matches: [
            '@[vid="btton_dialog_no_remind"][text="不再提醒"] + [vid="btton_dialog_yes"][text="我知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '基金财富月历，签到',
      desc: '260531，+3 childCount=2，签到按钮布局有变动，改规则',
      rules: [
        {
          matches:
            '([id="mainContainer"] [text^="天天领金币" && text$="关注产品收益上涨可领翻倍金币"] +3 * > *[text=""][visibleToUser=true][index=parent.childCount.minus(1)]) || ([text^="天天领金币"] +n *[text=""][clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] + View[childCount=2] )',
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '基金财富月历，签到成功',
      desc: '260605',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text="恭喜获得"] <n * + TextView[clickable=true]) || (View > TextView[text="恭喜获得"] +n TextView[index=parent.childCount.minus(1)])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '基金财富月历，每日任务，1个',
      desc: '260212',
      rules: [
        {
          matches: ['([text="每日"] + [text="阅读产品文章"] +3 TextView)'],
          actionMaximum: 1,
          matchDelay: 3000,
          resetMatch: 'app',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '基金财富月历，每周任务',
      desc: '260608，([text="每周"] + [text="指定产品加自选" || text="浏览指定专区"] + [text="(0/1)"] +3 TextView)',
      rules: [
        {
          actionCd: 2000,
          action: 'clickCenter',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: '[text="每周"] +2 TextView[text="(0/1)"] +3 TextView',
        },
      ],
    },
    {
      key: 7,
      name: '基金财富月历，每周任务，参与话题讨论',
      desc: '260608',
      rules: [
        {
          actionMaximum: 1,
          matchDelay: 1000,
          resetMatch: 'app',
          action: 'clickCenter',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
          matches: ['([text="参与话题讨论"] +3 TextView)'],
        },
      ],
    },
    {
      key: 8,
      name: '基金财富月历，任务完成开心收下',
      desc: '260605 原([text^="您已完成"] <<3 * + TextView) || ([text^="您已完成"] < * - [text^="+"] <<n View + TextView) || ([text^="微信立减金将在5个工作日内发放"] + TextView) || ([text="恭喜获得"] +n [text="产品涨跌情况将在财富日历中展示~"] +n TextView[clickable=true][index=parent.childCount.minus(1)])',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text$="金币"] < View +2 TextView[clickable=true]) || ([text^="您已完成" && text$="任务"] < * + TextView[clickable=true]) || (View > @TextView - View > TextView[text^="您已完成" && text$="任务"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '基金财富月历,弹窗2',
      desc: '251208，添加抽奖兑换弹窗',
      rules: [
        {
          matches: [
            '([id="1084"] >3 TextView) || (View[childCount=4] > TextView[index=2] + @TextView -2 * > [text$="金币"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '添加自选弹窗 ，最多添加20个自选产品，确定',
      desc: '260128',
      rules: [
        {
          matches: [
            '[vid="dialog_tv_title"] +n [vid="dialog_tv_msg"][text="最多添加20个自选产品"] <<n * + * > [vid="dialog_btn_mid"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cebbank.mobile.cemb.ui.activity.WebActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '基金财富月历兑换，自定义兑换多少金币的',
      desc: '260401，只需把金币数量改成想兑换的就行。',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: '[text="20金币"] + @[text="兑换"] + [text="(本月限兑:1次)"]',
        },
      ],
    },
    {
      key: 12,
      name: '基金财富节，领取提示',
      desc: '260123，D,优先复制券码，然后再关闭',
      rules: [
        {
          matches: [
            '([text^="兑奖码:"] + * + TextView) ||([text="可在首页-[奖品]查看" || text="可在首页-[财气值明细]查看"] + TextView) || ([text="兑奖码:"] + * + TextView)',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '基金财富节，完成任务后去领取',
      desc: '260123，D,先占位，明天再补规则',
      rules: [
        {
          matches: [
            '[text="可在首页-[奖品]查看" || text="可在首页-[财气值明细]查看"] + TextView',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '基金财富月历，兑换并抽奖',
      desc: '251222，D',
      rules: [
        {
          matches: ['[text="10金币"] + [text="1次抽奖机会"] +2 *'],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '金豆抽奖',
      desc: '',
      rules: [
        {
          matches: [
            '@View << * + * >2 [text="差一点就中奖啦"] + [text="继续抽奖"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebNoSingleTopActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '金知了弹窗',
      desc: '',
      rules: [
        {
          matches: ['@View <<4 [id="1104"]'],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '金知了兑换抽奖',
      desc: '',
      rules: [
        {
          matches: ['[text="返回去抽奖"]'],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '周三10点立即抢购',
      desc: '251119,D',
      rules: [
        {
          matches: [
            '[text="商品详情"] [text="券包"][index=3] + [text*="立即抢购"]',
          ],
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '武汉周四1元购',
      desc: '251218，测试改顺序加条件',
      rules: [
        {
          matches: [
            '([text="50402410517101596?Expires=1982914597&OSSAccessKeyId=LTAIrtWP6OVJGU8O&Signature=nLNU9WJ6CJB6mpJezAlOZHgXfMM%3D"] +3 [text="50401236411727914?Expires=1982913423&OSSAccessKeyId=LTAIrtWP6OVJGU8O&Signature=hh%2BtccKM77AWHCnPDJ471BiikgM%3D"]) || ([text="微信立减券（3*2元）"] +n * >n [text*="立即购买"]) || ([text="微信立减券（3*2元）"] +n [text*="立即购买"]) || ([text="60854523261609372"] + * > [text!="剩余0%"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '阳光兑换外面',
      desc: '251127,D,找有库存的点',
      rules: [
        {
          matches: [
            '([text="stocked"] + [text$="借记卡"] + [text="微信立减金"] + *) || ([text^="今日已领" && text!$="100%"] < * + [text$="借记卡"] + [text="微信立减金"] + *)',
          ],
          actionMaximum: 1,
          resetMatch: 'activity',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '阳光值兑换1，确认兑换',
      desc: '251127，添加 立即兑换',
      rules: [
        {
          matches: [
            '([text="兑换确认"] +n * > [text="取消"] + [text="确认"]) || ([text$="借记卡"] +n * > [text="立即兑换"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '阳光兑换2，先占位',
      desc: '251127，D,兑换完成，返回',
      rules: [
        {
          action: 'back',
          matches: ['*'],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '阳光兑换3，',
      desc: '251127，无商品或机会，返回',
      rules: [
        {
          action: 'back',
          matches: ['[text="本周兑换次数已用完" || text="今日商品已兑完"]'],
          resetMatch: 'match',
          activityIds: [
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '抽奖微信红包，复制',
      desc: '260508',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            '([text^="兑奖码"] +n @*[clickable=true] + [text^="搜索并关注微信公众号"]) || ([text^="兑奖码"] + @*[clickable=true] + [text^="搜索并关注微信公众号"])',
        },
      ],
    },
    {
      key: 25,
      name: '抽奖微信红包，复制完后，开心收下 ',
      desc: '260417',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [24],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: '[text^="搜索并关注微信公众号"] + *[clickable=true]',
        },
      ],
    },
    {
      key: 26,
      name: '基金财富月历，抽奖，谢谢参与',
      desc: '260423',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: '[text="很遗憾，差一点就中奖了"] <n * + *',
        },
      ],
    },
    {
      key: 27,
      name: '权益，立即领取',
      desc: '260610',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            '(View > View > TextView[text="立即领取"][index=parent.childCount.minus(1)]) || (View TextView[text^="剩余"] + TextView[text="立即领取"])',
        },
      ],
    },
    {
      key: 28,
      name: '权益详情，立减金，确认领取',
      desc: '260614',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > TextView[text*="立减金"] +(2,4) View > View > Button[text=" 确认领取"][clickable=true]',
        },
      ],
    },
    {
      key: 29,
      name: '权益，去兑换，X掉',
      desc: '260610',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: 'View > TextView[text="去兑换"] + View',
        },
      ],
    },
    {
      key: 30,
      name: '待领取权益，立减金，立即领取',
      desc: '260614',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View[id="center"] > TextView[text*="立减金"] + TextView[text="立即领取"][clickable=false]',
        },
      ],
    },
    {
      key: 31,
      name: '权益列表 ，立减金，立即领取',
      desc: '260614',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > View > TextView[text*="立减金"] +3 TextView[text="立即领取"][clickable=false]',
        },
      ],
    },
    {
      key: 32,
      name: '我的权益，待使用，去使用',
      desc: '260614',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > View > TextView[text*="立减金"] + View + TextView[text="去使用"][clickable=false]',
        },
      ],
    },
    {
      key: 33,
      name: '竞猜指数，做任务1',
      desc: '260615',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: 'View > [text="指定产品加自选"] + TextView[text.length=0]',
        },
      ],
    },
    {
      key: 34,
      name: '竞猜指数，做任务2',
      desc: '260615',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches: 'View > [text="阅读指定产品文章"] + TextView[text.length=0]',
        },
      ],
    },
    {
      key: 35,
      name: '抽福袋，收下',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > TextView[text="抽福袋攒财气，有机会赢好礼"] + TextView',
        },
      ],
    },
    {
      key: 36,
      name: '我已认真阅读并同意以上全部内容',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'View > @Image[text="noCheckNew"] + [text="我已认真阅读并同意以上全部内容"]',
        },
      ],
    },
    {
      key: 37,
      name: '我已认真阅读并同意以上全部内容，自主购买',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'View > Image[text="checkNew"] + TextView[text="我已认真阅读并同意以上全部内容"] +2 Button[text="自主购买"]',
        },
      ],
    },
    {
      key: 38,
      name: '一键输入',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'EditText[text.length=0] < View + View > Button[text="一键输入"][clickable=true]',
        },
      ],
    },
    {
      key: 39,
      name: '一键输入，已阅读并确认继续购买',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [38],
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'EditText[text.length>0] < View <n View + View > Button[text="已阅读并确认继续购买"]',
        },
      ],
    },
    {
      key: 40,
      name: '基金定投设置，提交',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'View[text*="定投"] < ListView +n View > Button[text="提交"]',
        },
      ],
    },
    {
      key: 41,
      name: '我已阅读并确认继续购买',
      desc: '260616',
      rules: [
        {
          fastQuery: true,
          action: 'click',
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.pdf.PdfRenderHalfActivity',
          matches:
            'FrameLayout > FrameLayout > TextView[id="com.cebbank.mobile.cemb:id/tv_button"][text="我已阅读并确认继续购买"][clickable=true]',
        },
      ],
    },
  ],
});
