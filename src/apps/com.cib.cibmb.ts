import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cib.cibmb',
  name: '兴业银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '260831',
      rules: [
        {
          anyMatches: [
            '[vid="adv_alert"] > [vid="ivClose"][desc="关闭"]',
            'ViewGroup[vid="adv_alert"] > ImageView + ImageView[vid="ivClose"][desc="关闭"][clickable=true][visibleToUser=true]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          forcedTime: 2000,
          activityIds: [
            'com.newland.framework.ui.widget.TransparentActivityForDialogStack',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '服务器证书检验失败，取消',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.newland.framework.ui.widget.TransparentActivityForDialogStack',
          matches:
            'TextView[text="服务器证书检验失败"] <2 RelativeLayout < ScrollView +n LinearLayout > TextView[clickable=true][visibleToUser=true][text="取消"]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，打开通知，X掉',
      desc: '261119',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          forcedTime: 3000,
          matches: [
            'RelativeLayout > @Button[vid="btDismiss"][clickable=true][visibleToUser=true] - FrameLayout[vid="push_dialog"] > TextView[text^="请打开兴业银行通知"]', //261119，弹窗，打开通知，X掉
            '[vid="push_dialog"] + [vid="btDismiss"]',
          ],
          activityIds: ['com.newland.app.ui.home.HomeActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '签到',
      desc: '251207,添加弹窗',
      rules: [
        {
          anyMatches: ['[text="点击签到"]', '[id="lottery_close"]'],
          resetMatch: 'match',
          activityIds: ['com.newland.app.webcore.CustomPageFlowActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '理财节，返回',
      desc: 'D，260108，添加红包雨',
      rules: [
        {
          anyMatches: [
            '[id="pop-my-prize"] > *[index=parent.childCount.minus(1)]',
            'WebView [text^="恭喜您答对" && text$="题"] + TextView',
          ],
          resetMatch: 'match',
          activityIds: ['com.newland.app.webcore.CustomPageFlowActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '已完成，返回',
      desc: '260108',
      rules: [
        {
          action: 'back',
          matches: ['WebView[text*="理财节"] [text="已完成"]'],
          resetMatch: 'match',
          activityIds: ['com.newland.app.webcore.CustomPageFlowActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '没有中奖后的弹窗',
      desc: '260117',
      rules: [
        {
          matches: ['[id="np_pop"] > [id="np_close"]'],
          resetMatch: 'match',
          activityIds: ['com.newland.app.webcore.CustomPageFlowActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '完成任务送抽奖次数，去浏览',
      desc: '261122',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 4000,
          activityIds: 'com.newland.app.webcore.CustomPageFlowActivity',
          matches:
            'View > @TextView[text="去浏览"][clickable=true][visibleToUser=true] - View > TextView[text="0/1"]',
        },
      ],
    },
  ],
});
