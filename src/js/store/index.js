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
    state.index = Math.min(Math.max(0, state.index + value), routes.length - 1);
  },
};

const actions = {
};

const getters = {
  index: ({ index }) => index,
  totalPages: ({ totalPages }) => totalPages,
};
export default new Vuex.Store({
  strict: true,
  state: defaultState,
  getters,
  actions,
  mutations,
  plugins: [keyhandlerPlugin],
});
