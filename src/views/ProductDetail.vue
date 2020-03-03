<template>
  <div class="detail">
    <div class="header-swiper">
      <Swiper :options="swiperOptions" :data="dataImgItem" :preview="true" />
    </div>
    <div class="product-price">
      <p class="price"><span>￥</span>156.00</p>
      <p class="collect">
        <span class="iconfont icon-shoucang1"></span> <br />收藏
      </p>
    </div>

    <h3 class="product-title">
      【京选好货】男鞋秋季2019新款韩版潮流运动休闲跑步冬季男士百搭老爹ins潮鞋
      黑色 36
    </h3>

    <div class="hasChoose">
      <div class="choosed">
        <p class="choosed-left">已选</p>
        <div>
          <p class="choose-title">男鞋秋季2019新款韩版潮流运动</p>
          <p class="choosed-left">新款韩版潮流运动</p>
        </div>
      </div>
      <span
        @click="showBottomPopup = true"
        class="iconfont icon-zhankai"
      ></span>
    </div>

    <ul class="img-wrapper">
      <li class="list"><img src="https://img10.360buyimg.com/imgzone/jfs/t1/70536/6/1591/92991/5cfefd03E8e87ff8d/36c2b040ee5571d4.jpg!q70.dpg.webp" alt=""></li>
    </ul>

    <footer class="add-shop">
      <div class="shop-left">
        <div class="kefu">
          <span class="iconfont icon-wodekefu"></span>
          <span>客服</span>
        </div>
        <div class="gouwuche">
          <div class="num">1</div>
          <span class="iconfont icon-gouwuchekong"></span>
          <span>购物车</span>
        </div>
      </div>
      <div class="shop-right">
        <ShopCar />
      </div>
    </footer>
    <nut-popup
      ref="popup"
      v-model="showBottomPopup"
      position="bottom"
      :style="{ height: '60%' }"
    >
      <div ref="popwrapper" class="popup-wrapper">
        <div class="header">
          <div class="left">
            <img
              src="https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/33578/11/1118/88998/5ca347d9E0fb96112/01af84bdd647f569.jpg!q70.dpg.webp"
              alt=""
            />
          </div>
          <div class="right">
            <div class="price">￥<span>166.00</span></div>
            <div class="choose">
              <span>已选</span>
              <p>MG-2 蓝牙版 黑色，3个</p>
            </div>
          </div>
        </div>

        <div class="color">
          <p>颜色</p>
          <div class="list">
            <p class="active">蓝色sssssssss</p>
            <p>黑色sssss</p>
            <p>白色ssssssssssssss</p>
          </div>
        </div>

        <div class="num">
          <p>数量</p>
          <!-- <div class="operate">
            <p class="des"><span class="iconfont icon-jianshao-"></span></p>
            <p class="center">1</p>
            <p class="add"><span class="iconfont icon-zengjia"></span></p>
          </div> -->
          <nut-stepper :value.sync="initValue"></nut-stepper>
        </div>
        <div class="footer-wrapper">
          <ShopCar />
        </div>
      </div>
    </nut-popup>
  </div>
</template>

<script>
import Swiper from '@/components/swiper/Swiper.vue';
import ShopCar from '@/components/order/ShopCar.vue';
export default {
  components: {
    Swiper,
    ShopCar
  },
  data() {
    return {
      showBottomPopup: false,
      initValue: 1,
      popup: null,
      listData1: new Array(1),
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        }
      },
      dataImgItem: [
        {
          imgSrc:
            'https://m.360buyimg.com/mobilecms/s750x750_jfs/t1/99175/16/415/364230/5dad9184Ed734ac3c/61184dcaac167002.jpg!q80.dpg.webp'
        },
        {
          imgSrc:
            'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/88956/11/438/375517/5dad9179Ebf3a33db/79e4581d94358d02.jpg!q70.dpg.webp'
        },
        {
          imgSrc:
            'https://m.360buyimg.com/mobilecms/s1125x1125_jfs/t1/59155/29/14239/218788/5dad917eEfb8e0351/261e5604ab9ac073.jpg!q70.dpg.webp'
        }
      ]
    };
  },
  mounted() {
    this.$nextTick(() => {
      console.log(this.$refs.popwrapper);
    });
  },
  watch: {
    showBottomPopup(newVal, oldVal) {
      if (newVal) {
        this.fixedBody();
      } else {
        this.looseBody();
      }
    }
  },
  methods: {
    touchMove(e) {
      return false;
      // e.preventDefault();
    },
    handleTouchMove(e) {
      e.preventDefault();
    },
    looseBody() {
      let body = document.body;
      body.style.position = '';
      let top = body.style.top;
      document.body.scrollTop = document.documentElement.scrollTop = -parseInt(
        top
      );
      body.style.top = '';
    },
    fixedBody() {
      let scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      document.body.style.cssText +=
        'position:fixed;width:100%;top:-' + scrollTop + 'px;';
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../less/common.less');
.popup-box {
  overflow-y: unset !important;
}
.detail {
  height: 2000px;
  background: #eee;

  > * {
    background: #fff;
  }

  .popup-wrapper {
    height: 100%;
    .header {
      display: flex;

      .left {
        width: 100px;
        height: 100px;
        margin: -24px 20px 0 12px;
        border-radius: 2px;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }

      .right {
        .price {
          margin: 20px 0;
          color: red;
          span {
            font-size: 20px;
          }
        }
        .choose {
          margin: 20px 0;
          display: flex;
          span {
            margin-right: 4px;
            font-size: 12px;
            color: #888;
          }
          p {
            font-size: 14px;
          }
        }
      }
    }

    .color {
      padding: 12px;
      font-size: 12px;
      color: #888;
      > p {
        margin-bottom: 10px;
      }
      .list {
        p {
          display: inline-block;
          padding: 8px 12px;
          margin-right: 10px;
          margin-bottom: 10px;
          font-size: 14px;
          color: #333;
          background: #f3f3f3;
          border-radius: 4px;
        }

        .active {
          background: red;
          color: #fff;
        }
      }
    }

    .num {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      font-size: 12px;
      color: #888;
    }
    // overflow: auto;

    .footer-wrapper {
      position: fixed;
      bottom: 0;
      width: 100%;
    }
  }

  .img-wrapper {
    margin-top: 10px;
    .list {
      font-size: 0;
      img {
        width: 100%;
      }
    }
  }

  .product-price {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 12px;
    .price {
      color: red;
      font-size: 20px;
      span {
        font-size: 12px;
      }
    }
    .collect {
      font-size: 10px;
      color: #666;
      text-align: center;
      .iconfont {
        font-size: 18px;
      }
    }
  }
  .product-title {
    .mut-line(2);
    line-height: 22px;
    padding: 0 8px 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
  .add-shop {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 50px;
    display: flex;

    .shop-left {
      flex: 3;
      display: flex;
      justify-content: space-evenly;
      > div {
        position: relative;
        display: flex;
        flex-direction: column;
        // text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 10px;
        color: #666;

        .iconfont {
          font-size: 20px;
          margin-bottom: 4px;
        }
      }

      .num {
        position: absolute;
        right: -2px;
        top: 6px;
        height: 10px;
        min-width: 10px;
        padding: 0 2px;
        text-align: center;
        line-height: 10px;
        border-radius: 5px;
        background: red;
        color: #fff;
        font-size: 8px;
      }
    }
    .shop-right {
      flex: 5;
      display: flex;
      > p {
        flex: 1;
        width: 50%;
        text-align: center;
        line-height: 50px;
        color: #fff;
      }

      .car {
        background: linear-gradient(138deg, #ffa600, #ffb000 77%, #ffbc00);
      }
      .buy {
        background: linear-gradient(-41deg, #ff4f18, #ff2000 24%, #f10000);
      }
    }
  }

  .hasChoose {
    display: flex;
    padding: 8px 12px 20px;
    justify-content: space-between;

    .choosed {
      display: flex;

      .choosed-left {
        font-size: 12px;
        color: #888;
        margin-right: 10px;
      }

      .choose-title {
        margin-bottom: 8px;
      }
    }

    .iconfont {
      font-size: 20px;
    }
  }
}

.detail /deep/ .swiper-pagination {
  .swiper-pagination-bullet {
    width: 7px;
    height: 7px;
    background: #ccc;
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: red;
  }
}
</style>
