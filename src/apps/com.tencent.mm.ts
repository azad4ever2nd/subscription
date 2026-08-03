import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.tencent.mm',
  name: '微信',
  groups: [
    {
      key: 1,
      name: '立即打开',
      desc: '260616，增加光大，交行，华夏，邮储，交行，小程序跳转，民生，工行，翼支付，浦发，建云闪付，行，农行,原规则[id="app"] >2 [text="立即打开"]',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 2000,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '(View[id="weixin-btn"] @View[clickable=true] > Image[text="goBtn"]) || (View > View > [text="手机号登录/注册"] + [text="打开交行APP领奖"]) || (WebView[text="华夏银行"] >n [text="立即打开"]) || (@View > [text="点击打开手机银行"  || text="打开手机银行"]) || ([text^="即将"] <<n  * + * >n [vid="mm_alert_cancel_btn"][text="取消"] +n [vid="mm_alert_ok_btn"][text="确认跳转" || text="允许"]) || ([id="js_link_dialog_body"][text*="打开"] + * > [id="js_link_dialog_ok"][text="允许"]) || ([id="launch-btn" || id="launch_btn" || id="launchApp"] >n [id="app"] > *) || ([text^="即将打开" && text$="小程序"] + * > [desc="打开"]) || ([id="wxOpenLunchApp"] [text^="立即打开"] + [id="launch-btn"]) || ([text="云闪付"] [id="btn-normal-download"][desc="打开"]) || ([id="app"] [text="打开小程序"]) || ([id="launch-btn" || id="wx-launch-btn"] >n [id="btn_mywechat" || id="wechat-btn" ][text="立即打开"]) || ([id="launch-app-btn"] >n Button[text="打开"])',
        },
      ],
    },
    {
      key: 2,
      name: '糖的报单',
      desc: '251201，继续访问，知道了，是否继续上传',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '( @[text="继续访问"] +n * > [desc="申请恢复访问"]) || (@[text="批量上传"] + [text*="知道了"]) ||([text="操作提示"] + [text="上传成功，是否继续上传？"] + * > [text="取消"])',
        },
      ],
    },
    {
      key: 3,
      name: '菜单，识别图中的二维码',
      desc: '260401',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionDelay: 2500,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: '[text="识别图中的二维码"]',
        },
      ],
    },
    {
      key: 4,
      name: '建行社保卡，公告，X掉',
      desc: '260708',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          action: 'clickCenter',
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '(WebView[text*="建行社保卡"] > View > View > @Image[visibleToUser=true][clickable=true][text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="] - View > View > TextView[text^="尊敬的客户"])',
        },
      ],
    },
    {
      key: 5,
      name: '建行社保卡，勾选同意',
      desc: '260708',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
          action: 'clickCenter',
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '(WebView[text*="建行社保卡"] > View > View > View > CheckBox[clickable=true][checked=false])',
        },
      ],
    },
    {
      key: 6,
      name: '建行社保卡，勾选同意后，立即参与',
      desc: '260610',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '(WebView[text*="建行社保卡"] > View > View > View > CheckBox[checked=true] +2 CheckBox[checked=true] +2 Image[text="loginBtn.f302f730"])',
        },
      ],
    },
    {
      key: 7,
      name: '建行社保卡，火暴',
      desc: '260708',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '(WebView[text*="建行社保卡"] > View > View > @Image[visibleToUser=true][clickable=true][text="NWJ6tc6mwaKQfgbADXAJPIxaVNUQJguwpoNgAy0x2ew8SgXab+AzNTubJfuAmp7HtQL5K8AARxBdk+5zMOgAAAAASUVORK5CYII="] - View > View > TextView[text^="尊敬的客户"]) || (WebView[text*="建行社保卡"] > View > Dialog > View > Button[text="好的"])',
        },
      ],
    },
    {
      key: 8,
      name: '湖北邮政e权益，抽奖',
      desc: '260118',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 3000,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '@Image < View + [text!="剩余次数：0次" && text^="剩余次数："]',
        },
      ],
    },
    {
      key: 9,
      name: '湖北邮政e权益，抽奖弹窗，确认',
      desc: '260218',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '(View[childCount=3] > @[text="确认"] + [text^="请及时兑换，每月15号刷新"]) || (@[text="确认"] + [text^="请及时兑换，每月15号刷新"])',
        },
      ],
    },
    {
      key: 10,
      name: '湖北邮政e权益，抽奖弹窗，碎片，返回',
      desc: '260519',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          actionCd: 700,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '([text="绑卡有礼"] [text^="X" && text$="我的碎片"] + [text="碎片 + 0.1"] + [text*="-" && text*=":"])',
        },
      ],
    },
    {
      key: 11,
      name: '湖北邮政e权益，抽奖弹窗，立减金，返回',
      desc: '260519',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          actionCd: 700,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches:
            '([text="未兑换"] + [text="已兑换"] + [text="已失效"] + [text="兑换失败"])',
        },
      ],
    },
    {
      key: 12,
      name: '闲鱼链接，右上角三点菜单',
      desc: '251229',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.tencent.mm.plugin.webview.ui.tools.MMWebViewUI',
          matches: 'WebView[text="闲鱼"] <<n * + * [desc="更多信息"]',
        },
      ],
    },
    {
      key: 13,
      name: '湖北电影消费券猫眼，要定位，否',
      desc: '260305',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.tencent.mm.plugin.webview.stub.WebViewStubTempUI',
          matches:
            '[text="\\"美团\\" 需要获取你的地理位置"] <<n * + * [vid="mm_alert_cancel_btn"][text="否"]',
        },
      ],
    },
    {
      key: 14,
      name: '需要获取你的地理位置，否，',
      desc: '251231，先不启用避免误杀',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.tencent.mm.plugin.webview.stub.WebViewStubTempUI',
          matches:
            '[text*="需要获取你的地理位置"] <<n * + * [vid="mm_alert_cancel_btn"][text="否"]',
        },
      ],
    },
    {
      key: 15,
      name: '图片，再次保存',
      desc: '260725',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tencent.mm.ui.chatting.gallery.ImageGalleryUI',
          matches:
            'RecyclerView > LinearLayout > RelativeLayout > LinearLayout > TextView[clickable=false][visibleToUser=true][text="再次保存"]',
        },
      ],
    },
    {
      key: 16,
      name: '图片，再次保存2',
      desc: '260728',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches:
            'RecyclerView > @LinearLayout[clickable=true][visibleToUser=true] > RelativeLayout > LinearLayout > TextView[text="再次保存"]',
        },
      ],
    },
    {
      key: 17,
      name: '不显示该聊天，不显示',
      desc: '260123',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 0,
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches:
            '[text="不显示该聊天?"] <<n * + * [vid="mm_alert_ok_btn"][text="不显示"]',
        },
      ],
    },
    {
      key: 18,
      name: '领红包',
      desc: '260119',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tencent.mm.ui.LauncherUI',
          matches:
            '@LinearLayout > [vid="bge"] [vid="aaa"][index=parent.childCount.minus(1)]',
        },
      ],
    },
    {
      key: 19,
      name: '打开红包',
      desc: '260130',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNewReceiveUI',
          matches:
            '@ImageButton[desc="开"] + Button[desc="开"] <<n * + ImageView[desc="关闭"]',
        },
      ],
    },
    {
      key: 20,
      name: '领完红包返回',
      desc: '260130',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.tencent.mm.plugin.luckymoney.ui.LuckyMoneyNewDetailUI',
          matches:
            '@ImageView[desc="返回"] + ImageView[desc="更多"] + * [text$="红包"]',
        },
      ],
    },
    {
      key: 21,
      name: '公众号里跳转小程序',
      desc: '251221，增加工行',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
          matches:
            '([id="js_link_dialog_body"][text*="打开"] + * > [id="js_link_dialog_ok"][text="允许"]) || ([text="get_prize_title.dc05dc4a"] +n * > [text="立即前往"]) || ([id="js_minipro_dialog_head"][text="即将打开小程序"] <<n * +n * > [id="js_minipro_dialog_ok"][text="允许"]) || ([text^="即将"] <<n * + * [vid="mm_alert_cancel_btn"][text="取消"] +n [vid="mm_alert_ok_btn"][text="确认跳转" || text="允许"])',
        },
      ],
    },
    {
      key: 22,
      name: '分享返回微信',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tencent.mm.ui.transmit.SendAppMessageWrapperUI',
          matches:
            '[vid="mm_alert_ok_btn"][text="留在微信"] -2 [text^="返回"][vid="mm_alert_cancel_btn"]',
        },
      ],
    },
    {
      key: 23,
      name: '确定删除聊天记录，清空',
      desc: '260221，[text="清空"]',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.tencent.mm.ui.SingleChatInfoUI',
          matches:
            '[text^="确定删除" && text*="聊天记录吗？"] <<n * + * [vid="mm_alert_ok_btn"]',
        },
      ],
    },
    {
      key: 24,
      name: '不再关注',
      desc: '260220,[text="不再关注"]',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: [
            'com.tencent.mm.plugin.brandservice.ui.BrandServiceIndexUI',
            'com.tencent.mm.plugin.flutter.ui.MMFlutterViewActivity',
            'com.tencent.mm.plugin.profile.ui.ContactInfoUI',
          ],
          matches:
            '(*[childCount=1] > [text="不再关注"]) || ([text^="不再关注" && text$="你将不再收到其下发的消息"] <<n * + * [vid="mm_alert_ok_btn"])',
        },
      ],
    },
    {
      key: 25,
      name: '不再关注2，',
      desc: '260220',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.tencent.mm.plugin.flutter.ui.MMFlutterViewActivity',
          matches: '[desc="关闭"] [desc="不再关注"]',
        },
      ],
    },
    {
      key: 26,
      name: '清空公众号聊天中的所有内容，清空',
      desc: '260220,[text="清空"]',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.tencent.mm.plugin.profile.ui.newbizinfo.NewBizInfoSettingUI',
          matches:
            '[text="将清空公众号聊天中的所有内容"] <<n * + * [vid="mm_alert_ok_btn"]',
        },
      ],
    },
    {
      key: 27,
      name: '深工积分兑换，立即抢购',
      desc: '260626',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
            'WebView > View > View > TextView[text="抢购成功消耗1000积分"] + TextView[text="抢购不成功不消耗积分"] + TextView[text="立即抢购"]',
        },
      ],
    },
    {
      key: 28,
      name: '深工积分兑换，确认支付',
      desc: '260626',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
          matches:
            'WebView > View > TextView[text="总计：¥0"] + TextView[text="确认支付"]',
        },
      ],
    },
    {
      key: 29,
      name: '深工积分兑换，人数过多，我知道了',
      desc: '260703',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
          order: -2,
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
            'WebView > View > View > TextView[text^="服务异常" || text="访问人数过多，请稍后再试"] + TextView[text="我知道了"]',
        },
      ],
    },
    {
      key: 30,
      name: '阳光兑换外面',
      desc: '251127，挑有库存的进',
      rules: [
        {
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
          matches:
            '([text="stocked"] + [text$="借记卡"] + [text="微信立减金"] + *) || ([text^="今日已领" && text!$="100%"] < * + [text$="借记卡"] + [text="微信立减金"] + *)',
        },
      ],
    },
    {
      key: 31,
      name: '阳光兑换1，立即兑换',
      desc: '251127，|| ([text="兑换确认"] +n * > [text="取消"] + [text="确认"])',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
          matches: '([text$="借记卡"] +n * > [text="立即兑换"])',
        },
      ],
    },
    {
      key: 32,
      name: '阳光兑换2，确认兑换',
      desc: '251202，',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
          action: 'clickCenter',
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
          matches: '([text="兑换确认"] +n * > [text="取消"] + [text="确认"])',
        },
      ],
    },
    {
      key: 33,
      name: '阳光兑换3，兑换完成与返回',
      desc: '',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
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
          matches: ['([text="兑换成功"])'],
        },
      ],
    },
    {
      key: 34,
      name: '阳光兑换2，已兑完返回',
      desc: '251127，',
      rules: [
        {
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
          matches: '[text="本周兑换次数已用完" || text="今日商品已兑完"]',
          action: 'back',
        },
      ],
    },
    {
      key: 35,
      name: '金币抽提现券1',
      desc: '251222，添加第一步兑换',
      rules: [
        {
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
          matches:
            '([text="微信提现免费券"] <<n * + * [text="1金币兑换"]) || ([text="祝你每天好运气"] +3 * >2 [text="1金币抽提现券"])',
        },
      ],
    },
    {
      key: 36,
      name: '金币抽提现券2',
      desc: '',
      rules: [
        {
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
          matches:
            '([text^="确认使用1金币"] + [text="取消"] + [text="使用1金币"])',
        },
      ],
    },
    {
      key: 37,
      name: '金币抽提现券，立即收下',
      desc: '260406，兑换提示',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
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
            '([text="已收下1"] + [text="7天后可再参与"] <<n * + * >n [desc="关闭"] ) || ([text="确认使用1金币兑换吗？"] <<n * + * >n [vid="mm_alert_ok_btn"][text="确认兑换"]) || ([text="立即收下"] + @[text="今日24点前可领"])',
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
          actionCd: 0,
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
          actionCdKey: 4,
          matches:
            '[text="仅限中国银行信用卡支付"] + [text="dpyo8s1ulmfditgb8ejiv"] + [text="xmdaohehb7wx6hqcb8xft"]',
        },
      ],
    },
    {
      key: 40,
      name: '湖北SKP，火爆，刷新',
      desc: '260102',
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
          matches: '[text="活动火爆，当前参与人数过多"] +n [text="刷 新"]',
          resetMatch: 'match',
          actionCdKey: 4,
        },
      ],
    },
    {
      key: 41,
      name: '沪上阿姨一分购，同意服务协议',
      desc: '260511',
      rules: [
        {
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
          matches:
            '(*[childCount=8] >n @[text="我已阅读并同意"] + [text^="《沪上阿姨"]) || (*[childCount=9] >n @[text.length=1] + [text="我已阅读并同意"] + [text^="《沪上阿姨"]) || ([vid="mm_alert_cancel_btn"][text="不同意"] +n [vid="mm_alert_ok_btn"][text="同意协议"])',
        },
      ],
    },
    {
      key: 42,
      name: '沪上阿姨一分购，同意服务协议弹窗',
      desc: '260511',
      rules: [
        {
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
          matches:
            '[vid="mm_alert_cancel_btn"][text="不同意"] +n [vid="mm_alert_ok_btn"][text="同意协议"]',
        },
      ],
    },
    {
      key: 43,
      name: '沪上阿姨一分购，同意服务协议后，立即购买',
      desc: '260511，依赖 沪上阿姨一分购，同意服务协议弹窗',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          preKeys: [41],
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
          matches: 'Button[text="立即购买 ￥0.01"]',
        },
      ],
    },
    {
      key: 44,
      name: '即将跳转',
      desc: '260103，添加IDS，移动抽奖，动态ID，增加小程序里的跳转，改匹配顺序，尽量从左往右',
      rules: [
        {
          resetMatch: 'match',
          matches:
            '(Dialog [text*="即将打开第三方"] + * > [text="允许"]) || ([text="get_prize_title.dc05dc4a"] +n * > [text="立即前往"]) || ([id="js_minipro_dialog_head"][text="即将打开小程序"] <<n * +n * > [id="js_minipro_dialog_ok"][text="允许"]) || ([text^="即将"] <<n  * + * >n [vid="mm_alert_cancel_btn"][text="取消"] +n [vid="mm_alert_ok_btn"][text="确认跳转" || text="允许"])',
          fastQuery: true,
          actionCd: 2000,
          activityIds: [
            'com.tencent.mm.plugin.brandservice.ui.timeline.preload.ui.TmplWebViewMMUI',
            'com.tencent.mm.plugin.webview.ui.tools.CustomSchemeEntryMMWebViewUI',
            'com.tencent.mm.framework.app.UIPageFragmentActivity',
            'com.tencent.mm.plugin.webview.stub.WebViewStubProxyUI',
            'com.tencent.mm.plugin.appbrand.ui.AppBrandCheckWxaShortLinkUI',
            'com.tencent.mm.pluginsdk.ui.tools.AppChooserUI',
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
      key: 45,
      name: '腾讯理财通，领取奖励',
      desc: '260608,添加抢理财金，整合领取与返回，体验完成，',
      rules: [
        {
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
          matches:
            '(View[childCount=2] > [text$="元理财金"] + *) || (View[childCount=3] > * + [text$="元理财金"] + *) || (View[childCount=3][clickable=true] > [text$="元理财金"] + *) || (View > @View > TextView + TextView[text$="元理财金"] + TextView[clickable=true]) || (WebView [text="领取奖励"]) || ([text^="成功领取奖励" || text="成功开始模拟"] <<n FrameLayout + * >n [desc="关闭"][childCount=1]) || ([text^="成功领取奖励"] <<n FrameLayout + * >n [desc="关闭"])',
        },
      ],
    },
    {
      key: 46,
      name: '腾讯理财通，领取奖励，同意服务协议',
      desc: '260425',
      rules: [
        {
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
          matches:
            '@[text="已悉知风险提示并同意"] + [desc="服务协议"] <n * + [text="领取至“理财通活期+”账户"]',
        },
      ],
    },
    {
      key: 47,
      name: '广发小程序周五半价',
      desc: '260503，增加跨年，布局有变',
      rules: [
        {
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
          matches:
            '([text^="周五5折" || text^="（跨年大促）"] <<n * + * > [text="立即抢购" || text="抢购"])',
        },
      ],
    },
    {
      key: 48,
      name: '屈臣氏42代50',
      desc: '251202，1立即抢购，2提交',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
            '([text="42元购50元屈臣氏代金券"] < * +n * [text="提交"]) || ([text="42元购50元屈臣氏代金券"] < * + * > [text="抢购"])',
        },
      ],
    },
    {
      key: 49,
      name: '光大小程序弹窗',
      desc: '260624',
      rules: [
        {
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
          matches:
            'View > View > View >  Image + TextView[text="今日不再提醒"] + TextView[text="前往领取"] + Image',
        },
      ],
    },
    {
      key: 50,
      name: '深工登陆弹窗，X掉',
      desc: '260627',
      rules: [
        {
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
          matches:
            '([text="更多精彩"] + @* +n [text="女职工服务"] +n [text="阵地服务"]) || (@Image < View + Image + TextView[text^="恭喜你完成"] + TextView[text="取消"] + TextView[text="查看积分"])',
        },
      ],
    },
    {
      key: 51,
      name: '请到广东过端午',
      desc: '260616',
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
          actionCd: 0,
          resetMatch: 'match',
          matches:
            'View > Image[text="1NZmP5zb7wI"] + @View[clickable=true] > Image[text="1LBYVwKptxS"]',
        },
      ],
    },
    {
      key: 52,
      name: '同程抢旅游景区券',
      desc: '251229',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
            'WebView[text="2026请到广东过大年"] >n [text="1JkEZih3lfi"] + * > [text="1JkIoUfneDu"]',
        },
      ],
    },
    {
      key: 53,
      name: '广州，乐享品质旅游 ，共赴美好山河',
      desc: '260516，五折演出券',
      rules: [
        {
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
          matches: '[text="80"] <<n *[childCount=3] +2 *[visibleToUser=true]',
        },
      ],
    },
    {
      key: 54,
      name: '湖北电影消费券猫眼小程序',
      desc: '260117',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
            '[text="26年湖北消费券"] [text="¥ 10" || text="¥ 25"] +n * > [text="f34e522ba841ae9135fc77546faaf5f638005"]',
        },
      ],
    },
    {
      key: 55,
      name: '湖北电影消费券淘票票小程序',
      desc: '260117',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 4,
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
            'WebView[text="“惠影湖北 乐享生活”-湖北省惠民观影活动"] View[index=4 || index=6] @View[index=parent.childCount.minus(1)] > TextView[depth=29]',
        },
      ],
    },
    {
      key: 56,
      name: '工行浇水',
      desc: '260802，延时要考虑弹窗',
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
            '([text="30b2664f811b49268daf0884b451bd741055117292"]) || (WebView > View > View > View > View > Image[clickable=true][visibleToUser=true][text="30b2664f811b49268daf0884b451bd741055117292"]) || ([text="奖励派送中，稍后送达～"] <n * + * > *[clickable=true])',
        },
      ],
    },
    {
      key: 57,
      name: '光大小程序阳光抽奖',
      desc: '251224',
      rules: [
        {
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
          matches:
            '([text^="消耗" && text$="阳光值参与抽奖？"] +n [text="取消"] + [id="onSureReward"][text="确定"]) || ([text="谢谢您的参与"] +n [text="确定"])',
        },
      ],
    },
    {
      key: 58,
      name: '月月刷未开始，最小化',
      desc: '260302',
      rules: [
        {
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
          matches:
            '[text="该活动尚未开始"] + [text="敬请期待"] <<n * + * [desc="关闭"][clickable=true]',
        },
      ],
    },
    {
      key: 60,
      name: '工行武汉云网点打卡1.08元，',
      desc: '260525',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 5,
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
          matches:
            '[text="1.08元"] + [text="云网点打卡"] <<n * + * > Button[text*="立即领取"]',
        },
      ],
    },
    {
      key: 61,
      name: '八闽有礼，关闭城市弹窗',
      desc: '260803',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 750,
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
            'WebView[text*="八闽有礼"] > View > View > View > View > View > @Image[clickable=true][visibleToUser=true][text="关闭"] + Image[text="地市详情"]',
        },
      ],
    },
  ],
});
