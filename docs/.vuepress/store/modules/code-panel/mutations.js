import {SET_ACTIVE_CODE_BLOCK} from '../mutation-types';

export default {
  [SET_ACTIVE_CODE_BLOCK](state, uid) {
    state.activeCodeBlock = uid;
  }
};
