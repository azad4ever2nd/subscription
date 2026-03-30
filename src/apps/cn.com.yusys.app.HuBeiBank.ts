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
  ],
});
