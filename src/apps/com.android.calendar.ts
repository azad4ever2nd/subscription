import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.calendar',
  name: '日历',
  groups: [
    {
      key: 1,
      name: '弹窗，日历通知，稍后提醒',
      desc: '261111',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionDelay: 8000, //8秒没人按就稍后提醒
          actionCd: 2000,
          activityIds: '.alerts.AlertActivity',
          anyMatches: [
            'TextView[text="日历通知"][vid="alertTitle"] < LinearLayout[vid="topPanel"] + ScrollView + LinearLayout[vid="buttonPanel"] > @Button[text="稍后提醒"][clickable=true][visibleToUser=true] + Button[text="知道了"][clickable=true][visibleToUser=true]', //261111，弹窗，日历通知，稍后提醒
            'TextView[text="日历通知"][vid="alertTitle"] < LinearLayout[vid="topPanel"] + ScrollView + LinearLayout[vid="buttonPanel"] > Button[text="稍后提醒"] + Button[text="知道了"][clickable=true][visibleToUser=true]', //261111，弹窗，日历通知，知道了
          ],
        },
      ],
    },
  ],
});
