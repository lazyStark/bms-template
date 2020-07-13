<!--
 * @Author: siwenfeng
 * @Date: 2020-07-06 17:36:40
 * @LastEditTime: 2020-07-06 17:36:56
 * @Description: this is ....
-->
<template>
  <div class="basic-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'BasicContainer'
}
</script>

<style lang="scss">
.basic-container {
  padding: 10px 6px;
  border-radius: 10px;
  box-sizing: border-box;
  &:first-child {
    padding-top: 0;
  }
}
@media screen and (min-width: 1200px){
  .basic-container {
    width: 1140px;
    margin: 0 auto;
  }
}
</style>
