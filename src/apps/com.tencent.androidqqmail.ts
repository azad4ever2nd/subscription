import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.androidqqmail',
  name: 'QQ邮箱',
  groups: [
    {
      key: 1,
      name: '开启通知',
      desc: '260131',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tencent.qqmail.activity.setting.GesturePwdActivity',
          matches: '@[text="以后再说"] + [text="立刻开启"]',
        },
      ],
    },
    {
      key: 2,
      name: '彻底删除，确定删除',
      desc: '260528，增加IDS',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.tencent.qqmail.fragment.base.MailFragmentActivity',
            'com.tencent.qqmail.activity.readmail.ReadMailActivity',
          ],
          matches:
            '([text="彻底删除​"] +n * [text="取消"] + [text="确定删除"]) || ([text="彻底删除​"] +n * > [text="确定删除"])',
        },
      ],
    },
  ],
});
