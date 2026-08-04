import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 1,
      name: '每日分享指定视频至微信，立即分享',
      desc: '260801，每个月要更新',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          actionCd: 5000,
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          matches:
            'View > View > View > Image[clickable=false][visibleToUser=true][text="1O7GEIFASA29N"]',
        },
      ],
    },
    {
      key: 2,
      name: '播放界面，右下角分享按钮',
      desc: '260621，依赖 每日分享指定视频至微信，立即分享',
      rules: [
        {
          resetMatch: 'app',
          fastQuery: true,
          actionMaximum: 1,
          preKeys: [1],
          activityIds: 'com.cmvideo.capability.vod.VodActivity',
          matches:
            'FrameLayout > ViewGroup > ImageView[vid="iv_share_iv"][clickable=true]',
        },
      ],
    },
    {
      key: 3,
      name: '分享界面，分享到 微信好友',
      desc: '260621，依赖 右下角分享按钮',
      rules: [
        {
          resetMatch: 'app',
          fastQuery: true,
          actionMaximum: 1,
          preKeys: [2],
          activityIds: 'com.cmvideo.capability.vod.VodActivity',
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
      name: '领2GB日流量，马上领取',
      desc: '260801，依赖 返回到福利中心',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          preKeys: [4],
          matchTime: 1500,
          actionCd: 0,
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          matches:
            'View > View > View > Image[clickable=false][visibleToUser=true][text="1O7GEIFAUMH91"]',
        },
      ],
    },
    {
      key: 6,
      name: '获取验证码',
      desc: '260622，依赖 领2GB日流量，马上领取',
      rules: [
        {
          actionMaximum: 3,
          resetMatch: 'match',
          actionCd: 0,
          preKeys: [5],
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          matches:
            'View[id="verfyDiv"] > @View[id="smsBtn"][clickable=true][desc="获取验证码"] > TextView[text="获取验证码"]',
        },
      ],
    },
    {
      key: 7,
      name: '恭喜获得2GB通用流量，好的',
      desc: '260802，各种弹窗，添加 IDS',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          matches:
            '(@View > View > View > Image[text="1O7GEIFBFRPLK" || text="1O7GEIFC0TJFP" || text="1O7GE0VC9N7O0"])',
        },
      ],
    },
    {
      key: 8,
      name: '恭喜打卡成功',
      desc: '260622',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          activityIds: 'com.cmvideo.capability.remote_web.WebProcessActivity',
          matches:
            '(View > View > View > View > View > View[id="cc54b71dca3545fb95c3de42954fa8e2"])',
        },
      ],
    },
    {
      key: 9,
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
      key: 10,
      name: '广告弹窗',
      desc: '260727',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches:
            '(FrameLayout > ViewGroup > FrameLayout[vid="close_bg_single"] > ImageView[vid="iv_close_single"][clickable=true][visibleToUser=true]) || (ViewGroup + FrameLayout[childCount=2] > FrameLayout[vid="h5_content_container"] + ImageView[clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 11,
      name: '更新协议提示',
      desc: '260711,更新协议',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches:
            '([vid="tv_title"][text="更新提示"] +4 [vid="btn_ok"][text="同意并继续"]) || (ViewGroup > TextView[text="更新提示" || text*="用户服务协议" || text*="隐私政策"] +n TextView + TextView[vid="btn_ok"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 12,
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
      key: 13,
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
