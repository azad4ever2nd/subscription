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
    {
      key: 3,
      name: '忽略更新',
      desc: '260523',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          fastQuery: true,
          activityIds:
            'com.huawei.appmarket.service.appmgr.view.activity.AppUpdateActivity',
          matches:
            '* > [vid="item_delete_button"][text="卸载"] + [vid="app_update_ignore_button"][text="忽略更新"][visibleToUser=true]',
        },
      ],
    },
    {
      key: 4,
      name: '安装提醒，继续安装',
      desc: '260523',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionMaximum: 1,
          activityIds:
            'com.huawei.appgallery.systeminstalldistservice.riskcheck.ui.activity.InstallDistActivity',
          matches:
            '[vid="hidden_card_hw_appmarket_install"][text="查找类似应用"] <n * + * [vid="hidden_card_install_button_continue"][text="继续安装"]',
        },
      ],
    },
    {
      key: 5,
      name: '安装成功',
      desc: '260523',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          fastQuery: true,
          activityIds:
            'com.huawei.appgallery.systeminstalldistservice.riskcheck.ui.activity.InstallDistActivity',
          matches:
            '[name="android.widget.TextView"][text="安装成功"] <<n * + * [vid="hidden_card_install_completed_button_completed"][text="完成"][visibleToUser=true]',
        },
      ],
    },
  ],
});
