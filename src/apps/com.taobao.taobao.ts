import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.taobao',
  name: '淘宝',
  groups: [
    {
      key: 1,
      name: '弹窗广告',
      desc: '251211,添加物流通知弹窗',
      rules: [
        {
          matches: [
            '(@[text="O1CN01eVP9R729P4urD3Wq4_!!6000000008059-2-tps-112-112"] +n [text="去开启"]) || ([vid="poplayer_native_state_id"] + [desc="关闭按钮"]) || ([desc="关闭浮条"] - * > * +2 *)',
          ],
          resetMatch: 'app',
          activityIds: [
            'com.taobao.tao.welcome.Welcome',
            'com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '节日版金币',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      resetMatch: 'app',
      rules: [
        {
          matches: ['@[text="赚金币"] <<n * + [text="回日常版"]'],
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '领淘金币',
      desc: '251205,添加弹窗',
      rules: [
        {
          matches: [
            '([desc="领淘金币"] > [desc="领淘金币"]) || (Dialog [text="关闭"])',
          ],
          actionMaximum: 2,
          resetMatch: 'app',
          activityIds: ['com.taobao.tao.welcome.Welcome'],
        },
      ],
    },
    {
      key: 4,
      name: '商品页面直播提示',
      desc: '[ChangeMe]本规则由GKD网页端审查工具生成',
      resetMatch: 'match',
      rules: [
        {
          matches: [
            '[text="开启直播悬浮窗"][vid="title"] +2 * > [vid="positive"][text="暂不"]',
          ],
          fastQuery: true,
          activityIds: ['com.taobao.taolive.sdk.permisson.PermissionActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '金币任务完成',
      desc: '返回',
      resetMatch: 'match',
      rules: [
        {
          action: 'back',
          matches: ['[text="任务已完成"] + [text="继续逛逛吧"]'],
          activityIds: [
            'com.taobao.android.detail2.core.framework.NewDetailActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '传统版淘金币签到',
      desc: '260319',
      rules: [
        {
          matches: ['@View > [text="点击签到" || text="签到领金币"]'],
          actionCd: 0,
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '弹窗',
      desc: '251123,添加升级提示',
      rules: [
        {
          matches: [
            '([id="receivedAward"] > * + *) || ([vid="update_contentDialog_v2"] > [vid="update_imageview_cancel_v2"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.taobao.themis.container.app.TMSActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '开启悬浮窗权限',
      desc: '',
      rules: [
        {
          matches: [
            '[text*="开启悬浮窗"] <<n [id="android:id/contentPanel"] + * [text="否"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.android.detail2.core.framework.floatwindow.permission.PermissionActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '签到红包',
      desc: '260210，改变规则排序，添加弹窗，领奖,(Image < * + * >n [text^="添加"] +n * > [text$="元宝" && text^="立即领"]) || ',
      rules: [
        {
          matches: [
            '([id="SIGN_IN_AREA_ID"] [text="立即签到"]) || ([text="继续领钱"] < * + * >n [text="点击领取"]) || ([id="SIGN_IN_AREA_ID"] > [text="继续领钱"] + * >n [text="点击领取"]) || ([text="点击领元宝(0/1)"] +n [text="领取"]) || (Image < * + * >n [text^="添加"] +n * > [text$="元宝" && text^="立即领"]) || (@Image < * + * >n [text="去领元宝" || text="浏览商品30秒"])|| (Dialog >n [text="关闭"]) || ([id="SINGLE_ITEM_CASH_BACK_MAIN_ID" || id="MAJOR_HONGBAO_SEND_MODAL_MAIN"] + [text="关闭"]) || ([text="去领元宝" || text^="恭喜" ||text="现金立即到账" || text="返现" || text="去下单" || text="去领取" || text="去看看"] <<n * + [text="关闭"]) || ([text*="立即领"] - [text="O1CN019BmmLi1GZKvUisx8l_!!6000000000636-2-tps-393-223.png_q50.jpg_"] - [text*="元宝"] <n * + [text="关闭"]) || (@[text^="O1CN01JfbGY21lIcW06JOti_!!6000000004796-2-tps-64-64"] - * > [text="我知道了"]) || (@[text="O1CN01zH3VkM1KrtQhLlTqz_!!6000000001218-2-tps-56-56.png_q50.jpg_"] + [text="做任务赚元宝"] + * >n [text="点击领元宝(1/1)"]) || ([text="去赚元宝"] <<n * + View > [text^="O1CN01UVlufl1CzCsp8oehQ_!!6000000000151-2-gg_dtc.png_q50"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.taobao.themis.container.app.TMSActivity',
            'com.taobao.tao.welcome.Welcome',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '弹窗88VIP资格',
      desc: '',
      rules: [
        {
          matches: ['[vid="poplayer_native_state_id"] + [desc="关闭按钮"]'],
          resetMatch: 'match',
          activityIds: [
            'com.alibaba.android.ultron.vfw.weex2.highPerformance.widget.UltronTradeHybridActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '闪购支付后的弹窗',
      desc: '260218',
      rules: [
        {
          matches: [
            '(@[text="关闭"] <<n * +n * [text="同意协议并开通"]) || (@* > [text="关闭"] <<n * +n * [text="同意协议并开通"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.android.msp.ui.views.MspContainerActivity'],
        },
      ],
    },
  ],
});
