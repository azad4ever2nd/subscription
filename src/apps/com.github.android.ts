import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.github.android',
  name: 'GitHub',
  groups: [
    {
      key: 1,
      name: '登陆验证完成，CLOSE',
      desc: '260503',
      rules: [
        {
          resetMatch: 'match',
          activityIds: 'com.github.android.twofactor.TwoFactorActivity',
          matches:
            '[text="Authentication request was approved."] + @*[clickable=true] > [text="CLOSE"]',
        },
      ],
    },
    {
      key: 2,
      name: '步骤一，选 build_relese',
      desc: '260811',
      rules: [
        {
          resetMatch: 'match',
          actionMaximum: 1,
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            'FrameLayout[vid="nav_host_fragment"][visibleToUser=true] @View[clickable=false][visibleToUser=true] > TextView[text="build_release"] + TextView + TextView',
        },
      ],
    },
    {
      key: 3,
      name: '步骤二，build_release，RUN WORKFLOW',
      desc: '260811',
      rules: [
        {
          forcedTime: 3000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            'View > TextView[text="This workflow has a workflow_dispatch event trigger."] + @View[clickable=true][visibleToUser=true] > TextView[text="RUN WORKFLOW"] + Button',
        },
      ],
    },
    {
      key: 4,
      name: '步骤三，Configure workflow，RUN WORKFLOW',
      desc: '260811',
      rules: [
        {
          forcedTime: 2000,
          actionMaximum: 1,
          resetMatch: 'app',
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            'Button - TextView[text="RUN WORKFLOW"] < @View[clickable=true][visibleToUser=true] + View > View > TextView[text="main"] + TextView[text="CHANGE"] + Button',
        },
      ],
    },
    {
      key: 5,
      name: 'build_release 界面，RUN WORKFLOW',
      desc: '260807',
      rules: [
        {
          resetMatch: 'app',
          forcedTime: 7000,
          actionMaximum: 1,
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            '([text="RUN WORKFLOW"] <n @* <n View +n View View [desc="Share"]) || (ComposeView > View > View > View > TextView[text="This workflow has a workflow_dispatch event trigger."] + @View[clickable=true][visibleToUser=true] > TextView[text="RUN WORKFLOW"] + Button) || (Button - TextView[text="RUN WORKFLOW"] < @View[clickable=true][visibleToUser=true] <(2,4) View +(3,5) View > TextView[text="build_release"] + View > View[desc="Share"])',
        },
      ],
    },
    {
      key: 6,
      name: 'RUN WORKFLOW,自动点击脚本执行',
      desc: '260731',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            '([text="RUN WORKFLOW"] + @Button <<n * + * [text="CHANGE"]) || (Button - TextView[text="RUN WORKFLOW"] < @View[clickable=true][visibleToUser=true] + View > View > TextView[text="CHANGE"] + Button)',
        },
      ],
    },
    {
      key: 7,
      name: '下滑刷新',
      desc: '260812',
      rules: [
        {
          resetMatch: 'match',
          preKeys: [4],
          actionMaximum: 1,
          action: 'swipe',
          swipeArg: {
            start: {
              x: 510,
              y: 390,
            },
            end: {
              x: 510,
              y: 1645,
            },
            duration: 2500, //滑动时长
          },
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            'View > TextView[text="This workflow has a workflow_dispatch event trigger."] + @View[clickable=true][visibleToUser=true] > TextView[text="RUN WORKFLOW"] + Button',
        },
      ],
    },
  ],
});
