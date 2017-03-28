<template>
  <div>
    <div class="cov-modal">
    <div class="cov-modal-title">资料设定</div>
    <div class="cov-modal-text">
      某些文字
    </div>
    <div class="cov-modal-actions">
      <!-- covbutton 在这里-->
      <Buttons class="cov-modal-btn1" @click="close">OK</Buttons>
    </div>
    <div class="cov-modal-actions">
      <!-- covbutton 在这里-->
      <Buttons class="cov-modal-btn2" @click="close">OK</Buttons>
    </div>
    <div class="cov-modal-actions">
      <!-- covbutton 在这里-->
      <Buttons class="cov-modal-btn3" @click="close">OK</Buttons>
    </div>
  </div>
  </div>
</template>
<script>
  import Buttons from 'COMPONENT/button/button'
  export default {
    data () {
      return {
        title: ''
      }
    },
    components: {Buttons},
    methods: {
      close () {
        console.log('button')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
	@import '../../assets/scss/mixin.scss';
  .cov-modal-btn1{
    background: #000;
  }
  .cov-modal-btn2{
    background: #bb3434;
  }
  .cov-modal-btn3{
    background: #0b3434;
  }
</style>
