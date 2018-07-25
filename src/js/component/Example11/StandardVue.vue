<script>
const SwitchTab = {
  computed: {
    contentCount() {
      return this.$slots.default.length;
    },
  },
  mounted() {
    console.log(this.contentCount);
    console.log(this.$slots.default);
  },
  template: `
    <div class="child">
      <slot></slot>
    </div>
  `,
};

export default {
  components: {
    SwitchTab,
  },
};
</script>

<template>
  <section>
    <SwitchTab>
      <h2>content1</h2>
      <h2>content2</h2>
      <h2>content3</h2>
    </SwitchTab>
  </section>
</template>
