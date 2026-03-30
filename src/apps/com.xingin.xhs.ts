import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 1,
      name: '打开通知',
      desc: '260208',
      rules: [
        {
          matches: [
            '([vid="0_resource_name_obfuscated"] > [vid="0_resource_name_obfuscated"]) || ([vid="mDescTextView"] <<n * +n [vid="mNegativeImageView"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '开启通知',
      desc: '260209',
      rules: [
        {
          matches: [
            '([vid="0_resource_name_obfuscated"][text="开启"] + [vid="0_resource_name_obfuscated"]) || ([vid="notificationContentView"] + * > [vid="hintImageView"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.xingin.xhs.index.v2.IndexActivityV2'],
        },
      ],
    },
    {
      key: 3,
      name: '关注推送弹窗',
      desc: '260213',
      rules: [
        {
          matches: [
            '([vid="guide"] [vid="close"]) || ([vid="guideSnackBar"] [vid="closeButton"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xingin.xhs.index.v2.IndexActivityV2'],
        },
      ],
    },
    {
      key: 4,
      name: '删除全部搜索历史，确认',
      desc: '260213',
      rules: [
        {
          matches: [
            '[vid="title"][text="删除全部搜索历史"] + * > [vid="main_normal_btn"][text="确认"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xingin.alioth.search.GlobalSearchActivity'],
        },
      ],
    },
  ],
});
