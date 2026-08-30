import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 1,
      name: '周三5折单个模式',
      desc: '260105，([text="（周三5折）哈根达斯50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" ||  text="（周三5折）必胜客50元代金券"] +n [text*="立即抢购"]) || ',
      rules: [
        {
          matches:
            '([text="（周三5折）哈根达斯50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" ||  text="（周三5折）必胜客50元代金券"] +n * > [text*="立即抢购"])',
          actionCd: 0,
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 2,
      name: '周三5折列表模式',
      desc: '',
      rules: [
        {
          matches:
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" ||  text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券" ] +n [text*="立即抢购"]',
          actionCd: 0,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },

    {
      key: 3,
      name: '抢购失败，再试一次',
      desc: '251119',
      rules: [
        {
          action: 'clickCenter',
          matches: '[text="抢购失败"] +2 * > [text="再试一次"]',
          actionCd: 0,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 4,
      name: '抢购失败',
      desc: '251119',
      rules: [
        {
          action: 'back',
          matches:
            '[text="抢购失败"] + [text="库存不足啦，感谢您的参与，换个商品试试呀"]',
          actionCd: 0,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 5,
      name: '卖光了',
      desc: '[text^="（周三5折）"] +n * > [text*="卖光了"]',
      rules: [
        {
          action: 'back',
          matches:
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券"] +n * > [text*="卖光了"]',
          actionCdKey: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 6,
      name: '基金体验金，立即使用',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(TextView[text$="基金体验金"] < View +(1,3) View[id="useBtn"] > Button[text="立即使用"][clickable=true]) || (WebView[text="券详情"] > View > View > View > View > Button[text="立即使用"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 7,
      name: '收益奖励发放方式，我已阅读',
      desc: '260830，		  excludeMatches:TextView[text="请输入取款密码"] < View +n View > Button[text="确定"][clickable=true][visibleToUser=true]',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          excludeMatches:
            'TextView[text="请输入取款密码"] < View +n View > Button[text="确定"][clickable=true][visibleToUser=true]',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '([text="收益奖励发放方式"] >n [text="我已阅读"]) || ([text="recommend.f43217f6"] < View + [text="我已阅读"]) || (WebView[text="收益奖励发放方式"] > View > View > @TextView[clickable=false] + TextView[text^="已阅读并同意"] + View + Button[text="提交"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 8,
      name: '基金收益到银行卡',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          preKeys: [7],
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '([text$="可点击"] + [text="发放到银行卡"]) || (WebView[text="收益奖励发放方式"] > View > View > TextView + TextView[text="发放到银行卡"][clickable=false])',
        },
      ],
    },
    {
      key: 9,
      name: '收益奖励将免费发放到您这张银行卡，提交',
      desc: '260830，D，([text="收益奖励将免费发放到您这张银行卡："] +n * > [text="提交"]) || 容易和输入密码冲突',
      rules: [
        {
          preKeys: [8],
          action: 'clickCenter',
          resetMatch: 'match',
          excludeMatches:
            'TextView[text="请输入取款密码"] < View +n View > Button[text="确定"][clickable=true][visibleToUser=true]',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(TextView[text="收益奖励将免费发放到您这张银行卡："] < View <2 WebView[text="收益奖励发放方式"] > View > View > [text="提交"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 10,
      name: '奖品已抢光，返回',
      desc: '260403',
      rules: [
        {
          order: -1,
          action: 'back',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="奖品已抢光"]',
        },
      ],
    },
    {
      key: 11,
      name: '抽奖领任务页面，加自选 任务',
      desc: '260813，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 1000,
          forcedTime: 1500,
          action: 'clickCenter',
          matches:
            '(WebView > View > View > View >n Button[text="加自选"][clickable=true][visibleToUser=true]) || (WebView > View > View > View > View > Button[text="加自选"][clickable=true][visibleToUser=true]) || (WebView > View > View > View >n Button[text="去加自选" || text="去添加" || text="加自选"][clickable=true][visibleToUser=true])',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 12,
      name: '基金页面下方，添加自选1',
      desc: '260812，clickable=true',
      rules: [
        {
          action: 'clickCenter',
          matchDelay: 500,
          actionCd: 0,
          forcedTime: 1500,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(WebView > View > View > View > View > Button[text="自选"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 13,
      name: '基金页面下方，加自选2',
      desc: '260812，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          action: 'click',
          actionCd: 0,
          matchDelay: 500,
          forcedTime: 1500,
          actionMaximum: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(WebView > View > View > View > View > TextView[text="加自选"][clickable=false][visibleToUser=true])',
        },
      ],
    },
    {
      key: 14,
      name: '添加自选成功，返回',
      desc: '260601',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 300,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: 'TextView[text="添加自选成功"][visibleToUser=true]',
          action: 'back',
        },
      ],
    },
    {
      key: 15,
      name: '加自选，我知道了',
      desc: '',
      rules: [
        {
          matches:
            '[vid="ll_dialgo_app_gray_bg"] [vid="btn_positive"][text="我知道了"]',
          fastQuery: true,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 16,
      name: '讨论，取消勾选 同步到动态',
      desc: '260706，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          action: 'click',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            'View > @TextView[clickable=false][visibleToUser=true] + TextView[text="同步到动态"]',
        },
      ],
    },
    {
      key: 17,
      name: '去分享',
      desc: '260814',
      rules: [
        {
          matches: [
            '([text="分享指定文章"] +n [text="去分享"]) || ([text="分享招财号文章"] +n * > [text="去分享"])',
          ],
          action: 'clickCenter',
          matchDelay: 500,
          forcedTime: 1500,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 18,
      name: '分享到，微信好友',
      desc: '260813，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          matchDelay: 500,
          forcedTime: 1500,
          action: 'clickCenter',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(WebView > View > View > View > View >n Button[text="微信好友"][clickable=true][visibleToUser=true]) || (WebView > View > View > View > View > View > Button[clickable=true][visibleToUser=true][text="微信好友"]) || (WebView > View > View > View > View > View > View > Button[text="分享海报"] + Button[text="微信好友"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 19,
      name: '领任务界面，我要抽奖',
      desc: '260706，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          action: 'click',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            'WebView > View > View > View > View > TextView[clickable=false][visibleToUser=true][text="我要抽奖"]',
        },
      ],
    },
    {
      key: 20,
      name: '恭喜中奖啦',
      desc: '260717,clickCenter不行',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(@Button + [text*="恭喜"] +n [text="返回"]) || (@Button + [text^="恭喜"] +n [text="立即查看"]) || (View > View > View > @Button[clickable=true][visibleToUser=true] + TextView[text*="恭喜"] +n TextView[text="返回"]) || (View > View > View > @Button[clickable=true][visibleToUser=true] + TextView[text^="恭喜"] +n TextView[text="立即查看"])',
        },
      ],
    },
    {
      key: 21,
      name: '红包一键提现',
      desc: '260717，一键提现，确认提现到账户',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '([text="待提现红包"] + [text="一键提现"]) || (WebView > View > View > TextView[text="待提现红包"] + Button[clickable=true][visibleToUser=true][text="一键提现"]) || ([text="确认提现到账户"])',
        },
      ],
    },
    {
      key: 22,
      name: '一键提现，最多15个红包，确认',
      desc: '260706，clickable=true',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 0,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            'TextView[text*="提现15个红包"] < View + View > Button[clickable=true][visibleToUser=true][text="确认"]',
        },
      ],
    },
    {
      key: 23,
      name: '管理定制计划',
      desc: '260804',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(Button[text="管理"]) || (WebView[text="定投详情"] > View > View > Button[clickable=true][visibleToUser=true][text="管理"])',
        },
      ],
    },
    {
      key: 24,
      name: '删除定制计划',
      desc: '260804',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(View > Button[text="修改"] + Button[text="暂停"] + Button[clickable=true][visibleToUser=true][text="终止"])',
        },
      ],
    },
    {
      key: 25,
      name: '确定不再关注',
      desc: '260804，添加 终止定投计划确定',
      rules: [
        {
          matches:
            '([text="确定不再关注？"] < * + [text="取消"] + [text="确定"]) || ([text="确定终止该定投计划吗？"] +n * > [text="确定"])',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 26,
      name: '月月领挑自己想要的奖品,准点，选择奖品',
      desc: '260118',
      rules: [
        {
          matches:
            '[text="活动奖品"] + [text*="可领取以下奖品中的1件"] +n * [text="选择奖品"]',
          actionCd: 100,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 27,
      name: '月月领挑自己想要的奖品,选择奖品弹窗',
      desc: '260118',
      rules: [
        {
          preKeys: [26],
          matches:
            '[text="请选择奖品"] + [text="您本次可以选择1件奖品"] + [text="已选0/1"] + * [text*="26.8元消费返现券"]',
          actionCdKey: 26,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 28,
      name: '月月领挑自己想要的奖品，选择弹窗弹窗，确认领取',
      desc: '260118',
      rules: [
        {
          preKeys: [27],
          matches:
            '[text="请选择奖品"] + [text^="您本次可以选择1件奖品"] + [text="已选1/1"] +n [text="确认领取"][focusable=true]',
          actionCdKey: 26,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 29,
      name: '月月领挑自己想要的奖品，误触弹窗',
      desc: '260118，D',
      rules: [
        {
          matches:
            '[id="design_prd_popup_mask"] [text*="元消费返现券（单笔满"] + TextView',
          actionCdKey: 26,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 30,
      name: '超风险及高风险产品定投确认，确认继续定投',
      desc: '260602',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '([text$="定投确认"] < * +n [text="确认继续定投"]) || (Dialog > @Button[clickable=true][visibleToUser=true][text="确认继续定投"] - TextView - View > View[text="超风险及高风险产品定投确认"])',
        },
      ],
    },
    {
      key: 31,
      name: '定投，阅读并确认以下文件，确认',
      desc: '260602，增加风险确认',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '([text="请阅读并确认以下文件"] < * +n * > [text="已阅读并确认"])',
        },
      ],
    },
    {
      key: 32,
      name: '我的自选 ，全选',
      desc: '260424',
      rules: [
        {
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          actionMaximum: 1,
          resetMatch: 'match',
          matches: '@*[clickable=true][checked=false] + [text="全选"]',
        },
      ],
    },
    {
      key: 33,
      name: '我的自选，全选 删除',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [32],
          actionMaximum: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="全选"] + * > [text^="删除(" && text$=") "]',
        },
      ],
    },
    {
      key: 34,
      name: '我的自选，全选 删除，勾选同步解除分组',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [33],
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="同步解除您的自选自建分组"]',
        },
      ],
    },
    {
      key: 35,
      name: '我的自选，全选 删除，勾选同步解除分组，确认',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [34],
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="同步解除您的自选自建分组"] <n * + * > [text="确定"]',
        },
      ],
    },
    {
      key: 36,
      name: '弹窗',
      desc: '251120，动态text',
      rules: [
        {
          matches:
            '([text$="秒后关闭"] +n @TextView + [text="广告"]) || ([vid="alertTitle"] +n * > [vid="buttonNegative"][text="拒绝"]) || ([text="1762179375715243693"] + Image)',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 37,
      name: '周三5折必胜客',
      desc: 'D',
      rules: [
        {
          matches:
            '[text="（周三5折）必胜客50元代金券"] +n * > [text*="立即抢购"]',
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 38,
      name: '周三5折喜茶',
      desc: 'D',
      rules: [
        {
          matches:
            '[text="（周三5折）喜茶20元代金券"] +n * > [text*="立即抢购"]',
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 39,
      name: '周三5折肯德基',
      desc: 'D',
      rules: [
        {
          matches:
            '[text="（周三5折）肯德基20元代金券"] +n * > [text*="立即抢购"]',
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 40,
      name: '周三5折哈根达斯',
      desc: 'D',
      rules: [
        {
          actionCdKey: 1,
          matches:
            '[text="（周三5折）哈根达斯50元代金券"] +n * > [text*="立即抢购"]',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 41,
      name: '周三5折列表必胜客',
      desc: 'D',
      rules: [
        {
          actionCdKey: 1,
          matches: '[text="（周三5折）必胜客50元代金券"] +6 [text*="立即抢购"]',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 42,
      name: '周三5折列表喜茶',
      desc: 'D',
      rules: [
        {
          matches: '[text="（周三5折）喜茶20元代金券"] +6 [text*="立即抢购"]',
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 43,
      name: '周三5折列表肯德基',
      desc: 'D',
      rules: [
        {
          matches: '[text="（周三5折）肯德基20元代金券"] +6 [text*="立即抢购"]',
          actionCd: 0,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 44,
      name: '周三5折列表哈根达斯',
      desc: 'D',
      rules: [
        {
          actionCd: 0,
          matches:
            '[text="（周三5折）哈根达斯50元代金券"] +6 [text*="立即抢购"]',
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
        },
      ],
    },
    {
      key: 45,
      name: '讨论，关闭投票',
      desc: '260813',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            'View > View > View > View > EditText[text="发布了投票"] + * + Image[text="图片"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 46,
      name: '开启消息通知',
      desc: '260814,增加IDS',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matches:
            '([vid="title"][text="开启消息通知"] + [vid="close_btn"]) || (FrameLayout > ViewGroup > RelativeLayout > TextView[vid="title"][text="开启消息通知"] + ImageView[vid="close_btn"][clickable=true][visibleToUser=true])',
          activityIds: [
            'cmb.pb.app.mainframe.container.PBMainActivity',
            'com.cmb.zh.ui.mbank.im.activitys.messagecenter.MessageCenterActivity',
          ],
        },
      ],
    },
    {
      key: 47,
      name: '资讯分享任务，微信好友',
      desc: '260706，clickable=false',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          action: 'click',
          activityIds: 'com.pb.livestream.NewLiveStreamListActivity',
          matches:
            'View[clickable=false] > TextView[clickable=false][visibleToUser=true][text="微信好友"]',
        },
      ],
    },
  ],
});
