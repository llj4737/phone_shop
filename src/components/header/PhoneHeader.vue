<template>
  <header class="header">
    <div class="header-left">
      <slot name="left"></slot>
    </div>
    <div class="header-title" v-if="title">
      <p>{{ title }}</p>
    </div>
    <div class="header-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: String
  }
};
</script>

<style scoped lang="less">
.header {
  width: 100%;
  height: 44px;
//   border-bottom: 1px solid #eee;
  background: #fff;
  position: relative;

  > * {
    line-height: 44px;
    height: 100%;
    position: absolute;
  }

  .header-left {
    left: 8px;
  }
  .header-right {
    right: 8px;
  }
  .header-title {
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
