import Api from '../Api';
import { ADMIN_PROFILE } from '../constants';

export class Admin {
  static getProfile() {
    return Api.get(ADMIN_PROFILE);
  }
}
