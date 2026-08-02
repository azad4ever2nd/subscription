import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.damai',
  name: '大麦',
  groups: [
    {
      key: 1,
      name: '广告',
      desc: '',
      rules: [
        {
          matches: [
            '[vid="homepage_popup_window_image"] + [vid="homepage_popup_window_close_btn"]',
          ],
          matchTime: 1000,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.damai.homepage.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '切换地理位置',
      desc: '251205',
      rules: [
        {
          matches: [
            '[vid="damai_theme_dialog_title"][text="地理位置变更"] +n * > [vid="damai_theme_dialog_cancel_btn"][text="不切换"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.damai.homepage.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '演唱会弹窗',
      desc: '260122',
      rules: [
        {
          matches: ['[vid="new_person_dialog_top_close_iv"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['cn.damai.homepage.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '升级提示',
      desc: '260319，添加搜索页面',
      rules: [
        {
          matches: [
            '[text*="升级"] < [vid="damai_theme_dialog_container"] + [vid="damai_theme_dialog_close_layout"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'cn.damai.h5container.DMH5Activity',
            'com.alibaba.wireless.security.open.middletier.fc.ui.ContainerActivity',
            'cn.damai.h5container.DMH5Activity',
            'cn.damai.trade.newtradeorder.ui.projectdetail.scenic.ScenicDetailActivity',
            'cn.damai.homepage.MainActivity',
            'com.alibaba.pictures.bricks.search.v2.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '抽奖动画，跳过',
      desc: '260608',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          matchTime: 1000,
          activityIds: 'cn.damai.h5container.DMH5Activity',
          matches: 'WebView > View > Button[text="点击跳过动画"]',
        },
      ],
    },
    {
      key: 6,
      name: '抽奖',
      desc: '',
      rules: [
        {
          matches: ['[text="恭喜中奖了"] +5 *'],
          activityIds: ['cn.damai.h5container.DMH5Activity'],
        },
      ],
    },
    {
      key: 7,
      name: '口令复制分享，X掉',
      desc: '260410',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'cn.damai.h5container.DMH5Activity',
          matches: '[text=" 去粘贴给好友"] + Image',
        },
      ],
    },
    {
      key: 8,
      name: '分享好友助力，X掉',
      desc: '260410',
      rules: [
        {
          resetMatch: 'match',
          matchTime: 1000,
          activityIds: 'cn.damai.h5container.DMH5Activity',
          matches: '[text=" 分享好友助力 再抽一次"] <<n View + Image',
        },
      ],
    },
    {
      key: 9,
      name: '开启位置权限',
      desc: '251118,添加搜索页面',
      rules: [
        {
          matches: [
            '[vid="damai_theme_dialog_title"][text*="位置权限"] +n * > [vid="damai_theme_dialog_cancel_btn"][text="下次再说"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.alibaba.pictures.picpermission.mantle.PermissionBaseActivity',
            'com.alibaba.pictures.bricks.search.v2.SearchActivity',
          ],
        },
      ],
    },
    {
      key: 10,
      name: '点评，X掉',
      desc: '260114',
      rules: [
        {
          matches: [
            '[text^="快来点评一下" || text$="记录我的淘票票时光"] < [vid="ll_title"] + *',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.taobao.movie.android.app.oscar.ui.film.activity.FilmReviewActivity',
          ],
        },
      ],
    },
  ],
});
