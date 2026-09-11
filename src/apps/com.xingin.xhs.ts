import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.xingin.xhs',
  name: '小红书',
  groups: [
    {
      key: 1,
      name: '弹窗，打开通知，X掉',
      desc: '260911，fastQuery=true,clickable=true',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          matches:
            'FrameLayout > @ImageView[vid="mNegativeImageView"][clickable=true][visibleToUser=true] - LinearLayout > TextView[text^="打开通知"][vid="mDescTextView"] + TextView[text="确认"][vid="mPositiveTextView"]',
        },
      ],
    },
    {
      key: 2,
      name: '打开通知',
      desc: '260208',
      rules: [
        {
          anyMatches: [
            '([vid="0_resource_name_obfuscated"] > [vid="0_resource_name_obfuscated"])',
            '([vid="mDescTextView"] <<n * +n [vid="mNegativeImageView"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '发送通知，拒绝',
      desc: '260629',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.xingin.authorization.NotificationAuthorizationTranslucentActivity',
          matches:
            'TextView[vid="tv_title"][text*="发送通知"] < LinearLayout + LinearLayout > TextView[vid="btn_deny"][clickable=true]',
        },
      ],
    },
    {
      key: 4,
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
      key: 5,
      name: '关注推送弹窗',
      desc: '260213',
      rules: [
        {
          anyMatches: [
            '([vid="guide"] [vid="close"])',
            '([vid="guideSnackBar"] [vid="closeButton"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.xingin.xhs.index.v2.IndexActivityV2'],
        },
      ],
    },
    {
      key: 6,
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
