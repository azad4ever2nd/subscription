import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 1,
      name: '每日分享指定视频至微信，立即分享',
      desc: '261117，每个月要更新',
      rules: [
        {
          actionMaximum: 1,
          actionCd: 5000,
          resetMatch: 'app',
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          excludeMatches: [
            'View > View > [text="短信验证"] + View[id="close"][visibleToUser=true]', //排除 验证码
          ],
          anyMatches: [
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG101UE5A"]', //261117，每日分享，立即分享，限1次，
            //'View > View > View > Image[clickable=false][visibleToUser=true][text="1O7GEIFASA29N"]',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '播放界面，右下角分享按钮',
      desc: '260831，依赖 每日分享指定视频至微信，立即分享',
      rules: [
        {
          actionMaximum: 1,
          actionCd: 10000,
          preKeys: [1],
          resetMatch: 'app',
          fastQuery: true,
          activityIds: 'com.cmvideo.capability.vod.VodActivity',
          matches:
            'FrameLayout > ViewGroup > ImageView[vid="iv_share_iv"][clickable=true]',
        },
      ],
    },
    {
      key: 3,
      name: '分享界面，分享到 微信好友',
      desc: '260831，依赖 右下角分享按钮',
      rules: [
        {
          resetMatch: 'app',
          fastQuery: true,
          actionMaximum: 1,
          actionCd: 10000,
          preKeys: [2],
          activityIds: 'com.cmvideo.capability.vod.VodActivity',
          excludeMatches:
            'LinearLayout > ViewGroup > ImageView[vid="sdv_static_pocket_pic"][clickable=true]',
          matches:
            'ViewGroup > GridView > @LinearLayout[clickable=true][visibleToUser=true] > TextView[text="微信好友"]',
        },
      ],
    },
    {
      key: 4,
      name: '分享完成，返回到福利中心',
      desc: '260621，依赖 分享到 微信好友',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          fastQuery: true,
          preKeys: [3],
          activityIds: 'com.cmvideo.capability.vod.VodActivity',
          matches:
            'LinearLayout > ViewGroup > ImageView[vid="sdv_static_pocket_pic"][clickable=true]',
        },
      ],
    },
    {
      key: 5,
      name: '弹窗，给个赞吧，下次再说',
      desc: '261007',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cmvideo.capability.vod.VodActivity',
          matches:
            'LinearLayout > RelativeLayout > @TextView[text="下次再说"][vid="tv_cancel"][clickable=true][visibleToUser=true] + TextView[text="打个好评"][vid="tv_next"]',
        },
      ],
    },
    {
      key: 6,
      name: '领2GB日流量，马上领取',
      desc: '261117，依赖 返回到福利中心',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          preKeys: [4],
          forcedTime: 3000,
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          excludeMatches: [
            'View > View > [text="短信验证"] + View[id="close"][visibleToUser=true]', //排除 验证码
          ],
          anyMatches: [
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG5IBHROR"]', //261117，每日分享后，抽奖  2G流量，立即领取，限1次，
            //'View > View > View > Image[clickable=false][visibleToUser=true][text="1O7GEIFAUMH91"]',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '获取验证码',
      desc: '260831，取消依赖测试，依赖 领2GB日流量，马上领取',
      rules: [
        {
          actionMaximum: 3,
          resetMatch: 'match',
          action: 'clickCenter',
          preKeys: [6],
          forcedTime: 3000,
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          anyMatches: [
            'View[id="verfyDiv"] > @View[id="smsBtn"][clickable=true][desc="获取验证码"] > TextView[text="获取验证码"]',
            'View > TextView[text="获取验证码"][clickable=false][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '弹窗，X掉1',
      desc: '261124，添加各种抽奖类的提示，各种弹窗，添加 IDS',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 700,
          forcedTime: 3000,
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          anyMatches: [
            '@View[clickable=true][visibleToUser=true] >  View > Image[text="1O7HHG1PREB4I"]', //261121，弹窗，抽奖次数不足，X掉
            '@View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1QGLGAT"]', //261124，弹窗，今日活动已参与，X掉，3层
            '@View[clickable=true][visibleToUser=true] > View > View > View > Image[text="1O7HHG1QGLGAT"]', //261120，弹窗，今日活动已参与，X掉，5层
            '@View[clickable=true][visibleToUser=true] >  View > Image[text="1O7HHG1QGLGAT"]', //261120，弹窗，今日已分享，X掉
            //'@View[clickable=true][visibleToUser=true] > View > View > View > Image[text="1O7HHG1TRK0E6"]', //261120，弹窗，今日已分享，X掉，5层，发现不行，换3行
            '@View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1TRK0E6"]', //261120，弹窗，今日已分享，X掉
            '@View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1PI8NQ1"]', //261118，弹窗，今日好运已通关，我知道了，
            '@View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1R5GULN"]', //261118，弹窗，仅限会员参与，我知道了，X掉
            '@View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1TQ692O"]', //261117，弹窗，请先完成分享，X掉
            //'@View[clickable=true][visibleToUser=true] > View > View > View > Image[text="1O7HHG1TQ692O"]',//弹窗，请先完成分享，X掉，5层
            //'@View[clickable=true][visibleToUser=true] > View > View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1T79J2P"]', //26117，恭喜获得2GB通用流量，我知道了,5层
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1T79J2P"]', //26117，恭喜获得2GB通用流量，我知道了
            //'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG5IBHROR"]',//261117，每日分享后，抽奖  2G流量，立即领取，限1次，
            //'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG101UE5A"]',//261117，每日分享，立即分享，限1次，
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG167GVI2"]', //261117，弹窗，打卡成功，我知道了
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1Q01P4R"]', //261117，弹窗，恭喜获得抽奖机会
            //'@View[clickable=true][visibleToUser=true] > View > View > View > Image[text="1O7HHG1M0QJQI"]', //弹窗，剩余抽奖次数1，我知道了，换5层按钮
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG1M0QJQI"]', //261117，弹窗，剩余抽奖次数，X掉
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG19F1NPU"]', //261117，弹窗，消耗1次抽奖机会，确认
            '@View[clickable=true][visibleToUser=true] > View > View > View > Image[text="1O7GEIFBVUQCO"]', //261112，弹窗，请先完成分享
            '@View[clickable=false][visibleToUser=true] >3 Image[text="1O7GEIFBVUQCO"]', //261109，弹窗，请先完成分享
            '@View[clickable=true][visibleToUser=true] > View > View > View > Image[text="1O7GE17M3SEBP"]', //这个按钮clickable=true是在第5层
            '@View[clickable=true][visibleToUser=true] > View > Image[text="1O7H0ON8UHFGE"]', //累计打卡
            //'@View > View > View > Image[text="1O7GEIFBFRPLK" || text="1O7GEIFC0TJFP" || text="1O7GE0VC9N7O0" || text="1O7GC3SARU1RQ" || text="1O7GDU9N7V7LU" || text="1O7GDU9H2A5TQ" || text="1O7GL9PTD3DCA" || text="1O7GE0VD20609" || text="1O7GEIFC0TJFP" || text="1O7GDU9HAKUMC"]',
            //'View[clickable=true][visibleToUser=true] > View > Image[text="1O7GDU9H0PKEV"]',
            //'@View > View > View > Image[text="1O7GDU9LRD8A8" || text="1O7GDU9LPCKHS" || text="1O7GE0VDLVO51" || text="1O7GEIFC0TJFP"]',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '每日打卡',
      desc: '261123',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionMaximum: 2,
          preKeys: [7],
          activityIds: 'com.cmvideo.capability.remote_web.WebProcessActivity',
          excludeMatches: [
            'View > View > [text="短信验证"] + View[id="close"][visibleToUser=true]', //排除 验证码
          ],
          anyMatches: [
            'View[id="57a0112aa5f14fb2b34b62395777a1b7"] > View > TextView[text=""][clickable=true][visibleToUser=true]', //261123，打卡
            'View > View > @TextView[text=""][clickable=true][visibleToUser=true] - View >n View[text*="累计打卡"]', //261117，每日打卡，
            //'View > View > View > View > View > View[id="cc54b71dca3545fb95c3de42954fa8e2"]',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '体育类会员，立即领取',
      desc: '261117',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          action: 'clickCenter',
          actionDelay: 3000,
          preKeys: [9],
          activityIds: 'com.cmvideo.capability.remote_web.WebProcessActivity',
          excludeMatches: [
            'View > View > [text="短信验证"] + View[id="close"][visibleToUser=true]', //排除 验证码
          ],
          anyMatches: [
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG15B1MLT"]', //261117，体育类会员每日登录活动页面抽奖机会+1，立即领取，限1次，
          ],
        },
      ],
    },
    {
      key: 11,
      name: '咪咕视频会员，立即领取',
      desc: '261117',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          action: 'clickCenter',
          preKeys: [10],
          activityIds: 'com.cmvideo.capability.remote_web.WebProcessActivity',
          excludeMatches: [
            'View > View > [text="短信验证"] + View[id="close"][visibleToUser=true]', //排除 验证码
          ],
          anyMatches: [
            'View > @View[clickable=true][visibleToUser=true] > View > Image[text="1O7HHG152SEN3"]', //261117，咪咕视频会员每日登录活动页面抽奖机会+1，立即领取，限1次，
          ],
        },
      ],
    },
    {
      key: 12,
      name: '开启推送通知，以后再说',
      desc: '260622',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches:
            'ViewGroup[vid="base_dialog_bg"] > @TextView[vid="base_dialog_left_btn"][text="以后再说"] + TextView[vid="base_dialog_right_btn"][text="好的"]',
        },
      ],
    },
    {
      key: 13,
      name: '广告弹窗',
      desc: '260727',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          anyMatches: [
            'FrameLayout > ViewGroup > FrameLayout[vid="close_bg_single"] > ImageView[vid="iv_close_single"][clickable=true][visibleToUser=true]',
            'ViewGroup + FrameLayout[childCount=2] > FrameLayout[vid="h5_content_container"] + ImageView[clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 14,
      name: '更新协议提示',
      desc: '260711,更新协议',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          anyMatches: [
            'ViewGroup > TextView[text="更新提示" || text*="用户服务协议" || text*="隐私政策"] +n TextView + TextView[vid="btn_ok"][clickable=true][visibleToUser=true]',
            '[vid="tv_title"][text="更新提示"] +4 [vid="btn_ok"][text="同意并继续"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '提示 进群，X掉',
      desc: '260719',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches:
            'ViewGroup > FrameLayout > ImageView[clickable=true][visibleToUser=true][vid="iv_close_single"]',
        },
      ],
    },
    {
      key: 16,
      name: '钻石会员弹窗，X掉',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches:
            'ViewGroup[vid="root_view"] + FrameLayout[childCount=2] > FrameLayout + ImageView[clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
