<script>
export default {
  props: ['data'],
};
</script>
<template lang="pug">
  .child-component
    h3 {{data.name}} - {{data.age}}
</template>
