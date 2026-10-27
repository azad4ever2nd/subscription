import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.greenpoint.android.mc10086.activity',
  name: '中国移动',
  groups: [
    {
      key: 1,
      name: '开启推送通知',
      desc: '260831，fastQuery=true,clickable=true',
      rules: [
        {
          resetMatch: 'app',
          fastQuery: true,
          forcedTime: 3000,
          anyMatches: ['@[vid="iv_top_close"] + [vid="rl_top_bg"]'],
          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
    {
      key: 2,
      name: '更新',
      desc: '260807',
      rules: [
        {
          fastQuery: true,
          matchDelay: 1000,
          forcedTime: 3000,
          resetMatch: 'match',
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          anyMatches: [
            'LinearLayout > @Button[vid="dialog_btn1"][clickable=true][text="暂不更新"] + Button[vid="dialog_btn2"][visibleToUser=true][text="立即体验"]',
            '@[text="暂不更新"] + [text="立即体验"]',
          ],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: '261020，fastQuery=true,clickable=true，添加 周三活动',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          matchDelay: 1000,
          fastQuery: true,
          forcedTime: 4000,
          anyMatches: [
            'ViewGroup > @ImageView[vid="iv_close"][clickable=true][visibleToUser=true] +3 TextView[vid="dialog_btn2"]',
            'LinearLayout > @ImageView[vid="close_btn"][desc="关闭"][clickable=true][visibleToUser=true] - RelativeLayout > ImageView[vid="ad_image"][desc="广告bak"]',
            'ImageView[vid="ad_image"][desc="广告"] <n RelativeLayout + ImageView[vid="close_btn"][desc="关闭"][clickable=true][visibleToUser=true]',
            'ViewGroup[vid="cl_pop"] > ImageView[vid="img_close"][clickable=true][visibleToUser=true]',
          ],
          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
    {
      key: 4,
      name: '周三活动，弹窗',
      desc: 'D,260621',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 3000,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          anyMatches:
            'ImageView[vid="ad_image"][desc="广告"] < RelativeLayout + ImageView[vid="close_btn"][desc="关闭"][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 5,
      name: '弹窗，签到有礼，X掉',
      desc: '260830',
      rules: [
        {
          resetMatch: 'match',
          anyMatches: ['[text="恭喜您获得"] +3 [text="开心收下"] + TextView'],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 6,
      name: '获取验证码',
      desc: '',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'activity',
          anyMatches: ['[desc="获取验证码"]'],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '兑换成功',
      desc: '261021，添加兑换中，签到成功领奖',
      rules: [
        {
          resetMatch: 'match',
          anyMatches: [
            'View[id="sueecss_dlalog"] > View > View > Image[clickable=true][visibleToUser=true]',
            '[text="兑换成功"] + Image',
            '[text="兑换中"] < * +n [text="我知道了"]',
            '@* +2 * > [text="恭喜获得"]',
          ],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 8,
      name: '签到有礼',
      desc: 'D,260830',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          fastQuery: true,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          anyMatches:
            'ViewGroup > TextView[text="签到有礼"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 9,
      name: '签到奖励，X掉',
      desc: '260402',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          anyMatches:
            '[text="累计签到奖励"] +n [text="去使用"] + *[clickable=true]',
        },
      ],
    },
    {
      key: 10,
      name: '立即签到',
      desc: '261026，增加 排除场景',
      rules: [
        {
          actionMaximum: 1,
          resetMatch: 'app',
          excludeMatches: [
            'View > TextView[text="2元话费券"] + View + TextView[text="立即抢"][clickable=true][visibleToUser=true]', //排除抢券场景
            'View > TextView[text="立即抢"][clickable=true][visibleToUser=true]',
          ],
          anyMatches: [
            'TextView[text^="累签" && text$="次"] <<n View + View > TextView[index=0][clickable=true][visibleToUser=true]',
          ],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 11,
      name: '88话费，9/30结束',
      desc: '260920',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            'View > @View[clickable=true][visibleToUser=true] > Image[text="mgrupload.b73a69f81dff4d188a65b8f87bc993e220260806"] + Image[text="407e285ed39c4423a167f7d7a18c507820250618"]',
        },
      ],
    },
    {
      key: 12,
      name: '弹窗，未中奖，知道了或X掉',
      desc: '260920，添加 刷新重试',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          anyMatches: [
            '[text^="您有" && text$="次刮卡机会"] <<n View + View > TextView[clickable=true][visibleToUser=true] - View > TextView[text=""][clickable=true][visibleToUser=true]',
            'View[id="Yr27cX0-SIYI5zV-8k2S"] > View > View > @TextView[text.length=0][clickable=true][visibleToUser=true] - View > TextView[text.length=0][clickable=true][visibleToUser=true]',
            'WebView > View > Dialog > View > Button[text="我知道了"] + Button[text="关闭弹窗"][clickable=true][visibleToUser=true]',
          ],
        },
      ],
    },
    {
      key: 13,
      name: '弹窗，周三活动2，X掉，',
      desc: '260919 fastquery=false,clickable=false',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            'Image[text="图片跳转"] < View - View > View > Image[text="1661757057966_336135"][clickable=false][visibleToUser=true]',
        },
      ],
    },
    {
      key: 14,
      name: '弹窗，周三充值日抽奖，开心收下 或 X掉',
      desc: '261021，无文字提示，有ID',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          anyMatches: [
            'Dialog > View > Image > @View[id="ani_btn"][clickable=true][visibleToUser=true] + View[id="ani_close"][clickable=true][visibleToUser=true]',
            'Dialog > View > Image > View[id="ani_btn"][clickable=true][visibleToUser=true] + View[id="ani_close"][clickable=true][visibleToUser=true]',
            'Image > @View[id="closeBtn"][clickable=true][visibleToUser=true] + View[id="acceptJoy"]',
          ],
        },
      ],
    },
    {
      key: 15,
      name: '签到有礼，2元话费券，立即抢',
      desc: '261026',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.cmccit.webview.ac.CommonHtml5Activity',
          matches:
            'View > TextView[text="2元话费券"] + View + TextView[text="立即抢"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
