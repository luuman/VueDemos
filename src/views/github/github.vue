<template>
  <div>
    <Heads
      :titles="title">
    </Heads>
    <VoteItem 
      :votes="votes" 
      :popups="popups" 
      :jsons="jsons" 
      :sPolling="sPolling" 
      :uPost="uPost">
    </VoteItem>
  </div>
</template>
<script>
import Heads from 'COMPONENT/heads/heads'
import VoteItem from 'COMPONENT/vote/voteitem'
// import Popup from './Popup/Popup'
export default {
  mounted: function () {
    this.$http.get('https://api.github.com/search/repositories?q=javascript&sort=stars').then((res) => {
      this.votes = res.body.items
      this.jsons = 1
    })
  },
  data () {
    return {
      msg: 'Welcome to Your JavaScript App',
      jsons: 0,
      sPolling: 6,
      title: 'Github Star 投票',
      uPost: {
        url: 'https://api.github.com/search/repositories?q=javascript&sort=stars',
        data: {
          id: 123
        }
      },
      popups: {
        type: 'alert',
        show: 0,
        uImg: '',
        text: ['恭喜您，修改成功恭喜您，修改成功恭喜您修改成功恭喜您'],
        time: 3000
      },
      votes: []
    }
  },
  components: {VoteItem, Heads}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
