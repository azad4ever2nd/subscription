import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.autonavi.minimap',
  name: '高德地图',
  groups: [
    {
      key: 1,
      name: '升级新版本',
      desc: '260127',
      rules: [
        {
          matches: [
            '(@[vid="iv_close"] + * >n [vid="button_ensure"][text*="立即升级"]) || ([vid="update_viewpager"] + [vid="iv_close"])',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.autonavi.map.activity.NewMapActivity'],
        },
      ],
    },
    {
      key: 2,
      name: '打开系统定位开关，取消',
      desc: '260223',
      rules: [
        {
          matches: [
            '[vid="scene_permission_dialog"] > [vid="scene_permission_title"][text="需要打开系统定位开关"] +n * > [vid="scene_permission_cancel"]',
          ],
          fastQuery: true,
          resetMatch: 'match',
          activityIds: ['com.autonavi.map.activity.NewMapActivity'],
        },
      ],
    },
  ],
});
