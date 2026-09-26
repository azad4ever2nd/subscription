import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cctv.yangshipin.app.androidp',
  name: '央视频',
  groups: [
    {
      key: 1,
      name: '弹窗，未中奖，X掉',
      desc: '260926',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.tencent.videolite.android.business.webview.interact.H5InteractActivity',
          matches:
            'View > View > View > Image[text="icon_popclose"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
