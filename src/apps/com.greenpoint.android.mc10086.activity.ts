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
          matches: ['@[vid="iv_top_close"] + [vid="rl_top_bg"]'],
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
          forcedTime: 1500,
          resetMatch: 'match',
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
            '(@[text="暂不更新"] + [text="立即体验"]) || (LinearLayout > @Button[vid="dialog_btn1"][clickable=true][text="暂不更新"] + Button[vid="dialog_btn2"][visibleToUser=true][text="立即体验"])',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: '260904,fastQuery=true,clickable=true',
      rules: [
        {
          resetMatch: 'match',
		  action:'clickCenter',
		  matchTime:2000,
          fastQuery: true,
          forcedTime: 2000,
          matches: [
            '[vid="close_btn"][desc="关闭"]',
            'ViewGroup[vid="cl_pop"] > ImageView[vid="img_close"][clickable=true][visibleToUser=true]',
            'ImageView[vid="ad_image"][desc="广告"] <n RelativeLayout + ImageView[vid="close_btn"][desc="关闭"][clickable=true][visibleToUser=true]',
            'LinearLayout > @ImageView[vid="close_btn"][desc="关闭"][clickable=true][visibleToUser=true] - RelativeLayout > ImageView[vid="ad_image"][desc="广告"]',
          ],
          activityIds: ['com.mc10086.cmcc.view.tabs.AppTabFragment'],
        },
      ],
    },
    {
      key: 4,
      name: '周三活动，弹窗',
      desc: '260621',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          forcedTime: 1500,
          activityIds: 'com.mc10086.cmcc.view.tabs.AppTabFragment',
          matches:
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
          matches: ['[text="恭喜您获得"] +3 [text="开心收下"] + TextView'],
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
          matches: ['[desc="获取验证码"]'],
          activityIds: ['com.cmccit.webview.ac.CommonHtml5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '兑换成功',
      desc: '260304，添加兑换中，签到成功领奖',
      rules: [
        {
          resetMatch: 'match',
          matches: [
            '([text="兑换成功"] + Image) || (@* +2 * > [text="恭喜获得"]) || ([text="兑换中"] < * +n [text="我知道了"])',
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
          matches:
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
          matches:
            '[text="累计签到奖励"] +n [text="去使用"] + *[clickable=true]',
        },
      ],
    },
	{
	  key: 10,
	  name: '立即签到',
	  desc: '260831',
	  rules: [
		{
		  matches: [
			'TextView[text^="累签" && text$="次"] <<n View + View > TextView[index=0][clickable=true][visibleToUser=true]',
		  ],
		  actionMaximum: 1,
		  resetMatch: 'app',
		  activityIds: [
			'com.cmccit.webview.ac.CommonHtml5Activity',
		  ],
		},
	  ],
	}
  ],
});