import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.wallet',
  name: '华为钱包',
  groups: [
    {
      key: 1,
      name: '发现新版本',
      desc: '',
      rules: [
        {
          matches: ['[text="发现新版本"] <<2 * +2 * >2 [text="以后再说"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.updatesdk.service.otaupdate.AppUpdateActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '开启通知',
      desc: '',
      rules: [
        {
          matches: [
            '@[vid="iv_notification_close"][desc="关闭"] + [vid="tv_notification_title"]',
          ],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: ['com.huawei.wallet.view.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '定位权限',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="location_tip_title"][text*="位置权限"] <<5 * + [vid="button_layout"] > [vid="cancel"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.huawei.pay.ui.PermissionsActivity'],
        },
      ],
    },
  ],
});
