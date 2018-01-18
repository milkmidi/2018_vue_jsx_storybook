// @flow
import Vuex from 'vuex';
import Vue from 'vue';


Vue.use(Vuex);

const defaultState = {
  loading: true,
};

// vue 裡用 this.$store.commit('loading' , true)
const mutations = {
  loading(state, value) {
    state.loading = value;
  },
};

/*
  vue 裡用 this.$store.dispatch('loading' , true)
  methods(){
    ...Vuex.mapActions(['loading']),
  }
*/
const actions = {
  loading({ commit }, value) {
    commit('loading', value);
  },
};

/**
  computed:{
    ...Vuex.mapGetters(['loading'])
  },
*/
const getters = {
  loading: state => state.loading,
};
export default new Vuex.Store({
  state: defaultState,
  getters,
  actions,
  mutations,
});
