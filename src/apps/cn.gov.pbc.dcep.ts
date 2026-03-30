import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.gov.pbc.dcep',
  name: '数字人民币',
  groups: [
    {
      key: 1,
      name: '新版本',
      desc: '251203',
      rules: [
        {
          matches: [
            '[vid="upgrade_dialog_title"][text="发现新版本"] +n * [vid="upgrade_dialog_cancel"][text="下次再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.gov.pbc.dcep.main.activity.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '复制钱包编号，复制',
      desc: '260309',
      rules: [
        {
          matches: [
            '[vid="commonview_notice_title_question"][text="钱包编号"] +n * > [vid="commonview_notice_cancel_btn"][text="取消"] +n [vid="commonview_notice_ensure_btn"][text="复制"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.gov.pbc.dcep.main.activity.MainActivity'],
        },
      ],
    },
  ],
});
