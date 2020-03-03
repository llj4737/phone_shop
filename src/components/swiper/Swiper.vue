<template>
  <section>
    <swiper :options="options">
    <swiper-slide v-for="item in data" :key="item.imgSrc">
      <img @click="previewImg(item.imgSrc)" :src="item.imgSrc" alt="" />
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
  <nut-popup :style="{ padding: '30px 50px' }" v-model="showPreview">
    <img :src="popupImg" alt="">
  </nut-popup>
  </section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
export default {
  props: {
    options: Object,
    data: {
      type: Array,
      default: () => []
    },
    preview: {
      type: Boolean,
      default: false
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      showPreview: false,
      popupImg: ''
    }
  },
  methods: {
    previewImg(url) {
      if (this.preview) {
        this.popupImg = url;
        this.showPreview = true;
      }
    }
  }
};
</script>

<style lang="less" scoped>
.swiper-container {

    img {
        width: 100%;
        height: 100%;
    }
}

.popup-box {
  width: 100%;
  padding: 0  !important;
  font-size: 0;
  img {
    width: 100%;
  }
}

</style>
