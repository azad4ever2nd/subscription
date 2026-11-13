import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hnnx.eBank.android',
  name: '湖南农信',
  groups: [
    {
      key: 1,
      name: '弹窗，新版本，取消',
      desc: '261105',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          forcedTime: 3000,
          activityIds: 'com.cqrcb.mainbundle.page.MainActivity',
          matches:
            'TextView[text="版本更新"][vid="tv_title"] < LinearLayout + LinearLayout > LinearLayout > @TextView[text="取消"][vid="tv_cancel"][clickable=true][visibleToUser=true] + TextView[text="升级"][vid="tv_confirm"]',
        },
      ],
    },
    {
      key: 2,
      name: '弹窗，去取成功，完成',
      desc: '261105',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches: 'WebView > Button - View > View[text="支取成功"]',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，签到成功，',
      desc: '261105',
      rules: [
        {
          resetMatch: 'match',
          activityIds:
            'com.cqrcb.mainbundle.page.ui.activity.BaseWebViewActivity',
          matches:
            'View > View > TextView[text="签到成功"] + View + TextView[text=""][clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 4,
      name: '弹窗，居民医保缴费，今日不再提示，X掉',
      desc: '261113',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.cqrcb.mainbundle.page.MainActivity',
          matches:
            'LinearLayoutCompat > @ImageView[vid="img_close"][clickable=true][visibleToUser=true] - LinearLayoutCompat > TextView[text="今日不再提示"]',
        },
      ],
    },
  ],
});
