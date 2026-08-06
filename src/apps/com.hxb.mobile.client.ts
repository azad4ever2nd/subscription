import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.hxb.mobile.client',
  name: '华夏银行',
  groups: [
    {
      key: 1,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="rvMarketing"] +2 [vid="ivCloseCur"]'],
          fastQuery: true,
          activityIds: 'com.yt.hxmb50.mainpages.ui.main.MainActivity',
        },
      ],
    },
    {
      key: 2,
      name: '更新提示',
      desc: '260711',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          matchDelay: 500,
          activityIds: 'com.yt.hxmb50.mainpages.ui.main.MainActivity',
          matches:
            '(@[vid="dialog_update_tv_cancel"][text="下次再说"] + [vid="dialog_update_tv_update"][text="立即更新"]) || (LinearLayout > @TextView[vid="dialog_update_tv_cancel"][clickable=true][visibleToUser=true][text="下次再说"] + TextView[vid="dialog_update_tv_update"][text="立即更新"])',
        },
      ],
    },
    {
      key: 3,
      name: '周五能量兑换1，立即兑换',
      desc: '260627',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text$="能量分"] +n * > [text="立即兑换"]) || (WebView[text="权益详情"] > View > View > View[text$="能量分"] +(1,2) View > Button[text="立即兑换"])',
        },
      ],
    },
    {
      key: 4,
      name: '周五能量兑换2，确认兑换',
      desc: '260704',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          order: -1,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text*="是否确认兑换"] + * > [text="确认"]) || (View[text*="是否确认兑换"] + View > View[clickable=true][visibleToUser=true][text="确认"])',
        },
      ],
    },
    {
      key: 5,
      name: '周五能量兑换3，火爆，知道了',
      desc: '260704，添加 权益被抢完',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 0,
          order: -2,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            '([text="活动太火爆了，请稍后再试！"] + * > [text="知道了"]) || (Dialog > View[text*="活动太火爆了" || text*="权益已被抢完"] + View > Button[clickable=true][visibleToUser=true][text*="知道了"])',
        },
      ],
    },
    {
      key: 6,
      name: '签到成功，返回 或 X掉 ',
      desc: '260803',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView > View > View > View > View > View[text*="签到成功"] +n View[clickable=true][text="返回"] + @View[clickable=true] > Image',
        },
      ],
    },
    {
      key: 7,
      name: '恭喜抽中微信红包，浏览后领取',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'View[text^="恭喜您抽中"] < View + View[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 8,
      name: '浏览后领取立减金',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'WebView[text="签到赢立减金"] > View > View > View > Image + View[clickable=true][visibleToUser=true]',
        },
      ],
    },
    {
      key: 9,
      name: '风险评估过期，知道了',
      desc: '260804',
      rules: [
        {
          resetMatch: 'match',
          fastQuery: true,
          activityIds: 'com.alipay.mobile.nebulacore.ui.H5Activity',
          matches:
            'LinearLayout +n LinearLayout > @LinearLayout[clickable=true][visibleToUser=true][vid="ll_no"] > TextView[text="知道了"]',
        },
      ],
    },
  ],
});
