import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'cn.com.njcb.android.mobilebank',
  name: '南京银行',
  groups: [
    {
      key: 1,
      name: '弹窗1',
      desc: '251205,添加活动结束了，未开始，若点击无反应，弹窗无反应，则拆分规则，一个默认，一个clickCenter，|| ([text="活动暂未开始"] +2 [text="确定"])',
      rules: [
        {
          action: 'clickCenter',
          matches: [
            '([text="活动已结束"] + * > [desc="知道了"]) || ([text="今日不再显示"] < * + *) || ([text="活动已结束"] + [text="确定" || text="知道了"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '周四盒马和猫超',
      desc: '260212，优先猫超，顺序可改',
      rules: [
        {
          matches: [
            '[text^="盒马红包券" || text^="天猫超市卡"] +2 @* > [text="去抢购"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '周四猫超和盒马',
      desc: '260212，优先盒马，顺序可改',
      rules: [
        {
          matches: [
            '[text^="天猫超市卡" || text^="盒马红包券" ] +2 @* > [text="去抢购"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '确认支付',
      desc: '',
      rules: [
        {
          matches: [
            '@[text="确认支付"] < * -4 * [text="支付金额"] + [text*="积分+"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '周一盒马',
      desc: '',
      rules: [
        {
          matches: [
            '[text="盒马鲜生礼品卡100元卡券"] +3 * > [text="95"] +2 [text="去抢购"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 6,
      name: '周一猫超',
      desc: '',
      rules: [
        {
          matches: [
            '[text="天猫超市卡100元卡券"] +3 * > [text="92"] +2 [text="去抢购"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '每日签到',
      desc: '260309,matchDelay是延迟匹配，而不是匹配后休眠指定时间',
      rules: [
        {
          matches: [
            '(@* + [text="1每日签到"]) || (@*[clickable=true][childCount=2] > [text="10"] + [text="每日签到"]) || ([text="恭喜您签到成功"] + [text="我知道了"])',
          ],
          matchDelay: 3000,
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '更新提示',
      desc: '251201',
      rules: [
        {
          matches: ['[vid="version_dialog_close"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.biz.launcher.app.main.MainActivity'],
        },
      ],
    },
    {
      key: 9,
      name: '同意授权',
      desc: '251203',
      rules: [
        {
          matches: [
            '[id="cn.com.njcb.android.mobilebank:id/empower_name"][text="鑫福生活"] +n [id="cn.com.njcb.android.mobilebank:id/ares_empower_button"][text="同意授权"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.activity.EmpowerActivity'],
        },
      ],
    },
    {
      key: 10,
      name: '弹窗2，返回',
      desc: '260122,添加活动结束了，未开始，若点击无反应，弹窗无反应，则拆分规则，一个默认，一个clickCenter',
      rules: [
        {
          action: 'back',
          matches: [
            '([text="活动已结束" || text="活动暂未开始" || text="当前商品已抢完bak" || text^="人太多了"] + * > [text="好的" || text="确定" || text="知道了" || desc="知道了"]) || ([text="活动已结束" || text="活动暂未开始" || text="当前商品已抢完bak" || text^="人太多了"] +n [text="好的" ||  text="确定" || text="知道了" || desc="知道了"])',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 11,
      name: '测额弹窗',
      desc: '260122',
      rules: [
        {
          matches: ['[vid="gift_close"][desc="关闭"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.njcb.mobile.biz.launcher.app.main.dialog.GiftActDialogActivity',
          ],
        },
      ],
    },
    {
      key: 12,
      name: '周一惊喜，盒马和猫超',
      desc: '260126',
      rules: [
        {
          matches: [
            '[text^="盒马红包券50元" || text^="天猫超市卡100元卡券" || text^="天猫超市卡50元卡券" ] + [text!="100%"] + * > [text="去抢购"]',
          ],
          resetMatch: 'match',
          activityIds: ['com.njcb.mobile.h5biz.H5ContainerActivity'],
        },
      ],
    },
    {
      key: 13,
      name: '签到完成，返回',
      desc: '260401',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          action: 'back',
          preKeys: [7],
          activityIds: 'com.njcb.mobile.h5biz.H5ContainerActivity',
          matches: '[text="任务中心"] <<n * +n * [text="规则"]',
        },
      ],
    },
  ],
});
