import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnnx.eBank.android',
  name: '湖南农信',
  groups: [
    {
      key: 1,
      name: '弹窗，新版本，取消',
      desc: '260926',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.cqrcb.mainbundle.page.MainActivity',
          matches:
            'TextView[text="版本更新"][vid="tv_title"] < LinearLayout + LinearLayout > LinearLayout > @TextView[text="取消"][vid="tv_cancel"] + TextView[text="升级"][vid="tv_confirm"]',
        },
      ],
    },
  ],
});
