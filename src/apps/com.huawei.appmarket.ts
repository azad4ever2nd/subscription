import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.appmarket',
  name: '华为应用市场',
  groups: [
    {
      key: 1,
      name: '发现新版本',
      desc: '260319',
      rules: [
        {
          matches: [
            '[id="android:id/alertTitle"][text="发现新版本"] <<n * +n * [id="android:id/button2"][text="以后再说"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.appmarket.service.thirdupdate.ThirdUpdateActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: 'WLAN 闲时自动更新, WLAN 下自动更新应用，不用了',
      desc: '260329',
      rules: [
        {
          matches: [
            '[vid="updatemanager_choose_state_card_desc" || vid="updatemanager_choose_state_card_title"] <n * + * > [vid="updatemanager_choose_state_btn_no"]',
          ],
          actionCd: 0,
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity',
          ],
        },
      ],
    },
  ],
});
