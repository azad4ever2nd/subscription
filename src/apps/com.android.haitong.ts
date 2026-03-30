import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.haitong',
  name: '国泰海通通财',
  groups: [
    {
      key: 1,
      name: '确定退出app',
      desc: '251205,',
      rules: [
        {
          matches: [
            '[vid="dlg_scroll_view"] +n * > [vid="dlg_tv_cancel"][text="取消"] +n [vid="dlg_tv_ok"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.htsec.SecurityHome'],
        },
      ],
    },
    {
      key: 2,
      name: '预约打新',
      desc: '251205，',
      rules: [
        {
          matches: [
            '[desc="预约信息确认" || desc="预约打新"] +n [desc="确定"]',
          ],
          matchDelay: 15000,
          resetMatch: 'match',
          activityIds: ['cn.htsec.SecurityHome'],
        },
      ],
    },
    {
      key: 3,
      name: '预约打新，确认',
      desc: '251225，* > [desc="确认"]',
      rules: [
        {
          matches: [
            '[text="申购数量"] + [text="10000"] <n * + * [text="取消"] + *',
          ],
          matchDelay: 5000,
          resetMatch: 'match',
          activityIds: ['com.gtja.trade.newstock.view.NewAppointMainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '弹窗',
      desc: '260323',
      rules: [
        {
          matches: [
            '([vid="pushinfodlg_msgarea"] > *[index=1]) || ([vid="pushinfodlg_msgarea"] > *[index=parent.childCount.minus(1)])',
          ],
          resetMatch: 'match',
          activityIds: ['cn.htsec.SecurityHome'],
        },
      ],
    },
    {
      key: 5,
      name: '智能打新完成',
      desc: '260108',
      rules: [
        {
          matches: ['[text="退出"] + [text="智能打新"] + [text="完成"]'],
          resetMatch: 'match',
          activityIds: [
            'com.gtja.business.component.browser.webview.BrowserScreen',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '弹窗下载君弘app',
      desc: '260309',
      rules: [
        {
          matches: ['[vid="pushinfodlg_msgarea"] > *[index=1]'],
          resetMatch: 'match',
          activityIds: ['cn.htsec.SecurityHome'],
        },
      ],
    },
  ],
});
