import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '251208，添加代理提醒',
      rules: [
        {
          matches: [
            '([vid="popup_ad_image"] + [vid="popup_close"]) || ([vid="bcm_alert_dialog_content"] + * > [vid="dialog_bottom_confirm_cancel"][text="继续使用"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.bankcomm.module.biz.home.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '风评已过期',
      desc: '260223',
      rules: [
        {
          matches: [
            '[vid="popup_busines_title"][text="您的风险测评已过期"] +n [vid="popup_business_ib_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.bankcomm.module.biz.home.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '最红星期五',
      desc: '',
      rules: [
        {
          matches: [
            '@[id="copy"][text*="立即购买"] <<n * - * [text="最红星期五"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '领券中心,精选推荐',
      desc: '260312,指定领第3个index=2',
      rules: [
        {
          matches: [
            '[text="ACIM_20250901000022_20250901111730286"] <<n * + * > *[index=2] >n [text="立即领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '领券中心,信用卡专享好券，还款券',
      desc: '260419，第一个index=0',
      rules: [
        {
          matches: [
            '[text="ACIM_20250725000139_20250725155808212"] <<n * + * > *[index=0] [text="立即领取"]',
          ],
          actionCd: 100,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '领券中心，优选美食，线下门票展码立减，指定领第3个index=2,',
      desc: '260312，规则先暂时定好定位',
      rules: [
        {
          matches: [
            '[text="ACIM_20250530000096_20250530170818619"] <<n * + * > *[index=2] [text="立即领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '领券中心，品质商超，扫一扫门店享优惠，暂时指定领第2张index=1',
      desc: '260312，规则先暂时定好定位',
      rules: [
        {
          matches: [
            '[text="ACIM_20251027000174_20251027163532007"] <<n * + * > *[index=1] [text="立即领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '领券中心，郊游通勤 低碳出行，暂时指定领第3张index=2',
      desc: '260312，规则先暂时定好定位',
      rules: [
        {
          matches: [
            '[text="ACIM_20260302000116_20260302113642643"] <<n * + * > *[index=2] [text="立即领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '领券中心，娱乐影音，优酷-3',
      desc: '260223，优酷是第3个，index=2',
      rules: [
        {
          matches: [
            '[text="ACIM_20260206000011_20260206101205385"] <<n * + * > *[index=2] [text="立即领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '领券中心，周五12点云网券',
      desc: '260313',
      rules: [
        {
          matches: [
            '[text="ACIM_20260311000149_20260311171809982"] <<n * + * [text="立即领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '当前奖励已领完',
      desc: '260209',
      rules: [
        {
          action: 'back',
          matches: ['[id="dialogInnerDiv"][text^="当前奖励已领完"]'],
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '人数太多，关闭',
      desc: '260403，增加服务器在忙，上限',
      rules: [
        {
          actionCd: 100,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '[id="dialogInnerDiv"][text^="哎呀" || text^="人数太多" || text*="次数上限" || text^="服务器在忙" || text$="请稍后再试" ] <<n * + * > [text="关闭"]',
        },
      ],
    },
    {
      key: 13,
      name: '每月一次，爱优哔 立即领取',
      desc: '251206，',
      rules: [
        {
          matches: ['[text*="每日限量，10点更新库存"] + * > [text="立即领取"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '爱优哔已领完，返回',
      desc: '251206',
      rules: [
        {
          action: 'back',
          matches: [
            '[text*="券每日限量，10点更新库存"] + * > [text="周期已领完"]',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '碳星任务，点击签到',
      desc: '251121',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text="碳星任务"] [text="点击签到"]) || ([text="+1"] + [text="点击签到"])',
          ],
          actionMaximum: 2,
          matchDelay: 1000,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '能量签到完成',
      desc: '251122',
      rules: [
        {
          matches: ['[text="恭喜您签到成功"] +n [text="我知道了"]'],
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '碳星星级礼',
      desc: '251227，D',
      rules: [
        {
          matches: [
            '[text$="星礼"] +(2,3,4,5,6) * [text="2lingqublue_1758591208946"]',
          ],
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '浏览任务完成',
      desc: '251127,添加权限弹窗，直播间ids',
      rules: [
        {
          action: 'back',
          matches: [
            '([id="android:id/message"][text*="权限"] <<n * + [id="android:id/buttonPanel"] [id="android:id/button2"][text="否"] + [id="android:id/button1"][text="是"]) || ([text="Pyi3KQBzgJA1F+Xm7MrWYA0HQqTcq4GrAAAAAASUVORK5CYII="])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.bcmvideo.BCMVerticalVideoActivity',
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '恭喜中奖了',
      desc: '',
      rules: [
        {
          matches: ['[text^="恭喜"] + TextView + Image + *'],
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '抽奖弹窗，关闭',
      desc: '260228',
      rules: [
        {
          matches: [
            '[text="恭喜获得"] +n Image[clickable=true][index=parent.childCount.minus(1)]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '终止心愿',
      desc: '251201，整合终止和确认过程，关注任务',
      rules: [
        {
          matches: [
            '(@[text="知道了"] + [text="去查看"]) || ([text="终止心愿"] <<n * + * > [text="确认"]) || ([text="暂停心愿"] + [text="终止心愿"])',
          ],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '惠民贷广告',
      desc: '',
      rules: [
        {
          matches: ['* + [text="您的申请尚未完成"] +3 * > [text="退出申请"]'],
          resetMatch: 'app',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '系统定位权限未开启,暂不开启',
      desc: '251207,',
      rules: [
        {
          matches: [
            '[vid="dialog_alert_title"][text="系统定位权限未开启"] +n * > [vid="dialog_bottom_confirm_cancel"][text="暂不提醒"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.tinyapp.activity.TinyAppHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '领券中心，1分购',
      desc: '260327，可以指定抢什么券，朴朴，移动，联通，美团，闪购，',
      rules: [
        {
          matches: [
            '@*[clickable=true] [text*="移动" || text*="联通"] +n * [text="0."] + [text="01"] + * > [text="立即抢购"]',
          ],
          actionCd: 100,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.unionpay.cordova.UPActivityWeb'],
        },
      ],
    },
    {
      key: 25,
      name: '领券中心，1分购，立即抢购',
      desc: '260327',
      rules: [
        {
          matches: [
            '[text="￥ 0.01"] + [text="预估到手价"] + [text*="抢购" || text="立即抢购"]',
          ],
          actionCd: 100,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.unionpay.cordova.UPActivityWeb'],
        },
      ],
    },
    {
      key: 26,
      name: '领券中心，1分购，达到限购次数，返回',
      desc: '260327',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="￥ 0.01"] + [text="预估到手价"] + [text^="达到限购次数" || text="已抢光"]',
          ],
          actionCd: 200,
          resetMatch: 'match',
          activityIds: ['com.unionpay.cordova.UPActivityWeb'],
        },
      ],
    },
    {
      key: 27,
      name: '领券中心,信用卡专享好券，刷卡金',
      desc: '260419，周五或周日再领，集齐2张再用，第二个index=1',
      rules: [
        {
          matches: [
            '[text="ACIM_20250725000139_20250725155808212"] <<n * + * > *[index=1] [text="立即领取"]',
          ],
          actionCd: 100,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '达美乐50元代金券',
      desc: '260403',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches: '@View [text="达美乐50元代金券"]',
        },
      ],
    },
    {
      key: 29,
      name: '达美乐售罄，返回',
      desc: '260403，D,先占位',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          action: 'back',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '[text="达美乐50元代金券"] <<n * + * [id="copy"][text="已售罄"]',
        },
      ],
    },
  ],
});
