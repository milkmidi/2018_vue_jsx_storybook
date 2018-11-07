<script>
const SwitchTab = {
  template: `
    <div class="switch-tab">
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
    <p>使用 template 寫法, slot 就只能直接放</p>
    <p>但如果想在 每個 h2 再多包一層 div 呢?</p>
    <SwitchTab>
      <h2>content1</h2>
      <h2>content2</h2>
      <h2>content3</h2>
    </SwitchTab>
  </section>
</template>
