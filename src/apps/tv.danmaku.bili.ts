import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tv.danmaku.bili',
  name: '哔哩哔哩',
  groups: [
    {
      key: 1,
      name: '打开推送通知',
      desc: '260125',
      rules: [
        {
          matches: [
            '[vid="title"][text="打开推送通知"] +n * > [vid="close"][text="暂不开启"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['tv.danmaku.bili.MainActivityV2'],
        },
      ],
    },
    {
      key: 2,
      name: '青少年模式',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="title"][text="青少年模式"] +3 [vid="button"][text="我知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.bilibili.teenagersmode.ui.TeenagersModeDialogActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '流量使用提醒',
      desc: '',
      rules: [
        {
          matches: [
            '[id="android:id/button3"][text="免流量缓存"] + [id="android:id/button2"][text="取消"] + [id="android:id/button1"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '浏览回复中的图片，过几秒关闭',
      desc: '260123,图片5秒自动关闭',
      rules: [
        {
          matches: ['@[vid="close"] > ImageView'],
          actionDelay: 50000,
          resetMatch: 'match',
          activityIds: [
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '订阅通知，暂不开启',
      desc: '260427，增加IDS',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.bilibili.bplus.im.communication.HomeCommunicationActivity',
            'com.bilibili.ship.theseus.detail.UnitedBizDetailsActivity',
          ],
          matches:
            '[vid="title"][text="订阅感兴趣的通知"] +n * > [vid="close"]',
        },
      ],
    },
  ],
});
