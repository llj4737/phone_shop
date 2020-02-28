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
    margin-bottom: 15px;
    text-align: center;

    // img {
    //     width: 100%;
    // }
}
</style>