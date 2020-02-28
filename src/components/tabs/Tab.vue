<template>
  <section class="tab">
    <div class="select-wrapper">
      <div class="select">
        <ul>
          <li
            class="select-list"
            v-for="(list, index) in editableTabs"
            :style="getStyle(index)"
            @click="tabSwitch(index, list, $event)"
            :key="index"
          >
            {{ list.title }}
          </li>
        </ul>
      </div>
    </div>
    <div class="select-content">
      <slot></slot>
    </div>
  </section>
</template>

<script>
const defaultActiveStyle = {
  color: 'red',
  background: '#fff',
  'border-right': '1px solid red'
};
export default {
  name: 'tab',
  props: {
    editableTabs: {
      type: Array,
      default: () => []
    },
    activeStyle: Object,
    activeIndex: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  created() {
    const maxIndex = this.editableTabs.length - 1;
    const index =
      this.activeIndex > maxIndex || this.activeIndex < 0
        ? 0
        : this.activeIndex;
    this.currentIndex = index;
  },
  methods: {
    tabSwitch(index, list, e) {
      if (this.currentIndex !== index) {
        this.currentIndex = index;
        this.$emit('tabSwitch', list);
      }
    },
    getStyle(index) {
      return this.currentIndex === index
        ? this.activeStyle || defaultActiveStyle
        : '';
    }
  }
};
</script>

<style scoped lang="less">
.tab {
  display: flex;
  // height: 100%;
  // height: auto;
  // overflow: hidden;
  height: 100%;
  // position: relative;
  .select-wrapper {
    position: relative;
    width: 90px;
    height: 100%;
    max-height: 100%;
    overflow-y: auto;
  }
  .select {
    // position: fixed;
    height: 100%;
    width: 100%;
    // position: absolute;
    // left: 0;
    // top: 0;
    // float: left;
    // border-right: 1px solid red;
    ul {
      position: absolute;
      width: 100%;
    }

    .select-list {
      height: 46px;
      color: #333;
      font-size: 14px;
      text-align: center;
      line-height: 46px;
      background: #f8f8f8;
    }

    .active {
      color: red;
      background: #fff;
    }
  }
  .select-wrapper::-webkit-scrollbar {
    display: none;
  }

  .select-content {
    // position: absolute;
    // box-sizing: border-box;
    // margin-left: 1px;
    // overflow: hidden;
    left: 90px;
    padding-bottom: 60px;
    flex: 1;
    overflow-y: auto;
  }
  .select-content::-webkit-scrollbar {
    display: none;
  }
}
</style>
