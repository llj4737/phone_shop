<template>
  <div class="about">
    <PhoneHeader title="购物车">
      <template #left>
        <p>&lt;</p>
      </template>
      <template #right>
        <p>右边</p>
      </template>
    </PhoneHeader>

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
  </div>
</template>
<script>
import PhoneHeader from '@/components/header/PhoneHeader.vue';

export default {
  components: {
    PhoneHeader
  }
};
</script>

<style scoped lang="less">
.img-wrapper {
  overflow: hidden;
  height: 300px;
  margin-top: 100px;

  > img {
    width: 100%;
    height: 310px;
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
  }
}

.iconfont {
  font-size: 40px;
  color: rgb(255, 100, 138);
}

.to-login {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #fff;

  > p {
    font-size: 14px;
    margin-right: 10px;
  }
}
</style>
