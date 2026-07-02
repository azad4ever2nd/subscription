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
      name: '预约打新，确认后二次确认',
      desc: '260602，* > [desc="确认"]',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [12],
          actionCd: 1500,
          activityIds: 'com.gtja.trade.newstock.view.NewAppointMainActivity',
          matches:
            '[text="申购数量"] + [text="10000"] <n * + * [text="取消"] + *',
        },
      ],
    },
    {
      key: 4,
      name: '弹窗',
      desc: '260511，添加添加弹窗下载君弘app',
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
      desc: 'D,260309，占位',
      rules: [
        {
          matches: ['[vid="pushinfodlg_msgarea"] > *[index=1]'],
          resetMatch: 'match',
          activityIds: ['cn.htsec.SecurityHome'],
        },
      ],
    },
    {
      key: 7,
      name: 'app评价，X掉',
      desc: '260502',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'cn.htsec.SecurityHome',
          matches:
            '[text="您的每一个评价对我们都很重要" || text$="好用吗？"] <n * + [vid="close_btn"]',
        },
      ],
    },
    {
      key: 8,
      name: '关于国泰海通君弘APP版本升级的通知，关闭"',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 0,
          activityIds: 'cn.htsec.SecurityHome',
          matches:
            '([vid="pushinfodlg_btn1"] +n [vid="pushinfodlg_btn2"][text="关闭"]) || (LinearLayout > TextView[vid="pushinfodlg_btn1"] +n TextView[vid="pushinfodlg_btn2"][clickable=true][visibleToUser=true][text="关闭"])',
        },
      ],
    },
    {
      key: 9,
      name: '删除自选股，确认删除',
      desc: '260601',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'cn.htsec.SecurityHome',
          matches:
            '[vid="dlg_tv_title"][text="删除自选股"] +n * > [vid="dlg_tv_ok"][text="确认删除"]',
        },
      ],
    },
    {
      key: 10,
      name: '预约打新，全选',
      desc: '260602，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionMaximum: 1,
          actionCd: 0,
          activityIds: 'com.gtja.trade.newstock.view.NewAppointMainActivity',
          matches: '[text="全选"]',
        },
      ],
    },
    {
      key: 11,
      name: '预约打新，全选后，确认',
      desc: '260602，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [10],
          activityIds: 'com.gtja.trade.newstock.view.NewAppointMainActivity',
          matches: '[text="已选中 "] + [text!="0"] <n * + [text="确认"]',
        },
      ],
    },
  ],
});
