import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.yusys.app.HuBeiBank',
  name: '湖北银行',
  groups: [
    {
      key: 1,
      name: '立即更新',
      desc: '260101',
      rules: [
        {
          activityIds: 'io.dcloud.PandoraEntryActivity',
          resetMatch: 'match',
          matches:
            '[id="update"][text="立即更新"] +n [id="cancel"][text="稍后更新"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，关于更新，关闭',
      desc: '260831',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'io.dcloud.PandoraEntryActivity',
          matches:
            'View > View > TextView[text="关闭"][id="closeNews"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，通知，确定',
      desc: '261126',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.yitong.mobile.biz.launcher.app.main.MainActivity',
          matches:
            'LinearLayout > LinearLayout > TextView[text="查看详情"][vid="gt_gotoDetails"] + TextView[text="确定"][vid="tvNext"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
