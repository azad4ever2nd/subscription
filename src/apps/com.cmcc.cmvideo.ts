import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.cmcc.cmvideo',
  name: '咪咕视频',
  groups: [
    {
      key: 1,
      name: '开启推送通知',
      desc: '260308，添加升级提示',
      rules: [
        {
          matches: [
            '([vid="base_dialog_bg"] > [vid="base_dialog_left_btn"][text="以后再说" || text="稍后再说"]) || ([vid="base_dialog_title"][text="开启推送通知"] +n [vid="base_dialog_left_btn"][text="以后再说" || text="稍后再说"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗',
      desc: '260302',
      rules: [
        {
          matches: [
            '([vid="sdv_big_pic"] - [vid="iv_big_close"]) || ([vid="iv_close_single"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '右下角浮窗',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="sdv_right_bottom_pic"] + [vid="iv_right_bottom_close"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '更新协议提示',
      desc: '251125,更新协议',
      rules: [
        {
          matches: [
            '[vid="tv_title"][text="更新提示"] +4 [vid="btn_ok"][text="同意并继续"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.cmcc.cmvideo.main.application.CompatibleMainActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '点击分享',
      desc: '260319',
      rules: [
        {
          action: 'clickCenter',
          matches: ['@View[clickable=true] [text="1O7F90FG42JLK"]'],
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.cmvideo.capability.remote_web.WebProcessActivity',
            'com.quickjs.android.example.RNFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '马上领取2G流量',
      desc: '260319',
      rules: [
        {
          preKeys: [12],
          matches: ['@View[clickable=true] [text="1O7F90FG6NVJ7"]'],
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.cmvideo.capability.remote_web.WebProcessActivity',
            'com.quickjs.android.example.RNFragmentActivity',
          ],
        },
      ],
    },
    {
      key: 7,
      name: '获取验证码',
      desc: '260223 [id="verfyInput"] + * > [text="获取验证码"]',
      rules: [
        {
          preKeys: [6],
          matches: ['[id="verfyInput"] + [id="smsBtn"]'],
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
        },
      ],
    },
    {
      key: 8,
      name: '好的',
      desc: '260324，添加 IDS',
      rules: [
        {
          matches: [
            '@View[clickable=true] >n [text="1O6KI5PKEDG36" || text="1O6KI5PKO6N57"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.quickjs.android.example.RNFragmentActivity',
            'com.cmvideo.capability.remote_web.WebProcessActivity',
          ],
        },
      ],
    },
    {
      key: 9,
      name: '打卡成功',
      desc: '260306',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '(@View[clickable=true] [id="cc54b71dca3545fb95c3de42954fa8e2" || text="1O6KI5PKO6N57" || text="1O6L4093C9DTM"]) || ([id="3fae2c0612c44bcba72669a0b4108f3d"] >3 View)',
          ],
          resetMatch: 'match',
          activityIds: ['com.cmvideo.capability.remote_web.WebProcessActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '在视频界面中，右下角分享按钮',
      desc: '260308',
      rules: [
        {
          preKeys: [5],
          matches: ['[vid="iv_share_iv"]'],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.cmvideo.capability.vod.VodActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '分享到微信',
      desc: '260308',
      rules: [
        {
          preKeys: [10],
          matches: [
            '[vid="share_item_title"][text="微信好友"] - [vid="share_item_icon"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: ['com.cmvideo.capability.vod.VodActivity'],
        },
      ],
    },
    {
      key: 12,
      name: '福利中心',
      desc: '',
      rules: [
        {
          preKeys: [11],
          matches: [
            '@[vid="sdv_static_pocket_pic"] + [vid="mgtask_warename_close"]',
          ],
          fastQuery: true,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.cmvideo.capability.vod.VodActivity'],
        },
      ],
    },
  ],
});
