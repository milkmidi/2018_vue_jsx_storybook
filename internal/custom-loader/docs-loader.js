/* eslint-disable */
const marked = require('marked');
marked.setOptions({
  highlight(code, lang) {
    return require('highlight.js').highlightAuto(code).value;
  },
});
module.exports = function (source, map) {
  const r = marked(source).replace('<code class="lang-js">','<code class="lang-js hljs">');
  this.callback(
    null,
    `module.exports = function(Component) {Component.options.__docs = ${JSON.stringify(r)}}`,
    map
  );
};

