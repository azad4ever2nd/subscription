import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.contacts',
  name: '联系人',
  groups: [
    {
      key: 1,
      name: '删除通话记录',
      desc: '251206',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.android.contacts.hap.calllog.CallLogMultiSelectionActivity',
          matches:
            '[text^="是否删除"] <<4 [id="android:id/contentPanel"] + [id="android:id/buttonPanel"] [text="删除"]',
        },
      ],
    },
  ],
});
