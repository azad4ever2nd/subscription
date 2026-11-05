import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'com.cs_credit_bank',
  name: '发现精彩',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="iv_advert"] - [vid="iv_close"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.mapass.example.activity.MainActivity_'],
        },
      ],
    },
    {
      key: 2,
      name: '首页悬浮窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="closeIvLogo"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.mapass.example.activity.MainActivity_'],
        },
      ],
    },
    {
      key: 3,
      name: '激活卡片提示',
      desc: '251121',
      rules: [
        {
          matches: ['[vid="cancel"][text="暂不激活"]'],
          actionCd: 100,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.mapass.example.activity.MainActivity_'],
        },
      ],
    },
    {
      key: 4,
      name: '周五半价资格领取',
      desc: '[text="当月累计消费≥2000元"] +4 *',
      rules: [
        {
          matches: [
            '[text="当月累计消费≥2000元"] +3 [text^="广发日周五5折"] + [text="去领奖"]',
          ],
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 5,
      name: '周五5折',
      desc: '261007，增加跨年，布局有变，([text="5折"] +n * > [text="立即购买"]',
      rules: [
        {
          actionMaximum: 8,
          actionCd: 0,
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          excludeMatches: 'View > View[text="确认订单"]',
          anyMatches: [
            '[text="5折"] +n @* > [text="立即购买" || text="立即抢购"]',
            '[text="5折"] +n [text="立即购买" || text="立即抢购"]',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '周五买一赠一',
      desc: '[text="可购1次"] + @Button +2 [text^="已抢"]',
      rules: [
        {
          matches: [
            '[text="可购1次"] + @Button <<3 * - * >4 [text*="买一赠一"]',
          ],
          actionCd: 0,
          actionMaximum: 3,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '屈臣氏立即抢购',
      desc: '251202，添加双12，[text*="屈臣氏"] <<n * +5 * > [text="立即抢购"]',
      rules: [
        {
          matches: [
            '[text="【食力狂欢】1元抵12.12元代金券" || text*="屈臣氏"] <<n * +n @* > [text="立即抢购"]',
          ],
          actionCd: 0,
          actionMaximum: 5,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 8,
      name: '屈臣氏提交',
      desc: '',
      rules: [
        {
          matches: ['[text="确认订单"] +3 [text="提交"]'],
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 9,
      name: '半价下单之后 提额弹窗，X掉',
      desc: '260522',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@*[clickable=true][text.length=1] + [text="恭喜获得"] <n * +n [text="立即提升"]',
        },
      ],
    },
    {
      key: 10,
      name: '付款后服务评价，暂不',
      desc: '260125',
      rules: [
        {
          matches: [
            '[vid="title"][text="服务评价"] < * +n * > [vid="cancel"][text="暂不"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 11,
      name: '弹窗，分期账单，暂不办理',
      desc: '261003,添加小额免密',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          actionCd: 0,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            'View > View[text="分期还账单"] + View[text="暂不办理"][clickable=true][visibleToUser=true]',
            '[text="分期还账单"] + [text="暂不办理"]',
            '[text="开通小额免密支付"] + [text="暂不开通"]',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '抽奖结果弹窗',
      desc: '260410,action改为clickCenter测试',
      rules: [
        {
          action: 'clickCenter',
          fastQuery: true,
          resetMatch: 'match',
          matches: [
            '[text="查看奖品"] <n * + * > [text="popup_icon_close.15362f7"]',
          ],
          activityIds: ['com.alipay.mobile.nebulacore.ui.H5Activity'],
        },
      ],
    },
    {
      key: 13,
      name: '验证身份，勾选 我已阅读并同意',
      desc: '261014',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView[text="验证身份"] > View > View > View > View[text="短信验证码验证"] + View[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 14,
      name: '验证身份，勾选 我已阅读并同意，短信验证码验证',
      desc: '261014',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [13],
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView[text="验证身份"] > View > View > View > View[text="短信验证码验证"]',
        },
      ],
    },
    {
      key: 15,
      name: '验证身份，获取验证码',
      desc: '260929',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView[text="验证身份"] View > View[text="验证码"] +2 View > Button[text="获取"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 16,
      name: '弹窗，超级刷刷刷中奖，',
      desc: '261026',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          anyMatches: [
            'WebView[text="超级刷刷刷"] > View > View > View > View[text.length=1][clickable=true][visibleToUser=true]',
            'WebView[text="超级刷刷刷"] > View > View > View > @View[text.length=1][clickable=true][visibleToUser=true] - View >n View[text="去查看"]',
          ],
        },
      ],
    },
    {
      key: 17,
      name: '弹窗，会员权益，消耗次机会，确定',
      desc: '261101',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'LinearLayout + View + LinearLayout > TextView[text="取消"] + View + TextView[text="确定"][vid="submit"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 18,
      name: '弹窗，会员权益兑换，查看奖品，X掉',
      desc: '261101',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '@Image[text="popup_icon_close.15362f7"][clickable=true][visibleToUser=true] < View - View > Button[text="查看奖品"]',
        },
      ],
    },
    {
      key: 19,
      name: '广发支付有优惠，去领奖',
      desc: '261105',
      rules: [
        {
          resetMatch: 'match',
          excludeMatches:
            'View > View > View[text="领取后可在“我的奖品”查看"] + View > View[clickable=true][visibleToUser=true]',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View > View[text="做多笔任务，先享优惠"] + View > View[text="每天领红包，消费直接抵扣"] + View[text="去领奖"][clickable=true][visibleToUser=true]',
        },
      ],
    },

    {
      key: 20,
      name: '弹窗，限限时优惠砸中了，X掉',
      desc: '261105',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View > View > View[text="领取后可在“我的奖品”查看"] + View > View[clickable=true][visibleToUser=true]', //261105，弹窗，
        },
      ],
    },
    {
      key: 21,
      name: '打开定位，取消',
      desc: '260125',
      rules: [
        {
          matches: [
            '[vid="content"][text*="定位服务" || text*="位置"] < * +n * [vid="cancel"][text="取消"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.mapass.example.activity.SelectNationalCityActivity_',
          ],
        },
      ],
    },
    {
      key: 22,
      name: '弹窗，人脸识别提示，勾选 我已阅读并同意',
      desc: '261105',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          activityIds: 'com.baidu.idl.face.example.FaceDetectGuideActivity',
          matches:
            'LinearLayout > TextView[text="您即将进入人脸识别场景"] +n LinearLayout > CheckBox[vid="cb_protocol"][checked=false][visibleToUser=true][clickable=true]', //261105，弹窗，人脸识别提示，勾选
        },
      ],
    },
    {
      key: 23,
      name: '弹窗，人脸识别提示，勾选 我已阅读并同意后，开始识别',
      desc: '261105',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionCd: 2000,
          activityIds: 'com.baidu.idl.face.example.FaceDetectGuideActivity',
          matches:
            'CheckBox[vid="cb_protocol"][checked=true] < LinearLayout + Button[text="开始识别"][vid="face_detect_guide_agree_btn"][visibleToUser=true][clickable=true]', //261105，弹窗，人脸识别提示，勾选后，开始识别
        },
      ],
    },
  ],
});
