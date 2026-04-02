import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.sankuai.movie',
  name: '猫眼',
  groups: [
    {
      key: 1,
      name: '更新',
      desc: '251216',
      rules: [
        {
          matches: ['[text*="更新"] +n * > [vid="a0i"][text="取消"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.sankuai.movie.MovieMainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '请打开定位',
      desc: '251203',
      rules: [
        {
          matches: [
            '[text="请打开定位"] <<n * +n * @[id="android:id/button2"][text="取消"] + [id="android:id/button1"][text="确定"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.sankuai.movie.transit.TransitActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '弹窗',
      desc: '251211 ',
      rules: [
        {
          matches: ['[vid="sc"] + [vid="a25"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.sankuai.movie.MovieMainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '上方定位横幅，关闭',
      desc: '251218,D',
      rules: [
        {
          matches: ['[text="去开启"] + ImageView[vid="a25"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.sankuai.movie.MovieMainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '电影院下单界，跳转领券',
      desc: '260328',
      rules: [
        {
          matches: [
            '@*[clickable=true] [text="领券"] + [text*="限时领券"] + [text$="张优惠券"]',
          ],
          actionCd: 0,
          fastQuery: true,
          actionMaximum: 3,
          resetMatch: 'app',
          activityIds: ['com.sankuai.movie.trade.MoviePoiCinemaActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '电影票界面抢湖北电影消费，只抢25的',
      desc: '260322',
      rules: [
        {
          matches: [
            '[text="湖北电影消费券"] +n * [text="￥25"] +n View > [text="领取"]',
          ],
          actionCd: 0,
          actionMaximum: 1,
          resetMatch: 'match',
          activityIds: ['com.sankuai.movie.knb2.container.MovieWebActivity'],
        },
      ],
    },
  ],
});
