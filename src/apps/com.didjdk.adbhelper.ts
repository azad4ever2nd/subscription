import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.didjdk.adbhelper',
  name: '甲壳虫ADB助手',
  groups: [
    {
      key: 1,
      name: '高级功能，取消',
      desc: '260621',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          matches:
            'ViewGroup > Button[text="使用ROOT运行"] + Button[text="解锁"] + Button[text="取消"][clickable=true]',
        },
      ],
    },
  ],
});
