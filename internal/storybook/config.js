import { configure } from '@storybook/vue';
import { setOptions } from '@storybook/addon-options';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


setOptions({
  name: 'vue jsx storybook',
  url: 'https://github.com/milkmidi/2018_vue_jsx_storybook',
  addonPanelInRight: false,
});

require('!!style-loader!css-loader!stylus-loader!../../src/css/common.styl');

const req = require.context('../../src', true, /stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
