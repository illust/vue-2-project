<!-- 国网英大长三角金融中心 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <header class="title row-1">
      <img src="./assets/csj/title.png" alt="">
    </header>
    <div class="main-target row-2">
          <div class="first-target col-1">
              <div class="decorate">本年新增业务规模（亿元）</div>
              <div class="number-flop" ref='group1'>
                  <number-flop ref='digital-flop' :config="config"  style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="second-target col-2">
              <div class="decorate">业务规模（万元）</div>
              <div class="number-flop" ref='group2'>
                  <number-flop ref='digital-flop' :config="config" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="third-target col-3">
              <div class="decorate">本年累计业务收入（亿元）</div>
              <div class="number-flop" ref='group3'>
                  <number-flop ref='digital-flop' :config="config" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
    </div>
    <div class="main-content row-3">
      <div class="main-left">
        <div class="left-top"></div>
        <div class="left-down">
          <img src="./assets/csj/down-title.png" alt="" class="down-title"/>
          <img src="./assets/csj/down-content.png" alt="" class="down-content"/>
        </div>
      </div>
      <div class="main-center"></div>
      <div class="main-right">
        <div class="right-top">
          <img src="./assets/csj/top-title.png" alt="" class="top-title"/>
          <img src="./assets/csj/top-content.png" alt="" class="top-content"/>
        </div>
        <div class="right-down"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      config: {
            number: [1002065],
            toFixed: 2,
            content: '{nt}',
            formatter: this.formatter,
            style: {
                fontSize: 100,
                fontWeight: 'bolder',
                fill: '#00f6ff',
                area: [800,121]
            },
            imgSrc: require("../../assets/number-bg.png"),
            imgStyle: "width: 78px; height: 105px"
        }
    };
  },
  methods: {
      goNextPage(){
          this.$router.push("/sixth-screen");
      },
     formatter (number) {
        const numbers = number.toString().split('').reverse()
        const segs1 = numbers.splice(0, 3).join('')
        const segs2 = []
        var segs = []
        while (numbers.length) segs2.push(numbers.splice(0, 3).join(''))    
        segs = segs2.join(',').split('').reverse().join('') + segs1.split('').reverse().join('')
        segs = segs.split("").join(String.fromCharCode(8201))

        return segs
      },
    render(){
      this.config ={ ...this.config}
    },
    drawNumBg(){
 
      var src = require("../../assets/number-bg.png")
      var style = "width: 78px; height: 120px"

      this.backgroundImg(src,style,3,this.$refs.group1)
      this.backgroundImg(src,style,3,this.$refs.group2)
      this.backgroundImg(src,style,3,this.$refs.group3)
  
    },

    backgroundImg (src,style,num,el) {
      var image = new Image()
      image.src = src
      image.style = style

       // add split symbol between numbers
      var divNode = document.createElement("div");
      divNode.style = "width:42px;height:120px;opacity:0;background-color:green;"

      el.appendChild(image.cloneNode(true))

      el.appendChild(divNode)
      for(var i = 0; i < num; i++){
        el.appendChild(image.cloneNode(true))
      }
     
      el.appendChild(divNode.cloneNode(true))

      for(var j = 0; j < num; j++){
        el.appendChild(image.cloneNode(true))
      }

      el.appendChild(divNode.cloneNode(true))

      for(var k = 0; k < 2; k++){
        el.appendChild(image.cloneNode(true))
      }
    }
  },
};
</script>
<style src="./common.css" />

<style  scoped>
button{
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 100;
}
.container{
    background: url(./assets/csj/background.png) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.title{
    width: 93.23%;
    height: 213px;
    background: url(./assets/jituanyewu/bg_top.png) 100% no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
}


.main-target{
    width: 100%;
    height: 209px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.decorate{
    width: 969px;
    height: 77px;
    background: url(./assets/jituanyewu/bg_target.png) 100% no-repeat;
    font-family: 'SourceHanSansCN-Bold';
    font-size: 40px;
    line-height: 77px;
    color: #00f6ff;
    text-align: center;
}

.number-flop{
    display: flex;
    flex-direction: row;
    justify-content: center;
}

.main-content{
  width: 100%;
  height: 1738px;
  display: flex;
  flex-direction: row;
}

.main-left{
  left: 229px;
  width: 794px;
  height: 1738px;
  position: absolute;
}

.left-top{
  background: url(./assets/csj/left-top.png) 100% no-repeat;
  width: 794px;
  height: 741px;
  margin-top: 60px;
}

.left-down{
  background: url(./assets/csj/left-down.png) 100% no-repeat;
  width: 791px;
  height: 808px;
  position: absolute;
  top: 830px;
  text-align: center;
}

.down-title{
  display: block;    
  width: 482px;
  margin-left: 155px;
  margin-top: 75px;
}

.main-center{
  background: url(./assets/csj/center.png) 100% no-repeat;
  left: 1086px;
  width: 1669px;
  height: 1738px;
  position: absolute;
}

.main-right{
  left: 2841px;
  width: 785px;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
}

.right-top{
  background: url(./assets/csj/right-top.png) 100% no-repeat;
  width: 791px;
  height: 781px;
  top: 32px;
  position: absolute;
}

.top-title{
  display: block;    
  width: 482px;
  margin-left: 155px;
  margin-top: 75px;
}

.right-down{
  background: url(./assets/csj/right-down.png) 100% no-repeat;
  width: 789px;
  height: 782px;
  top: 844px;
  position: absolute;
}
</style>
