import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.deepseek.chat',
  name: 'DeepSeek',
  groups: [
    {
      key: 1,
      name: '长按菜单，删除',
      desc: '260610',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.deepseek.chat.MainActivity',
          matches:
            'ScrollView[childCount=3] > View + View + @View > TextView[text="删除"]',
        },
      ],
    },
    {
      key: 2,
      name: '永久删除对话，删除',
      desc: '260610',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.deepseek.chat.MainActivity',
          matches:
            'View > TextView[text="永久删除对话"] +3 @View > TextView[text="删除"]',
        },
      ],
    },
  ],
});
