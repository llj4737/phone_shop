<template>
  <section class="card-item">
      <section>
          <slot></slot>
      </section>
  </section>
</template>

<script>
export default {
    name: 'card-item',
    props: {
        image: String
    }
}
</script>

<style scoped lang='less'>
.card-item {
    margin-bottom: 4px;
    padding: 4px 4px 20px 4px;
    border-radius: 2px;
    background: #fff;

    img {
        width: 100%;
        margin-bottom: 10px;
    }
}
</style>