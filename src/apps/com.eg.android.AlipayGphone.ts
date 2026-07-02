import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.eg.android.AlipayGphone',
  name: '支付宝',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '',
      rules: [
        {
          matches: ['[desc="推荐广告"] + * > [desc="关闭"]'],
          resetMatch: 'match',
          activityIds: ['com.eg.android.AlipayGphone.AlipayLogin'],
        },
      ],
    },
    {
      key: 2,
      name: '会员签到',
      desc: '260227',
      rules: [
        {
          matches: [
            '([text="每日签到"] +2 * [text^="今日签到"]) || (@View > [text="每日签到"] +n * >n [text^="今日签到+"])',
          ],
          resetMatch: 'activity',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '跳过借款',
      desc: '260325,添加返回，整合境外消费，转出提示，任务完成，各种弹窗，添加小组件，已学习去使用，会员小组件,卡到期续卡，还款后分期提示，资金规划',
      rules: [
        {
          matches: [
            '(@* + [text*="碰一下"] +n [text="去申请"]) || (@* - [text^="开启"] <n * +n * > [text="去订阅"]) || (@Button + * > [text=" 立即添加"]) || (@Image + [text*="收益可升级" || text="上架商品促成单" || text$="挑战活动"] +n [text="去升级" || text="去了解"]) || (@Image < * + * > [text*="红包奖励" || text="分期新户专享" || text^="开通"  || text="去看看1" || text*="同意协议" || text="同意协议并分期"]) || (@Image < * + * > [text*="红包奖励" || text="分期新户专享" || text^="开通"] +n [text="去看看1" || text*="同意协议" || text="同意协议并分期"]) || (@Image < [text*="红包奖励" || text="分期新户专享" || text^="开通"] +n [text="去看看1" || text*="同意协议"]) || (@Image[text=""] < * +n [text^="境外信用卡消费满"] +n * [text="提交"]) ||(@TextView + View >n [text="开启使用"]) || (@TextView + [text^="恭喜" || text="你新购的基金抗风险能力强"] +n [text="去看看"]) || (@TextView +n [text="去完成"] - * > [text^="搭配海外基金" || text^="搭配一笔" || text^="恭喜完成一笔国内" ]) || (@TextView - [text*="红包" || text^="学知识"] < * +n [text*="领取" || text*="福利"]) || (@TextView < View +2 [text="已学习，去使用"]) || (@[text="BE4E7D81-3958-4F2E-9956-E6071199885F@2x"] < * + [text^="添加"] ) || (@[text="关闭"] + * > [text="去看看" || text="去收礼"]) || (@[text="关闭"] +n [text="立即续卡"]) || ([text="关闭弹窗"] + * [text="立即更换"]) || ([text="去转换"] + [text="仍要卖出"]) || ([text="支付宝"] + [text="邀请你" || text="推荐你"] + [text="跳过"]) || ([text="暂不转出"] + [text="继续转出"]) || ([text="去看看"] - [text="淘宝闪购"] <<n * + [text="关闭"]) || (Dialog >n Button[text="关闭"]) || ([text^="无法获取定位信息"] + [text="我知道了"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '领取积分',
      desc: '260227',
      rules: [
        {
          matches: [
            '([text="赚更多积分"] <<n * -2 [text="每日签到"] <<n * [text^="领取"][text*="积分"]) || ([text="我的订单"] <<n * + * >n [text^="领取" && text$="积分"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '关闭，开通信用卡积分抵扣',
      desc: '260322',
      rules: [
        {
          matches: [
            '@[text="关闭"] + [text="开通信用卡积分抵扣"] +n [text="同意协议并开通"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '开启重要消息通知',
      desc: '260218',
      rules: [
        {
          matches: [
            '([id="com.alipay.android.phone.messageboxapp:id/image"] + [id="com.alipay.android.phone.messageboxapp:id/cancel_btn"]) || (@[id="com.alipay.android.phone.messageboxapp:id/cancel_btn"] + * > [text="去开启"])',
          ],
          fastQuery: true,
          activityIds: [
            'com.alipay.android.phone.msgboxapp.ui.activity.MBoxTabPageActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '支付有礼，集卡，开心收下',
      desc: '260324',
      rules: [
        {
          matches: ['@View + ViewGroup *[desc="开心收下"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.android.phone.xriver.bundlex.CSGAPushActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '迪士尼梦享券，500-60',
      desc: '260508，区别在于可抢时childCount=4',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          actionMaximum: 500,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'View[childCount=4] > [text="60元"] + [text="乐园门票消费券"] + [text="满500可用"] + *',
        },
      ],
    },
    {
      key: 9,
      name: '迪士尼梦享券，1000-120',
      desc: '260508，区别在于可抢时childCount=4',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          actionMaximum: 500,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'View[childCount=4] > [text="120元"] + [text="乐园门票消费券"] + [text="满1000可用"] + *',
        },
      ],
    },
    {
      key: 10,
      name: '迪士尼梦享券，2000-200',
      desc: '260508，区别在于可抢时childCount=4',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          actionMaximum: 500,
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'View[childCount=4] > [text="200元"] + [text="乐园门票消费券"] + [text="满2000可用"] + *',
        },
      ],
    },
    {
      key: 11,
      name: '农信日',
      desc: '251124',
      rules: [
        {
          matches: [
            '[text="安徽农信" || text="武汉农商行"] <n * +4 TextView[text!="已抢完"]',
          ],
          matchTime: 10000,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '推荐开通花呗',
      desc: '260523，添加放弃还款，推荐习惯，([text^="支付宝推荐" || text^="支付宝  推荐"] < * +n * > [text="关闭"]) ||',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '([text="支付宝"] + [text="邀请你" || text="推荐你"] + [text="跳过"]) || ([text="是否放弃本次付款？"] <<n * +n * [text="放弃"]) || ([text^="支付宝推荐" || text^="支付宝  推荐"] <<n * +n * > [text="关闭"]) || ([id="com.alipay.mobile.antui:id/message"][text="是否放弃本次付款？" || text*="是否放弃付款"] <<n * + * [id="com.alipay.mobile.antui:id/cancel"][text="放弃"]) || ([text="支付宝推荐你"] < * +n @*[clickable=true] > [text="关闭"])',
        },
      ],
    },
    {
      key: 13,
      name: '指定银行还款优惠，确认付款',
      desc: '260608，增加新布局，针对卡点的指定银行的固定还款优惠，根据需要添加银行和金额',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 0,
          actionMaximum: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '([text="邮储银行立减金"] + [text="-¥ 5.00"] <<n * + * @Button[desc*="确认付款"] > [text="确认付款"]) || (TextView[text="邮储银行立减金"] + TextView[text="-¥ 5.00"] <<n FrameLayout + FrameLayout Button[desc^="付款" || desc*="确认付款"] > FrameLayout[clickable=true])',
        },
      ],
    },
    {
      key: 14,
      name: '10点，18点旅享半价景点',
      desc: '251215 ，D',
      rules: [
        {
          matches: [
            '[id="ant-render-id-CPT_690b10f36cbe9081bc793593"][childCount=5] > [index=2]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '碰一碰，入会并支付',
      desc: '251228',
      rules: [
        {
          matches: ['[vid="main_bt"][text="入会并支付"]'],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nfc.ui.NFCLandingActivity',
            'com.alipay.mobile.quinox.SchemeLauncherActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '通知管理，不用',
      desc: '260304',
      rules: [
        {
          matches: [
            '([id="com.alipay.mobile.rome.pushservice:id/dialog_title"][text="选择通知接收范围"] +n * > [id="com.alipay.mobile.rome.pushservice:id/dialog_cancel_btn"][text="暂时不用"]) || ((@[id="com.alipay.mobile.rome.pushservice:id/dialog_cancel_btn"][text="暂时不用"] + [id="com.alipay.mobile.rome.pushservice:id/dialog_confirm_btn"][text="立即开启"]))',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.rome.pushservice.integration.PushOpenGuideActivity',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '开启地理位置权限',
      desc: '260312，增加IDS，[id="com.alipay.mobile.antui:id/title_txt_2"][text="开启位置权限并允许支付宝获取你的地理位置"]',
      rules: [
        {
          matches: [
            '@[id="com.alipay.mobile.antui:id/btn_close"][desc="取消"] + [id="com.alipay.mobile.antui:id/title_txt_1" || id="com.alipay.mobile.antui:id/title_txt_2"][text*="地理位置" || text="支付宝本地服务"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.eg.android.AlipayGphone.AlipayLogin',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '添加神券到首页，X掉',
      desc: '260221',
      rules: [
        {
          matches: ['@TextView <n * + [text="取消"] + [text="立即添加"]'],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '任务完成，返回领奖',
      desc: '260605，没有clickable=true定位，添加返回，',
      rules: [
        {
          action: 'clickCenter',
          matches:
            '(@View > [text="任务完成"] + [text="返回会场" || text="返回领奖>"]) || (@View[clickable=true] >n [text="任务完成"] + [text="返回会场" || text="返回领奖>"])',
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '话费光大100-10',
      desc: '260608，布局有变，针对卡点的指定银行的优惠，根据需要添加银行和金额',
      rules: [
        {
          fastQuery: true,
          actionCd: 0,
          actionMaximum: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '([desc="支付金额90.00元"] <<n * + * >n @Button[desc^="确认付款"]) || ([desc="支付金额90.00元"] <<n * + * >n Button[desc^="付款"] > *[clickable=true]) || ([text="光大银行立减金"] + [text="-¥ 10.00"] <<n * + * @Button[desc^="确认付款"]) || (TextView[text="光大银行立减金"] + TextView[text="-¥ 10.00"] <<n FrameLayout + FrameLayout Button[desc^="付款" || desc*="确认付款"] > FrameLayout[clickable=true])',
        },
      ],
    },
    {
      key: 21,
      name: '还款优惠，下一步去还款',
      desc: '260508',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '[text="本卡满¥1500.00"] + [text="-¥5.00"] +n * Button[text="下一步去还款"]',
        },
      ],
    },
    {
      key: 22,
      name: '指定银行还款优惠，确认付款2',
      desc: '260508，对比测试13,添加了matchroot，actionCd:1000',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchRoot: true,
          actionCd: 1000,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="邮储银行立减金"] + [text="-¥ 5.00"] <<n * + * Button[desc^="确认付款"] > [text="确认付款"]',
        },
      ],
    },
    {
      key: 23,
      name: '获取你的位置信息，拒绝',
      desc: '260628',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App02',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App03',
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App04',
          ],
          matches:
            'TextView[id="com.alipay.mobile.antui:id/permission_description"][text*="位置信息"] <2 LinearLayout < FrameLayout < FrameLayout + LinearLayout > Button[id="com.alipay.mobile.antui:id/btn_cancel"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 24,
      name: '弹窗2，与分期有关，X掉',
      desc: '260606',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches: '@Image < View + View Button[text="同意协议并分期"]',
        },
      ],
    },
    {
      key: 25,
      name: '浏览任务完成，返回会场',
      desc: '260701',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@View > View > TextView[text="任务完成"] + TextView[text="返回会场"]',
        },
      ],
    },
    {
      key: 26,
      name: '本次没有中奖，知道了，关闭',
      desc: '260702，添加 入会领，下单 ，去看看',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '(Button[clickable=true][text="知道了"] < View <n View < View + Button[clickable=true][visibleToUser=true][text="关闭"]) || (Button[clickable=true][text="知道了"] <n View <n View < View + Button[clickable=true][visibleToUser=true][text="关闭"])  || (Button[text="去完成"] <n View -n TextView[text*="下单"] <n View <n View + Button[clickable=true][visibleToUser=true][text="关闭"]) || (Button[clickable=true][text="入会领"] < View <n View <n View + Button[clickable=true][visibleToUser=true][text="关闭"])',
        },
      ],
    },
    {
      key: 27,
      name: '中奖了，开心收下',
      desc: '260701',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '@Button[clickable=true][text="开心收下"] <n View < View + Button[clickable=true][visibleToUser=true][text="关闭"]',
        },
      ],
    },
    {
      key: 28,
      name: '逛一逛遂骰子次数，去完成',
      desc: '260701',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'TextView[text^="逛一逛"] +(2,3) View > Button[text="去完成"]',
        },
      ],
    },
    {
      key: 29,
      name: '点我领取',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '(@Button[text="点我领取"][clickable=true] <n View <n View <n View + Button[clickable=true][visibleToUser=true][text="关闭"]) || (@Button[text="点我领取"][clickable=true] <n View <n View + Button[clickable=true][visibleToUser=true][text="关闭"])',
        },
      ],
    },
    {
      key: 30,
      name: '转账提示，不再提示',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            '(View > @CheckBox[checked=false] + TextView + Button + Button[clickable=true][visibleToUser=true][text="继续转出"]) || (View > CheckBox[checked=true] + TextView + Button + @Button[clickable=true][visibleToUser=true][text="继续转出"])',
        },
      ],
    },
    {
      key: 31,
      name: '任务列表，去领取 去浏览',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          matches:
            'View > Button[text="关闭"] +n View > View > View Button[clickable=true][visibleToUser=true][text="去领取" || text="去浏览"]',
        },
      ],
    },
    {
      key: 32,
      name: '神券抽奖，立即领取',
      desc: '260702，添加 关闭',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.alipay.mobile.nebulax.xriver.activity.XRiverTransActivity$Main',
          matches:
            '(@TextView[clickable=false][text="立即领取"] <n View + Button[clickable=true][visibleToUser=true][text="关闭"]) || (TextView[text="去下单"] <n View + Button[clickable=true][visibleToUser=true][text="关闭"])',
        },
      ],
    },
  ],
});
