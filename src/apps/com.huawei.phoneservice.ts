import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.huawei.phoneservice',
  name: '我的华为',
  groups: [
    {
      key: 1,
      name: '更新，以后再说',
      desc: '260319',
      rules: [
        {
          matches: [
            '[vid="information"] <<n * + * [id="android:id/button2"][text="以后再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.huawei.myhw.ui.HwHomeActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '隐私变更',
      desc: '同意',
      rules: [
        {
          matches: [
            '[text="隐私声明变更通知"] <<n [id="android:id/topPanel"] +2 [id="android:id/buttonPanel"] [text="同意"]',
          ],
          fastQuery: true,
          resetMatch: 'app',
          activityIds: ['com.huawei.myhw.ui.HwHomeActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '领奖励',
      desc: '260101,添加更多',
      rules: [
        {
          matches: [
            '([text="领奖励"]) || ([vid="tv_tasks_title"][text="我的任务"] + [vid="tv_tasks_more"][text="更多1"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.myhw.ui.HwHomeActivity',
            'com.huawei.module.commonwebview.ui.CommonWebviewActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '知道了',
      desc: '领奖后弹窗',
      rules: [
        {
          matches: [
            '[text^="恭喜您获得"] +2 * > [vid="bt_negative"][text*="知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.huawei.myhw.ui.HwHomeActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '任务领奖后弹窗，我知道了',
      desc: '251202，我知道了，按钮id动态，原@* > [id="cxui-button-175" || id="cxui-button-235"] > [text="我知道了"]',
      rules: [
        {
          matches: [
            '([text^="签到成功"] + [text="我知道了"]) || ([text="恭喜您获得经验值奖励"] +n * [text="我知道了"]) || ([text^="恭喜您获取经验值"] +2 @* >3 [text="我知道了"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.huawei.module.commonwebview.ui.CommonWebviewActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '精确位置信息权限',
      desc: '',
      rules: [
        {
          matches: [
            '@[text="取消"] <<n [id="android:id/buttonPanel"] - [id="android:id/topPanel"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.huawei.module.commonwebview.ui.CommonWebviewActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '弹窗',
      desc: '251227',
      rules: [
        {
          matches: [
            '[vid="auto_dialog_image_view"] + [vid="auto_dialog_close_view"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.huawei.myhw.ui.HwHomeActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '我的任务，去完成',
      desc: '260129，增加IDS[text="参与精彩活动" || text="了解玩机攻略" || text="浏览爱车频道15秒" || text="逛同城看精彩" || text="逛花粉看热门" || text="到店体验华为鸿蒙智家"] ',
      rules: [
        {
          matches: [
            '([text="参与精彩活动" || text$="玩机攻略" || text^="浏览爱车" || text^="逛同城" || text$="看热门" || text^="到店体验华为"] < * + [text="去完成"]) || ([text="参与精彩活动" || text$="玩机攻略" || text^="浏览爱车" || text^="逛同城" || text$="看热门" || text^="到店体验华为"] +2 [text="去完成"])',
          ],
          actionDelay: 2500,
          matchDelay: 100,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.myhw.ui.HwHomeActivity',
            'com.huawei.module.commonwebview.ui.CommonWebviewActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '清除消息中心未读，确定',
      desc: '260205',
      rules: [
        {
          matches: [
            '[id="android:id/message"][text^="确定清除"] <<n * + * [id="android:id/button1"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.huawei.module.mynotice.impl.revision.MessageActivity',
          ],
        },
      ],
    },
  ],
});
