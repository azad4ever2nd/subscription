import { defineGkdApp } from '@gkd-kit/define';
export default defineGkdApp({
  id: 'li.songe.gkd',
  name: 'GKD',
  groups: [
    {
      key: 1,
      name: '新版本',
      desc: '251121',
      rules: [
        {
          matches: ['[text="新版本"] +2 * > [text="取消"] + Button'],
          resetMatch: 'match',
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '删除当前快照，确定',
      desc: '260813',
      rules: [
        {
          matches: ['[text="确定删除当前快照吗?"] +n @* > [text="确定"]'],
          resetMatch: 'match',
          forcedTime: 2000,
          actionCd: 0,
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 3,
      name: '删除所有快照，取消',
      desc: '260312',
      rules: [
        {
          matches: ['[text="确定删除所有快照记录?"] + @* > [text="取消"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '确定删除所有触发记录，取消',
      desc: '260329',
      rules: [
        {
          matches: ['[text="确定删除所有触发记录?"] + @* > [text="取消"]'],
          actionCd: 0,
          resetMatch: 'match',
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 5,
      name: '加载失败点击重试',
      desc: '260813',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 100,
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '@[text="加载失败, 点击重试"] + View',
        },
      ],
    },
    {
      key: 6,
      name: '规则保存到下载',
      desc: '251117，避免在其他菜单中点击',
      rules: [
        {
          matches: [
            '*[childCount=2] > [text="分享到其他应用"] + [text="保存到下载"]',
          ],
          resetMatch: 'match',
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 7,
      name: '应用规则自动开启',
      desc: '260814，慎开',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          activityIds: 'li.songe.gkd.MainActivity',
          matches:
            'View[childCount=4] > View[childCount=2][clickable=true][visibleToUser=true][checked=false]',
        },
      ],
    },
  ],
});
