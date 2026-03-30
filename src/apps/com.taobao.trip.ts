import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.trip',
  name: '飞猪旅行',
  groups: [
    {
      key: 1,
      name: '签到按钮',
      desc: '260225,',
      rules: [
        {
          matches: [
            '([text="今日签到"] <<n *[depth=19] + * > *[index=1]) || (@* > * + * > [text="今日签到" || text="门票订购"])',
          ],
          actionCd: 0,
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '签到成功',
      desc: '260329，漏签，动态，只能通过关键信息',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text*="天"] - [text="已连签"] - *) || (@* + [text="连签"] +n [text*="里程"]) || (@* + [text="已连签"] + [text$="里程"]) || (@*[clickable=true] + [text="连签"] +n [text="日可领"] +n [text="里程"]) || (@* + [text="连签"] +n [text="里程"])',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '新版本',
      desc: '260319，添加IDS，[vid="fliggy_update_content_layout"] + ',
      rules: [
        {
          matches: ['[vid="fliggy_update_cancel_btn"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.trip.flutter.TripFlutterActivity',
            'com.unionpay.activity.react.UPActivityReactNative',
            'fliggyx.android.unicorn.ActWebviewActivity',
            'com.taobao.trip.home.HomeActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '弹窗',
      desc: '260313',
      rules: [
        {
          matches: [
            '([text^="O1CN01TD5wn71Ptmtb9GAxE_!!6000000001899-2-tps-60-60"]) || ([text^="O1CN01EmIdr51vV7c1P87T9_!!6000000006177-2-tps-750-178"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'fliggyx.android.unicorn.ActWebviewActivity',
            'com.taobao.trip.home.HomeActivity',
            'com.taobao.trip.home.HomeActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '广东景点玩乐券',
      desc: '260101',
      rules: [
        {
          matches: [
            '@* > [text="O1CN01EmIdr51vV7c1P87T9_!!6000000006177-2-tps-750-178.png_790x10000.jpg_"]',
          ],
          actionCd: 0,
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '打开通知，X掉',
      desc: '260328，增加IDS，[text="O1CN01ypsdCy1Q7zBKRuXQ9_!!6000000001930-2-tps-62-62.png_110x10000"]',
      rules: [
        {
          matches: [
            '@* + [text^="打开通知" || text="仅打开重要通知，关闭营销打扰"] <<n * +n [text="立即打开"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'fliggyx.android.unicorn.ActWebviewActivity',
            'com.taobao.trip.flutter.TripFlutterActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '体验调研',
      desc: '260306',
      rules: [
        {
          matches: ['[text="体验调研"] + @TextView + * [text="提交反馈"]'],
          resetMatch: 'match',
          activityIds: ['fliggyx.android.unicorn.ActWebviewActivity'],
        },
      ],
    },
  ],
});
