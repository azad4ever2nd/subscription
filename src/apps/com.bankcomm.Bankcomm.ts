import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.bankcomm.Bankcomm',
  name: '交通银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '251208，添加代理提醒',
      rules: [
        {
          matches:
            '([vid="popup_ad_image"] + [vid="popup_close"]) || ([vid="bcm_alert_dialog_content"] + * > [vid="dialog_bottom_confirm_cancel"][text="继续使用"])',
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
        },
      ],
    },
    {
      key: 2,
      name: '风评已过期',
      desc: '260223',
      rules: [
        {
          matches:
            '[vid="popup_busines_title"][text="您的风险测评已过期"] +n [vid="popup_business_ib_close"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.home.MainActivity',
        },
      ],
    },
    {
      key: 3,
      name: '最红星期五',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '(@[id="copy"][text*="立即购买"] <<2 * - * [text="最红星期五"]) || (View > View > Button[id="copy"][clickable=true][visibleToUser=true]) || (WebView > View > View > View > View > Button[id="copy"][clickable=true][visibleToUser=true][text=" 立即购买"])',
        },
      ],
    },
    {
      key: 4,
      name: '达美乐50元代金券',
      desc: '260403',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches: '@View [text="达美乐50元代金券"]',
        },
      ],
    },
    {
      key: 5,
      name: '达美乐售罄，返回',
      desc: '260403，D,先占位',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '[text="达美乐50元代金券"] <<n * + * [id="copy"][text="已售罄"]',
        },
      ],
    },
    {
      key: 6,
      name: '领券中心,精选推荐',
      desc: '260803，[clickable=true][visibleToUser=true]指定领第3个index=2',
      rules: [
        {
          actionMaximum: 2,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20260428000123_20260428125008205"] <<n View + View > View[index=1 || index=2] >n Image[text="立即领取"]',
        },
      ],
    },
    {
      key: 7,
      name: '领券中心,信用卡专享好券，刷卡金',
      desc: '260803，[clickable=true][visibleToUser=true]',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          order: -10,
          actionMaximum: 1,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '(Image[text="ACIM_20260728000180_20260728174629048"] <<n View + View > View[index=0] Image[text="立即领取"])',
        },
      ],
    },
    {
      key: 8,
      name: '领券中心,信用卡专享好券，还款红包',
      desc: '260803',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          actionMaximum: 1,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '(Image[text="ACIM_20260728000180_20260728174629048"] <<n View + View > View[index=1] Image[text="立即领取"])',
        },
      ],
    },
    {
      key: 9,
      name: '领券中心,领更多品牌商户券',
      desc: '260803，[clickable=true][visibleToUser=true]',
      rules: [
        {
          actionMaximum: 2,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20260729000087_20260729163354230"] < View +n TextView[clickable=true]',
        },
      ],
    },
    {
      key: 10,
      name: '领券中心,甄选购物',
      desc: '260803',
      rules: [
        {
          actionMaximum: 2,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20260608000049_20260608154424382"] <<n View + View > View[index=1 || index=2] Image[text="立即领取"]',
        },
      ],
    },
    {
      key: 11,
      name: '领券中心,优选美食',
      desc: '260803，',
      rules: [
        {
          actionMaximum: 1,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20251219000112_20251219111501806"] <<n View + View > View[index=0 || index=2 || index=3] Image[text="立即领取"]',
        },
      ],
    },
    {
      key: 12,
      name: '领券中心，品质商超，扫一扫门店享优惠，暂时指定领第2张index=1',
      desc: '260803，规则先暂时定好定位',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20251027000174_20251027163532007"] <<n View + View > View[index=0 || index=2] [text="立即领取"]',
        },
      ],
    },
    {
      key: 13,
      name: '领券中心，郊游通勤 低碳出行，火车票-3，index=1',
      desc: '260803',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20260302000116_20260302113642643"] <<n View + View > View[index=1] Image[text="立即领取"]',
        },
      ],
    },
    {
      key: 14,
      name: '领券中心，校园洗衣',
      desc: '260803',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20260629000014_20260629103652681"] <<n View + View > View[index=0 || index=1] Image[text="立即领取"]',
        },
      ],
    },
    {
      key: 15,
      name: '领券中心，娱乐影音',
      desc: '260803',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Image[text="ACIM_20260206000011_20260206101205385"] <<n View + View > View[index=0 || index=1] Image[text="立即领取"]',
        },
      ],
    },
    {
      key: 16,
      name: '当前奖励已领完',
      desc: '260209',
      rules: [
        {
          action: 'back',
          matches: ['[id="dialogInnerDiv"][text^="当前奖励已领完"]'],
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 17,
      name: '人数太多，关闭',
      desc: '260403，增加服务器在忙，上限',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '[id="dialogInnerDiv"][text^="哎呀" || text^="人数太多" || text*="次数上限" || text^="服务器在忙" || text$="请稍后再试" ] <<n * + * > [text="关闭"]',
        },
      ],
    },
    {
      key: 18,
      name: '每月一次，爱优哔 立即领取',
      desc: '251206，',
      rules: [
        {
          matches: ['[text*="每日限量，10点更新库存"] + * > [text="立即领取"]'],
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 19,
      name: '爱优哔已领完，返回',
      desc: '251206',
      rules: [
        {
          action: 'back',
          matches:
            '[text*="券每日限量，10点更新库存"] + * > [text="周期已领完"]',
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 20,
      name: '碳星任务，点击签到',
      desc: '251121',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '([text="碳星任务"] [text="点击签到"]) || ([text="+1"] + [text="点击签到"])',
          actionMaximum: 2,
          matchDelay: 1000,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 21,
      name: '能量签到完成',
      desc: '260803',
      rules: [
        {
          matches:
            '([text="恭喜您签到成功"] +n [text="我知道了"]) || (Dialog > View > @Button[clickable=true][visibleToUser=true][text="我知道了"] + Button[text="赚更多能量"])',
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 22,
      name: '感谢订阅，知道了',
      desc: '260601',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            '([text="感谢您的订阅"] <<n * + * > [text="知道了"]) || (TextView[text*="订阅"] <n View < View + View > @Button[clickable=true][visibleToUser=true][text="知道了"] + Button[text="去查看"])',
        },
      ],
    },
    {
      key: 23,
      name: '分享到微信好友',
      desc: '260601',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches: '@[text="微信好友"] + [text="朋友圈"]',
        },
      ],
    },
    {
      key: 24,
      name: '直播间任务，去完成',
      desc: '260624',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'WebView > View > View > View > View > TextView[text="1次抽奖机会"] + View > Image[text="去完成"]',
        },
      ],
    },
    {
      key: 25,
      name: '直播间任务完成，立即领取',
      desc: '260624',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'WebView > View > View > View > View > TextView[text="1次抽奖机会"] + View > Image[text="去领奖"]',
        },
      ],
    },
    {
      key: 26,
      name: '直播间任务完成，抽奖弹窗',
      desc: '260624',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'View > View > View > View[childCount=4] > TextView[text="恭喜获得"] + TextView[text="1次抽奖机会"] + Image + Image',
        },
      ],
    },
    {
      key: 27,
      name: '直播间任务完成，抽奖',
      desc: '260728',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'WebView[text="交通银行"] > View > View > View > View > View > TextView[text="1次"] + TextView[clickable=false][visibleToUser=true][text.length=0]',
        },
      ],
    },
    {
      key: 28,
      name: '恭喜中奖了',
      desc: '',
      rules: [
        {
          matches: ['[text^="恭喜"] + TextView + Image + *'],
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 29,
      name: '抽奖弹窗，关闭',
      desc: '260228',
      rules: [
        {
          matches:
            '[text="恭喜获得"] +n Image[clickable=true][index=parent.childCount.minus(1)]',
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 30,
      name: '终止心愿',
      desc: '251201，整合终止和确认过程，关注任务',
      rules: [
        {
          matches:
            '(@[text="知道了"] + [text="去查看"]) || ([text="终止心愿"] <<n * + * > [text="确认"]) || ([text="暂停心愿"] + [text="终止心愿"])',
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 31,
      name: '惠民贷广告',
      desc: '',
      rules: [
        {
          matches: ['* + [text="您的申请尚未完成"] +3 * > [text="退出申请"]'],
          resetMatch: 'app',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
        },
      ],
    },
    {
      key: 32,
      name: '删除优惠券，确认',
      desc: '260803',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'TextView[text="删除优惠券"] < View + View > Button[clickable=true][visibleToUser=true][text="确认"]',
        },
      ],
    },
    {
      key: 33,
      name: '基金理财操作，第1步，阅读资料',
      desc: '260721',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'Dialog > Button[clickable=true][visibleToUser=true][text="我已阅读并同意"]',
        },
      ],
    },
    {
      key: 34,
      name: '基金理财操作，第2步，风险提示声明，一键输入',
      desc: '260721',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'View > EditText[text.length=0] + View > View > Button[clickable=true][visibleToUser=true][text="一键输入"]',
        },
      ],
    },
    {
      key: 35,
      name: '基金理财操作，第2步，风险提示声明，一键输入，确认',
      desc: '260721',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          matches:
            'EditText[text.length>0] < View + Button[clickable=true][visibleToUser=true][text="确认"]',
        },
      ],
    },
    {
      key: 36,
      name: '浏览任务完成',
      desc: '26051，添加新布局，添加权限弹窗，直播间ids',
      rules: [
        {
          action: 'back',
          resetMatch: 'match',
          activityIds: [
            'com.bankcomm.module.biz.bcmvideo.BCMVerticalVideoActivity',
            'com.bankcomm.module.biz.webcontainer.BCMHtml5Activity',
          ],
          matches:
            '([id="android:id/message"][text*="权限"] <<n * + [id="android:id/buttonPanel"] [id="android:id/button2"][text="否"] + [id="android:id/button1"][text="是"]) || ([text="Pyi3KQBzgJA1F+Xm7MrWYA0HQqTcq4GrAAAAAASUVORK5CYII="]) || ([text="gthEFTB6uRQ36UPWtwD"]) || ([text="countdown-fulfilled-bg.f65a2ea"]) || (View > Image[clickable=false][text="gthEFTB6uRQ36UPWtwD"])',
        },
      ],
    },
    {
      key: 37,
      name: '直播间限时福袋',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'com.bankcomm.module.biz.bcmvideo.BCMVerticalVideoActivity',
          matches:
            'WebView > View > View > @View[clickable=false][visibleToUser=true] > Image[text="0MrX0eS4YNgAAAABJRU5ErkJggg=="] + Image[text^="fudai"]',
        },
      ],
    },
    {
      key: 38,
      name: '系统定位权限未开启,暂不开启',
      desc: '251207,',
      rules: [
        {
          matches:
            '[vid="dialog_alert_title"][text="系统定位权限未开启"] +n * > [vid="dialog_bottom_confirm_cancel"][text="暂不提醒"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'com.bankcomm.module.biz.tinyapp.activity.TinyAppHtml5Activity',
        },
      ],
    },
    {
      key: 39,
      name: '领券中心，1分购，外面等',
      desc: '2600508，可以指定抢什么券，朴朴，移动，联通，美团，闪购，',
      rules: [
        {
          resetMatch: 'app',
          actionCd: 0,
          actionMaximum: 1,
          activityIds: 'com.unionpay.cordova.UPActivityWeb',
          matches:
            '@*[clickable=true] [text*="移动"] +n * [text="0."] + [text="01"] + * > [text="立即抢购"]',
        },
      ],
    },
    {
      key: 40,
      name: '领券中心，1分购，里面等，立即抢购',
      desc: '260508',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 2,
          activityIds: 'com.unionpay.cordova.UPActivityWeb',
          matches: '[text="￥ 0.01"] + [text="预估到手价"] + [text="立即抢购"]',
        },
      ],
    },
    {
      key: 41,
      name: '领券中心，1分购，达到限购次数，返回',
      desc: '260327',
      rules: [
        {
          action: 'back',
          matches:
            '[text="￥ 0.01"] + [text="预估到手价"] + [text^="达到限购次数" || text="已抢光"]',
          resetMatch: 'match',
          activityIds: 'com.unionpay.cordova.UPActivityWeb',
        },
      ],
    },
    {
      key: 42,
      name: '领券中心，1分购，里面等2',
      desc: '260608，不分品种，无actionMaximum限制',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.unionpay.cordova.UPActivityWeb',
          matches:
            'View > TextView[text="￥ 0.01"] + TextView[text="预估到手价"] + TextView[text="立即抢购"]',
        },
      ],
    },
  ],
});
