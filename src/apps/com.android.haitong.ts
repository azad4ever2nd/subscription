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
          matches:
            '[vid="dlg_scroll_view"] +n * > [vid="dlg_tv_cancel"][text="取消"] +n [vid="dlg_tv_ok"][text="确定"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'cn.htsec.SecurityHome',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗',
      desc: '260829，排除新股弹窗，添加弹窗下载君弘app',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'cn.htsec.SecurityHome',
          excludeMatches:
            'LinearLayout > TextView[text="请关注"] + TextView[text="《新股申购风险提示》"]',
          matches:
            '(LinearLayout[vid="pushinfodlg_msgarea"] > ImageView[clickable=true][visibleToUser=true][index=parent.childCount.minus(1)])',
        },
      ],
    },
    {
      key: 3,
      name: '今日申购提醒',
      desc: '260814，关闭',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionDelay: 1000,
          activityIds: 'cn.htsec.SecurityHome',
          matches:
            'LinearLayout > @TextView[vid="pushinfodlg_btn1"][text="关闭"][clickable=true][visibleToUser=true] +2 TextView[vid="pushinfodlg_btn2"][text="一键打新"]',
        },
      ],
    },
    {
      key: 4,
      name: 'app评价，X掉',
      desc: '260829',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'cn.htsec.SecurityHome',
          matches:
            '([text="您的每一个评价对我们都很重要" || text$="好用吗？"] <n * + [vid="close_btn"]) || ([text="您的每一个评价对我们都很重要" || text$="好用吗？"] <n LinearLayout + ImageView[vid="close_btn"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 5,
      name: '关于国泰海通君弘APP版本升级的通知，关闭"',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'cn.htsec.SecurityHome',
          matches:
            '([vid="pushinfodlg_btn1"] +n [vid="pushinfodlg_btn2"][text="关闭"]) || (LinearLayout > TextView[vid="pushinfodlg_btn1"] +n TextView[vid="pushinfodlg_btn2"][clickable=true][visibleToUser=true][text="关闭"])',
        },
      ],
    },
    {
      key: 6,
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
      key: 7,
      name: '预约打新',
      desc: '251205，',
      rules: [
        {
          matches: [
            '[desc="预约信息确认" || desc="预约打新"] +n [desc="确定"]',
          ],
          resetMatch: 'match',
          activityIds: 'cn.htsec.SecurityHome',
        },
      ],
    },
    {
      key: 8,
      name: '预约打新，第一步，全选',
      desc: '260904，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
		  matchTime:3000,
		  forcedTime:3000,
          activityIds: 'com.gtja.trade.newstock.view.NewAppointMainActivity',
          matches:[
            '(View > View > @Button[text="全选"][clickable=true][visibleToUser=true] +n TextView[text="已选中 "] + TextView[text="0"] + TextView[text*="只"])',
			'WebView[text="newstock"] > View > View > View > @Button[text="全选"][clickable=true][visibleToUser=true] + TextView[text="已选中 "] + TextView[text="0"]',
		],
        },
      ],
    },
    {
      key: 9,
      name: '预约打新，第二步，符合预约时间后，确认',
      desc: '260904，要求预约时间在14:30，[text="已选中 "] + [text!="0"] <n * + [text="确认"][clickable=false]',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [8],
		  matchTime:3000,
		  forcedTime:3000,
          activityIds: 'com.gtja.trade.newstock.view.NewAppointMainActivity',
          matches:[
            'Button[text^="预约时间" && text*="14:30-14:35"] - View < View +n View > @TextView[clickable=false][visibleToUser=true][text="确认"] - View > TextView[text^="已选中"] + TextView[text!="0"]',
			'Button[text="预约时间 14:30-14:35" || text*="14:30-14:35"] <n View +n View > @TextView[text="确认"][clickable=true][visibleToUser=true] - View > TextView[text="已选中 "] + TextView[text!="0"]',
		],
        },
      ],
    },
    {
      key: 10,
      name: '预约打新，第三步，风险确认，二次确认',
      desc: '260904',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [9],
		  matchTime:3000,
		  forcedTime:3000,
          action: 'clickCenter',
          activityIds: 'com.gtja.trade.newstock.view.NewAppointMainActivity',
          matches:[
            'TextView[text^="打新存在破发亏损风险"] < View + View > @View[clickable=false][visibleToUser=true] > View[clickable=true][visibleToUser=true][desc="确认"] > TextView[text="确认"]',
			'View > TextView[text^="打新存在破发亏损风险"] +n TextView[text="取消"] + TextView[text="确认"][clickable=false][visibleToUser=true])',
			'View > View > TextView[text^="打新存在破发亏损风险" || text="债券名称:"] +n TextView[text="确认"][clickable=true][visibleToUser=true]',
		],
        },
      ],
    },
    {
      key: 11,
      name: '预约打新完成，完成',
      desc: '260904',
      rules: [
        {
          resetMatch: 'match',
		  action:'clickCenter',
          activityIds:
            'com.gtja.business.component.browser.webview.BrowserScreen',
          matches:[
            '([text="退出"] + [text="智能打新"] + [text="完成bak"]) || (WebView[text="可转债申购"] > View > View > Image[clickable=false][visibleToUser=true][text="退出"] +n TextView[clickable=false][visibleToUser=true][text="完成"])',
			'WebView > View > View > Image[text="退出"] + TextView + TextView[text="完成"][clickable=true][visibleToUser=true]',
		]
        },
      ],
    },
    {
      key: 12,
      name: '交易系统清算期间，我知道了',
      desc: '260808',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.gtja.flashtrade.general.holding.FlashHoldingTable',
          matches:
            'LinearLayout > LinearLayout > TextView[clickable=true][visibleToUser=true][vid="btn_p"][text="我知道了"]',
        },
      ],
    },
  ],
});
