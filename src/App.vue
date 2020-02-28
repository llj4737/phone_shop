<template>
  <div id="app">
    <router-view/>
    <NavFooter :navList="navList" />
  </div>
</template>

<script>
import NavFooter from '@/components/nav/NavFooter.vue'
export default {
  name: 'app',
  components: {
    NavFooter
  },
  data() {
    return {
      navList: [
        { path: '/home', title: '首页', icon: 'icon-shouye' },
        { path: '/category', title: '分类', icon: 'icon-fenlei' },
        { path: '/order', title: '订单', icon: 'icon-gouwuche' },
        { path: '/profile', title: '个人', icon: 'icon-personal' },
      ]
    }
  }
}
</script>

// <style lang="less">
#app {
  height: 100%;
}
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
// </style>
