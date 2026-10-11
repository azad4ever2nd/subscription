import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.Qunar',
  name: '去哪儿旅行',
  groups: [
    {
      key: 1,
      name: '弹窗，实名，X掉',
      desc: '261011',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.mqunar.atom.alexhome.ui.activity.MainActivity',
          matches:
            'ViewGroup > @ViewGroup[desc="cmn_mine_rn|Popup|close"][clickable=true][visibleToUser=true] > TextView[text.length=1]',
        },
      ],
    },
  ],
});
