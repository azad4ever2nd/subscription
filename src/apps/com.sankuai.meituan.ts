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
          matches: ['[text="￥0"] < * +2 * > [text="去结算"]'],
          fastQuery: true,
          matchTime: 10000,
          resetMatch: 'activity',
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '0元购立即支付',
      desc: '',
      rules: [
        {
          matches: ['[text="￥0"] < * +2 * > [text="立即支付"]'],
          fastQuery: true,
          matchTime: 10000,
          resetMatch: 'activity',
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '确认到店自取门店',
      desc: '',
      rules: [
        {
          matches: ['[text="更换门店"] < * +2 * > [text="确认门店并支付"]'],
          fastQuery: true,
          matchTime: 10000,
          resetMatch: 'activity',
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '定位服务授权，暂不开启',
      desc: '260329',
      rules: [
        {
          matches: [
            '[text="定位服务授权"] +n * @*[clickable=true] [text="暂不开启"]',
          ],
          actionCd: 1000,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '分享直播间抽奖',
      desc: '关闭下方抽奖提示',
      rules: [
        {
          matches: ['[text="幸运抽奖"] +2 ImageView'],
          matchTime: 10000,
          resetMatch: 'activity',
          activityIds: ['com.dianping.live.live.mrn.MLiveMRNActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '上方提现悬浮窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="novel_inner_push_view"] >3 * +2 *'],
          resetMatch: 'match',
          activityIds: [
            'com.sankuai.meituan.search.result.SearchResultActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '美团0.01提交订单',
      desc: '',
      rules: [
        {
          matches: [
            '[text="合计"] + [text="¥0.01"] <<n * + * [text="提交订单"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '免费膨胀1次',
      desc: '260107,增加IDS',
      rules: [
        {
          matches: ['[text^="免费膨胀"]'],
          actionCdKey: 1,
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'com.sankuai.waimai.business.knb.WMMultiWebViewActivity',
            'com.sankuai.titans.adapter.mtapp.KNBWebViewActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '0元购提交',
      desc: '251121',
      rules: [
        {
          matches: [
            '[text="¥0"] - [text="合计"] <<n * + * >3 [text="提交订单"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '0元购立即团购',
      desc: '251121',
      rules: [
        {
          matches: ['[text="折后 ￥0"] + [text="立即团购"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.meituan.android.mrn.container.MRNStandardActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '上方横幅',
      desc: '251123',
      rules: [
        {
          matches: ['[text="您的 18 元红包即将失效"] + ImageView'],
          resetMatch: 'match',
          activityIds: [
            'com.meituan.android.pt.homepage.activity.MainActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '直播间任务领亲密度',
      desc: '251203',
      rules: [
        {
          matches: ['ViewGroup > [text="领亲密度" || text="去逛逛"]'],
          fastQuery: true,
          matchDelay: 10000,
          resetMatch: 'match',
          activityIds: ['com.dianping.live.live.mrn.MLiveMRNActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '确定放弃侍款，确认离开',
      desc: '260227',
      rules: [
        {
          matches: ['[text="确定放弃付款？"] +n [text="确认离开"]'],
          resetMatch: 'match',
          activityIds: [
            'com.meituan.android.hybridcashier.HybridCashierActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '美妙三八',
      desc: '260305',
      rules: [
        {
          matches: [
            '@View[clickable=true] [text="立即抢券"] < * - [text="满38可用"] - * > [text="38"]',
          ],
          actionCd: 100,
          resetMatch: 'match',
          activityIds: [
            'com.sankuai.waimai.business.knb.TakeoutKNBWebActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '右下角开启通知提示',
      desc: '260310，0元购：([text="确定兑换该商品？"] +n * [text="确认0元兑换"]) || ',
      rules: [
        {
          matches: [
            '(ImageView < @ViewGroup[clickable=true] + [text*="开启通知，不错过重要信息提醒"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.meituan.traveltools.mrncontainer.HTMRNBaseActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '确认退出评价，退出',
      desc: '260312',
      rules: [
        {
          matches: ['[text="确认退出评价吗？"] +n * > [text="退出评价"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.meituan.android.mrn.container.MRNBaseActivity'],
        },
      ],
    },
    {
      key: 17,
      name: '膨胀奖励，开心收下',
      desc: '260402',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.sankuai.titans.adapter.mtapp.KNBWebViewActivity',
          matches: '[text="恭喜获得膨胀奖励"] +n * > [text="开心收下"]',
        },
      ],
    },
  ],
});
