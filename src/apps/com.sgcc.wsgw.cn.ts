import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sgcc.wsgw.cn',
  name: '网上国网',
  groups: [
    {
      key: 1,
      name: '签到',
      desc: '260111，添加补签成功[text="知道啦"] < * + * > Image',
      rules: [
        {
          matches: [
            '([text="签到成功"] + [text^="恭喜您获得" || text*="签到金"] + *) || ([text="签到成功"] +2 @* + * > Image) || ([text="补签成功"] +3 *)',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
            'com.sgcc.wsgw.rnbundle.activity.HomeReactActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '升级公告',
      desc: '[text="知道啦"] < * + * > Image',
      rules: [
        {
          matches: ['[text="签到功能升级公告"] +2 * > Image'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '抽金币',
      desc: '',
      rules: [
        {
          matches: ['[text^="抽中"] + *'],
          activityIds: ['com.sgcc.wsgw.mainbundle.ElectricTitleActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '系统升级公告',
      desc: '',
      rules: [
        {
          matches: ['@[desc="关闭"] > *'],
          resetMatch: 'match',
          activityIds: ['com.sgcc.wsgw.rnbundle.activity.HomeReactActivity'],
        },
      ],
    },
  ],
});
