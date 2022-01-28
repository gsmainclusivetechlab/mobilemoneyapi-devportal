import {SET_ACTIVE_CODE_BLOCK} from '../mutation-types';

export default {
  [SET_ACTIVE_CODE_BLOCK](state, uid) {
    state.activeCodeBlock = uid;
  },
  setActiveSidebar(state, value) {
    if(value === 'dashboard') {
      state.menuSidebarOpen = false
      state.dashboardSidebarOpen = true
    } else if (value === 'menu') {
      state.menuSidebarOpen = true
      state.dashboardSidebarOpen = false
    }
  },
  setInactiveSidebar(state, value) {
    if(value === 'dashboard') {
      state.dashboardSidebarOpen = false
    } else if (value === 'menu') {
      state.menuSidebarOpen = false
    }
  }
};
