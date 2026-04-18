import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'tool.seagull.v',
  name: '海鸥加速器',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260305',
      rules: [
        {
          matches: [
            '([id="android:id/button1"][text="确认"]) || ([id="android:id/message"][text*="广告签到" && text*="金币(登录)或者VIP流量(未登录)"] <<n * + * [id="android:id/button1"][text="确认"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['tool.seagull.v.ui.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '广告1',
      desc: '260416,添加新规则 ([text="奖励已发放"] <n * +n * > Button) || ([id="dismiss-button"] [text="关闭" || text="Close"]) || ',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '(@[id="close-button"] > [text="关闭广告并继续打开应用" || text="继续使用应用"] + View) || ([text="Close" || text="关闭"][clickable=true]) || ([id="dismiss-button"])|| (@*[clickable=true] > [text="Close"])',
          ],
          actionCd: 100,
          resetMatch: 'match',
          activityIds: ['com.google.android.gms.ads.AdActivity'],
        },
      ],
    },
  ],
});
