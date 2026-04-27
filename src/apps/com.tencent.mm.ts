import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '糖的报单',
      desc: '251201，继续访问，知道了，是否继续上传',
      rules: [
        {
          matches: [
            '( @[text="继续访问"] +n * > [desc="申请恢复访问"]) || (@[text="批量上传"] + [text*="知道了del"]) ||([text="操作提示"] + [text="上传成功，是否继续上传？"] + * > [text="取消"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 2,
      name: '分享返回微信',
      desc: '',
      rules: [
        {
          matches: [
            '[text="留在微信"][vid="mm_alert_ok_btn"] -2 [text^="返回"][vid="mm_alert_cancel_btn"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.ui.transmit.SendAppMessageWrapperUI'],
        },
      ],
    },
    {
      key: 3,
      name: '立即打开',
      desc: '260201,增加邮储，交行，小程序跳转，民生，工行，翼支付，浦发，建云闪付，行，农行,原规则[id="app"] >2 [text="立即打开"]',
      rules: [
        {
          matches: [
            '(@View > [text="点击打开手机银行"  || text="打开手机银行"]) || ([text^="即将"] <<n  * + * >n [vid="mm_alert_cancel_btn"][text="取消"] +n [vid="mm_alert_ok_btn"][text="确认跳转" || text="允许"]) || ([id="js_link_dialog_body"][text*="打开"] + * > [id="js_link_dialog_ok"][text="允许"]) || ([id="launch-btn" || id="launch_btn" || id="launchApp"] >n [id="app"] > *) || ([text^="即将打开" && text$="小程序"] + * > [desc="打开"]) || ([id="wxOpenLunchApp"] [text^="立即打开"] + [id="launch-btn"]) || ([text="云闪付"] [id="btn-normal-download"][desc="打开"]) || ([id="app"] [text="打开小程序"]) || ([id="launch-btn" || id="wx-launch-btn"] >n [id="btn_mywechat" || id="wechat-btn" ][text="立即打开"]) || ([id="launch-app-btn"] >n Button[text="打开"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 4,
      name: '即将跳转',
      desc: '260103，添加IDS，移动抽奖，动态ID，增加小程序里的跳转，改匹配顺序，尽量从左往右',
      rules: [
        {
          matches: [
            '(Dialog [text*="即将打开第三方"] + * > [text="允许"]) || ([text="get_prize_title.dc05dc4a"] +n * > [text="立即前往"]) || ([id="js_minipro_dialog_head"][text="即将打开小程序"] <<n * +n * > [id="js_minipro_dialog_ok"][text="允许"]) || ([text^="即将"] <<n  * + * >n [vid="mm_alert_cancel_btn"][text="取消"] +n [vid="mm_alert_ok_btn"][text="确认跳转" || text="允许"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
            'com.tencent.mm.plugin.webview.ui.tools.CustomSchemeEntryMMWebViewUI',
            'com.tencent.mm.framework.app.UIPageFragmentActivity',
            'com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandCheckWxaShortLinkUI',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '腾讯理财通，领取奖励',
      desc: '260303,添加抢理财金，整合领取与返回，体验完成，',
      rules: [
        {
          matches: [
            '(View[childCount=2] > [text="1,000元理财金"] + *) || (WebView [text="领取奖励"]) || ([text^="成功领取奖励" || text="成功开始模拟"] <<n FrameLayout + * >n [desc="关闭"][childCount=1]) || ([text^="成功领取奖励"] <<n FrameLayout + * >n [desc="关闭"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '广发小程序周五半价',
      desc: '251226，增加跨年，布局有变',
      rules: [
        {
          matches: [
            '(@[text="立即抢购" || text="抢购"] <<2 * - * > [text*="周五5折"]) || ([text="周五5折" || text^="（跨年大促）"] <<n * + * > [text="1立即抢购" || text="1抢购"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '广发小程序屈臣氏42代50',
      desc: '251202，1立即抢购，2提交',
      rules: [
        {
          matches: [
            '([text="42元购50元屈臣氏代金券"] < * +n * [text="提交"]) || ([text="42元购50元屈臣氏代金券"] < * + * > [text="抢购"])',
          ],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '广发运动签到打卡',
      desc: 'D,251224，添加关闭',
      rules: [
        {
          matches: [
            '([text="今日步数"] +n [text="签到打卡"]) || ([text="已打卡"] -n [text="今日步数"] <<n * + * >n [desc="关闭"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '跳武汉SKP',
      desc: 'D',
      rules: [
        {
          matches: ['[text="本地专属活动"] +2 [text="wuhan_1741916738193"]'],
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 10,
      name: '武汉SKP声明',
      desc: 'D',
      rules: [
        {
          matches: ['[text="惠享中行日 畅购武汉SKP"] >5 TextView + Image'],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '武汉SKP抢购',
      desc: 'D',
      rules: [
        {
          matches: ['View > [text^="今日剩余名额"] + Button'],
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 12,
      name: '武汉SKP异常返回重进',
      desc: 'D',
      rules: [
        {
          action: 'back',
          matches: ['[text="惠享中行日 畅购武汉SKP"] [text="获取验证码"]'],
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 13,
      name: '深工',
      desc: '251117,添加活动抽奖',
      rules: [
        {
          matches: [
            '(@* +2 [text^="恭喜你完成每日登录"] +2 [text="查看积分"]) || ([text="恭喜你"] + [text="抽中了"] +3 [text="去查看"] + * > *)',
          ],
          actionCd: 0,
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '深工抢哈罗',
      desc: '260419，集中三步于一条，立即抢购>确认支付>人数过多，不局限于哈罗',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 6,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          matches:
            '([text="抢购成功消耗500积分"] +n [text="立即抢购"]) || ([text="总计：¥0"] + [text="确认支付"]) || ([text="访问人数过多，请稍后再试"] + [text*="我知道了"])',
        },
      ],
    },
    {
      key: 15,
      name: '深工，访问人数过多,我知道了',
      desc: '251212',
      rules: [
        {
          preKeys: [14],
          matches: ['([text="访问人数过多，请稍后再试"] + [text*="我知道了"])'],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '阳光兑换外面',
      desc: 'D，251127，挑有库存的进',
      rules: [
        {
          matches: [
            '([text="stocked"] + [text$="借记卡"] + [text="微信立减金"] + *) || ([text^="今日已领" && text!$="100%"] < * + [text$="借记卡"] + [text="微信立减金"] + *)',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '阳光兑换1，立即兑换',
      desc: '251127，|| ([text="兑换确认"] +n * > [text="取消"] + [text="确认"])',
      rules: [
        {
          matches: ['([text$="借记卡"] +n * > [text="立即兑换"]) '],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '阳光兑换2，确认兑换',
      desc: '251202',
      rules: [
        {
          action: 'clickCenter',
          matches: ['([text="兑换确认"] +n * > [text="取消"] + [text="确认"])'],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '阳光兑换3，兑换完成与返回',
      desc: '251202,',
      rules: [
        {
          action: 'back',
          matches: ['([text="兑换成功"])'],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '阳光兑换2已兑完',
      desc: '251127，已兑完返回',
      rules: [
        {
          action: 'back',
          matches: ['[text="本周兑换次数已用完" || text="今日商品已兑完"]'],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 21,
      name: '光大小程序弹窗',
      desc: '260427',
      rules: [
        {
          matches: ['[text="今日不再提醒"] + [text="前往领取"] + *'],
          resetMatch: 'match',
          actionCd: 0,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '金币抽提现券1',
      desc: '251222，添加第一步兑换',
      rules: [
        {
          matches: [
            '([text="微信提现免费券"] <<n * + * [text="1金币兑换"]) || ([text="祝你每天好运气"] +3 * >2 [text="1金币抽提现券"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '金币抽提现券2',
      desc: '',
      rules: [
        {
          matches: [
            '[text^="确认使用1金币"] + [text="取消"] + [text="使用1金币"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '金币抽提现券，立即收下',
      desc: '260406,添加兑换后最小化，兑换提示',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text="已收下1"] + [text="7天后可再参与"] <<n * + * >n [desc="关闭"] ) || ([text="确认使用1金币兑换吗？"] <<n * + * >n [vid="mm_alert_ok_btn"][text="确认兑换"]) || ([text="立即收下"] + @[text="今日24点前可领"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '验证手机号码，选上次提供的',
      desc: '260101，D',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '[text="申请获取并验证你的手机号"] +2 * > @* + [text="上次提供" || text="微信绑定号码"]',
          ],
          actionCdKey: 6,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '免费提现额度',
      desc: '251127，D',
      rules: [
        {
          matches: ['[text="点此"] + [text="领取"]'],
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 27,
      name: '湖北邮政e权益，抽奖弹窗，确认',
      desc: '260218',
      rules: [
        {
          matches: [
            '(View[childCount=3] > @[text="确认"] + [text^="请及时兑换，每月15号刷新"]) || (@[text="确认"] + [text^="请及时兑换，每月15号刷新"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 28,
      name: '工行浇水',
      desc: '260420，延时要考虑弹窗',
      rules: [
        {
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          actionCd: 1000,
          actionMaximum: 5,
          resetMatch: 'match',
          matches:
            '([text="a47e521322884f2a9e43fe3967b8341f3457835618"]) || ([text="奖励派送中，稍后送达～"] <n * + * > *[clickable=true])',
        },
      ],
    },
    {
      key: 29,
      name: '微信支付有优惠，服务升级公告，X掉',
      desc: '260421，5/11金币功能下线，12/31小程序结束运营',
      rules: [
        {
          actionMaximum: 1,
          actionCd: 100,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          matches: '@* + [text="服务升级公告"] + [text^="由于业务调整"]',
        },
      ],
    },
    {
      key: 30,
      name: '建行社保卡',
      desc: '260114',
      rules: [
        {
          matches: [
            '([text="身份信息验证"] +n [text="loginBtn.f302f730"]) || ([text="温馨提示"] + * > [text="好的"]) || ([text="身份信息验证"] +n CheckBox[checked=false]) || ([text*="活动期间每周三"] <<n * + [text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="]) || ([text^="建行社保卡福利日"] [text="银联满60减20元券"] +3 [text="立即领取"]) || ([id="ACTSDK_MemberLevelCard"] + View > View[index=1] > Image[text="占位此规则不要用"]) || ([text="温馨提示"] + [text*="报名人数已满" || text="今日报名人数已满，您可下个领券日再来~" || text^="活动期间每周三"] + * > [text="好的"])',
          ],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 31,
      name: '公众号里跳转小程序',
      desc: '251221，增加工行',
      rules: [
        {
          matches: [
            '([id="js_link_dialog_body"][text*="打开"] + * > [id="js_link_dialog_ok"][text="允许"]) || ([text="get_prize_title.dc05dc4a"] +n * > [text="立即前往"]) || ([id="js_minipro_dialog_head"][text="即将打开小程序"] <<n * +n * > [id="js_minipro_dialog_ok"][text="允许"]) || ([text^="即将"] <<n * + * [vid="mm_alert_cancel_btn"][text="取消"] +n [vid="mm_alert_ok_btn"][text="确认跳转" || text="允许"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '经开永旺',
      desc: '251221，D，',
      rules: [
        {
          matches: [
            '[text="永旺梦乐城武汉经开"] +n * > [text="提交订单" || text="立即兑换"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '点太快了，知道了',
      desc: '251222,D',
      rules: [
        {
          matches: [
            '[text="点太快了，请休息一下再试吧！"] <<n * + * [vid="mm_alert_ok_btn"][text="知道了"]',
          ],
          fastQuery: true,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '光大小程序阳光抽奖',
      desc: '251224',
      rules: [
        {
          matches: [
            '([text^="消耗" && text$="参与抽奖？"] +n [text="取消"] + [id="onSureReward"][text="确定"]) || ([text="谢谢您的参与"] +n [text="确定"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '闲鱼链接，右上角三点菜单',
      desc: '251229',
      rules: [
        {
          matches: ['WebView[text="闲鱼"] <<n * + * [desc="更多信息"]'],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 36,
      name: '同程抢旅游景区券',
      desc: '251229',
      rules: [
        {
          matches: [
            'WebView[text="2026请到广东过大年"] >n [text="1JkEZih3lfi"] + * > [text="1JkIoUfneDu"]',
          ],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 38,
      name: '湖北SKP',
      desc: '260406，中国银行信用卡湖北 公众号进去，立即支付，不能限制1次',
      rules: [
        {
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          matches: '@[text="file-WI7PoWjb8T"] + [text!="今日剩余名额：0名"]',
          resetMatch: 'match',
        },
      ],
    },
    {
      key: 39,
      name: '湖北SKP，确认支付',
      desc: '260406，优先测试',
      rules: [
        {
          order: -1,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          resetMatch: 'match',
          actionCdKey: 6,
          matches:
            '[text="仅限中国银行信用卡支付"] + [text="dpyo8s1ulmfditgb8ejiv"] + [text="xmdaohehb7wx6hqcb8xft"]',
        },
      ],
    },
    {
      key: 40,
      name: '湖北SKP-3，火爆，刷新',
      desc: '260102',
      rules: [
        {
          matches: ['[text="活动火爆，当前参与人数过多"] +n [text="刷 新"]'],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 42,
      name: '湖北电影消费券猫眼小程序',
      desc: '260117，text="¥ 10" ||',
      rules: [
        {
          matches: [
            '[text="26年湖北消费券"] [text="¥ 25"] +n * > [text="f34e522ba841ae9135fc77546faaf5f638005"]',
          ],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 43,
      name: '湖北电影消费券淘票票小程序',
      desc: '260117，index=4 ||',
      rules: [
        {
          matches: [
            'WebView[text="“惠影湖北 乐享生活”-湖北省惠民观影活动"] View[index=6] @View[index=parent.childCount.minus(1)] > TextView[depth=29]',
          ],
          actionCdKey: 6,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 44,
      name: '湖北邮政e权益，抽奖',
      desc: '260118',
      rules: [
        {
          matches: [
            'Image < @View + [text!="剩余次数：0次" && text^="剩余次数："]',
          ],
          actionCd: 3000,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI'],
        },
      ],
    },
    {
      key: 45,
      name: '领红包',
      desc: '260119',
      rules: [
        {
          matches: [
            '@LinearLayout > [vid="bge"] [vid="aaa"][index=parent.childCount.minus(1)]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.ui.LauncherUI'],
        },
      ],
    },
    {
      key: 46,
      name: '打开红包',
      desc: '260130',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '@ImageButton[desc="开"] + Button[desc="开"] <<n * + ImageView[desc="关闭"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNewReceiveUI',
          ],
        },
      ],
    },
    {
      key: 47,
      name: '领完红包返回',
      desc: '260130，D，占位',
      rules: [
        {
          matches: [
            '@ImageView[desc="返回"] + ImageView[desc="更多"] + * [text$="红包"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNewDetailUI',
          ],
        },
      ],
    },
    {
      key: 48,
      name: '不显示该聊天，不显示',
      desc: '260123',
      rules: [
        {
          matches: [
            '[text="不显示该聊天?"] <<n * + * [vid="mm_alert_ok_btn"][text="不显示"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.ui.LauncherUI'],
        },
      ],
    },
    {
      key: 49,
      name: '不再关注',
      desc: 'D,260220,[text="不再关注"]',
      rules: [
        {
          matches: [
            '(*[childCount=1] > [text="不再关注"]) || ([text^="不再关注" && text$="你将不再收到其下发的消息"] <<n * + * [vid="mm_alert_ok_btn"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.brandservice.ui.BrandServiceIndexUI',
            'com.tencent.mm.plugin.flutter.ui.MMFlutterViewActivity',
            'com.tencent.mm.plugin.profile.ui.ContactInfoUI',
          ],
        },
      ],
    },
    {
      key: 50,
      name: '不再关注2，',
      desc: '260220',
      rules: [
        {
          matches: ['[desc="关闭"] [desc="不再关注"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.flutter.ui.MMFlutterViewActivity',
          ],
        },
      ],
    },
    {
      key: 51,
      name: '清空公众号聊天中的所有内容，清空',
      desc: '260220,[text="清空"]',
      rules: [
        {
          matches: [
            '[text="将清空公众号聊天中的所有内容"] <<n * + * [vid="mm_alert_ok_btn"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.profile.ui.newbizinfo.NewBizInfoSettingUI',
          ],
        },
      ],
    },
    {
      key: 52,
      name: '确定删除聊天记录，清空',
      desc: '260221，[text="清空"]',
      rules: [
        {
          matches: [
            '[text^="确定删除" && text*="聊天记录吗？"] <<n * + * [vid="mm_alert_ok_btn"]',
          ],
          actionCdKey: 6,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.ui.SingleChatInfoUI'],
        },
      ],
    },
    {
      key: 53,
      name: '月月刷未开始，最小化',
      desc: '260302',
      rules: [
        {
          matches: [
            '[text="该活动尚未开始"] + [text="敬请期待"] <<n * + * [desc="关闭"][clickable=true]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
        },
      ],
    },
    {
      key: 54,
      name: '湖北电影消费券猫眼，要定位，否',
      desc: '260305',
      rules: [
        {
          matches: [
            '[text="\\"美团\\" 需要获取你的地理位置"] <<n * + * [vid="mm_alert_cancel_btn"][text="否"]',
          ],
          actionCdKey: 6,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.tencent.mm.plugin.webview.stub.WebViewStubTempUI'],
        },
      ],
    },
    {
      key: 55,
      name: '菜单，识别图中的二维码',
      desc: '260401',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionDelay: 3000,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text="识别图中的二维码"]',
        },
      ],
    },
    {
      key: 56,
      name: '提现笔笔省领取成功，X掉',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          matches: '@TextView[text.length=1] <<n * + * [text="提现券领取成功"]',
        },
      ],
    },
    {
      key: 57,
      name: '腾讯理财通，领取奖励，同意服务协议',
      desc: '260425',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: [
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI0',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI1',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI2',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI3',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI4',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI01',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI02',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI03',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandUI04',
          ],
          matches:
            '@[text="已悉知风险提示并同意"] + [desc="服务协议"] <n * + [text="领取至“理财通活期+”账户"]',
        },
      ],
    },
    {
      key: 58,
      name: '深工弹窗，X掉',
      desc: '260427',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 300,
          activityIds: 'com.tencent.mm.plugin.appbrand.ui.AppBrandUI00',
          matches:
            '[text="更多精彩"] + @* +n [text="女职工服务"] +n [text="阵地服务"]',
        },
      ],
    },
  ],
});
