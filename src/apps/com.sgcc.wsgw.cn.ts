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
    {
      key: 5,
      name: '湖北签到金限量兑换公告',
      desc: '260426',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.sgcc.wsgw.mainbundle.ElectricTitleActivity',
          matches: '[text="立即查看"] < View + View > *',
        },
      ],
    },
    {
      key: 6,
      name: '新版本，暂不升级',
      desc: '260503',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: 'com.sgcc.wsgw.rnbundle.activity.MyReactActivity',
          matches: '[text^="本次升级" || text*="更新"] + * > *',
        },
      ],
    },
  ],
});
