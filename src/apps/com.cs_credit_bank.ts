import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cs_credit_bank',
  name: '发现精彩',
  groups: [
    {
      key: 1,
      name: '屈臣氏立即抢购',
      desc: '251202，添加双12，[text*="屈臣氏"] <<n * +5 * > [text="立即抢购"]',
      rules: [
        {
          matches: [
            '[text="【食力狂欢】1元抵12.12元代金券" || text*="屈臣氏"] <<n * +n @* > [text="立即抢购"]',
          ],
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '屈臣氏提交',
      desc: '',
      rules: [
        {
          matches: ['[text="确认订单"] +3 [text="提交"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 3,
      name: '周五5折',
      desc: '260426，增加跨年，布局有变，([text="5折"] +n * > [text="立即购买"])',
      rules: [
        {
          actionMaximum: 8,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text="5折"] +n @* > [text="立即购买" || text="立即抢购"]) || ([text="5折"] +n [text="立即购买" || text="立即抢购"])',
        },
      ],
    },
    {
      key: 4,
      name: '半价下单之后 提额弹窗，X掉',
      desc: '260426',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          actionMaximum: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@View[text.length=1] + [text="恭喜获得"] <n * +n [text="立即提升"]',
        },
      ],
    },
    {
      key: 5,
      name: '周五买一赠一',
      desc: '[text="可购1次"] + @Button +2 [text^="已抢"]',
      rules: [
        {
          matches: [
            '[text="可购1次"] + @Button <<3 * - * >4 [text*="买一赠一"]',
          ],
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="iv_advert"] - [vid="iv_close"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.mapass.example.activity.MainActivity_'],
        },
      ],
    },
    {
      key: 7,
      name: '首页悬浮窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="closeIvLogo"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.mapass.example.activity.MainActivity_'],
        },
      ],
    },
    {
      key: 8,
      name: '周五半价资格领取',
      desc: '[text="当月累计消费≥2000元"] +4 *',
      rules: [
        {
          matches: [
            '[text="当月累计消费≥2000元"] +3 [text^="广发日周五5折"] + [text="去领奖"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 9,
      name: '分期账单提示',
      desc: '260426,添加小额免密',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          actionMaximum: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text="开通小额免密支付"] + [text="暂不开通"]) || ([text="分期还账单"] + [text="暂不办理"])',
        },
      ],
    },
    {
      key: 10,
      name: '激活卡片提示',
      desc: '251121',
      rules: [
        {
          matches: ['[vid="cancel"][text="暂不激活"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mapass.example.activity.MainActivity_'],
        },
      ],
    },
    {
      key: 11,
      name: '抽奖结果弹窗',
      desc: '260410,action改为clickCenter测试',
      rules: [
        {
          actionCd: 0,
          action: 'clickCenter',
          fastQuery: true,
          resetMatch: 'match',
          matches: [
            '[text="查看奖品"] <n * + * > [text="popup_icon_close.15362f7"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 12,
      name: '付款后服务评价，暂不',
      desc: '260125',
      rules: [
        {
          matches: [
            '[vid="title"][text="服务评价"] < * +n * > [vid="cancel"][text="暂不"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 13,
      name: '打开定位，取消',
      desc: '260125',
      rules: [
        {
          matches: [
            '[vid="content"][text*="定位服务" || text*="位置"] < * +n * [vid="cancel"][text="取消"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.mapass.example.activity.SelectNationalCityActivity_',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '分期还账单，暂不办理',
      desc: '260403',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text="分期还账单"] + [text="暂不办理"]',
        },
      ],
    },
  ],
});
