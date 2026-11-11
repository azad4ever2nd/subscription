import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.microsoft.todos',
  name: 'To Do',
  groups: [
    {
      key: 1,
      name: '任务，勾选 今天到期的',
      desc: '261111',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          forcedTime: 3000,
          actionCd: 3000,
          activityIds: '.detailview.DetailViewActivity',
          matches:
            '@FrameLayout[vid="task_checkbox"][desc*="未完成任务"][clickable=true][visibleToUser=true] <3 ViewGroup < ScrollView + RecyclerView >4 LinearLayout > TextView[text="今天 到期"][vid="duedate_textview"]', //261111，任务界面，勾选今天过期的
        },
      ],
    },
  ],
});
