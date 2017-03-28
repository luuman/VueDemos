<template>
  <div>
    <Heads
      :titles="title">
    </Heads>
    <main id="app">
      <template v-for="item in imgs">
        <div class="space"></div>
        <div class="progressive">
          <img class="preview" v-progressive="item.src" :data-srcset="item.srcset" :src="item.preview" />
        </div>
      </template>
    </main>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads/heads'
  export default {
    data () {
      return {
        title: '',
        imgs: [
          {
            src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/2.jpg',
            preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r2.jpg'
          },
          {
            src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/3.jpg',
            preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r3.jpg'
          },
          {
            src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/4.jpg',
            preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r4.jpg'
          },
          {
            src: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/5.jpg',
            preview: 'http://7xiblh.com1.z0.glb.clouddn.com/progressive/r5.jpg'
          }
        ]
      }
    },
    components: {Heads}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/scss/mixin.scss';
</style>
