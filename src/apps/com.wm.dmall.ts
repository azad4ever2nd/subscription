import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.wm.dmall',
  name: '多点',
  groups: [
    {
      key: 1,
      name: '首页弹窗',
      desc: '251124,增加开启通知',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.wm.dmall.MainActivity',
          matches:
            '([vid="advert_image"] + [vid="advert_close"][desc="多点"]) || ([vid="notification_close"])',
        },
      ],
    },
    {
      key: 2,
      name: '版本更新啦',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.wm.dmall.MainActivity',
          matches:
            '([vid="update_title"] <<n * + [vid="close_btn"]) || (TextView[vid="update_title"] <n RelativeLayout < RelativeLayout + ImageView[vid="close_btn"][clickable=true][visibleToUser=true])',
        },
      ],
    },
    {
      key: 3,
      name: '检查到你还未授权定位，X掉',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.wm.dmall.MainActivity',
          matches:
            'TextView[vid="tv_title"][text*="授权定位"] < LinearLayout + ImageView[clickable=true][visibleToUser=true][vid="advert_close"][desc="多点"]',
        },
      ],
    },
    {
      key: 4,
      name: '广告弹窗，X掉',
      desc: '260717',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.wm.dmall.MainActivity',
          matches:
            'RelativeLayout > ImageView[vid="advert_image"] + ImageView[vid="advert_close"][clickable=true][visibleToUser=true]',
        },
      ],
    },
  ],
});
