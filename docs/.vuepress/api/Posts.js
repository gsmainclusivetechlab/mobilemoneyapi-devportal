import Api from './Api';
import {
  POST,
  POSTS,
} from './constants';

export default class Posts {
  static getAll({
    perPage, currentPage, userId, getters,
  }) {
    return Api.get(POSTS, {
      params: {
        perPage: perPage ?? getters.perPage,
        currentPage: currentPage ?? getters.currentPage,
        userId: userId === 'All' ? null : userId,
      },
    });
  }

  static getByID(id) {
    return Api.get(`${POST}/${id}`);
  }
}
