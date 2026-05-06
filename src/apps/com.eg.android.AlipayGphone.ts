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
      name: '云游上海75',
      desc: '251219,D,[clickable=true] [text="75元"] + [text="游览券"] + [text="满150减75元"] + TextView',
      rules: [
        {
          matches: ['[text="75元"] + [text="游览券"] +2 TextView'],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '云游上海50',
      desc: '251219,D,[clickable=true] [text="50元"] + [text="游览券"] + [text="满100减50元"] + TextView',
      rules: [
        {
          matches: ['[text="50元"] + [text="游览券"] +2 TextView'],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity$App01',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '乐游券，要120或60改规则， || text="60"',
      desc: '251219,D',
      rules: [
        {
          matches: [
            '([text="乐园券"] +n [text="120" || text="120"] +n * > [text="领取"][clickable=true]) || ([text="乐园券"] +n [text="120" || text="120"] +4 [text="领取"][clickable=true])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
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
      desc: '260303，添加放弃还款，推荐习惯，([text^="支付宝推荐" || text^="支付宝  推荐"] < * +n * > [text="关闭"]) ||',
      rules: [
        {
          matches: [
            '([text="支付宝"] + [text="邀请你" || text="推荐你"] + [text="跳过"]) || ([text="是否放弃本次付款？"] <<n * +n * [text="放弃"]) || ([text^="支付宝推荐" || text^="支付宝  推荐"] <<n * +n * > [text="关闭"]) || ([id="com.alipay.mobile.antui:id/message"][text="是否放弃本次付款？" || text*="是否放弃付款"] <<n * + * [id="com.alipay.mobile.antui:id/cancel"][text="放弃"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '指定银行还款优惠，确认付款',
      desc: '260506，针对卡点的指定银行的固定还款优惠，根据需要添加银行和金额',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          actionCd: 0,
          actionMaximum: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '[text="邮储银行立减金"] + [text="-¥ 5.00"] <<n * + * @Button[desc^="确认付款"] > [text="确认付款"]',
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
      desc: '260325,',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            ' (@View[clickable=true] >n [text="任务完成"] + [text="返回会场" || text="返回领奖>"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'com.alipay.mobile.nebulax.xriver.activity.XRiverActivity',
          ],
        },
      ],
    },
    {
      key: 20,
      name: '话费光大100-10',
      desc: '260506，针对卡点的指定银行的优惠，根据需要添加银行和金额',
      rules: [
        {
          fastQuery: true,
          actionCd: 0,
          actionMaximum: 1,
          activityIds: 'com.alipay.android.msp.ui.views.MspContainerActivity',
          matches:
            '([desc="支付金额90.00元"] <<n * + * >n @Button[desc^="确认付款"] > [text="确认付款"]) || ([text="光大银行立减金"] + [text="-¥ 10.00"] <<n * + * @Button[desc^="确认付款"] > [text="确认付款"])',
        },
      ],
    },
  ],
});
