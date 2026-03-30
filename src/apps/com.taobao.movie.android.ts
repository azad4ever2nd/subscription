import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.taobao.movie.android',
  name: '淘票票',
  groups: [
    {
      key: 1,
      name: '点评',
      desc: '260322，[text="快来点评一下，记录我的淘票票时光"]',
      rules: [
        {
          matches: [
            '[vid="dialog_zone"] > [vid="ll_title"] + [vid="btn_close"]',
          ],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.movie.android.app.oscar.ui.film.activity.FilmReviewActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '1.9元 大麦VIP，会员速通卡，关闭',
      desc: '260329',
      rules: [
        {
          matches: ['[vid="benefit_moimageview"] + [vid="benefit_close"]'],
          actionCd: 0,
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.taobao.movie.android.app.home.activity.BenefitsFloatActivity',
          ],
        },
      ],
    },
  ],
});
