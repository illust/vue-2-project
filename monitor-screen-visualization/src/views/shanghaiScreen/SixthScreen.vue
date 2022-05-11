<!-- 国网英大长三角金融中心 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <header class="title row-1">
      <img src="./assets/csj2/header.png" alt="">
    </header>
    <div class="main-target row-2">
        <div class="first-target col-1">
              <div class="decorate1"></div>
              <div class="number-flop" ref='group1'>
                  <number-flop ref='digital-flop' :config="config"  style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
        </div>
        <div class="second-target col-2">
            <div class="decorate2"></div>
            <div class="number-flop" ref='group2'>
                <number-flop ref='digital-flop' :config="config" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
            </div>
        </div>
        <div class="third-target col-3">
            <div class="decorate3"></div>
            <div class="number-flop" ref='group3'>
                <number-flop ref='digital-flop' :config="config" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
            </div>
        </div>
    </div>
    <div class="middle">
      <div class="middle-left">
        <div class="middle-left-title"></div>
        <div class="middle-left-content">
            <div class="middle-left-text">2021年，国网英大长三角金融中心累计实现业务收
入132.26亿元，其中银行板块业务收入19.14亿元，
保险板块业务收入66.35亿元，资产管理板块业务收
入5.49亿元，智能制造板块业务收入41.28亿元。</div>
          <div class="middle-left-title-2"></div>
          <div class="chart"></div>
        </div>
      </div>
      <div class="map"></div>
      <div class="middle-right">
        <div class="middle-right-title"></div>
        <div class="middle-right-content">
          <div class="middle-right-text">与上海交大合作研发数字化金融产品。在浙江试点基于区块链的供应链金融产品，提供融资超18亿元，服务中小微企业超1200家。数字人民币试点工作取得新突破，与工行、农行、交行、邮储等多家银行建立战略合作关系，构建对公支付能力，实现基于数字人民币的企业保险保单支付和融资资金用途监管，相关成果亮相第四届数字中国建设成果展览会。</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="bottom-left-title"></div>
        <div class="bottom-left-content">
          <div class="bottom-left-text">英大基金设立上海分公司、能源REITs资产证券化业务部；英大资产、英大产业基金、英大投资、英大保理等单位分别设立长三角业务部。国网英大集团各金融单位充实长三角业务力量，强化业务协同。国网英大碳资产公司股权划转至国网英大股份，更好支撑国家电网公司服务“碳达峰、碳中和”战略。新设英大数科公司，积极推动金融数字化转型。
</div>
        </div>
      </div>
      <div class="bottom-center">
        <div class="bottom-center-title"></div>
        <div class="bottom-center-content">
          <div class="bottom-center-text">筹设综合金融服务有限公司，拓展综合金融，为客户提供整体性、个性化、一站式金融解决方案。推出长三角碳一号类现金管理产品，服务供应链客户理财需求。实施百家战略客户专项行动，深度挖掘客户需求。加快管理体制和运营机制创新，推行办公职场、后勤保障、人力资源集约化管理，构建资源共享、业务互济、合作共赢的金融发展新生态。</div>
        </div>
      </div>
      <div class="bottom-right">
        <div class="bottom-right-title"></div>
        <div class="bottom-right-content">
          <div class="bottom-right-text">首发绿色金融行动方案，实现业务规模超70亿元。推动设立绿色能源产业基金，预期母基金规模达200亿元。首创多单绿色金融产品，发行国内首支碳中和资产证券化债券（ABCP），设立首个风电绿色1号资产管理计划，创新清洁能源电厂绿色保理业务模式。制定首套电力行业绿色企业认证标准，依托能源大数据开发“碳e融”产品，助力绿色企业降低融资成本。
</div>
        </div>
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
          this.$router.push("/seventh-screen");
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
<style scoped>
@import '../../assets/styles/font.css';

button{
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 100;
}
.container{
    background: url(./assets/jituanyewu/bg_page.png) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

.main-target{
    width: 100%;
    height: 209px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.decorate1{
    width: 969px;
    height: 77px;
    background: url(./assets/csj2/main-target-1.png) 100% no-repeat;
}

.decorate2{
    width: 969px;
    height: 77px;
    background: url(./assets/csj2/main-target-2.png) 100% no-repeat;
}

.decorate3{
    width: 969px;
    height: 77px;
    background: url(./assets/csj2/main-target-3.png) 100% no-repeat;
}

.middle{
  width: 100%;
  height: 1031px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.middle-left{
  width: 1031px;
  display: flex;
  flex-direction: column;
}

.middle-left-title{
  width: 1031px;
  height: 101px;
  background: url(./assets/csj2/middle-left-title-1.png) 100% no-repeat;
}

.middle-left-content{
  width: 886px;
  height: 867px;
  background: url(./assets/csj2/middle-left-content.png) 100% no-repeat;
}

.middle-left-text{
  width: 866px;
  height: 217px;
  font-size: 38px;
  margin-top: 75px;
  margin-left: 20px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #87D5F3;
  line-height: 60px;
}

.middle-left-title-2{
  width: 800px;
  height: 139px;
  margin: auto;
  background: url(./assets/csj2/middle-left-title-2.png) 100% no-repeat;
}

.map{
  width: 1021px;
  height: 1031px;
  background: url(./assets/csj2/map.png) 100% no-repeat;
}

.middle-right{
  width: 1028px;
  display: flex;
  flex-direction: column;
}

.middle-right-title{
  width: 1028px;
  height: 101px;
  background: url(./assets/csj2/middle-right-title-1.png) 100% no-repeat;
}

.middle-right-content{
  width: 877px;
  height: 800px;
  background: url(./assets/csj2/middle-right-content.png) 100% no-repeat;
}

.middle-right-text{
  width: 739px;
  height: 516px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #BFFFF9;
  line-height: 60px;
  margin-top: 133px;
  margin-left: 80px;
}
.bottom{
  width: 100%;
  height: 650px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.bottom-left{
  width: 1141px;
  height: 650px;
  display: flex;
  flex-direction: column;
}

.bottom-left-title{
  background: url(./assets/csj2/bottom-left-title.png) 100% no-repeat;
  width: 1028px;
  height: 101px;
}

.bottom-left-content{
  background: url(./assets/csj2/bottom-left-content.png) 100% no-repeat;
  width: 1141px;
  height: 548px;
}

.bottom-left-text{
  width: 984px;
  height: 397px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 500;
  color: #FFFCE8;
  line-height: 60px;
  margin-top: 78px;
  margin-left: 92px;
}

.bottom-center{
  width: 1130px;
  height: 650px;
  display: flex;
  flex-direction: column;
}

.bottom-center-title{
  background: url(./assets/csj2/bottom-center-title.png) 100% no-repeat;
  width: 1028px;
  height: 101px;
}

.bottom-center-content{
  background: url(./assets/csj2/bottom-center-content.png) 100% no-repeat;
  width: 1130px;
  height: 554px;
}

.bottom-center-text{
  width: 968px;
  height: 337px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 500;
  margin: 74px 0 0 84px;
  color: #D3FED7;
  line-height: 60px;
}

.bottom-right{
  width: 1240px;
  height: 657px;
  display: flex;
  flex-direction: column;
}

.bottom-right-title{
  background: url(./assets/csj2/bottom-right-title.png) 100% no-repeat;
  width: 1241px;
  height: 101px;
}

.bottom-right-content{
  background: url(./assets/csj2/bottom-right-content.png) 100% no-repeat;
  width: 1109px;
  height: 556px;
}

.bottom-right-text{
  width: 984px;
  height: 397px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 500;
  margin: 74px 0 0 68px;
  color: #FFE7E5;
  line-height: 60px;
}
</style>
