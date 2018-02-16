<script>

const ChildComponent = {
  props: ['name'],
  template: `
    <div class="child">
      <h2>Child Component {{this.name}}</h2>
    </div>
  `,
};

export default {
  components: {
    ChildComponent,
  },
};
</script>
<template>
  <section>
    <ChildComponent name="milkmidi"/>
    <!-- 
      預設不支援一個 .vue 檔包多組
      但作者說只要在 webpack 加入就可以
    resolve: {
      alias: {
        vue: 'vue/dist/vue.js'
      }
    }  -->
  </section>
</template>
