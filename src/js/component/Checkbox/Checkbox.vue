<script>

export default {
  name: 'checkbox',
  model: {
    prop: 'modelValue',
    event: 'input',
  },
  props: {
    value: [String, Number],
    label: String,
    modelValue: [Array, String, Boolean, Number],
  },
  computed: {
    innerValue() {
      return this.value || this.label;
    },
  },
  data() {
    return {
      inputValue: this.modelValue,
    };
  },
  watch: {
    modelValue(val) {
      if (Array.isArray(this.modelValue)) {
        this.inputValue = val;
      } else {
        this.inputValue = val ? this.value : '';
      }
    },
    inputValue(val) {
      this.$emit('input', val);
    },
  },
};
</script>


<template lang="pug">
.check-box
  label
    input(type="checkbox" :value="innerValue" v-model="inputValue")
    span 
    | {{label}}
</template>

<style lang="stylus" scoped>
  .check-box
    margin-left 2px
    margin-right 12px
    display inline-block
    position relative
    padding 5px 0
    label
      display flex
      cursor pointer
      color black
      font-size 1.2em
      position relative
      &:hover
        span
          border 1px solid #01a4cd
      input[type="checkbox"]
        position absolute
        visibility hidden
        &:checked + span
          &:after 
            transform scale(1)
      span
        align-self center
        margin-right 5px
        display inline-block
        width 18px
        height @width
        border 1px solid black
        border-radius 4px
        position relative
        &:after
          display block
          transition all 0.35s ease
          transform scale(0)
          content ''
          position absolute
          width 10px
          height @width
          background-color #01a4cd
          top 0
          left 0
          right 0
          bottom 0
          margin auto
</style>