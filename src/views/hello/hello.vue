<template>
  <div class="m-block">
    <div class="g-conent">
      <div class="m-title"><img :src="titleImg"></div>
      <div class="m-lamp" :class="{'m-lamp-to': lamp}">
        <div>
          <table>
            <tr>
              <td class="luck" :class="{active: index==0}"><img :title="luckList[0].desc" :src="luckList[0].uImg"></td>
              <td class="luck" :class="{active: index==1}"><img :title="luckList[1].desc" :src="luckList[1].uImg"></td>
              <td class="luck" :class="{active: index==2}"><img :title="luckList[2].desc" :src="luckList[2].uImg"></td>
              <td class="luck" :class="{active: index==3}"><img :title="luckList[3].desc" :src="luckList[3].uImg"></td>
            </tr>
            <tr>
              <td class="luck" :class="{active: index==11}"><img :title="luckList[11].desc" :src="luckList[11].uImg"></td>
              <td rowspan="2" colspan="2" class="m-Btn" :class="{'clicked':clicked}"  @click=draw></td>
              <td class="luck" :class="{active: index==4}"><img :title="luckList[4].desc" :src="luckList[4].uImg"></td>
            </tr>
            <tr>
              <td class="luck" :class="{active: index==10}"><img :title="luckList[10].desc" :src="luckList[10].uImg"></td>
              <td class="luck" :class="{active: index==5}"><img :title="luckList[5].desc" :src="luckList[5].uImg"></td>
            </tr>
            <tr>
              <td class="luck" :class="{active: index==9}"><img :title="luckList[9].desc" :src="luckList[9].uImg"></td>
              <td class="luck" :class="{active: index==8}"><img :title="luckList[8].desc" :src="luckList[8].uImg"></td>
              <td class="luck" :class="{active: index==7}"><img :title="luckList[7].desc" :src="luckList[7].uImg"></td>
              <td class="luck" :class="{active: index==6}"><img :title="luckList[6].desc" :src="luckList[6].uImg"></td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <Alert :name="alert"></Alert>
    <!-- <Alert v-model="show" :title="" @on-show="onShow" @on-hide="onHide"></Alert> -->
  </div>
</template>
<!-- http://shellphon.wang/githublog/2017/01/vue-business.html -->
<script>
  import Alert from 'COMPONENT/popup/alert'
  export default {
    components: {Alert},
    created: function () {
      var _this = this
      setInterval(function () {
        if (_this.lamp) {
          _this.lamp = false
        } else {
          _this.lamp = true
        }
      }, 500)
    },
    mounted: function () {
      this.$http.get('https://api.myjson.com/bins/r8mm').then((res) => {
        // console.log(res)
        // this.books = res.body
      })
    },
    data () {
      return {
        alert: {
          title: '通知',
          dec: '',
          button_text: '',
          showValue: false
        },
        show: false,
        titleImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/title.png',
        lamp: true,
        luckList: [
          {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/6.png',
            desc: '大蛇丸碎片一片'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/1.png',
            desc: '大蛇丸碎片一片'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/2.png',
            desc: '疾风传佐助整卡'
          }, {
            isPrize: false,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/3.png',
            desc: '谢谢参与'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/4.png',
            desc: '10金币'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/5.png',
            desc: '10金币'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/6.png',
            desc: '88金币'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/7.png',
            desc: '10忍玉'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/8.png',
            desc: '8888铜币'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/1.png',
            desc: '12888铜币'
          }, {
            isPrize: false,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/3.png',
            desc: '谢谢参与'
          }, {
            isPrize: true,
            uImg: 'http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/4.png',
            desc: '水门碎片一片'
          }
        ],
        // 当前转动到哪个位置，起点位置
        index: -1,
        // 抽奖中
        todo: false,
        // 抽奖次数
        sum: 6,
        // 是否可以抽奖
        clicked: false
      }
    },
    methods: {
      draw: function () {
        if (this.todo) {
          return
        }
        this.todo = true
        // clicked
        if (this.clicked) {
          this.alert.dec = '已经抽过奖，请稍后重试~'
          this.alert.showValue = true
          console.log(this.alert.showValue)
          setTimeout(() => {
            this.hiden()
          }, 3000)
          return
        }
        // setTimeout的ID，用clearTimeout清除
        var times = 40
        // 初始转动速度
        var speed = 40
        // 转动次数
        // 总共有多少个位置
        var num = this.luckList.length
        var self = this
        // 中奖位置
        var luckIndex = Math.floor(Math.random() * num)
        // console.log(luckIndex)
        var currentPrize = this.luckList[luckIndex]
        this.clicked = true
        setTimeout(function loop () {
          if (times <= 0 && self.index === luckIndex) {
            self.todo = false
            if (currentPrize.isPrize) {
              self.alert.dec = '恭喜抽中：' + currentPrize.desc
              self.alert.showValue = true
            } else {
              self.alert.dec = '很遗憾，' + currentPrize.desc
              self.alert.showValue = true
            }
            return
          }
          // console.log('times:',times," index", self.index, " luck:",luckIndex)
          times--
          self.index < num - 1 ? self.index++ : self.index = 0
          setTimeout(loop, times <= 5 ? (speed >= 400 ? speed = 400 : speed += 50) : speed)
        }, speed)

        // 限制次数
        this.sum--
        if (this.sum) {
          this.clicked = false
        } else {
          this.clicked = true
        }
        console.log(this.sum)
      },
      hiden () {
        this.alert.showValue = false
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .m-block{
    width: 100%;
    height: 100%;
    background-image: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/cjbg.jpg);
    background-size: cover;
    position: absolute;
    z-index: 0;
  }
  .g-conent{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  .m-title{
    width: size(200);
    margin: 10px auto;
  }
  .m-lamp{
    width: size(350);
    height: size(350);
    margin: size(13.5);
    padding: size(25);
    box-sizing: border-box;
    background: #fe4236;
    border-radius: size(13.5);
    background-image: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/shandeng1.png);
    background-size: 100%;
    div{
      background: #d80017;
      width: size(300);
      height: size(300);
      border-radius: size(13.5);
      overflow: hidden;
    }
    table{
      margin: size(10);
      width: size(280);
      height: size(280);
      td{
        padding: 0;
        margin: 0;
        overflow: hidden;
        text-align: center;
        &.luck{
          background: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/proBj.png) no-repeat;
          background-size: 100%;
          &.active{
            background-image: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/active.png);
          }
        }
        img{
          box-sizing: border-box;
          padding: size(0) size(4);
        }
      }
    }
  }
  .m-lamp-to{
    background-image: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/shandeng2.png);
  }
  .m-Btn{
    background-repeat: no-repeat;
    background-size: 100%;
    background-image: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/buttonUp.png);
  }
  .clicked{
    background-image: url(http://www.17sucai.com/preview/1/2016-12-20/choujiang/img/buttonDown.png);
  }
</style>
