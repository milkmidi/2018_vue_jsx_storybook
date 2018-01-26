<!--
<template lang="pug" functional>
.container-fluid
  .kv-text.text-center
    slot(name="title")
  .row
    .col-6
      .standard-vue
        slot(name="standard")
        .markdown(v-html="props.standard")
    .col-6
      .jsx-component
        slot(name="jsx")
        .markdown(v-html="props.jsx")
</template>
-->

<script>
const Template = ({ props, slots }) => (
  <div class="container-fluid">
    <div class="kv-text text-center">
    { slots().title }
    </div>
    <div class="row">
      <div class="col-6">
        <div class="standard-vue">
          {slots().standard}
          <div class="markdown" domPropsInnerHTML={props.standard}></div>
        </div>
      </div>
      <div class="col-6">
        <div class="jsx-component">
          {slots().jsx}
          <div class="markdown" domPropsInnerHTML={props.jsx}></div>
        </div>
      </div>
    </div>
  </div>
);
export default Template;
</script>
