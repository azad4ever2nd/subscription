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
  ],
});
