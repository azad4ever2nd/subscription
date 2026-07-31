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
      name: 'build_release 界面，RUN WORKFLOW',
      desc: '260731',
      rules: [
        {
          resetMatch: 'app',
          actionMaximum: 1,
          activityIds: 'com.github.android.main.MainActivity',
          matches:
            '([text="RUN WORKFLOW"] <n @* <n View +n View View [desc="Share"]) || (ComposeView > View > View > View > TextView[text="This workflow has a workflow_dispatch event trigger."] + @View[clickable=true][visibleToUser=true] > TextView[text="RUN WORKFLOW"] + Button) || (Button - TextView[text="RUN WORKFLOW"] < @View[clickable=true][visibleToUser=true] <(2,4) View +(3,5) View > TextView[text="build_release"] + View > View[desc="Share"])',
        },
      ],
    },
    {
      key: 3,
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
  ],
});
