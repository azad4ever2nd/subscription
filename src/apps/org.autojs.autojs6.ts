import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'org.autojs.autojs6',
  name: 'AutoJs6',
  groups: [
    {
      key: 1,
      name: '检测到新版，稍后提示',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'org.autojs.autojs.ui.main.MainActivity',
          matches:
            'LinearLayout > TextView[text^="检测到新版本"][vid="snackbar_text"] + @Button[text="稍后提示"][vid="snackbar_action_two"][clickable=true][visibleToUser=true] + Button[text="查看更新"][vid="snackbar_action_one"]',
        },
      ],
    },
  ],
});
