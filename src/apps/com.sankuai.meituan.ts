import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.meituan',
  name: '美团',
  groups: [
    {
      key: 1,
      name: '0元购去结算',
      desc: '',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'activity',
          matchTime: 2000,
          activityIds: 'com.meituan.android.mrn.container.MRNBaseActivity',
          matches: '[text="￥0"] < * +2 * > [text="去结算"]',
        },
      ],
    },
    {
      key: 2,
      name: '0元购立即支付',
      desc: '',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'activity',
          matchTime: 2000,
          activityIds: 'com.meituan.android.mrn.container.MRNBaseActivity',
          matches: '[text="￥0"] < * +2 * > [text="立即支付"]',
        },
      ],
    },
    {
      key: 3,
      name: '确认到店自取门店',
      desc: 'D',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          matchTime: 2000,
          activityIds: 'com.meituan.android.mrn.container.MRNBaseActivity',
          matches: '[text="更换门店"] < * +2 * > [text="确认门店并支付"]',
        },
      ],
    },
    {
      key: 4,
      name: '确认退出评价，退出',
      desc: '260312',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 2000,
          activityIds: 'com.meituan.android.mrn.container.MRNBaseActivity',
          matches: '[text="确认退出评价吗？"] +n * > [text="退出评价"]',
        },
      ],
    },
    {
      key: 5,
      name: '定位服务授权，暂不开启',
      desc: '260706，D，添加IDS',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 500,
          activityIds: [
            'com.meituan.android.mrn.container.MRNBaseActivity',
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
          matches:
            '([text="定位服务授权"] +n * @*[clickable=true] [text="暂不开启"]) || (TextView[text="定位服务授权"] +n ViewGroup > @ViewGroup[clickable=true] > TextView[text="暂不开启"]) || (TextView[text="定位服务授权"] +n ViewGroup > ViewGroup > @ViewGroup[clickable=true] > TextView[text="暂不开启"])',
        },
      ],
    },
    {
      key: 6,
      name: '美团0.01提交订单',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 0,
          activityIds: 'com.meituan.android.mrn.container.MRNStandardActivity',
          matches: '[text="合计"] + [text="¥0.01"] <<n * + * [text="提交订单"]',
        },
      ],
    },
    {
      key: 7,
      name: '0元购提交',
      desc: '251121',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.meituan.android.mrn.container.MRNStandardActivity',
          matches: '[text="¥0"] - [text="合计"] <<n * + * >3 [text="提交订单"]',
        },
      ],
    },
    {
      key: 8,
      name: '0元购立即团购',
      desc: '251121，D',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 2000,
          activityIds: 'com.meituan.android.mrn.container.MRNStandardActivity',
          matches: '[text="折后 ￥0"] + [text="立即团购"]',
        },
      ],
    },
    {
      key: 9,
      name: '我已阅读并同意',
      desc: '260726',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionMaximum: 1,
          matchTime: 2000,
          activityIds: 'com.meituan.android.mrn.container.MRNStandardActivity',
          matches:
            '(ViewGroup > @ViewGroup[clickable=true][visibleToUser=true] + TextView[text^="我已阅读并同意"]) || (ViewGroup > @ViewGroup[clickable=true][visibleToUser=true] + TextView[text^="我已阅读并同意"] + ViewGroup > TextView[text="《用户授权协议》"])',
        },
      ],
    },
    {
      key: 10,
      name: '分享直播间抽奖',
      desc: 'D，占位，重复12，关闭下方抽奖提示',
      rules: [
        {
          activityIds: 'com.dianping.live.live.mrn.MLiveMRNActivity',
          matches: '[text="幸运抽奖"] +2 ImageView',
          matchTime: 1000,
          resetMatch: 'activity',
        },
      ],
    },
    {
      key: 11,
      name: '直播间任务，领亲密度，去逛逛',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 2000,
          fastQuery: true,
          activityIds: 'com.dianping.live.live.mrn.MLiveMRNActivity',
          matches: 'ViewGroup > TextView[text="领亲密度" || text="去逛逛"]',
        },
      ],
    },
    {
      key: 12,
      name: '直接间，幸运抽奖，X掉',
      desc: '260710',
      rules: [
        {
          resetMatch: 'match',
          matchTime: 2000,
          activityIds: 'com.dianping.live.live.mrn.MLiveMRNActivity',
          matches:
            'ViewGroup > TextView[text="幸运抽奖"] +2 ImageView[clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 13,
      name: '直播间小屋子领券，金额可自定义',
      desc: '260701',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionMaximum: 10,
          actionCd: 500,
          activityIds: [
            'com.dianping.live.live.mrn.MLiveMRNActivity',
            'com.dianping.live.live.mrn.square.MLiveSquareV2Activity',
          ],
          matches:
            '([text="80" || text="50" || text="60"] + [text="元"] +n *[clickable=true] > [text="领券"][visibleToUser=true]) || (TextView[text="80" || text="50" || text="60"] + TextView[text="元"] +n ViewGroup[clickable=true] > TextView[text="领券"][visibleToUser=true]) || (HorizontalScrollView > ViewGroup > ViewGroup > ViewGroup > ViewGroup > TextView[text="80" || text="50" || text="60"] + TextView[text="元"] +2 @ViewGroup[clickable=true] > TextView[text="领券"][visibleToUser=true])',
        },
      ],
    },
    {
      key: 14,
      name: '直播间右上角待领取',
      desc: '260701',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 500,
          actionMaximum: 10,
          activityIds: [
            'com.dianping.live.live.mrn.MLiveMRNActivity',
            'com.dianping.live.live.mrn.square.MLiveSquareV2Activity',
          ],
          matches:
            '([text="80" || text="50" || text="60"] + [text="元"] +n *[clickable=true] > [text="立即领取"][visibleToUser=true]) || (TextView[text="80" || text="50" || text="60"] + TextView[text="元"] +n ViewGroup[clickable=true] > TextView[text="立即领取"][visibleToUser=true]) || (HorizontalScrollView > ViewGroup > ViewGroup > ViewGroup > TextView[text="80" || text="50" || text="60"] + TextView[text="元"] +2 @ViewGroup[clickable=true] > TextView[text="立即领取"][visibleToUser=true])',
        },
      ],
    },
    {
      key: 15,
      name: '美团单车，定位服务未开启，去设置',
      desc: '260606',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 1000,
          activityIds:
            'com.meituan.android.bike.component.feature.main.view.MobikeMainActivity',
          matches:
            'FrameLayout[vid="custom"] > LinearLayout > TextView[text="定位服务未开启"] +2 LinearLayout > Button[text="去设置"]',
        },
      ],
    },
    {
      key: 16,
      name: '美团骑行需要获取地理位置，去设置',
      desc: '260518',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 1000,
          activityIds: 'com.meituan.msc.modules.container.MSCActivity',
          matches:
            '[vid="dlg_title"][text*="地理位置"] < * +n * > [vid="dlg_right_btn"][text="去设置"]',
        },
      ],
    },
    {
      key: 17,
      name: '定位服务未开启，去设置',
      desc: '260514',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 1000,
          activityIds:
            'com.meituan.android.bike.component.feature.main.view.MobikeMainActivity',
          matches: '([text="定位服务未开启"] +n * > [text="去设置"])',
        },
      ],
    },
    {
      key: 18,
      name: '膨胀奖励，开心收下',
      desc: '260402',
      rules: [
        {
          resetMatch: 'match',
          matchTime: 1000,
          activityIds: 'com.sankuai.titans.adapter.mtapp.KNBWebViewActivity',
          matches: '[text="恭喜获得膨胀奖励"] +n * > [text="开心收下"]',
        },
      ],
    },
    {
      key: 19,
      name: '请到广东过端午',
      desc: '260616',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sankuai.titans.adapter.mtapp.KNBWebViewActivity',
          matches:
            '(View > Image[text="f905330e6eb51af9eb75b55a4370b7c070746"] + View >n Image) || (Image[text="f905330e6eb51af9eb75b55a4370b7c070746"] < View + View > View > View > Image)',
        },
      ],
    },
    {
      key: 20,
      name: '免费膨胀1次',
      desc: '260107,增加IDS',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 1,
          actionMaximum: 2,
          activityIds: [
            'com.sankuai.titans.adapter.mtapp.KNBWebViewActivity',
            'com.sankuai.waimai.business.knb.WMMultiWebViewActivity',
          ],
          matches: '[text^="免费膨胀"]',
        },
      ],
    },
    {
      key: 21,
      name: '确定放弃侍款，确认离开',
      desc: '260227',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds:
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          matches: '[text="确定放弃付款？"] +n [text="确认离开"]',
        },
      ],
    },
    {
      key: 22,
      name: '上方提现悬浮窗',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          matchTime: 1000,
          activityIds: 'com.sankuai.meituan.search.result.SearchResultActivity',
          matches: '[vid="novel_inner_push_view"] >3 * +2 *',
        },
      ],
    },
    {
      key: 23,
      name: '上方横幅',
      desc: '251123',
      rules: [
        {
          resetMatch: 'match',
          matchTime: 1000,
          activityIds: 'com.meituan.android.pt.homepage.activity.MainActivity',
          matches: '[text="您的 18 元红包即将失效"] + ImageView',
        },
      ],
    },
    {
      key: 24,
      name: '右下角开启通知提示',
      desc: '260310，0元购：([text="确定兑换该商品？"] +n * [text="确认0元兑换"]) || ',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.meituan.traveltools.mrncontainer.HTMRNBaseActivity',
          matches:
            '(ImageView < @ViewGroup[clickable=true] + [text*="开启通知，不错过重要信息提醒"])',
        },
      ],
    },
    {
      key: 25,
      name: '0元购提交订单',
      desc: '251118，暂时先不添加，避免下单地址没有选好。',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionDelay: 3000,
          activityIds:
            'com.sankuai.waimai.bussiness.order.confirm.OrderConfirmNoTransActivity',
          matches:
            '[text="合计"] +n [text="¥"] + [text="0"] <<n * + * > [text="提交订单"]',
        },
      ],
    },
    {
      key: 26,
      name: '钱包笔笔返，领取骑行返利，美团支付',
      desc: '260528',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: 'com.sankuai.eh.framework.EHContainerActivity',
          matches:
            'View[clickable=true][visibleToUser=true] [text="骑行返利" || text="美团支付"]',
        },
      ],
    },
    {
      key: 27,
      name: '美妙三八',
      desc: '260305',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          activityIds: 'com.sankuai.waimai.business.knb.TakeoutKNBWebActivity',
          matches:
            '@View[clickable=true] [text="立即抢券"] < * - [text="满38可用"] - * > [text="38"]',
        },
      ],
    },
  ],
});
