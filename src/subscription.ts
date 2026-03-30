import { defineGkdSubscription } from '@gkd-kit/define';
import { batchImportApps } from '@gkd-kit/tools';
import categories from './categories';
import globalGroups from './globalGroups';

export default defineGkdSubscription({
  id: 1233,
  name: 'azad4ever 的订阅',
  version: 0,
  author: 'azad4ever',
  checkUpdateUrl: './gkd.version.json5',
  supportUri: 'https://github.com/azad4ever2nd/subscription',
  categories,
  globalGroups,
  apps: await batchImportApps(`${import.meta.dirname}/apps`),
});
