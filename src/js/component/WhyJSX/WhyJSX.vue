<script>
export default {
  data: () => ({
    msg: 'hi, jsx',
  }),
};
</script>
<!--1. template -->
<template>
  <div id="milkmidi">
    {{msg}}
  </div>
</template>
<!--
2. render function:
render (h) {
  return h(
    'div',
    { attrs: { id: 'milkmidi' },
    [ this.msg ]
  );
}

3. with JSX：
render (h) {
  return (
    <div id='milkmidi'>,
      { this.msg }
    </div>
  );
}
-->


