<template>
  <section class="card">
    <h4 class="card-title">
      <span>{{ title }}</span>
      <span class="more" v-if="this.more" v-html="more"></span>
    </h4>

    <div class="card-content">
      <slot>
        卡片内容
      </slot>
    </div>
  </section>
</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: '卡片标题'
    },
    more: String
  }
};
</script>

<style scoped lang="less">
.card {
  width: 100%;
  background: #fff;
  // border: 1px solid red;
  padding: 10px 2px;
}

.card-title {
  padding: 10px 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .more {
    font-weight: normal;
    font-size: 12px;
  }
}
.card-content {
  padding: 6px 4px;
}
</style>
