import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 1,
      name: '首面广告',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmbBVAXA85',
          matches: '[vid="advertise_iv"] +2 [vid="advertise_close_img"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗2',
      desc: '260313，添加开启消息通知',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
          matches:
            '([vid="tv_ad_label" || vid="img_cf_view_close"] + [vid="img_cf_view_close"]) || ([vid="tv_title"] <<n * + [vid="iv_close"]) || ([vid="img_cf_view_close"])',
        },
      ],
    },
    {
      key: 3,
      name: '发现新版本',
      desc: '260313',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2',
          matches:
            '([vid="tv_title"][text="发现新版本"] <<n * + * [vid="bt_cancel_tips"][text="暂不更新"])',
        },
      ],
    },
    {
      key: 4,
      name: '周三5折列表',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmbTPSREK',
          matches:
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券" ] +3 * > [text="立即抢购"]',
        },
      ],
    },
    {
      key: 5,
      name: '周三5折',
      desc: '整合进一条规则',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          matches:
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
        },
      ],
    },
    {
      key: 6,
      name: '周三5折必胜客',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          matches:
            '[text="（周三5折）必胜客50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
        },
      ],
    },
    {
      key: 7,
      name: '周三5折喜茶',
      desc: '',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          matches:
            '[text="（周三5折）喜茶20元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
        },
      ],
    },
    {
      key: 8,
      name: '周三5折肯德基',
      desc: '',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          matches:
            '[text="（周三5折）肯德基20元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
        },
      ],
    },
    {
      key: 9,
      name: '周三5折哈根达斯',
      desc: '',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          matches:
            '[text="（周三5折）哈根达斯50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
        },
      ],
    },

    {
      key: 10,
      name: '卖光了',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          matches: '[vid="bootom_ll"] >2 [text="卖光了"]',
          action: 'back',
        },
      ],
    },
    {
      key: 11,
      name: '再试一次',
      desc: '周三5折失败',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.project.foundation.cmbView.cmbwebviewv2.cmbBX5JO9N',
          matches: '[text="抢购失败"] +3 [text="再试一次"]',
        },
      ],
    },
    {
      key: 12,
      name: '周五红包雨结束',
      desc: '中奖',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'app',
          activityIds: 'com.project.foundation.cmbView.cmbwebviewv2.cmbBX5JO9N',
          matches: '[text="红包雨"] @[id="close-btn"] + * >n [text="去查看"]',
        },
      ],
    },
  ],
});
