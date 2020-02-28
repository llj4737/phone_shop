<template>
  <Tab :editableTabs="tabs" :activeIndex="0" @tabSwitch="tabSwitch">
    <Card title="华为手机">
      <nut-row :gutter="6">
        <nut-col v-for="i in 10" :key="i" :span="8">
          <CardItem>
            <div class="cate-card-item">
              <img
                src="http://img4.imgtn.bdimg.com/it/u=2698251240,2308173950&fm=26&gp=0.jpg"
                alt=""
              />
              <p>mate30 pro</p>
            </div>
          </CardItem>
        </nut-col>
      </nut-row>
    </Card>

    <Card title="荣耀手机">
      <nut-row :gutter="6">
        <nut-col v-for="i in 10" :key="i" :span="8">
          <CardItem>
            <div class="cate-card-item">
              <img
                src="http://img4.imgtn.bdimg.com/it/u=2698251240,2308173950&fm=26&gp=0.jpg"
                alt=""
              />
              <p>mate30 pro</p>
            </div>
          </CardItem>
        </nut-col>
      </nut-row>
    </Card>
  </Tab>
</template>

<script>
import Tab from '@/components/tabs/Tab.vue';
import Card from '@/components/card/Card.vue';
import CardItem from '@/components/card/CardItem.vue';
export default {
  components: {
    Tab,
    Card,
    CardItem
  },
  data() {
    return {
      tabs: [
        { title: 'aaa' },
        { title: '华为' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },

        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },

        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' },
        { title: 'ccc' }
      ]
    };
  },
  methods: {
    tabSwitch(item) {
      console.log(item);
    }
  }
};
</script>

<style scoped lang="less">
.cate-card-item {
  img {
    width: 100%;
    height: 90px;
    margin-bottom: 10px;
  }
  p {
    font-size: 12px;
    color: #444;
  }
}
</style>
