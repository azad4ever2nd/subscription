import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cib.cibmb',
  name: '兴业银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="adv_alert"] > [vid="ivClose"][desc="关闭"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.newland.framework.ui.widget.TransparentActivityForDialogStack',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '通知提示',
      desc: '251123',
      rules: [
        {
          matches: ['[vid="push_dialog"] + [vid="btDismiss"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.newland.app.ui.home.HomeActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '签到',
      desc: '251207,添加弹窗',
      rules: [
        {
          matches: ['([text="点击签到"]) || ([id="lottery_close"])'],
          resetMatch: 'match',
          activityIds: ['com.newland.app.webcore.CustomPageFlowActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '理财节，返回',
      desc: '260108，D,添加红包雨',
      rules: [
        {
          matches: [
            '([id="pop-my-prize"] > *[index=parent.childCount.minus(1)]) || (WebView [text^="恭喜您答对" && text$="题"] + TextView)',
          ],
          resetMatch: 'match',
          activityIds: ['com.newland.app.webcore.CustomPageFlowActivity'],
        },
      ],
    },
    {
      key: 5,
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
      key: 6,
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
  ],
});
