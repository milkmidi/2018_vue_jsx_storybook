const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('', {
  url: 'http://medialand.tw',
  beforeParse(w) {
    w.scrollTo = () => { };
  },
});
function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .map(prop => Object.getOwnPropertyDescriptor(src, prop));
  Object.defineProperties(target, props);
}

global.window = window;
global.window.matchMedia = () => ({
  matches: false,
  addListener() {},
  removeListener() {},
});
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);
// https:// github.com/tmpvar/jsdom/issues/1782
// Mock canvas (used by qtip)
window.HTMLCanvasElement.prototype.getContext = () => ({});

module.exports = window;
