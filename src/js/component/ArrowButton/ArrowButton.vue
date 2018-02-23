<template lang="pug" functional>
.arrow-button(@click="listeners.click" :class="{hidden:props.hidden}")
  .line-arrow.left(:class="{right:props.right}")
</template>


<style lang="stylus">
  $size = 2px
  .arrow-button
    position relative
    cursor pointer
    display flex
    align-items center
    padding 10px 10px
    transition padding 0.25s
    &.hidden
      visibility hidden
    &:hover
      padding-left 18px
    .line-arrow
      overflow hidden
      display inline-block
      font-size 12px
      width 3em
      height 3em
      top 50%
      &:hover
      &:active
      &.active
        border-width 2px
      &.left
        border-top $size solid #a9a9a9
        border-left $size solid #a9a9a9
        transform rotate(-45deg)
      &.right
        transform rotate(135deg)
</style>