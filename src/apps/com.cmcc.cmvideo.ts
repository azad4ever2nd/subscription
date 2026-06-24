import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 1,
      name: '每日分享指定视频至微信，立即分享',
      desc: '260621',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds: 'com.quickjs.android.example.RNFragmentActivity',
          matches: 'View > View > View > Image[text="1O7F90FG42JLK"]',
        },
      ],
    },
    {
      key: 2,
      name: '播放界面，右下角分享按钮',
      desc: '260621',
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
      desc: '260621',
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
      desc: '260621',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          actionCd: 0,
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
      desc: '260621',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          preKeys: [4],
          activityIds: 'com.quickjs.android.example.RNFragmentActivity',
          matches: 'View > View > View > Image[text="1O7F90FG6NVJ7"]',
        },
      ],
    },
    {
      key: 6,
      name: '获取验证码',
      desc: '260622',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'match',
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
      desc: '260622，添加 IDS',
      rules: [
        {
          resetMatch: 'match',
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
          matches:
            '(@View > View > View > Image[text="1O6KI5PKEDG36" || text="1O6KI5PKO6N57"])',
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
      desc: '260624',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          activityIds:
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          matches:
            'FrameLayout > ViewGroup > FrameLayout[vid="close_bg_single"] > ImageView[vid="iv_close_single"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
