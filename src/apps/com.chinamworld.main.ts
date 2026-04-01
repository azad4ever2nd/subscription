import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.chinamworld.main',
  name: '中国建设银行',
  groups: [
    {
      key: 1,
      name: '签到成功',
      desc: '260401,签到改版,冲突领取立减金，先暂时屏蔽一个',
      rules: [
        {
          matches: [
            '([text="立即使用"] -n [text="获得 1 龙积分" || text$="龙积分"] <<n * + * > [text="JkaCmWVQ500S2oPJIJv3pK4lAM8omfwAibAgp2L0QtsAAAAASUVORK5CYII="]) || (@[text="确定"] -3 * > [text="AU8HaNGNFfbEAAAAAElFTkSuQmCC"]) || (@[text="关闭 按钮"] +n [text="立即使用"]) || (View + Image[text="关闭 按钮1"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
      ],
    },
    {
      key: 2,
      name: '弹窗',
      desc: '',
      rules: [
        {
          matches: ['[vid="tip_view_pager"] +2 [vid="close"][desc="关闭"]'],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.ccb.start.view.startdialog.StartDialogActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '新版本',
      desc: '251118',
      rules: [
        {
          matches: [
            '[text*="新版本"] <<n [vid="dialog_content_scroll"] +2 * > @[vid="dlg_left_tv"][text="取消"] +2 [vid="dlg_right_tv"][text="去更新"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
      ],
    },
    {
      key: 4,
      name: '会员中心活动火暴',
      desc: '251127',
      rules: [
        {
          action: 'back',
          matches: [
            '[text="活动火爆，请改日回到本页面再次领取"] + [text="确定"]',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
      ],
    },
    {
      key: 5,
      name: '任务中心，稍后再来',
      desc: '260322，添加 火爆了',
      rules: [
        {
          matches: [
            '([id="app"] > [text="我的礼包 按钮"] + [id="scroll"][childCount=1] [index=1]) || ([text="活动火爆，请稍候再试！"] + [text="知道了"] + [text="关闭 按钮"])',
          ],
          resetMatch: 'match',
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
      ],
    },
    {
      key: 6,
      name: '签到待领',
      desc: '260223',
      rules: [
        {
          matches: [
            '[text="签到有礼楼层"] +n @View[clickable=true][childCount=1] + [text="今天"]',
          ],
          actionMaximum: 2,
          resetMatch: 'match',
          activityIds: [
            'com.nantian.iBank.ui.activity.container.ProgramSingleWindowActivity',
          ],
        },
      ],
    },
  ],
});
