import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.achievo.vipshop',
  name: '唯品会',
  groups: [
    {
      key: 1,
      name: '软件更新，忽略',
      desc: '251210',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.achievo.vipshop.activity.LodingActivity',
          matches:
            '[vid="content"] <n [vid="dialog_container"] + [vid="left_button"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，发送通知，不允许',
      desc: '260919',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.achievo.vipshop.activity.LodingActivity',
          matches:
            'FrameLayout > ViewGroup > TextView[vid="tv_title"][text$="发送通知"] + * + @TextView[text="不允许"][vid="button_left"][clickable=true][visibleToUser=true] + TextView[text="允许"][vid="button_right"]',
        },
      ],
    },
  ],
});
