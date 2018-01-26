/* eslint func-names:0, prefer-template:0 */
// .vue to markdown
const marked = require('marked');

marked.setOptions({
  highlight(code) {
    return require('highlight.js').highlightAuto(code).value;
  },
});
module.exports = function (source) {
  return marked('```js\n' + source + '\n```').replace(/<code class="lang-js">/g, '<code class="lang-js hljs">');
};

/* module.exports = function (source) {
  return marked(source).replace(/<code class="lang-js">/g, '<code class="lang-js hljs">');
}; */
