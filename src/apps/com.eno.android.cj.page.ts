import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eno.android.cj.page',
  name: '长江e号',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '260120,添加风险提示',
      rules: [
        {
          matches: [
            '([vid="dlg_home_annc_title"][text*="风险提示"] +n * [text="关闭"]) || ([vid="dlg_home_annc_buttons"] > [text="关闭"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.cjeh.view.main.CJMainNewActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗复盘',
      desc: '260129，增加IDS',
      rules: [
        {
          matches: [
            '@[vid="fupan_report_close_iv"] + [vid="fupan_report_main_content_iv"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.eno.android.cj.page.Activity_b_fs_fold_for_hold',
            'com.cjsc.cjeh.view.main.CJMainNewActivity',
            'com.eno.android.cj.page.Activity_a_jy_new',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗2',
      desc: '',
      rules: [
        {
          matches: ['[vid="content_iv"] + [vid="close_iv"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.cjeh.view.main.CJMainNewActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '长按删除',
      desc: '',
      rules: [
        {
          matches: [
            'LinearLayout > [vid="zx_pop_long_click_delete"][text="删除"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.cjeh.view.main.CJMainNewActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '申购提醒',
      desc: '251209',
      rules: [
        {
          matches: [
            '[vid="global_newstock_title"][text="申购提醒"] +n * [vid="global_newstock_sure"][text="去申购"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.cjeh.view.main.CJMainNewActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '股东投标提醒',
      desc: '251230',
      rules: [
        {
          matches: ['[vid="dlg_home_annc_buttons"] > [text="我知道了"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.cjeh.view.main.CJMainNewActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '风险提示',
      desc: '260115',
      rules: [
        {
          matches: [
            '[vid="dlg_home_annc_title"][text*="风险提示"] + * [text="关闭"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.platform.NewLoginActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '申购高风险产品提示',
      desc: '260115',
      rules: [
        {
          matches: [
            '[vid="title_Text"][text="高风险产品提示" || text="适当性检查结果" || text="适当性评估结果确认书" || text="提示"] <<n * +n * > [vid="m_definite"][text="确定" || text="继续" || text="查看"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.eno.android.cj.page.trade.more.TradeMoreItemActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '我已阅读协议',
      desc: '260115',
      rules: [
        {
          matches: ['[vid="simple_webview_read_tv"][text="我已阅读协议"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.platform.pdf.HtmlViewerActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '立即签署协议',
      desc: '260116，添加阅读协议',
      rules: [
        {
          matches: [
            '([vid="confirmBtn"][clickable=true][text="立即签署协议"]) || (@[vid="protocolLayout"] > [vid="protocolUnread"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.platform.SignProtocolActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '测试公告弹窗',
      desc: '260117',
      rules: [
        {
          matches: [
            '[vid="dlg_home_annc_title"][text*="公告"] + * [text="关闭"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.platform.NewLoginActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '复盘弹窗3',
      desc: '260205，先观察',
      rules: [
        {
          matches: [
            '@[vid="fupan_report_close_iv"] + [vid="fupan_report_main_content_iv"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.cjsc.cjeh.view.main.CJMainNewActivity'],
        },
      ],
    },
  ],
});
