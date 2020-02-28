<template>
  <div class="phone-input">
        <input type="text" :placeholder="placeholder" />
    </div>
</template>

<script>
export default {
    props: {
        placeholder: String
    }
}
</script>

<style lang='less' scoped>
input::-webkit-input-placeholder {
  /* WebKit browsers */
  color: #aaa;
  font-size: 15px;
}
.phone-input {
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
</style>