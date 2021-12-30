export const BASE_URL = 'https://ius2ab8yjf.execute-api.eu-west-2.amazonaws.com/portal';

export const USER_API = '/users/v1/{endpoint}';
export const DEVELOPERS_API = '/developers/v1/{endpoint}';
export const USAGE_PLANS = '/usage-plans/v1/{endpoint}';
export const ADMIN_API = '/admin/v1/{endpoint}';

export const ID_TOKEN = 'id_token';
export const REFRESH_TOKEN = 'refresh_token';
export const X_USER_TOKEN = 'x_user_token';
export const USER_NAME = 'userName';

export const SECONDS_IN_DAY = 86400;

export const LOGIN = USER_API.replace('{endpoint}', 'login');
export const REGISTER = USER_API.replace('{endpoint}', 'register');
export const LOGOUT = USER_API.replace('{endpoint}', 'logout');
export const FORGOT_PASSWORD = USER_API.replace('{endpoint}', 'forgot-password');
export const SET_NEW_PASSWORD = USER_API.replace('{endpoint}', '{userName}/reset-password');
export const RESET_PASSWORD_CONFIRMATION = USER_API.replace('{endpoint}', 'reset-password-confirmation');
export const UPDATE_REFRESH_TOKEN = USER_API.replace('{endpoint}', 'refresh-token');

export const USER = USER_API.replace('{endpoint}', '{userName}');

export const APPS = DEVELOPERS_API.replace('{endpoint}', 'apps?userName={userName}');
export const CREATE_APP = DEVELOPERS_API.replace('{endpoint}', 'apps');
export const APP_BY_ID = DEVELOPERS_API.replace('{endpoint}', '{userName}/apps/{appId}');

export const PLANS = USAGE_PLANS.replace('{endpoint}', 'plans');

export const ADMIN_PROFILE = ADMIN_API.replace('{endpoint}', 'profile');
export const ALL_DEVELOPERS = ADMIN_API.replace('{endpoint}', 'developers');
export const DELETE_USER = ADMIN_API.replace('{endpoint}', '{userName}');
export const UPDATE_ROLE = ADMIN_API.replace('{endpoint}', 'role/{userName}');

export const PUBLISH_PLAN = USAGE_PLANS.replace('{endpoint}', 'plans/publish');
