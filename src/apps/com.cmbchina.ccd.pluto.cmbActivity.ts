import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmbchina.ccd.pluto.cmbActivity',
  name: '掌上生活',
  groups: [
    {
      key: 1,
      name: '首页广告',
      desc: '',
      rules: [
        {
          matches: ['[vid="advertise_iv"] +2 [vid="advertise_close_img"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmbBVAXA85',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '发现新版本',
      desc: '260313',
      rules: [
        {
          matches: [
            '([vid="tv_title"][text="发现新版本"] <<n * + * [vid="bt_cancel_tips"][text="暂不更新"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2'],
        },
      ],
    },
    {
      key: 3,
      name: '周三必胜客',
      desc: '',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '周三5折哈根达斯',
      desc: '',
      rules: [
        {
          matches: [
            '[text="（周三5折）哈根达斯50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '周三5拍必胜客',
      desc: '',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '周三5拍肯德基',
      desc: '',
      rules: [
        {
          matches: [
            '[text="（周三5折）肯德基20元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '卖光了',
      desc: '',
      rules: [
        {
          action: 'back',
          matches: ['[vid="bootom_ll"] >2 [text="卖光了"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '再试一次',
      desc: '周三5折失败',
      rules: [
        {
          matches: ['[text="抢购失败"] +3 [text="再试一次"]'],
          resetMatch: 'match',
          activityIds: [
            'com.project.foundation.cmbView.cmbwebviewv2.cmbBX5JO9N',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '周五红包雨结束',
      desc: '中奖',
      rules: [
        {
          matches: ['[text="红包雨"] @[id="close-btn"] + * >n [text="去查看"]'],
          resetMatch: 'app',
          activityIds: [
            'com.project.foundation.cmbView.cmbwebviewv2.cmbBX5JO9N',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '周三5折',
      desc: '整合进一条规则',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券"] <<n * + [vid="bootom_ll"] >2 [text^="立即抢购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmb57XONQ',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '周三5折列表',
      desc: '',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券" ] +3 * > [text="立即抢购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmbchina.ccd.pluto.cmbActivity.o2oMealTicket.activity.cmbTPSREK',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '弹窗2',
      desc: '260313，添加开启消息通知',
      rules: [
        {
          matches: [
            '([vid="tv_ad_label" || vid="img_cf_view_close"] + [vid="img_cf_view_close"]) || ([vid="tv_title"] <<n * + [vid="iv_close"]) || ([vid="img_cf_view_close"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cmbchina.ccd.pluto.cmbActivity.CMBRootActivityV2'],
        },
      ],
    },
  ],
});
