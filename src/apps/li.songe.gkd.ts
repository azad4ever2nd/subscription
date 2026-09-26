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
      name: '加载失败点击重试，老版本用',
      desc: '260813',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 100,
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '@[text="加载失败, 点击重试"] + View',
        },
      ],
    },
    {
      key: 3,
      name: '弹窗，删除当前快照，确定，老版本用',
      desc: '260910',
      rules: [
        {
          resetMatch: 'match',
          actionCd: 500,
          forcedTime: 3000,
          anyMatches: [
            '([text="确定删除当前快照吗?"] +n @* > [text="确定"])',
            'View > TextView[text="删除快照"] + TextView[text="确定删除当前快照吗?"] +n @View[clickable=true][visibleToUser=true] > TextView[text="确定"] + Button',
          ],
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 4,
      name: '弹窗，导出备份，老版本用',
      desc: '260916',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches:
            'View > View > View[childCount=2] > TextView[text="导入备份"] + TextView[text="导出备份"]',
        },
      ],
    },
    {
      key: 5,
      name: '弹窗，保存到下载，老版本用',
      desc: '260916',
      rules: [
        {
          resetMatch: 'match',
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches:
            'View > View > View[childCount=3] > TextView[text="分享到其他应用"] + @TextView[text="保存到下载"][clickable=true][visibleToUser=true] + TextView[text="生成链接(需科学上网)"]',
        },
      ],
    },
    {
      key: 6,
      name: '加载失败点击重试，新版本用',
      desc: '260926',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          actionCd: 0,
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches: '@[text="加载失败, 点击重试"] + View',
        },
      ],
    },
    {
      key: 7,
      name: '弹窗，删除当前快照，确定，新版本用',
      desc: '260926',
      rules: [
        {
          resetMatch: 'match',
          matchDelay: 500,
          forcedTime: 3000,
          actionCd: 0,
          action: 'clickCenter',
          anyMatches: [
            '([text="确定删除当前快照吗?"] +n @* > [text="确定"])',
            '([text="确定删除当前快照吗?"] +n @View[clickable=true][visibleToUser=true] > TextView[text="确定"])',
          ],
          activityIds: ['li.songe.gkd.MainActivity'],
        },
      ],
    },
    {
      key: 8,
      name: '弹窗，导出备份，新版本用',
      desc: '260916',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches:
            'View > View > View[childCount=2] > TextView[text="导入备份"] + TextView[text="导出备份"]',
        },
      ],
    },
    {
      key: 9,
      name: '弹窗，保存到下载，新版本用',
      desc: '260916',
      rules: [
        {
          resetMatch: 'match',
          action: 'clickCenter',
          forcedTime: 3000,
          activityIds: 'li.songe.gkd.MainActivity',
          matches:
            'View > View > View[childCount=3] > TextView[text="分享到其他应用"] + @TextView[text="保存到下载"][clickable=true][visibleToUser=true] + TextView[text="生成链接(需科学上网)"]',
        },
      ],
    },
    {
      key: 10,
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
      key: 11,
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
      key: 12,
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
      key: 13,
      name: '应用规则自动开启',
      desc: 'D,260814，慎开',
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
