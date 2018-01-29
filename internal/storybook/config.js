import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


setOptions({
  name: 'vue jsx',
  url: 'https://github.com/MedialandDev/anteater/',
  addonPanelInRight: true,
});

/* eslint-disable */
require('!!style-loader!css-loader!stylus-loader!../../src/css/common.styl');
/* eslint-enabled */

const req = require.context('../../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
