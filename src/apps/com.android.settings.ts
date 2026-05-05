import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.settings',
  name: '设置',
  groups: [
    {
      key: 1,
      name: '启用百度输入法',
      desc: '',
      rules: [
        {
          matches: [
            '[text="百度输入法"] <<n [vid="head"] + [vid="end"] > [vid="enable_mode"][text="未启用"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.android.settings.SubSettings'],
        },
      ],
    },
    {
      key: 2,
      name: '注意，必须将手机解锁才能运行此应用',
      desc: '260227',
      rules: [
        {
          matches: [
            '[vid="message"][text="注意：重新启动后，您必须将手机解锁才能运行此应用"] <<n * + * > [id="android:id/button1"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.android.settings.SubSettings'],
        },
      ],
    },
    {
      key: 3,
      name: '启用百度输入法，风险提示',
      desc: '260227',
      rules: [
        {
          matches: [
            '[vid="alertTitle"][text="风险提示"] <<n * +n * > [id="android:id/button2"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.android.settings.SubSettings'],
        },
      ],
    },
    {
      key: 4,
      name: '开启位置服务，打开',
      desc: '260329，小米华为',
      rules: [
        {
          matches: [
            '[id="android:id/title"][text="开启位置服务" || text="访问我的位置信息"] <<n * +n * [id="android:id/switch_widget"][checked=false]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.android.settings.Settings$LocationSettingsActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '开启位置服务，打开后返回',
      desc: '260505，测试的小米',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 0,
          preKeys: [4],
          activityIds: 'com.android.settings.Settings$LocationSettingsActivity',
          matches:
            '@[vid="up"][desc="返回"] <<n * + * [id="android:id/title"][text="开启位置服务" || text="访问我的位置信息"] < * +n * > [id="android:id/switch_widget"][checked=true]',
        },
      ],
    },
    {
      key: 6,
      name: '连接与共享，自动打开NFC',
      desc: '260503，小米',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.android.settings.Settings$WirelessSettingsActivity',
          matches:
            '[vid="switch_text"][text="NFC"] + [vid="summary"][text="允许手机在接触其他设备时交换数据"] <n * + [id="android:id/switch_widget"][checked=false]',
        },
      ],
    },
    {
      key: 7,
      name: '连接与共享，自动打开NFC后，返回',
      desc: '260505，小米',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.android.settings.Settings$WirelessSettingsActivity',
          matches:
            '@[vid="up"][desc="返回"] <<n * + * [id="android:id/switch_widget"][checked=true] - * > [vid="switch_text"][text="NFC"]',
        },
      ],
    },
  ],
});
