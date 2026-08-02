import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'cn.com.njcb.android.mobilebank',
  name: '南京银行',
  groups: [
    {
      key: 1,
      name: '更新提示',
      desc: '260705',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          action: 'clickCenter',
          matchTime: 1000,
          activityIds: 'com.njcb.mobile.biz.launcher.app.main.MainActivity',
          matches:
            'CheckBox[vid="login_privacy_iv"][checked=true] < LinearLayout < RelativeLayout <n RelativeLayout + ImageView[clickable=true][visibleToUser=true][vid="version_dialog_close"]',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示，不再弹框提示新版本',
      desc: '260705',
      rules: [
        {
          fastQuery: true,
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.njcb.mobile.biz.launcher.app.main.MainActivity',
          matches:
            'LinearLayout > @CheckBox[vid="login_privacy_iv"][checked=false] + TextView[text="不再弹框提示新版本"]',
        },
      ],
    },
    {
      key: 3,
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
      key: 4,
      name: '周四猫超和盒马',
      desc: '260212，D,优先盒马，顺序可改',
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
      key: 8,
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
      key: 9,
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
      key: 10,
      name: '签到完成，返回',
      desc: '260401，依赖 每日签到',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          action: 'back',
          preKeys: [9],
          activityIds: 'com.njcb.mobile.h5biz.H5ContainerActivity',
          matches: '[text="任务中心"] <<n * +n * [text="规则"]',
        },
      ],
    },
    {
      key: 11,
      name: '鑫动好物，今日不再显示，X掉',
      desc: '260615',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          matchTime: 1000,
          activityIds: 'com.njcb.mobile.h5biz.H5ContainerActivity',
          matches:
            '([text="今日不再显示"] < * + *[clickable=true]) || (View > @TextView - View > TextView[text="今日不再显示"])',
        },
      ],
    },
    {
      key: 12,
      name: '任务，浏览完成',
      desc: '260703',
      rules: [
        {
          resetMatch: 'match',
          action: 'back',
          activityIds: 'com.njcb.mobile.h5biz.H5ContainerActivity',
          matches: 'View > TextView[text="浏览完成"]',
        },
      ],
    },
    {
      key: 13,
      name: '弹窗1',
      desc: '260726,添加签到成功，活动结束了，未开始，若点击无反应，弹窗无反应，则拆分规则，一个默认，一个clickCenter',
      rules: [
        {
          action: 'clickCenter',
          resetMatch: 'match',
          activityIds: 'com.njcb.mobile.h5biz.H5ContainerActivity',
          matches:
            '([text="签到成功"] + TextView + TextView[text="确定bak"]) || ([text="活动已结束"] + * > [desc="知道了"]) || ([text="活动已结束"] + [text="确定" || text="知道了"]) || (WebView > View > View > View > View > View > TextView[text="签到成功"] + TextView + TextView[text="确定"])',
        },
      ],
    },
    {
      key: 14,
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
      key: 15,
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
      key: 16,
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
  ],
});
