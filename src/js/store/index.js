// @flow
import Vuex from 'vuex';
import Vue from 'vue';
import keyhandlerPlugin from './keyhandlerPlugin';
import { routes } from '../router';

Vue.use(Vuex);

const defaultState = {
  index: 0,
  totalPages: routes.length,
};

const mutations = {
  updateIndex(state, value) {
    state.index = Math.min(Math.max(0, value), state.totalPages - 1);
  },
};

const actions = {
  fakeAPIGetUserProfile() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          name: '奶綠伯',
          img: require('img/pipi.jpg'),
          description: '我是description',
          followers: 1,
          following: 1,
        });
      }, 2300);
    });
  },
};

const getters = {
  index: ({ index }) => index,
  totalPages: ({ totalPages }) => totalPages,
  isLastPage: ({ index, totalPages }) => index === totalPages - 1,
  isFirstPage: ({ index }) => index === 0,
};
export default new Vuex.Store({
  strict: true,
  state: defaultState,
  getters,
  actions,
  mutations,
  plugins: [keyhandlerPlugin],
});
