/* eslint no-underscore-dangle:0 */


export default {
  install(Vue) {
    if (this.installed) {
      return;
    }
    this.installed = true;
    Vue.mixin({
      created() {
        if (this.$options.__docs) {
          this.docs = this.$options.__docs;
        }
      },
    });
  },
};

