/* eslint func-names:0 */

const highlight = require('highlight.js');

module.exports = function (source) {
  const lang = 'html';
  const { value } = highlight.highlight(lang, source);
  return `<pre><code class="lang-${lang} hljs">${value}</code></pre>`;
  // return `<pre><code class="lang-${lang} hljs">${value}</code></pre>`;
};
