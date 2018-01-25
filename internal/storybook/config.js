import { configure } from '@storybook/vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

/* eslint-disable */
require('!!style-loader!css-loader!stylus-loader!../../src/css/common.styl');
/* eslint-enabled */

const req = require.context('../../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
