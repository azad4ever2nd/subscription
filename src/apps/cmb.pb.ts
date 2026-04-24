import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cmb.pb',
  name: '招商银行',
  groups: [
    {
      key: 1,
      name: '开启消息通知',
      desc: '260105,增加IDS',
      rules: [
        {
          matches: ['[vid="title"][text="开启消息通知"] + [vid="close_btn"]'],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.mainframe.container.PBMainActivity',
            'com.cmb.zh.ui.mbank.im.activitys.messagecenter.MessageCenterActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '完成',
      desc: '260304，添加我要抽奖',
      rules: [
        {
          matches: ['(Button[text="完成"]) || ([text="我要抽奖"])'],
          actionCd: 100,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '基金收益到银行卡',
      desc: '260417',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
          preKeys: [15],
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text$="可点击"] + [text="发放到银行卡"]',
        },
      ],
    },
    {
      key: 4,
      name: '周三5折必胜客',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券"] +n * > [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '周三5折肯德基',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）肯德基20元代金券"] +n * > [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '周三5折喜茶',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）喜茶20元代金券"] +n * > [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '周三5折哈根达斯',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）哈根达斯50元代金券"] +n * > [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '周三5折',
      desc: '260105,单个和列表整合在一起， || text*="开抢提醒"',
      rules: [
        {
          matches: [
            '([text="（周三5折）哈根达斯50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" ||  text="（周三5折）必胜客50元代金券"] +n [text*="立即抢购"]) || ([text="（周三5折）哈根达斯50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" ||  text="（周三5折）必胜客50元代金券"] +n * > [text*="立即抢购"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '周三5折列表模式',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" ||  text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券" ] +6 [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '周三5折列表必胜客',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）必胜客50元代金券"] +6 [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 11,
      name: '周三5折列表肯德基',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）肯德基20元代金券"] +6 [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '周三5折列表哈根达斯',
      desc: 'D',
      rules: [
        {
          matches: [
            '[text="（周三5折）哈根达斯50元代金券"] +6 [text*="立即抢购"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '周三5折列表喜茶',
      desc: 'D',
      rules: [
        {
          matches: ['[text="（周三5折）喜茶20元代金券"] +6 [text*="立即抢购"]'],
          actionCdKey: 8,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '卖光了',
      desc: '[text^="（周三5折）"] +n * > [text*="卖光了"]',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="（周三5折）必胜客50元代金券" || text="（周三5折）肯德基20元代金券" || text="（周三5折）喜茶20元代金券" || text="（周三5折）哈根达斯50元代金券"] +n * > [text*="卖光了"]',
          ],
          actionCdKey: 8,
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '收益奖励发放方式，我已阅读',
      desc: '260304',
      rules: [
        {
          matches: [
            '([text="收益奖励发放方式"] >n [text="我已阅读"]) || ([text="recommend.f43217f6"] < View + [text="我已阅读"])',
          ],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 16,
      name: '收益奖励将免费发放到您这张银行卡，提交',
      desc: '260417，',
      rules: [
        {
          preKeys: [3],
          resetMatch: 'match',
          actionCdKey: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '[text="收益奖励将免费发放到您这张银行卡："] +n * > [text="提交"]',
        },
      ],
    },
    {
      key: 17,
      name: '加自选，我知道了',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="ll_dialgo_app_gray_bg"] [vid="btn_positive"][text="我知道了"]',
          ],
          actionCdKey: 1,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 18,
      name: '弹窗',
      desc: '251120，动态text',
      rules: [
        {
          matches: ['[text$="秒后关闭"] +n @TextView + [text="广告"]'],
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 19,
      name: '恭喜中奖啦',
      desc: '260406,clickCenter不行',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '(@Button + [text*="恭喜"] +n [text="返回"]) || (@Button + [text="恭喜您，中奖啦！"] +n [text="返回"])',
        },
      ],
    },
    {
      key: 20,
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
      key: 21,
      name: '基金体验金，立即使用',
      desc: '260419',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 6,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '[text$="基金体验金"] < * +n [id="useBtn"] > [text="立即使用"]',
        },
      ],
    },
    {
      key: 22,
      name: '红包一键提现',
      desc: '251117，一键提现，确认提现到账户',
      rules: [
        {
          matches: [
            '([text="待提现红包"] + [text="一键提现"]) || ([text="确认提现到账户"])',
          ],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 23,
      name: '抢购失败',
      desc: '251119',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="抢购失败"] + [text="库存不足啦，感谢您的参与，换个商品试试呀"]',
          ],
          actionCdKey: 8,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 24,
      name: '抢购失败，再试一次',
      desc: '251119',
      rules: [
        {
          matches: ['[text="抢购失败"] +2 * > [text="再试一次"]'],
          actionCdKey: 8,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 25,
      name: '确定不再关注',
      desc: '251203',
      rules: [
        {
          matches: [
            '[text="确定不再关注？"] < * + [text="取消"] + [text="确定"]',
          ],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 26,
      name: '月月领挑自己想要的奖品,准点，选择奖品',
      desc: '260118',
      rules: [
        {
          matches: [
            '[text="活动奖品"] + [text*="可领取以下奖品中的1件"] +n * [text="选择奖品"]',
          ],
          actionCd: 100,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
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
          matches: [
            '[text="请选择奖品"] + [text="您本次可以选择1件奖品"] + [text="已选0/1"] + * [text*="26.8元消费返现券"]',
          ],
          actionCdKey: 26,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 28,
      name: '弹窗2',
      desc: '251212',
      rules: [
        {
          matches: [
            '([vid="alertTitle"] +n * > [vid="buttonNegative"][text="拒绝"]) || ([text="1762179375715243693"] + Image)',
          ],
          resetMatch: 'match',
          activityIds: ['com.pb.tpstore.PBAppletWebViewActivity'],
        },
      ],
    },
    {
      key: 29,
      name: '月月领挑自己想要的奖品，选择弹窗弹窗，确认领取',
      desc: '260118',
      rules: [
        {
          preKeys: [27],
          matches: [
            '[text="请选择奖品"] + [text^="您本次可以选择1件奖品"] + [text="已选1/1"] +n [text="确认领取"][focusable=true]',
          ],
          actionCdKey: 26,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 30,
      name: '月月领挑自己想要的奖品，误触弹窗',
      desc: '260118，D',
      rules: [
        {
          matches: [
            '[id="design_prd_popup_mask"] [text*="元消费返现券（单笔满"] + TextView',
          ],
          actionCdKey: 26,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 31,
      name: '抽奖任务，加自选',
      desc: '260326',
      rules: [
        {
          matches: [
            '(TextView[text$="为自选" || text*="加自选" || text*="至自选" || text$="入自选" || text$="入自选基金"] + * + Button[text="加自选"]) || (TextView[text$="入自选" || text*="加自选" || text*="至自选" || text$="为自选" || text$="入自选基金"] +n * > Button[text="加自选"]) || (Button[text="加自选"]) || (Button[text="去分享"]) || (Button[text="去添加"])',
          ],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 32,
      name: '去分享',
      desc: '260322',
      rules: [
        {
          matches: [
            '([text="分享指定文章"] +n [text="去分享"]) || ([text="分享招财号文章"] +n * > [text="去分享"])',
          ],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 33,
      name: '去分享，微信好友',
      desc: '260212',
      rules: [
        {
          matches: ['[text="分享海报"] + [text="微信好友"]'],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 34,
      name: '删除定制计划',
      desc: '260221',
      rules: [
        {
          matches: [
            '([text="修改"] + [text="暂停"] + [text="终止"]) || ([text="确定终止该定投计划吗？"] +n * > [text="确定"])',
          ],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 35,
      name: '添加自选',
      desc: '260416',
      rules: [
        {
          actionMaximum: 1,
          actionCdKey: 1,
          resetMatch: 'activity',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '([text="自选"] + [text="购买"]) || (@[text="自选"] + [text="定投"]) || (@[text="加自选"] + [text^="购买"])',
        },
      ],
    },
    {
      key: 36,
      name: '添加自选成功，返回',
      desc: '260224',
      rules: [
        {
          action: 'back',
          matches: ['* + [text="添加自选成功"]'],
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds: [
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          ],
        },
      ],
    },
    {
      key: 37,
      name: '资讯分享任务，微信好友',
      desc: '260417',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'activity',
          actionCdKey: 1,
          activityIds: 'com.pb.livestream.NewLiveStreamListActivity',
          matches:
            '(@[text="微信好友"] < * + [text="取消"]) || ([text="微信好友"] < @*[clickable=true] < * + [text="取消"])',
        },
      ],
    },
    {
      key: 38,
      name: '超风险及高风险产品定投确认，确认继续定投',
      desc: '260417',
      rules: [
        {
          resetMatch: 'match',
          actionCdKey: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '[text="超风险及高风险产品定投确认"] < * +n [text="确认继续定投"]',
        },
      ],
    },
    {
      key: 39,
      name: '定投，阅读并确认以下文件，确认',
      desc: '260417',
      rules: [
        {
          actionCdKey: 1,
          resetMatch: 'match',
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches:
            '[text="请阅读并确认以下文件"] < * +n * > [text="已阅读并确认"]',
        },
      ],
    },
    {
      key: 40,
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
      key: 41,
      name: '我的自选，全选 删除',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [40],
          actionMaximum: 1,
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="全选"] + * > [text^="删除(" && text$=") "]',
        },
      ],
    },
    {
      key: 42,
      name: '我的自选，全选 删除，勾选同步解除分组',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [41],
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="同步解除您的自选自建分组"]',
        },
      ],
    },
    {
      key: 43,
      name: '我的自选，全选 删除，勾选同步解除分组，确认',
      desc: '260424',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          preKeys: [42],
          activityIds:
            'cmb.pb.app.h5container.webviewcontainer.PBWebContainerActivity',
          matches: '[text="同步解除您的自选自建分组"] <n * + * > [text="确定"]',
        },
      ],
    },
  ],
});
