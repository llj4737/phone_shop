<template>
  <div>
    <PhoneHeader title="登录注册">
      <template #left>
        <p><span class="iconfont icon-left"></span></p>
      </template>
    </PhoneHeader>

    <div class="login-wrapper">
      <div class="login-user">
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div class="login-pass">
        <input type="text" placeholder="请输入密码" />
      </div>
    </div>

    <div class="button-wrapper">
      <nut-button class="button" :class="{ blur: true }" block shape="circle">
        登&nbsp;录
      </nut-button>
    </div>

    <p class="should-know" @click="shouldKnow">注册须知</p>
  </div>
</template>

<script>
import PhoneHeader from '@/components/header/PhoneHeader.vue';
export default {
  components: {
    PhoneHeader
  },
  methods: {
    shouldKnow() {
      this.$dialog({
        title: '注册说明',
        content: '原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系客服找回。',
        closeBtn: true,
        noFooter: true,
        onCloseBtn(event) {
          //右上角关闭按钮点击事件
          alert('closeBtn');
          // return false;  //阻止默认“关闭对话框”的行为
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  padding-top: 30px;
}

input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #aaa;
  font-size: 15px;
}
　 .login-user,
.login-pass {
  margin: auto;
  margin-bottom: 20px;
  height: 50px;
  width: 90%;
  text-align: center;
  padding: 2px;

  border-bottom: 1px solid #eee;

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;

    font-size: 15px;
    color: #222;
  }
}

.button-wrapper {
  width: 94%;
  margin: auto;

  button {
    height: 50px;
    font-size: 15px;
  }

  .blur {
    opacity: 0.5;
  }
}

.should-know {
  margin-top: 10px;
  padding-right: 25px;
  text-align: right;
  font-size: 13px;
  color: #333;
}
</style>
