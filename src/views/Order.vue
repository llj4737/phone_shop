<template>
  <div class="about">
    <PhoneHeader title="购物车">
      <template #left>
        <p><span class="iconfont icon-left"></span></p>
      </template>
      <template #right>
        <p>右边</p>
      </template>
    </PhoneHeader>

    <template v-if="false">
      <section class="to-login">
        <p>登陆后可同步账户购物车中商品</p>
        <nut-button type="primary" shape="circle" small color="#fff">
          登录
        </nut-button>
      </section>
      <div class="icon">
        <span class="iconfont icon-gouwuche1"></span>
      </div>
      <p>登录后可同步购物车中商品</p>
    </template>

    <template v-else>
      <div>
        <ul class="order-wrapper">
        <p class="edit">编辑商品</p>
        <li class="order-list" v-for="(o, index) in 3" :key="index">
          <div class="radio">
            <span
              class="iconfont"
              :class="selected[index] ? 'icon-selected' : 'icon-yuan'"
              @click="selectList(index)"
            ></span>
          </div>
          <div class="left">
            <img
              src="https://img10.360buyimg.com/mobilecms/s300x300_jfs/t1/51418/16/1649/101281/5cfdb1b8E3f6841fb/56a6db81d7061903.jpg!q70.dpg.webp"
              alt=""
            />
          </div>
          <div class="right">
            <h3>
              西伯利亚MG-2 游戏耳机 入耳式电竞吃鸡耳机 听声辩位7.1声道 外置声卡
              电脑手机耳机带麦 MG-2 Pro 7.1声道电脑版 黑色
            </h3>
            <p class="type">MG-2 Pro 7.1声道电脑版 黑色</p>
            <div class="price">
              <p class="price-value">￥<span>166.00</span></p>
              <div class="stepper">
                <nut-stepper
                  :value.sync="initValue"
                  :min="1"
                  @add="stepperChange"
                  @reduce="stepperChange"
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="total">
        <span
              class="iconfont icon-yuan"
            ></span>

            <div class="all">
              <h3>总计:&nbsp;&nbsp;<span>￥166.00</span>
              </h3>
              <div class="jiesuan">
                去结算
                <span>(1件)</span>
              </div>
            </div>
      </div>
      </div>
    </template>
  </div>
</template>
<script>
import PhoneHeader from '@/components/header/PhoneHeader.vue';

export default {
  components: {
    PhoneHeader
  },
  data() {
    return {
      initValue: 1,
      selected: {}
    };
  },
  methods: {
    stepperChange(value) {
      console.log(value);
    },
    selectList(index) {
      const selected = this.selected;
      selected[index] ? this.$set(selected, index, false) : this.$set(selected, index, true);
    }
  }
};
</script>

<style scoped lang="less">
@import url('../less/common.less');
.img-wrapper {
  overflow: hidden;
  height: 300px;
  margin-top: 100px;

  > img {
    width: 100%;
    height: 310px;
  }
}

.order-wrapper {
  // margin-top: 10px;

  .edit {
    padding: 10px 6px;
    margin-bottom: 10px;
    background: #fff;
    text-align: right;
    font-size: 14px;
  }
  .order-list {
  display: flex;
  align-items: center;
  padding: 20px 6px;
  margin-bottom: 10px;
  // height: 200px;
  background: #fff;
  // border: 1px solid red;
  .radio {
    margin-right: 10px;

    .iconfont {
      font-size: 20px;
    }

    .icon-selected {
      color: rgb(118, 212, 113);
    }
  }

  .left {
    width: 100px;
    height: 100px;
    margin-right: 8px;
    // border: 1px solid red;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .right {
    width: 260px;
    box-sizing: border-box;
    padding: 0 4px;
    text-align: left;

    h3 {
      .mut-line(2);
      margin-bottom: 10px;
      line-height: 20px;
    }

    p {
      font-size: 12px;
      color: #888;
    }
    .type {
      margin-bottom: 10px;
    }
    .price {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .price-value {
        color: red;
        span {
          font-size: 16px;
        }
      }
    }
  }
}
}
.total{
  position: fixed;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  bottom: 60px;
  padding: 0 6px;
  background: #fff;

  >.iconfont {
    font-size: 20px;
  }
  >.icon-selected{
    color:rgb(118, 212, 113);
  }

  .all {
    display: flex;
    align-items: center;
    h3 {
      margin-right: 8px;
      span {
        color: red;
      }
    }

    .jiesuan {
      height: 40px;
      width: 120px;
      line-height: 40px;
      border-radius: 20px;
      background: red;
      color: #fff;

      span {
        font-size: 12px;
      }
    }
  }
}


.about {
  height: 100%;
  background: #eee;
  text-align: center;

  .icon {
    width: 120px;
    height: 120px;
    background: #fff;
    margin: 30px auto;
    box-shadow: 2px 2px 15px #ccc;
    border-radius: 50%;
    line-height: 120px;
    text-align: center;
    margin-top: 100px;

    .iconfont {
      font-size: 40px;
      color: rgb(255, 100, 138);
    }
  }
}

.to-login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;
  border-top: 1px solid #eee;

  > p {
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>
