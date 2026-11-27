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
          anyMatches: [
            '[vid="dialog_tv_title"][text*="新版本"] +n * > @[vid="dialog_btn_negative"][text="不再提示"] +n [vid="dialog_btn_positive"][text="立即更新"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.SplashActivity',
        },
      ],
    },
    {
      key: 2,
      name: '免责',
      desc: '251127，不再提示',
      rules: [
        {
          matches:
            '@[vid="btton_dialog_no_remind"][text="不再提醒"] + [vid="btton_dialog_yes"][text="我知道了"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 3,
      name: '基金财富月历，签到',
      desc: '260831，+3 childCount=2，签到按钮布局有变动，改规则',
      rules: [
        {
          anyMatches: [
            'WebView > View > View > View > TextView[text^="天天领金币"] +n View[childCount=2] > TextView[index=parent.childCount.minus(1)][text.length=0][clickable=false][visibleToUser=true]',
            '[text^="天天领金币"] +n *[text=""][clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] + View[childCount=2]',
            '@TextView[clickable=true][visibleToUser=true] <n View + View > TextView[text="更多产品 >"]',
            '@TextView[clickable=false][visibleToUser=true] < View + View > TextView[text="更多产品 >"]',
            '[id="mainContainer"] [text^="天天领金币" && text$="关注产品收益上涨可领翻倍金币"] +3 * > *[text=""][visibleToUser=true][index=parent.childCount.minus(1)]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 4,
      name: '基金财富月历，签到成功',
      desc: 'D，260926，添加 活动到期提醒',
      rules: [
        {
          action: 'clickCenter',
          anyMatches: [
            'View[id="mainContainer"] + TextView + View > View > View[childCount=2] > TextView[clickable=true][visibleToUser=true] + TextView[clickable=true][visibleToUser=true]',
            'View > TextView[text="恭喜获得"] +n TextView[text^="关注一只产品"] + TextView[index=parent.childCount.minus(1)]',
            'View > TextView[text="恭喜获得"] +n TextView[index=parent.childCount.minus(1)]',
            '[text="恭喜获得"] <n * + TextView[clickable=true]',
          ],
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 5,
      name: '基金财富月历，每日/每周任务，限1',
      desc: '261123',
      rules: [
        {
          actionMaximum: 1,
          actionDelay: 3000,
          resetMatch: 'app',
          anyMatches: [
            'View > View > TextView[text^="参加" && text*="年终有礼" && text$="活动"] + TextView[text=""][clickable=true][visibleToUser=true]',
            '[text="每日"] + [text="阅读产品文章"] +3 TextView',
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 6,
      name: '基金财富月历，每周任务',
      desc: '261016',
      rules: [
        {
          actionCd: 3000,
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'WebView > View > View > View > View > TextView[text="每周"] +2 TextView[text="(0/1)"] +(3,5) TextView[text.length=0][clickable=false][visibleToUser=true]',
            'WebView > View > View > View > View > TextView[text="每周"] +2 TextView[text="(0/1)"] +(3,5) TextView[text.length=0][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '基金财富月历，每周任务，参与话题讨论',
      desc: '260814',
      rules: [
        {
          actionMaximum: 1,
          actionDelay: 1000,
          resetMatch: 'app',
          action: 'clickCenter',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'WebView > View > View > View > View > TextView[text="参与话题讨论"] +(3,5) TextView[text.length=0][clickable=false][visibleToUser=true]',
            'WebView > View > View > View > View > TextView[text="参与话题讨论"] +(3,5) TextView[text.length=0][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '基金财富月历，每月任务，体验定投',
      desc: '260814，可不用',
      rules: [
        {
          resetMatch: 'app',
          actionCd: 3000,
          actionMaximum: 2,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'WebView > View > View > View > View > TextView[text^="体验" && text$="定投协议开通流程"] +(5,6) TextView[text.length=0][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，指数竞猜抽奖，X掉',
      desc: '261123',
      rules: [
        {
          action: 'clickCenter',
          actionCd: 750,
          forcedTime: 3000,
          resetMatch: 'match',
          anyMatches: [
            'WebView[text*="每周竞猜抽好礼"] > View > View[index=parent.childCount.minus(1)] > View[childCount=3] > View + TextView[text=""][clickable=true][visibleToUser=true] + TextView[text=""][clickable=true][visibleToUser=true]', //261123，弹窗，恭喜，上期猜对了，X掉
            'View > TextView[id="lightBoxAniV2"] + View[childCount=7] > View[childCount=10] + TextView[index=parent.childCount.minus(1)][text=""][clickable=true][visibleToUser=true]', //261123，弹窗，竞猜抽奖，X掉
            'TextView[text="微信立减金将在5个工作日内发放，可在【光大银行app-我的-权益-我的活动】查看"] < View +3 TextView[index=parent.childCount.minus(1)][text=""][clickable=true][visibleToUser=true]', //261123，弹窗，竞猜抽奖，X掉
            //原来的规则9，name:基金财富月历，任务完成开心收下,desc: 先禁用，分类整理光大弹窗，260928 添加 葫芦抽奖，兑换确认
            //'View > @TextView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)] -n View > TextView[text^="微信立减金将在5个工作日内发放" || text$="【光大银行app-我的-权益-我的活动】查看"]',
            //'WebView > View > View > View > TextView[clickable=true][visibleToUser=true][text.length=0] + TextView[text="可在【金币明细】查看"] + TextView[text.length=0][clickable=true][visibleToUser=true]',
            //'TextView[text="可在【金币明细】查看"] - @TextView[clickable=true][visibleToUser=true] - View > TextView[text$="金币"]',
            //'View > @TextView - View > TextView[text^="您已完成" && text$="任务"]',
            //'[text^="您已完成" && text$="任务"] < * + TextView[clickable=true][visibleToUser=true]',
            //'View > TextView[text="10金币"] + TextView[text="1次抽奖机会"] + TextView + TextView[clickable=false][visibleToUser=true]',
            //'View[childCount=4] >  TextView[clickable=true][visibleToUser=true] + TextView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)]',
            //'[text$="金币"] < View +2 TextView[clickable=true]',
            //下方是 原来的 规则10 基金财富月历，弹窗2
            //'[id="1084"] >3 TextView',
            //'View[childCount=4] > TextView[index=2] + @TextView -2 * > [text$="金币"]',
            //下方是 原来的 规则20 弹窗，金知了
            //'@View <<4 [id="1104"]',
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 10,
      name: '弹窗，金知了社区，口令抽奖，确定',
      desc: '261126',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 500,
          activityIds: '.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'EditText[text.length>1] < View < View + @TextView[text="确定"][clickable=true][visibleToUser=true] +n TextView[text="活动规则"]', //261126，弹窗，输入口令，确定，布局有变
            'View > View > TextView[text="活动规则"] - @TextView[text="确定"][clickable=true][visibleToUser=true] - View > View > EditText[text.length>3]', //261119，弹窗，输入口令后，确定
          ],
        },
      ],
    },
    {
      key: 11,
      name: '社区大火爆了，返回',
      desc: 'D，261123',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          actionCd: 2000,
          activityIds: '.ui.activity.mobilePayment.MobilePaymentWebActivity',
          excludeMatches: [
            'View > View > TextView[text="活动规则"] - @TextView[text="确定"][clickable=true][visibleToUser=true] - View > View > EditText', //261123，排除 口令抽奖
          ],
          matches:
            'WebView[text="光大银行金知了社区"] > View > View > TextView[text="社区太火爆了，请您稍后再来"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 12,
      name: '竞猜指数，做任务1',
      desc: '260615',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > [text="指定产品加自选"] + TextView[text.length=0][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 13,
      name: '竞猜指数，做任务2',
      desc: '260615',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > [text="阅读指定产品文章"] + TextView[text.length=0][clickable=true][visibleToUser=true]',
        },
      ],
    },

    {
      key: 14,
      name: '弹窗，X掉1',
      desc: '261126',
      rules: [
        {
          forcedTime: 3000,
          resetMatch: 'match',
          action: 'clickCenter',
          anyMatches: [
            'View[childCount=1] > View[childCount=1] > View[childCount=2] > TextView[text=""][clickable=true][visibleToUser=true] + TextView[text=""][clickable=true][visibleToUser=true]', //261126，弹窗，温馨提示，月末常规操作
            'WebView[text$="品牌月"] > View > View > View > View[childCount=4] > TextView[text=""][clickable=false] + TextView[text=""][clickable=false] + TextView[text=""][clickable=true] + TextView[text=""][clickable=true][visibleToUser=true]', //261120，弹窗，抽奖未中，弹窗全是无文本控件
            'View > View > TextView[text=""][clickable=true][visibleToUser=true] - View > TextView[text="恭喜获得"] +n TextView[text=""][index=parent.childCount.minus(1)][clickable=true][visibleToUser=true]', //弹窗，签到成功，开心收下
            'View > View > @TextView[text=""][clickable=true][visibleToUser=true] - View > TextView[text="很遗憾，差一点就中奖了"]', //弹窗，金币抽奖，未中，X掉
            'View > View > @TextView[text=""][clickable=true][visibleToUser=true] - View > TextView[text="恭喜获得"] +n TextView[text=""][index=parent.childCount.minus(1)][clickable=true][visibleToUser=true]', //弹窗，签到成功，X掉
            'View > View > @TextView[text=""][clickable=true][visibleToUser=true] - View > TextView[text*="+"] +   View > TextView[text^="您已完成" && text$="任务"]', //261105，弹窗，完成定投任务，X掉
            'View > View > TextView[text="本次兑换消耗5知豆，是否兑换？"] + TextView[text="取消"] + TextView[text="是"][clickable=true][visibleToUser=true]', //261105，弹窗，金知了社区，兑换抽奖机会，是
            'WebView[text="光大银行金知了社区"] > View > View > View > TextView[text="返回去抽奖"][clickable=true][visibleToUser=true]', //261105，弹窗，兑换抽奖机会，返回去抽奖
            'TextView[text.length=1] < @View[clickable=true][visibleToUser=true] < View + View[id="compntWinningResult1"] > View > TextView[text="差一点就中奖啦"] + TextView[text="继续抽奖"]', //261105，弹窗，金知了社区，抽奖，未中，X掉
            'TextView[text$="金币"] < View + TextView[text=""][clickable=true][visibleToUser=true] + TextView[text=""][clickable=true][visibleToUser=true]', //261109，弹窗，金币抽奖，中了金币
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 15,
      name: '弹窗，葫芦开金喜，开心收下 或 X掉',
      desc: '261104',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 750,
          forcedTime: 3000,
          anyMatches: [
            'View > View > TextView[text="10金币"] + TextView[text="1次抽奖机会"] + TextView[text=""][clickable=true][visibleToUser=true] + TextView[text=""][clickable=true][visibleToUser=true]', //261105，10金币兑换一次抽奖机会，我再想想，兑换并抽奖，
            'WebView > View > View > View > TextView[text.length=0][clickable=true][visibleToUser=true]  + TextView[text="可在【金币明细】查看"] + TextView[text.length=0][clickable=true][visibleToUser=true]',
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 16,
      name: '占位16',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 750,
          forcedTime: 3000,
          anyMatches: [
            'View > View > TextView[text="10金币"] + TextView[text="1次抽奖机会"] + TextView[text=""][clickable=true][visibleToUser=true] + TextView[text=""][clickable=true][visibleToUser=true]', //261105，10金币兑换一次抽奖机会，我再想想，兑换并抽奖，
            'WebView > View > View > View > TextView[text.length=0][clickable=true][visibleToUser=true]  + TextView[text="可在【金币明细】查看"] + TextView[text.length=0][clickable=true][visibleToUser=true]',
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 17,
      name: '弹窗，恭喜获得微信红包，先复制',
      desc: '261120',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 3000,
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'View > View[childCount=5] > TextView[text^="恭喜获得" && text*="微信红包"] + TextView + View > TextView[text^="兑奖码"] + TextView[text.length=0][clickable=true][visibleToUser=true]', //用金币兑换后的弹窗
            'View > View > TextView[text.length>=1] + TextView[text="元"] + TextView[text^="兑奖码"] + @TextView[text.length=0][clickable=true][visibleToUser=true] + TextView[text*="光彩礼遇社"] +  TextView[text.length=0][clickable=true][visibleToUser=true]', //抽奖，26年10月活动布局，
          ],
        },
      ],
    },
    {
      key: 18,
      name: '弹窗，恭喜获得微信红包，复制完成后，开心收下 ',
      desc: '261120',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [17],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'View > View[childCount=5] > TextView[text^="恭喜获得" && text*="微信红包"] + TextView +n View > TextView[text^="兑奖码"] + TextView[text.length=0][clickable=true][visibleToUser=true] <<2 View + TextView[text*="光彩礼遇社"] + TextView[text.length=0][clickable=true][visibleToUser=true]', //用金币兑换后的弹窗
            'View > View > TextView[text.length>=1] + TextView[text="元"] + TextView[text^="兑奖码"] + TextView[text.length=0][clickable=true][visibleToUser=true] + TextView[text*="光彩礼遇社"] +  TextView[text.length=0][clickable=true][visibleToUser=true]', //抽奖，26年10月活动布局，
          ],
        },
      ],
    },
    {
      key: 19,
      name: '弹窗，权益，去兑换，X掉',
      desc: '260907',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'TextView[text="已成功领取啦"] +n TextView[text="去兑换"]  + View > TextView[text.length=1][clickable=false][visibleToUser=true]',
            'View > TextView[text="去兑换"] + View',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '弹窗，金知了兑换抽奖',
      desc: '260913 添加 差一点就中奖，',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          anyMatches: [
            'TextView[text="差一点就中奖啦"] <n View < View + View > @View[clickable=true][visibleToUser=true] > TextView[text.length=1]',
            'TextView[text="差一点就中奖啦"] <n View < View + View > @View[clickable=false][visibleToUser=true] > TextView[text.length=1]',
            '@TextView[clickable=true][visibleToUser=true] < View + View > View > TextView[text="很遗憾，您未中奖"] +n TextView[text="谢谢参与"]',
            'View > View > View > @TextView[clickable=true][visibleToUser=true] - View > TextView[text="很遗憾，差一点就中奖了"]',
            '[text="返回去抽奖"]',
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 21,
      name: '弹窗，年终抽奖和福袋，X掉 或开心心下',
      desc: '261127',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'View > TextView[id="lightBoxAniV2"] + View > TextView[text=""][clickable=true][visibleToUser=true] + TextView[text="可在首页-[明细]查看"] + TextView[text=""][clickable=true][visibleToUser=true]', //261127，弹窗，抽福袋，中福气值，X掉
            'View > View[childCount=4] > TextView[text^="恭喜您获得如下奖励"] + View + TextView[text*="元微信立减金"] + TextView[text="开心收下"][clickable=true][visibleToUser=true]', //261123，年终活动，弹窗，恭喜您获得如下奖励，开心收下，View > Image[text="4b13503a33b44a7fbab52f674bc547da"]
            'View > View > TextView[text="抽福袋攒财气，有机会赢好礼"] + [text=""][clickable=true][visibleToUser=true]', //261123，弹窗，年终有礼，集福袋，开心收下
            //规则备份
            //name: '抽福袋，收下,
            //desc: 'D，260815，添加 去兑换，完成任务弹窗，clickable=false',
            //'View > View > TextView[text="已成功领取啦"] +n TextView[text="去兑换"] + View > TextView[text.length=1][clickable=false][visibleToUser=true]',
            //'View > View > TextView[text^="您还没有完成任务" || text*="完成任务"] + TextView[text="确定"][clickable=false][visibleToUser=true]',
            //'View > TextView[text="抽福袋攒财气，有机会赢好礼"] + TextView',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '占位22',
      desc: '261123',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [],
        },
      ],
    },
    {
      key: 23,
      name: '基金财富月历兑换，自定义兑换多少金币的',
      desc: 'D，260401，只需把金币数量改成想兑换的就行，放在内存订阅用',
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
      key: 24,
      name: '金知了社区，活动，点击去参与',
      desc: '261123',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.ui.activity.mobilePayment.MobilePaymentWebActivity',
          matches:
            'View > View > Image[text="92738d086f874411a7b9224111eaf5d1"][clickable=false][visibleToUser=true]', //261123，金知了社区 ，点击去参与
        },
      ],
    },
    {
      key: 25,
      name: '权益，立即领取',
      desc: 'D，260610',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
          anyMatches: [
            'View > View > TextView[text="立即领取"][index=parent.childCount.minus(1)]',
            'View TextView[text^="剩余"] + TextView[text="立即领取"]',
            //规则备份，
            //name: '权益详情，立减金，确认领取'
            //desc: 'D，260614',
            //'View > TextView[text*="立减金"] +(2,4) View > View > Button[text=" 确认领取"][clickable=true]',
            //规则备份，
            //name: '待领取权益，立减金，立即领取',
            //desc: 'D，260614',
            //'View[id="center"] > TextView[text*="立减金"] + TextView[text="立即领取"][clickable=false]',
            //规则备份，
            //name: '权益列表 ，立减金，立即领取',
            //desc: 'D，260614',
            //'View > View > TextView[text*="立减金"] +3 TextView[text="立即领取"][clickable=false]',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '待领取权益，立减金，立即领取',
      desc: 'D，260614',
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
      key: 27,
      name: '权益列表 ，立减金，立即领取',
      desc: 'D，260614',
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
      key: 28,
      name: '我的权益，待使用，去使用',
      desc: 'D，260614',
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
      key: 29,
      name: '武汉周四1元购',
      desc: 'D，251218',
      rules: [
        {
          anyMatches: [
            '[text="50402410517101596?Expires=1982914597&OSSAccessKeyId=LTAIrtWP6OVJGU8O&Signature=nLNU9WJ6CJB6mpJezAlOZHgXfMM%3D"] +3 [text="50401236411727914?Expires=1982913423&OSSAccessKeyId=LTAIrtWP6OVJGU8O&Signature=hh%2BtccKM77AWHCnPDJ471BiikgM%3D"]',
            '[text="微信立减券（3*2元）"] +n * >n [text*="立即购买"]',
            '[text="微信立减券（3*2元）"] +n [text*="立即购买"]',
            '[text="60854523261609372"] + * > [text!="剩余0%"]',
          ],
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 30,
      name: '阳光兑换外面等',
      desc: 'D，251127，找有库存的点',
      rules: [
        {
          anyMatches: [
            '[text="stocked"] + [text$="借记卡"] + [text="微信立减金"] + *',
            '[text^="今日已领" && text!$="100%"] < * + [text$="借记卡"] + [text="微信立减金"] + *',
          ],
          actionMaximum: 1,
          resetMatch: 'activity',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 31,
      name: '阳光兑换1，确认兑换',
      desc: '251127，添加 立即兑换',
      rules: [
        {
          anyMatches: [
            '[text="兑换确认"] +n * > [text="取消"] + [text="确认"]',
            '[text$="借记卡"] +n * > [text="立即兑换"]',
          ],
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 32,
      name: '阳光兑换2，先占位',
      desc: 'D，51127，兑换完成，返回',
      rules: [
        {
          action: 'back',
          matches: '*',
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 33,
      name: '阳光兑换3，',
      desc: '251127，无商品或机会，返回',
      rules: [
        {
          action: 'back',
          matches: '[text="本周兑换次数已用完" || text="今日商品已兑完"]',
          resetMatch: 'match',
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebActivity',
        },
      ],
    },
    {
      key: 34,
      name: '弹窗，金知了社区，抽奖',
      desc: '261119，添加中奖了，差一点就中奖',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          anyMatches: [
            'TextView[text.length=1] < @View[clickable=true][visibleToUser=true] < View + View[id="compntWinningResult1"] > View > TextView[text="继续抽奖" || text="差一点就中奖啦"]',
            'TextView[text.length=1] < @View[clickable=true][visibleToUser=true] < View - View[id="compntWinningResult1"] > View > TextView[text="差一点就中奖啦"] + TextView[text="继续抽奖"]', //221106，弹窗，金币抽奖，未中，X掉
            'TextView[text.length=1] < @View[clickable=true][visibleToUser=true] < View - View[id="compntWinningResult1"] > View > TextView[text="去兑换"] + TextView[text="奖品可在「我的权益」中查看"]', //261106，弹窗，金知了抽奖，立减金，X掉
            'TextView[text="差一点就中奖啦"] <n View < View[id="compntWinningResult1"] + View > @View[clickable=true][visibleToUser=true] > TextView[text.length=1]',
            'TextView[text="差一点就中奖啦"] <n View < View + View > @View[clickable=false][visibleToUser=true] > TextView[text.length=1]',
            'TextView[text="恭喜您，中奖啦"] < View < View[id="compntWinningResult1"] + View > View > TextView[text.length=1][clickable=false][visibleToUser=true]',
            //'TextView[text="恭喜您，中奖啦" || text="去兑换" || text="奖品可在「我的权益」中查看"] <<n View + View > @View[clickable=true][visibleToUser=true] > TextView[text.length=1]',
            //'TextView[text="奖品可在「我的权益」中查看"] - TextView[text="去兑换"]  <n View < View[id="compntWinningResult1"] + View > @View[clickable=true][visibleToUser=true] > TextView[text.length=1]',//261106，从上到下，但步数多
            'View > View > TextView[text="您已参加过活动啦"] + TextView[text="确定"][clickable=false][visibleToUser=true]',
            'TextView[text.length=1] < @View[clickable=true][visibleToUser=true] < View - View > View > TextView[text="差一点就中奖啦"] + TextView[text="继续抽奖"]', //261119，弹窗，差一点就中奖啦，继续抽奖，X掉
            '@TextView[text.length=1][clickable=false][visibleToUser=true] < View  < View  - View > View > TextView[text="差一点就中奖啦" ] + TextView[text="继续抽奖"]', //261123，布局有变，弹窗，差一点就中奖啦，继续抽奖，X掉
            '[text="返回去抽奖"]',
            //'@View << * + * >2 [text="差一点就中奖啦"] + [text="继续抽奖"]',
          ],
          activityIds:
            'com.cebbank.mobile.cemb.ui.activity.mobilePayment.MobilePaymentWebNoSingleTopActivity',
        },
      ],
    },
    {
      key: 35,
      name: '首页，金知了社区 ，进入社区',
      desc: '261123，延时匹配，避免不避要的进入',
      rules: [
        {
          matchDelay: 5000,
          actionCd: 3000,
          resetMatch: 'match',
          activityIds: '.ui.activity.HomeActivity',
          anyMatches: [
            'WebView > View > @View[clickable=true][visibleToUser=true] > TextView[text="金知了社区"] + TextView[text="进入社区"]', //261123，新布局，金知了社区，进入社区
            'WebView > View > TextView[text="金知了社区"] + @View[clickable=true][visibleToUser=true] > TextView[text="进入社区"]', //261119，首页，金知了社区 ，进入社区
          ],
        },
      ],
    },
    {
      key: 36,
      name: '弹窗，添加自选，最多添加20个自选产品，确定',
      desc: '260128',
      rules: [
        {
          fastQuery: true,
          forcedTime: 3000,
          resetMatch: 'match',
          anyMatches: [
            '[vid="dialog_tv_title"] +n [vid="dialog_tv_msg"][text="最多添加20个自选产品"] <<n * + * > [vid="dialog_btn_mid"][text="确定"]',
          ],
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
        },
      ],
    },
    {
      key: 37,
      name: '弹窗，删除成功，确定',
      desc: '260905,fastQuery=true,clickable=true',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'LinearLayout[vid="ll_button_mid"] > View + TextView[text="确定"][vid="dialog_btn_mid"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 38,
      name: '添加自选成功，返回',
      desc: '261123',
      rules: [
        {
          action: 'back',
          resetMatch: 'match',
          activityIds: '.ui.activity.WebActivity',
          anyMatches: [
            //'View > View > TextView[text="取消自选"][visibleToUser=true]',//261123，基金页面，添加了自选的直接返回，不建议打开
            'View > View > TextView[text="添加自选成功"][visibleToUser=true]', //261123，基金页面，添加自选成功，返回
          ],
        },
      ],
    },
    {
      key: 39,
      name: '自选，删除',
      desc: '260905',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 2000,
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          excludeMatches:
            'LinearLayout[vid="ll_button_mid"] > View + TextView[text="确定"][vid="dialog_btn_mid"][clickable=true][visibleToUser=true]',
          matches:
            'View > View > Image[text="deletesel"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 40,
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
      key: 41,
      name: '我已认真阅读并同意以上全部内容，自主购买',
      desc: '261104',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          excludeMatches: [
            'View > View > TextView[text="请输入定投金额"] + View > TextView[text="确定"]', //避免在输入密码时下方不停的提交
          ],
          matches:
            'View > Image[text="checkNew"] + TextView[text="我已认真阅读并同意以上全部内容"] +2 Button[text="自主购买"]',
        },
      ],
    },

    {
      key: 42,
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
      key: 43,
      name: '一键输入，已阅读并确认继续购买',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [42],
          action: 'clickCenter',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'EditText[text.length>0] < View <n View + View > Button[text="已阅读并确认继续购买"]',
        },
      ],
    },
    {
      key: 44,
      name: '基金定投设置，提交',
      desc: '261104',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 4000, //增加冷却时间，避免多次
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          anyMatches: [
            'View[text^="基金定投设置"] < ListView +n View > Button[text="提交"]',
            'TextView[text^="基金定投设置"] <<n View +n View >n Button[text="提交"]',
          ],
        },
      ],
    },
    {
      key: 45,
      name: '终止定投1',
      desc: '260621',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'View > View > View > @Button[text="终止定投"] + Button[text="修改"]',
        },
      ],
    },
    {
      key: 46,
      name: '终止定投2',
      desc: '260621',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'View > View > View > TextView[text="确定终止该定投计划吗？"] + Button[text="取消"] + Button[text="确定"]',
        },
      ],
    },
    {
      key: 47,
      name: '终止定投3',
      desc: '260621',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'TextView[text="定投关闭"] <2 View + View > View > View > Button[text="下一步"]',
        },
      ],
    },
    {
      key: 48,
      name: '终止定投4',
      desc: '260621',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'TextView[text="定投关闭"] <2 View + View > View > View > Button[text="提交"]',
        },
      ],
    },
    {
      key: 49,
      name: '终止定投5,返回 ',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          activityIds: 'com.cebbank.mobile.cemb.ui.activity.WebActivity',
          matches:
            'View > View > View + TextView[text="关闭成功"] +3 View > Button[text="查看我的持仓"] + Button[text="看看其他产品"]',
        },
      ],
    },
    {
      key: 50,
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
