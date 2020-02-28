<template>
  <div>
    <PhoneHeader title="用户注册">
      <template #left>
        <p><span class="iconfont icon-left" @click="$router.go(-1)"></span></p>
      </template>
    </PhoneHeader>

    <div class="login-wrapper">
      <div class="login-phone">
        <input type="text" placeholder="请输入绑定手机号" />
      </div>
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
        注&nbsp;册
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
  created() {
    console.log(this.$route);
  },
  methods: {
    shouldKnow() {
      this.$dialog({
        title: '注册说明',
        content:
          '原账号为您本人所有，建议直接登录或找回密码。原账号内的订单资产可能丢失，可联系客服找回。',
        closeBtn: true,
        noFooter: true,
        onCloseBtn(event) {
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
.login-phone,
.login-user,
.login-pass {

    position: relative;
  height: 50px;
  width: 90%;

  margin: auto;
  margin-bottom: 20px;
  padding: 2px;
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

.should-know {
  margin-top: 10px;
  padding-right: 25px;
  text-align: right;
  font-size: 13px;
  color: #333;
}
</style>
