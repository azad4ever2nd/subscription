import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.mms',
  name: '信息',
  groups: [
    {
      key: 1,
      name: '1.删除1',
      desc: '华为',
      rules: [
        {
          matches: [
            '[text^="是否删除"] <<n [id="android:id/contentPanel"] + [id="android:id/buttonPanel"] >2 @[text*="删除"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.android.mms.ui.ConversationList',
            'com.android.mms.ui.ComposeMessageActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '删除2',
      desc: '小米',
      rules: [
        {
          matches: [
            '[vid="alertTitle"][text="删除"] < [vid="topPanel"] +n [vid="buttonPanel"] > [text*="删除"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.android.mms.ui.DeleteMessageDialogActivity',
            'com.android.mms.ui.MmsTabActivity',
            'com.android.mms.ui.SingleRecipientConversationActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '取消收藏',
      desc: '小米',
      rules: [
        {
          matches: [
            '[text*="收藏"] <<n [vid="contentPanel"] < * + [vid="buttonPanel"] > [text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.android.mms.ui.FlatMessageListActivity'],
        },
      ],
    },
  ],
});
