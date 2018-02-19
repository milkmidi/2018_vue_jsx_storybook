<script>
export default {
  data: () => ({
    money: 100,
  }),
  computed: {
    us() {
      return 100 * 30;
    },
    jp() {
      return 100 / 3;
    },
  },
};
</script>
<template>
  <section>
    <p>money:{{money}}</p>
    <p>us:{{us}}</p>
    <p>jp:{{jp}}</p>
  </section>
</template>
