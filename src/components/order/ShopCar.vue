<template>
  <div class="shopCar">
      <p class="car">加入购物车</p>
    <p class="buy">立即购买</p>
  </div>
</template>


<style lang="less" scoped>
.shopCar {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 50px;
    >p {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        color: #fff;
      }

      .car {
        background: linear-gradient(138deg,#ffa600,#ffb000 77%,#ffbc00);
      }
      .buy {
            background: linear-gradient(-41deg,#ff4f18,#ff2000 24%,#f10000);
      }
}

</style>
