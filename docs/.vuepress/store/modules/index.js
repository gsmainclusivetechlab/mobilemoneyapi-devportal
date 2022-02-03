import myApplications from './my-applications';
import allApplications from './all-applications';
import allUsers from './all-users';
import auth from './auth';
import codePanel from './code-panel';
import user from './user';
import usagePlans from './usage-plans';
import pagination from './pagination';
import { ALL_APPS, ALL_PLANS, ALL_USERS, AUTH, CODE_PANEL, MY_APPS, PAGINATION, USER } from './module-types';

export default {
  [MY_APPS]: myApplications,
  [ALL_APPS]: allApplications,
  [ALL_USERS]: allUsers,
  [ALL_PLANS]: usagePlans,
  [AUTH]: auth,
  [CODE_PANEL]: codePanel,
  [USER]: user,
  [PAGINATION]: pagination
};
