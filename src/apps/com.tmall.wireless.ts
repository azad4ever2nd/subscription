import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tmall.wireless',
  name: '天猫',
  groups: [
    {
      key: 1,
      name: '弹窗，升级体验更好，取消',
      desc: '261107',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: '.themis.container.TMThemisActivity',
          matches:
            'FrameLayout + LinearLayout > @RelativeLayout[vid="update_button_cancel"][clickable=false][visibleToUser=true] > TextView[text="取消"][clickable=false][visibleToUser=true]',
        },
      ],
    },
  ],
});
