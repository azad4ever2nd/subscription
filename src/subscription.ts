import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1233,
  name: 'azad4ever 的订阅',
  version: 1,
  author: 'azad4ever',
  checkUpdateUrl:
    'https://fastly.jsdelivr.net/gh/azad4ever2nd/subscription@main/dist/gkd.version.json5',
  supportUri:
    'https://fastly.jsdelivr.net/gh/azad4ever2nd/subscription@main/dist/gkd.json5',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
