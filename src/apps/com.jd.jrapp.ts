import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.jd.jrapp',
  name: '京东金融',
  groups: [
    {
      key: 1,
      name: '发现新版本',
      desc: '260831',
      rules: [
        {
          anyMatches: [
            '@ImageButton[vid="ib_close"][clickable=true][visibleToUser=true] + FrameLayout TextView[vid="tv_main_title"][text^="发现新版本"]',
            '[vid="tv_title"][text*="新版本"] <<n * + [vid="ib_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.mainbox.main.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '打开通知提醒',
      desc: '251125',
      rules: [
        {
          matches: [
            '[vid="tv_title1"][text="打开通知提醒"] + [vid="iv_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.mainbox.main.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，彩票券待领取，X掉',
      desc: '261009',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.bm.mainbox.main.MainActivity',
          matches:
            'View > View[childCount=2] > @TextView[text.length=0][clickable=true][visibleToUser=true] + Button[text*="预计" && text*="立即购买"]',
        },
      ],
    },
    {
      key: 4,
      name: '弹窗，查看我的金条',
      desc: '251130',
      rules: [
        {
          matches: ['TextView + * > [text="查看我的金条"]'],
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
        },
      ],
    },

    {
      key: 5,
      name: '开通贷款功能',
      desc: '260110',
      rules: [
        {
          matches: [
            '@TextView[text=""] +n [text="立即领取"] + [text*="同意报送"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '将本页添加到首页中',
      desc: '260221',
      rules: [
        {
          matches: [
            '@[vid="jrapp_web_btm_close"] <<n * +n [vid="jrapp_web_btm_know"][text="我知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.jd.jrapp.bm.common.web.ui.WebActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '弹窗，邀友办卡，X掉',
      desc: '260831',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.jd.jrapp.bm.common.web.ui.WebActivity',
          matches:
            'View > @Image[text="关闭"][clickable=false][visibleToUser=true] + View > Image[text="045b26c3268cb28a.png!q70"]',
        },
      ],
    },
    {
      key: 8,
      name: '弹窗，开启重要消息提醒，X掉',
      desc: '261009',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: '.bm.jrv8.JRCustomDyPageActivity',
          matches:
            'ViewGroup > @ImageView[vid="iv_close"][clickable=true][visibleToUser=true] +n TextView[text="开启重要消息提醒"][vid="tv_title1"]',
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，推荐活动，X掉',
      desc: '261016',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.bm.common.web.ui.WebActivity',
          matches:
            'View > View > TextView[text="推荐活动"] +n View > Image[text="关闭"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 10,
      name: '弹窗，联名卡，X掉',
      desc: '261026',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.bm.common.web.ui.WebActivity',
          anyMatches: [
            'WebView > Image[text="close"][clickable=true][index=parent.childCount.minus(1)][visibleToUser=true]',
            'WebView[text="京东联名卡"] > Image[text="close"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '签到领京豆，点击领取',
      desc: '261026',
      rules: [
        {
          resetMatch: 'match',
          activityIds: '.bm.common.web.ui.WebActivity',
          matches:
            'View[id="SIGNUP"] > TextView[text="签到领京豆"] +n TextView[text="点击领取"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
