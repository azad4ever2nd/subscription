import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.wps.moffice_eng',
  name: 'WPS Office',
  groups: [
    {
      key: 1,
      name: '仅保存纯文本内容,是否继续？',
      desc: '260502',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'cn.wps.moffice.writer.multiactivity.Writer1',
          matches:
            '[text="仅保存纯文本内容。\\n是否继续？"] <<n * + * [vid="dialog_button_positive"][text="继续"]',
        },
      ],
    },
  ],
});
