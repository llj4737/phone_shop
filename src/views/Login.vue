<template>
  <div>
    <PhoneHeader title="用户登录">
      <template #left>
        <p><span class="iconfont icon-left"  @click="$router.go(-1)"></span></p>
      </template>
    </PhoneHeader>

    <div class="login-wrapper">
      <div class="login-user">
        <input type="text" placeholder="请输入用户名" />
      </div>
      <div class="login-pass">
        <input :type="getType" placeholder="请输入密码" />
        <span v-if="hidePass" @click="hidePass = false" class="iconfont icon-biyan"></span>
        <span v-else @click="hidePass = true"  class="iconfont icon-yanjing"></span>
      </div>
    </div>

    <div class="button-wrapper">
      <nut-button class="button" :class="{ blur: true }" block shape="circle">
        登&nbsp;录
      </nut-button>
    </div>

    <div class="footer-tips">
      <p @click="toRegister">手机号注册</p>
      </div>
  </div>
</template>

<script>
import PhoneHeader from '@/components/header/PhoneHeader.vue';
export default {
  components: {
    PhoneHeader
  },
  created() {
    console.log(this.$route)
  },
   data() {
      return {
          hidePass: true
      }
  },
  computed: {
      getType() {
          return this.hidePass ? 'password' : 'text';
      }
  },
  methods: {
    findPass() {

    },
    toRegister() {
      this.$router.push({name: 'Register'})
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
  position: relative;
  height: 50px;
  width: 90%;
  padding: 2px;
  margin: auto;
  margin-bottom: 20px;
  text-align: center;

  border-bottom: 1px solid #eee;

  .iconfont {
      position: absolute;
      bottom: 10px;
      right: 20px;
      font-size: 20px;
  }

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
.footer-tips {
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  padding: 0 25px;
  font-size: 13px;
  color: #333;
}
// .should-know {
//   margin-top: 10px;
//   padding-right: 25px;
//   text-align: right;
//   font-size: 13px;
//   color: #333;
// }
</style>
