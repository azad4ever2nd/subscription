import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: '[vid="tip_view_pager"] +2 [vid="close"][desc="关闭"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.ccb.start.view.startdialog.StartDialogActivity',
        },
      ],
    },
    {
      key: 2,
      name: '建行社保卡',
      desc: '260513，1确认身份信息打勾，2.立即参与，3.弹窗好的',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          matches:
            '([text="身份信息验证"] +n CheckBox[checked=false]) || (CheckBox[checked=true] + CheckBox[checked=true] + [text="loginBtn.f302f730"]) || ([text="温馨提示"] +n * > Button[text="好的"])',
        },
      ],
    },
    {
      key: 3,
      name: '建行社保卡,立即参与',
      desc: '260513',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          matches:
            'CheckBox[checked=true] + CheckBox[checked=true] + [text="loginBtn.f302f730"]',
        },
      ],
    },
    {
      key: 4,
      name: '建行社保卡，弹窗好的',
      desc: '260513',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          matches: '[text="温馨提示"] +n * > Button[text="好的"]',
        },
      ],
    },
    {
      key: 5,
      name: '社保卡领60-20券',
      desc: '260506',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.ccb.framework.ui.widget.webview.CcbWebViewActivity',
          matches: '[text="银联满60减20元券"] +n [text="立即领取"]',
        },
      ],
    },
    {
      key: 6,
      name: '新版本',
      desc: '251118',
      rules: [
        {
          matches:
            '[text*="新版本"] <<n [vid="dialog_content_scroll"] +2 * > @[vid="dlg_left_tv"][text="取消"] +2 [vid="dlg_right_tv"][text="去更新"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
        },
      ],
    },
    {
      key: 7,
      name: '签到成功',
      desc: '260724,签到改版,冲突领取立减金，先暂时屏蔽一个',
      rules: [
        {
          actionCd: 0,
          resetMatch: 'match',
          matches:
            '([text="立即使用"] -n [text="获得 1 龙积分" || text$="龙积分"] <<n * + * > [text="JkaCmWVQ500S2oPJIJv3pK4lAM8omfwAibAgp2L0QtsAAAAASUVORK5CYII="]) || (@[text="确定"] -3 * > [text="AU8HaNGNFfbEAAAAAElFTkSuQmCC"]) || (@[text="关闭 按钮"] +n [text="立即使用"]) || (Image[text="AU8HaNGNFfbEAAAAAElFTkSuQmCC"] <<n * Image[text="关闭 按钮"]) || ([text^="获得" && text$="龙积分"] <<n * + [text="关闭 按钮"]) || (View > TextView[text="请勿重复签到"] + TextView[text="知道了"] + Image[text="关闭 按钮"])',
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
        },
      ],
    },
    {
      key: 8,
      name: '签到待领',
      desc: '260807',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          actionMaximum: 4,
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          matches:
            '([text="签到有礼楼层"] +n @View[clickable=false][childCount=1] + [text="今天"]) || ([text="签到有礼楼层"] +n @View[clickable=true][childCount=1] + [text="今天"]) || (TextView[text^="+" && text$="0"] < @View[childCount=1] + TextView[text="今天"]) || (@View[childCount=1] + TextView[text="今天"])',
        },
      ],
    },
    {
      key: 9,
      name: '会员中心活动火暴',
      desc: '251127',
      rules: [
        {
          action: 'back',
          matches:
            '[text="活动火爆，请改日回到本页面再次领取"] + [text="确定"]',
          resetMatch: 'match',
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
        },
      ],
    },
    {
      key: 10,
      name: '任务中心，稍后再来',
      desc: '260322，添加 火爆了',
      rules: [
        {
          matches:
            '([id="app"] > [text="我的礼包 按钮"] + [id="scroll"][childCount=1] [index=1]) || ([text="活动火爆，请稍候再试！"] + [text="知道了"] + [text="关闭 按钮"])',
          resetMatch: 'match',
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
        },
      ],
    },

    {
      key: 11,
      name: '基金，关注',
      desc: '260527',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          matches:
            '* > TextView[text="关注"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 12,
      name: '勾选 本人已认真阅读并同意以上内容',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          matches:
            '@TextView[clickable=false][visibleToUser=true] + View > TextView[text="本人已认真阅读并同意以上内容"]',
        },
      ],
    },
    {
      key: 13,
      name: '阅读 产品资料概要，确定',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          matches:
            'TextView[vid="tv_risk_title"][text="产品资料概要"] <n RelativeLayout < LinearLayout +n LinearLayout > LinearLayout > Button[vid="next_btn"][clickable=true][visibleToUser=true][text="确定"]',
        },
      ],
    },
    {
      key: 14,
      name: '风险匹配告知书及确认函，确定',
      desc: '260711"',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          matches:
            'TextView[vid="tv_risk_title"][text*="风险匹配告知书" || text*="确认函"] <n RelativeLayout < LinearLayout +n LinearLayout > Button[vid="next_btn"][clickable=true][visibleToUser=true][text="确定"]',
        },
      ],
    },
    {
      key: 15,
      name: '本人已认真阅读并同意以上内容,复制并粘贴',
      desc: '260717"',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          matches:
            '(@TextView[clickable=false][visibleToUser=true][text="复制并粘贴"] - TextView[text^="本人已阅读风险揭示"] < View + View > EditText[text.length=0])',
        },
      ],
    },
  ],
});
