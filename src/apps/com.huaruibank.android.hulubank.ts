import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huaruibank.android.hulubank',
  name: '华瑞银行',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '251127，整合立即签到，签到成功，去签到，',
      rules: [
        {
          matches: [
            '([text="立即签到"]) || (@View - View >2 [text="签到成功"]) || ([text="20240711bb0ad1ae88fe4256b4d31f889471965a"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 2,
      name: '签到成功',
      desc: '',
      rules: [
        {
          matches: ['@View - View >2 [text="签到成功"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 3,
      name: '点亮拼图',
      desc: '',
      rules: [
        {
          matches: [
            '[id="undefined"] +2 * [text="202407112ad9a9a4f18048cfbc9e21895e42d0cc"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 4,
      name: '去签到',
      desc: '',
      rules: [
        {
          matches: ['[text="20240711bb0ad1ae88fe4256b4d31f889471965a"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '登陆',
      desc: '',
      rules: [
        {
          matches: [
            '[text="你好"] <<n FrameLayout[childCount=3] > FrameLayout[childCount=1] > ImageView',
          ],
          actionMaximum: 1,
          matchTime: 10000,
          resetMatch: 'app',
          activityIds: ['com.shrb.mbank.ui.XcmsActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '今日已签到',
      desc: '251127，返回',
      rules: [
        {
          action: 'back',
          matches: ['[text="今日已签到"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
  ],
});
