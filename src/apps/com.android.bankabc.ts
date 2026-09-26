import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.android.bankabc',
  name: '中国农业银行',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.android.bankabc.MainActivity',
          anyMatches: [
            '([vid="iv_notification_reminder_dialog"] + [vid="iv_notification_reminder_dialog_close"][desc="进入掌银首页"])',
            '(ViewGroup > ImageView[vid="iv_notification_reminder_dialog"] + ImageView[vid="iv_notification_reminder_dialog_close"][clickable=true][visibleToUser=true][desc="进入掌银首页"])',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '允许获取位置信息，取消',
      desc: '260905',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchTime: 3000,
          forcedTime: 3000,
          activityIds: 'com.android.bankabc.MainActivity',
          anyMatches: [
            '([vid="tv_title"][text*="位置"] +3 * [vid="tv_cancel"][text="取消"])',
            '(LinearLayout > TextView[vid="tv_title"][text="允许获取位置信息"] +n LinearLayout > TextView[vid="tv_cancel"][clickable=true][visibleToUser=true][text="取消"])',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '确认退出应用',
      desc: '26026，测试过顺序，从左往后',
      rules: [
        {
          resetMatch: 'app',
          fastQuery: true,
          activityIds: 'com.android.bankabc.MainActivity',
          anyMatches: [
            'ViewGroup > TextView[text*="退出应用"][vid="tv_content"] +2 TextView[text="取消"][vid="tv_cancel"][clickable=true][visibleToUser=true] +2 TextView[text="确认"][vid="tv_sure"][clickable=true][visibleToUser=true]',
            '(TextView[text*="退出应用"] +n TextView[vid="tv_sure"][text="确认"])',
            '(ViewGroup > TextView[vid="tv_content"][text*="退出应用"] +n TextView[vid="tv_sure"][clickable=true][visibleToUser=true][text="确认"])',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '免责提示，知道了',
      desc: '260218',
      rules: [
        {
          matches: [
            '[vid="tv_title"][text="免责提示"] +n [vid="tv_sure"][text="知道了"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.android.bankabc.MainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '茶饮优惠享-立即购买',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 250,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            '(WebView[text="茶影优惠享"] View[text="立即购买"][clickable=true])',
            '(WebView[text="茶影优惠享"] > View > View > View > View > View[clickable=true][visibleToUser=true][text="立即购买"])',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '茶饮优惠享-提交',
      desc: '260702',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            '([text="茶影优惠享"] [text="提交订单"][clickable=true])',
            '(WebView > View > View > View > View > Button[clickable=true][visibleToUser=true][text="提交订单"])',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '商品已抢完',
      desc: 'D',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: '[text^="本期活动商品已抢完"]',
          action: 'back',
        },
      ],
    },
    {
      key: 8,
      name: '同意授权',
      desc: '260705',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            '([id="auth-main"] > [text="拒绝"] + [text="同意授权"])',
            '(View > View + Button[text="拒绝"] + Button[clickable=true][visibleToUser=true][text="同意授权"])',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '车主弹窗',
      desc: 'D',
      rules: [
        {
          matches: ['* > [text="8BaplhYfHjrWAAAAAASUVORK5CYII="]'],
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 10,
      name: '游戏，我知道了',
      desc: '251219，D，添加抽奖机会用完',
      rules: [
        {
          action: 'back',
          anyMatches: [
            '([text="岁末感恩扭扭蛋"] >n [text="svta36gxSfhe8oa7NDxe1IY0halKYx+WLrcKk1JEgbKKk0YEEPKSk0MEYDCak0Axuhdn5cN+l9D9BL6aCwaS+jTbtDYRmNpN6LRjdhGt7bS6IwWazR3Y6wwBhpjlDKHOH989AdXRuZ6RysjszOs52uCPFefrgn+gpKvRu+4GvlLmbUOHpwYU1ue52H5AAAAAElFTkSuQmCC"])',
            '([text="抽奖机会已用完"] < * + * > [text="svta36gxSfhe8oa7NDxe1IY0halKYx+WLrcKk1JEgbKKk0YEEPKSk0MEYDCak0Axuhdn5cN+l9D9BL6aCwaS+jTbtDYRmNpN6LRjdhGt7bS6IwWazR3Y6wwBhpjlDKHOH989AdXRuZ6RysjszOs52uCPFefrgn+gpKvRu+4GvlLmbUOHpwYU1ue52H5AAAAAElFTkSuQmCC"])',
            '([text="温馨提示"] +n [text="我知道了"] + *)',
            '([text="我知道了"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 11,
      name: '每日签到抽奖',
      desc: '260726',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            '([id="beanAnswer"] > [text="a4613c7a03ec4aa1a32a00446de323ea9900032820260227bak"])',
            '(WebView[text="小豆乐园首页"] > View > View > View > @View[clickable=true][visibleToUser=true][id="beanAnswer"] > Image[text="a4613c7a03ec4aa1a32a00446de323ea9900032820260227"])',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '小豆立即抽奖',
      desc: '260710，没抽是[clickable=true][text.length=0],没中奖是有提示[text="很遗憾，您未中奖"][clickable=false],抽过奖View[clickable=false]且有child,child是查看小豆[clickable=true]，([text="每日抽小豆"] +2 View[childCount=0]) || ',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '(WebView > View > View > View > View[text="每日抽小豆"] +2 View[clickable=true][visibleToUser=true][text.length=0])',
        },
      ],
    },
    {
      key: 13,
      name: '信用卡弹窗',
      desc: '251117，D',
      rules: [
        {
          matches: ['[text="信用卡申请"] [text="7天内不再提示"] + Image'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 14,
      name: '弹窗，获取验证码',
      desc: '260908',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View > @Button[text="获取验证码"][clickable=true][visibleToUser=true] + View[text^="验证码发送至手机号 "]',
        },
      ],
    },
    {
      key: 15,
      name: '省钱月卡,拼手气抽价格',
      desc: '260921',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            'WebView > @View[clickable=true][visibleToUser=true] + View[text="更多优惠"]',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '省钱月卡,开盲盒抽价格',
      desc: '260921',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [15],
          action: 'clickCenter',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView > View[text="更多优惠"] +3 View >  View[clickable=false][visibleToUser=true] + @View[clickable=true][visibleToUser=true] + View[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 17,
      name: '弹窗，省钱月卡，仅限受邀用户，确定',
      desc: '260921',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          action: 'clickCenter',
          preKeys: [16],
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView > View > View[text="本活动仅限受邀客户参与"] + View[text="确定"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 18,
      name: '弹窗，勾选 此服务后15日内不再提示',
      desc: '260925',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'Dialog > View > @CheckBox[text.length=1][checked=false][visibleToUser=true] + View[text="勾选此服务后15日内不再提示"]',
        },
      ],
    },
    {
      key: 19,
      name: '弹窗，勾选不再提示，知道了',
      desc: '260925',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View[text="勾选此服务后15日内不再提示"] - CheckBox[checked=true][visibleToUser=true] < View + View > Button[text="退出"] + Button[text="知道了 "][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 20,
      name: '点击此处返回',
      desc: '260925',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView > View > View > View[text="点击此处返回"][clickable=true][visibleToUser=true] + Image',
        },
      ],
    },
    {
      key: 21,
      name: '开启消息通知',
      desc: '260726',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'abc.feinno.uilibrary.activitys.PublicListActivity',
          anyMatches: [
            '([vid="dialog_notification_imageView"] +n [vid="dialog_notification_close"])',
            '(FrameLayout > LinearLayout > ImageView[vid="dialog_notification_imageView"] +n ImageView[clickable=true][visibleToUser=true][vid="dialog_notification_close"])',
          ],
        },
      ],
    },
  ],
});
