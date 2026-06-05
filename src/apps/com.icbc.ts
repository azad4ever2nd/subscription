import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.icbc',
  name: '中国工商银行',
  groups: [
    {
      key: 1,
      name: '广告弹窗',
      desc: '整合新的弹窗',
      resetMatch: 'app',
      rules: [
        {
          matches: [
            '([vid="dialog"] + [vid="img_close"][desc="关闭"]) || ([vid="close_iv"])',
          ],
          fastQuery: true,
          activityIds: [
            'com.icbc.activity.main.MainActivity',
            'com.icbc.oisc.UI.mainPage.OISCMainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '工行开盲盒，抽奖',
      desc: '260513，(@[id="lotteryIconFile"] + * > [text^="剩余次数："][text!*="0次"]) || ',
      rules: [
        {
          matches: [
            '(@*[parent.childCount=3] <<n * + * > [text="拆盲盒剩余次数：1次"])',
          ],
          actionCd: 100,
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 3,
      name: '盲盒来早了',
      desc: '',
      rules: [
        {
          action: 'back',
          matches: ['[text^="活动未开始"] + [text="确定"]'],
          actionCd: 700,
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 4,
      name: '盲盒抽完了',
      desc: '',
      rules: [
        {
          action: 'back',
          matches: ['[text^="来的太晚啦"] + [text="知道了"]'],
          resetMatch: 'activity',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 5,
      name: '场景号取关',
      desc: '',
      rules: [
        {
          matches: ['[id="android:id/title"][text="不再关注"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.scene.ui.SceneListActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '江城每日签到',
      desc: '',
      rules: [
        {
          matches: ['@[text="立即签到"] + [text="兑换记录"]'],
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 7,
      name: '江城每日签到成功',
      desc: '',
      rules: [
        {
          action: 'back',
          matches: ['[text^="签到成功"] + [text*="我知道了"]'],
          matchTime: 10000,
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 8,
      name: '周一，江城礼遇四选一',
      desc: '260525，新布局',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          actionMaximum: 5,
          activityIds: 'com.icbc.activity.web.ICBCWebView',
          matches:
            '([id="app"] > [id="viewWrapper"] >n [text=" 立即领取"]) || ([text="详情"] + * + [text$="元优惠券"] + Button[text!="未开始" && text!="已领完"]) || ([text="详情"] + * + [text$="元优惠券"] + Button[text*="立即领取"])',
        },
      ],
    },
    {
      key: 9,
      name: '周一，江城礼遇四选一，刷新重试',
      desc: '260505，刷新重试',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 8,
          activityIds: 'com.icbc.activity.web.ICBCWebView',
          matches:
            '([text="活动太火爆，请稍后再试"] + [text="我知道了"]) || ([text="刷新重试"])',
        },
      ],
    },
    {
      key: 10,
      name: '各种中奖',
      desc: '260605，添加未中奖，数字藏品中奖',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.icbc.activity.web.ICBCWebView',
          matches:
            '([text="很遗憾，未中奖"] + [text="关闭"]) || ([text="微信立减金" || text="支付宝红包"] + [text="立即领取"] + [text="关闭"]) || ([text="恭喜中奖了"] <<n * + * > [text="关闭"]) || ([text="恭喜您中奖！"] + [text="关闭"]) || ([text^="奖品已发放至"] < * + [text="确认"]) || ([text="去兑好物"] + [text="开心收下"]) || (Dialog > TextView[text*="日前领取" || text$="过期未领将失效"] + Button[text="立即领取"]) || (Dialog > View > Button[text="完成"])',
        },
      ],
    },
    {
      key: 11,
      name: '浇水',
      desc: '260601，每月要变更id',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          matches: [
            '([id="app"] [text="eaae316f2e764aaab66e4bb0ad2c57890822507158"])',
          ],
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 12,
      name: '浇水成功',
      desc: '',
      rules: [
        {
          matches: ['@Image < * - * > [text="奖励派送中，稍后送达～"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 13,
      name: '前往微信浇水',
      desc: '260601',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          matches: '([text^="前往微信再浇一次"] + Image)',
          activityIds: [
            'com.icbc.activity.web.ICBCWebView',
            'com.tencent.mm.plugin.base.stub.WXBizEntryActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '前往微信再浇一次后，关闭',
      desc: '260601',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          preKeys: [13],
          activityIds: 'com.tencent.mm.plugin.base.stub.WXBizEntryActivity',
          matches: '[text^="前往微信再浇一次"] <n * + * > Image',
        },
      ],
    },
    {
      key: 15,
      name: '周一，江城礼遇四选一，抢完，返回',
      desc: '260518，新布局',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          activityIds: 'com.icbc.activity.web.ICBCWebView',
          matches:
            '([text="商品已抢完"] + [text="我知道了"]) || ([text="商品已领完"]) || ([text="已领完"])',
        },
      ],
    },
    {
      key: 16,
      name: '恭喜完成任务，去看看',
      desc: '260114,整合14',
      rules: [
        {
          matches: ['@[vid="iv_task_center"] + [vid="iv_close_task_center"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.icbc.activity.specialEdition.CommonEditionActivity',
            'com.icbc.myaccountsixth.MyAccountSixthActivity',
            'com.scene.ui.WebViewActivity',
            'com.icbc.activity.web.ICBCWebView',
            'com.icbc.activity.web.ICBCWebViewToExternal',
            'com.icbc.mydetail.MyDetailMainActivity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '工行消费季立减金，领取',
      desc: '251211，一个是标题，一个是按钮',
      rules: [
        {
          matches: [
            '([text="工享湖北消费季"] +n [text="领取"]) || ([text="工享湖北消费季"] +n * >n [text="领取"])',
          ],
          actionCdKey: 8,
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 18,
      name: '恭喜获得，领取',
      desc: '251219,clickCenter',
      rules: [
        {
          action: 'clickCenter',
          matches: ['[text="关闭"] + [text^="恭喜获得"] +n @[text="领取"]'],
          resetMatch: 'match',
          activityIds: ['com.icbc.activity.web.ICBCWebView'],
        },
      ],
    },
    {
      key: 19,
      name: '分享到，微信好友',
      desc: '260218',
      rules: [
        {
          matches: [
            '[vid="ebdpshr_title_tv"][text="分享到"] + * @[vid="ebdpshr_item_layout"] > [vid="ebdpshr_item_name"][text="微信好友"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.ebdp.share.ui.ShareActivity'],
        },
      ],
    },
  ],
});
