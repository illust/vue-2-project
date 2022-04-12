<!-- 集团业务发展 -->
<template>
  <div class="container">
      <header class="title row-1">
        <img src="./assets/jituanyewu/title_top.png" alt="">
      </header>
      <div class="main-target row-2">
          <div class="first-target col-1">
              <div class="decorate">2020年累计业务规模（亿元）</div>
              <div class="number-flop" ref='group23'>
                  <digital-flop-demo ref='digital-flop' :config="config" style="margin:10px -815px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="second-target col-2">
              <div class="decorate">本年业务规模（万元）</div>
              <div class="number-flop"></div>
          </div>
          <div class="third-target col-3">
              <div class="decorate">2020年累计业务收入（亿元）</div>
              <div class="number-flop"></div>
          </div>
      </div>
      <div class="middle-content row-3">
          <div class="middle-left col-1">
              <div class="target-show">
                  <div class="target-title left-title">各业务类型交易规模</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show">
                  <div class="target-title left-title">业务客群规模</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show">
                  <div class="target-title left-title">累计服务客户数据</div>
                  <div class="chart"></div>
              </div>
          </div>
          <div class="middle-center col-2">
              <div class="center-top row-1">
                  <div class="target col-1">
                      <div class="icon1"></div>
                      <div class="target-num-flop">
                          <div class="target-title-2">产融协同收入</div>
                          <div class="number-flop"></div>
                      </div>
                  </div>
                  <div class="target col-1">
                      <div class="icon2"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">融融协同规模</div>
                        <div class="number-flop"></div>
                      </div>
                  </div>
                  <div class="target-bigger col-1">
                      <div class="icon3"></div>
                      <div class="target-num-flop-1">
                        <div class="target-title-2">承保电网设备资产规模</div>
                        <div class="number-flop"></div>
                      </div>
                  </div>
                  <div class="target col-1">
                     <div class="icon4"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">管理资产总额</div>
                        <div class="number-flop"></div>
                      </div>
                  </div>
                  <div class="target col-1">
                     <div class="icon5"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">服务主业融资</div>
                        <div class="number-flop"></div>
                      </div>
                  </div>
              </div>
              <div class="center-map row-2"></div>
          </div>
          <div class="middle-right col-3">
              <div class="target-show">
                  <div class="target-title right-title">特色产品累计规模</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show">
                  <div class="target-title right-title">管理资产总额</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show">
                  <div class="target-title right-title">营业收入</div>
                  <div class="chart"></div>
              </div>
          </div>
      </div>
      <div class="footer-content row-4">
          <div class="target-show-1 col-1">
                <div class="target-title-1">2020年业务规模</div>
                <div class="chart"></div>
          </div>
          <div class="target-show-1 col-2">
                <div class="target-title-1">2020年营业收入</div>
                <div class="chart"></div>
          </div>
          <div class="target-show-1 col-3">
                <div class="target-title-1">2020年业务利润</div>
                <div class="chart"></div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name:'fouth-screen',
  data () {
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
            }
        }
    }
 },
 methods:{
     formatter (number) {
        const numbers = number.toString().split('').reverse()
        const segs1 = numbers.splice(0, 3).join('')
        const segs2 = []
        var segs = []
        while (numbers.length) segs2.push(numbers.splice(0, 3).join(''))    
        segs = segs2.join(',').split('').reverse().join('') + segs1.split('').reverse().join('')
        segs = segs.split("").join(String.fromCharCode(8201))
        console.log("segs",segs);
        return segs
      },
    render(){
      this.config ={ ...this.config}
    },
    drawNumBg(){
 
    //   var src = require("@/assets/number-bg.png")
      var src = require("../../assets/number-bg.png")
      var style = "width: 78px; height: 120px"

      // console.log("image",image);
      this.backgroundImg(src,style,3)
  
      var ctx = this.$refs['digital-flop'].renderer.ctx //.drawImage(image,0, 0, image.width, image.height) // 通过$refs可以获得子节点以及其数据和方法

      console.log("ctx",ctx);
      // ctx.drawImage(image)
    },

    backgroundImg(src,style,num){
      var image = new Image()
      image.src = src
      image.style = style

       // add split symbol between numbers
      var divNode = document.createElement("div");
      divNode.style = "width:42px;height:120px;opacity:0;background-color:green;"

      this.$refs.group23.appendChild(image.cloneNode(true))

      this.$refs.group23.appendChild(divNode)
      for(var i = 0; i < num; i++){
        this.$refs.group23.appendChild(image.cloneNode(true))
      }
     
      this.$refs.group23.appendChild(divNode.cloneNode(true))

      for(var j = 0; j < num; j++){
        this.$refs.group23.appendChild(image.cloneNode(true))
      }

      this.$refs.group23.appendChild(divNode.cloneNode(true))

      for(var k = 0; k < 2; k++){
        this.$refs.group23.appendChild(image.cloneNode(true))
      }
    }
 },
 mounted(){
    // this.render()

    this.drawNumBg()
 }
}
</script>

<style scoped lang='css'>
.container{
    background: url(./assets/jituanyewu/bg_page.png) 100% no-repeat;
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


.target-title{
    font-size: 40px;
    color: #00f6ff;
    text-align: center;
    font-family: 'SourceHanSansCN-Medium';
}

.number-flop{
    display: flex;
    flex-direction: row;
    justify-content: center;
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

.main-target{
    width: 100%;
    height: 209px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.middle-content{
    width: 100%;
    height: 1180px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.middle-left{
    width: 892px;
    margin-left: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.left-title{
    margin-top: 25px;
    margin-left: 65px;
}
.right-title{
    margin-top: 25px;
    margin-left: 65px;
}

.target-show{
    width: 100%;
    height: 395px;
    background: url(./assets/jituanyewu/bg_middle.png) 100% no-repeat;
    
}

.middle-center{
    width: 1788px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.icon1{
    width: 85px;
    height: 80px;
    margin-top: 13px;
    background: url(./assets/jituanyewu/icon_first.png) 100% no-repeat;
}

.icon2{
    width: 85px;
    height: 80px;
    margin-top: 13px;
    background: url(./assets/jituanyewu/icon_second.png) 100% no-repeat;
}

.icon3{
    width: 85px;
    height: 80px;
    margin-top: 13px;
    background: url(./assets/jituanyewu/icon_third.png) 100% no-repeat;
}

.icon4{
    width: 85px;
    height: 80px;
    margin-top: 13px;
    background: url(./assets/jituanyewu/icon_fouth.png) 100% no-repeat;
}

.icon5{
    width: 85px;
    height: 80px;
    margin-top: 13px;
    background: url(./assets/jituanyewu/icon_fifth.png) 100% no-repeat;
}

.center-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px 20px 0 20px;   
}

.target-num-flop{
    width: 180px;
    margin-top: 13px;
}

.target-num-flop-1{
    width: 265px;
    margin-top: 13px;
}

.target{
    width: 318px;
    height: 103px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: url(./assets/jituanyewu/bg_smaller.png) 100% no-repeat;
}

.target-bigger{
    width: 433px;
    height: 112px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background: url(./assets/jituanyewu/bg_small.png) 100% no-repeat;
}

.middle-right{
    width: 892px;
    display: flex;
    margin-right: 130px;
    flex-direction: column;
    justify-content: space-between;
}


.footer-content{
    width: auto;
    height: 566px;
    margin: 0 100px 0 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.target-title-1{
    font-size: 40px;
    margin-top: 25px;
    color: #00f6ff;
    text-align: center;
    font-family: 'SourceHanSansCN-Medium';
}

.target-title-2{
    font-size: 25px;
    color: #00f6ff;
    text-align: start;
    font-family: 'SourceHanSansCN-Medium';
}

.target-show-1{
    width: 1143px;
    height: 550px;
    background: url(./assets/jituanyewu/bg_big.png) 100% no-repeat;
}
</style>


