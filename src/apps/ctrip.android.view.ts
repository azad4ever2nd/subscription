import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'ctrip.android.view',
  name: '携程旅行',
  groups: [
    {
      key: 1,
      name: '升级或新版本',
      desc: '新版本@[vid="a"][desc="关闭"] - * > [vid="a"][text*="新版本"] 整合 立即升级',
      rules: [
        {
          matches: [
            '[vid="a"][text*="新版本" || text*="升级"] <<n * + [vid="a"][desc="关闭"]',
          ],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'ctrip.android.publicproduct.home.business.activity.CtripHomeActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '开启推送通知',
      desc: '',
      rules: [
        {
          matches: ['[text="去开启"] < * + Image'],
          resetMatch: 'match',
          activityIds: ['ctrip.android.view.h5v2.view.H5Container'],
        },
      ],
    },
    {
      key: 3,
      name: '签到',
      desc: '',
      rules: [
        {
          matches: [
            '[id="NotificationModal"] +2 * [id="signBtnInModal"][text="立即签到"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['ctrip.android.view.h5v2.view.H5Container'],
        },
      ],
    },
    {
      key: 4,
      name: '发现一波红包，一键领取，X掉',
      desc: '260525',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'ctrip.android.reactnative.preloadv2.CRNBaseActivityV2',
          matches: '[desc="一键领取"] <n * + @*[clickable=true] > ImageView',
        },
      ],
    },
    {
      key: 5,
      name: '618弹窗',
      desc: '260609',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'ctrip.android.publicproduct.home.business.activity.CtripHomeActivity',
          matches:
            '(@[vid="a"][clickable=true] < * + *[vid="a"] [text="立刻领取"]) || (RelativeLayout > RelativeLayout[vid="a"] - RelativeLayout > ImageView[vid="a"])',
        },
      ],
    },
    {
      key: 6,
      name: '签到后弹窗',
      desc: '260601，解决clickable bug',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'ctrip.android.view.h5v2.view.H5Container',
          matches:
            '([id="popup_bg-id"] <n * +n TextView[text=""][childCount=0][clickable=true][visibleToUser=true]) || ([id="popup_bg-id"] <<n * +n TextView[text=""][childCount=0][visibleToUser=true])',
        },
      ],
    },
    {
      key: 7,
      name: '确定退出吗，x掉',
      desc: '26/6/7',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'ctrip.android.view.h5v2.view.H5Container',
          matches:
            'View > @Image + View + View > [text="继续退出"] + [text="去淘宝闪购"]',
        },
      ],
    },
    {
      key: 8,
      name: '升级，开心收下',
      desc: '260610',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'ctrip.android.view.h5v2.view.H5Container',
          matches: 'View > View > View > View > TextView[text="开心收下"]',
        },
      ],
    },
  ],
});
