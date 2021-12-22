export const BASE_URL = 'https://ius2ab8yjf.execute-api.eu-west-2.amazonaws.com/portal'; // FIXME env need
export const USER_API = '/users/v1/{endpoint}';
export const DEVELOPERS_API = '/developers/v1/{endpoint}';
export const SECONDS_IN_DAY = 86400

export const LOGIN = USER_API.replace('{endpoint}', 'login');
export const REGISTER = USER_API.replace('{endpoint}', 'register');
export const LOGOUT = USER_API.replace('{endpoint}', 'logout');
export const FORGOT_PASSWORD = USER_API.replace('{endpoint}', 'forgot-password');
export const SET_NEW_PASSWORD = USER_API.replace('{endpoint}', '{userName}/reset-password');
export const RESET_PASSWORD_CONFIRMATION = USER_API.replace('{endpoint}', 'reset-password-confirmation');

export const USER = USER_API.replace('{endpoint}', '{userName}')

export const APPS = DEVELOPERS_API.replace('{endpoint}', 'apps?userName={userName}');
export const CREATE_APP = DEVELOPERS_API.replace('{endpoint}', 'apps');
export const APP_BY_ID = DEVELOPERS_API.replace('{endpoint}', '{userName}/apps/{appId}');

export const ALL_PLANS = '/all-plans'
export const ALL_APPLICATIONS = '/all-applications'
export const ALL_USERS = '/all-users'
