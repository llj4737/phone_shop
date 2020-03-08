<template>
  <div class="home">
    <div class="header">
      <div class="category">
        <span class="iconfont icon-fenlei1"> </span>
      </div>
      <div class="search">
        <input type="text" placeholder="请输入内容..." />
      </div>

      <div class="login-search">
        <span>登录</span>
      </div>
    </div>

    <div class="swiper-wrapper">
      <!-- <swiper class="my-swiper" :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in dataImgItem" :key="item.imgSrc">
          <img :src="item.imgSrc" alt="" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper> -->
      <div class="my-swiper">
        <Swiper :options="swiperOption" :data="dataImgItem" />
      </div>
    </div>

    <div class="select-wrapper">
      <div v-for="i in 10" :key="i" class="select-list">
        <img
          src="https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/20983/16/10753/6124/5c8a16aaE5d6b15d7/01e0e818a7505267.png.webp"
          alt=""
        />
        <p>{{ '商城' }}</p>
      </div>
    </div>

    <nut-infiniteloading
      @loadmore="onInfinite"
      :is-show-mod="true"
      :has-more="isHasMore"
      :is-loading="isLoading"
      :threshold="200"
    >
      <nut-row :gutter="2">
        <nut-col v-for="o in 30" :span="12" :key="o">
          <CardItem>
            <div class="card-wrapper" @click="$router.push('/prodetail/1')">
              <img
                v-lazy="
                  'https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/92327/32/13096/209738/5e539c9eE2b1ac601/e8ec8ad44bd787ae.jpg!q70.dpg.webp'
                "
                alt=""
              />
              <p class="text">
                零食零食零食零食零食零食零食零食零食零食零食零食零食零食零食零食零食零食
              </p>
              <p class="price">￥100</p>
            </div>
          </CardItem>
        </nut-col>
      </nut-row>
    </nut-infiniteloading>
  </div>
</template>

<script>
import CardItem from '@/components/card/CardItem.vue';
import Swiper from '@/components/swiper/Swiper.vue';



// import {login} from '@/ajax';
// console.log(login)

export default {
  name: 'Home',
  components: {
    CardItem,
    Swiper
  },
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination'
        }
      },
      dataImgItem: [
        {
          imgSrc:
            'https://imgcps.jd.com/ling4/100004559325/5omL5py66LSt5a6e5oOg/5aSH6LSn6LaF5YC8/p-5c134fc882acdd181dcabc28/6d9c5c8a/cr_1125x445_0_171/s1125x690/q70.jpg'
        },
        {
          imgSrc:
            'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/85900/25/13456/147590/5e58cd93E2f34d858/bd577edda7369949.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          imgSrc:
            'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/93619/5/12584/104444/5e4cb0c1E52583a89/3ffca8c7d7f4c26d.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        },
        {
          imgSrc:
            'https://m.360buyimg.com/mobilecms/s700x280_jfs/t1/110405/29/7043/91060/5e565090Eedf9e98d/a8750753a17e7eed.jpg!cr_1125x445_0_171!q70.jpg.dpg'
        }
      ],
      page: 2,
            num: 30,
            isHasMore: true,
            isLoading: false,
            isErr: false,
            timer: null
    };
  },
  methods: {
     onInfinite () {
       console.log(111)
            // this.isLoading = true;
            // this.timer = setTimeout(() => {
            //     if (this.page <= 5) {
            //         this.data = new Array(this.num * this.page);
            //         this.page = this.page + 1;
            //     } else {
            //         this.isHasMore = false;
            //     }
            //     this.isLoading = false;
            // }, 100);
        }
  },
  mounted() {
    console.log(this.$store)
  }
};
</script>

<style lang="less" scoped>
@import url('../less/common.less');
.home {
  background: #eee;

  .header {
    display: flex;
    // height: 70px;
    padding: 6px 10px;
    background: rgb(243, 89, 115);
    align-items: center;

    .category {
      color: white;
      margin-right: 20px;

      .iconfont {
        font-size: 16px;
      }
    }

    .search {
      overflow: hidden;
      width: 75%;
      height: 30px;
      margin-right: 20px;
      background: #fff;
      border-radius: 15px;

      input {
        box-sizing: border-box;
        background: #fafafa;
        width: 100%;
        height: 100%;
        padding: 0 20px;
        border: none;
        outline: none;
      }
    }

    .login-search {
      color: white;
      font-size: 14px;
    }
  }

  .swiper-wrapper {
    padding: 6px 0 2px;
    box-sizing: border-box;
    background: rgb(243, 89, 115);
    .my-swiper {
      overflow: hidden;
      width: 95%;
      margin: auto;
      height: 149px;
      border-radius: 4px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .select-wrapper {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 0 0;
    background: #fff;
    .select-list {
      width: 20%;
      font-size: 13px;
      color: #666;
      text-align: center;
      margin-bottom: 10px;
      > img {
        width: 55%;
        margin-bottom: 4px;
      }
    }
  }

  .nut-row {
    padding-top: 20px;
    .card-wrapper {
      // > img {
      //   width: 100%;
      //   margin-bottom: 10px;
      // }

      .text {
        .mut-line(2);
        font-size: 13px;
        margin-bottom: 6px;
        line-height: 17px;
      }
      .price {
        color: red;
      }
    }
  }
}

.home /deep/ .swiper-pagination-bullet-active {
  background: red !important;
}
</style>
