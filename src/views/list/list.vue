<template>
  <div>
    <Heads
      :titles="title">
    </Heads>
    <VirtualList
      :size="40"
      :remain="8">
      <Item v-for="(udf, index) of items" :index="index" :key="index" />
    </VirtualList>
  </div>
</template>

<script>
  import Item from 'COMPONENT/item/item'
  import Heads from 'COMPONENT/heads/heads'
  import VirtualList from 'vue-virtual-scroll-list'

  export default {
    name: 'demo',
    components: {Item, VirtualList, Heads},
    data () {
      return {
        items: new Array(100000),
        title: 'vue-virtual-scroll-list'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
</style>
