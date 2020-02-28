<template>
  <div id="nav-footer">
      <!-- <router-link to="/home">首页</router-link>
      <router-link to="/category">分类</router-link>
      <router-link to="/order">订单</router-link>
      <router-link to="/profile">个人</router-link> -->

      <router-link v-for="list in navList" 
        :key="list.path" 
        :to="list.path" 
        :style="getStyle(list.path)">
          <p class="icon-text"><span class="iconfont" :class="list.icon"></span></p>
          <p>{{ list.title }}</p>
      </router-link>
  </div>
</template>

<script>
export default {
    name: 'nav-footer',
    props: {
        navList: {
            type: Array,
            default: () => []
        },
        defaultColor: {
            type: String,
            default: 'grey'
        },
        activeColor: {
            type: String,
            default: 'red'
        }
    },
    created() {
        console.log(this.$route)
    },
    methods: {
        getStyle(path) {
            const isCurrentRoute = this.$route.path.includes(path);
            return {
                color: isCurrentRoute ? this.activeColor : this.defaultColor
            }
        }
    }
}
</script>

<style scoped lang="less">
#nav-footer {
    display: flex;
    position: fixed;
    bottom: 0;
    height: 60px;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #eee;
    text-align: center;
    z-index: 10000;
    background: #fff;

    a {
        display: block;
        color: grey;
        font-size: 12px;
        text-decoration: none;
    }

    .icon-text {
        margin-bottom: 3px;
    }
    
}
</style>