<!-- 集团业务发展 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
      <header class="title row-1">
        <img :src="headerImg" alt="">
      </header>
      <div class="main-target row-2">
          <div class="first-target col-1">
              <div class="decorate">2021年累计业务规模（亿元）</div>
              <div class="number-flop" ref='group1'>
                  <number-flop ref='digital-flop' :config="config"  style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="second-target col-2">
              <div class="decorate">本年业务规模（万元）</div>
              <div class="number-flop" ref='group2'>
                  <number-flop ref='digital-flop' :config="config" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="third-target col-3">
              <div class="decorate">2021年累计业务收入（亿元）</div>
              <div class="number-flop" ref='group3'>
                  <number-flop ref='digital-flop' :config="config" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
      </div>
      <div class="middle-content row-3">
          <div class="middle-left col-1">
              <div class="target-show">
                  <div class="target-title left-title">各业务类型交易规模</div>
                  <div class="chart" id="myChart1" ref="chart1" style="width:800px;height:300px">
                  </div>
              </div>
              <div class="target-show">
                  <div class="target-title left-title">业务客群规模</div>
                  <div class="chart" id="myChart2" ref="chart2" style="width:800px;height:300px">
                  </div>
              </div>
              <div class="target-show">
                  <div class="target-title left-title">累计服务客户数据</div>
                  <div class="customerNum">
                      <div class="personal">
                          <img :src="personalImg" alt="">
                          <span class="personalText">个人</span>
                          <span class="personalNum">138万</span>
                      </div>
                      <div class="enterprise">
                          <img :src="enterpriseImg" alt="">
                          <span class="enterpriseText">企业</span>
                          <span class="enterpriseNum">146万</span>
                      </div>
                  </div>
              </div>
          </div>
          <div class="middle-center col-2">
              <div class="center-top row-1">
                  <div class="target col-1">
                      <div class="icon1"></div>
                      <div class="target-num-flop">
                          <div class="target-title-2">产融协同收入</div>
                          <div class="middle-number-flop">
                              <number-flop ref='digital-flop' :config="configMiddle" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                          </div>
                      </div>
                  </div>
                  <div class="target col-1">
                      <div class="icon2"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">融融协同规模</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
                  <div class="target-bigger col-1">
                      <div class="icon3"></div>
                      <div class="target-num-flop-1">
                        <div class="target-title-2">承保电网设备资产规模</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
                  <div class="target col-1">
                     <div class="icon4"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">管理资产总额</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
                  <div class="target col-1">
                     <div class="icon5"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">服务主业融资</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
              </div>
              <div class="center-map row-2">
                  <ScreenMap/>
              </div>
          </div>
          <div class="middle-right col-3">
              <div class="target-show">
                  <div class="target-title right-title">特色产品累计规模</div>
                  <div class="specialProduct">
                      <div class="product">
                          <img :src="productImg" alt="">
                          <span class="productText">产品总数</span>
                          <span class="productNum">173款</span>
                      </div>
                      <div class="productList"></div>
                  </div>
              </div>
              <div class="target-show">
                  <div class="target-title right-title">管理资产总额</div>
                  <div class="assetsTotal" ref="chart6" style="width:900px;height:300px"></div>
              </div>
              <div class="target-show">
                  <div class="target-title right-title">营业收入</div>
                  <div class="income" ref="chart7" style="width:900px;height:300px"></div>
              </div>
          </div>
      </div>
      <div class="footer-content row-4">
          <div class="target-show-1 col-1">
                <div class="target-title-1">2020年业务规模</div>
                <div class="chart" id="myChart3" ref="chart3" style="width:1000px;height:460px"></div>
          </div>
          <div class="target-show-1 col-2">
                <div class="target-title-1">2020年营业收入</div>
                <div class="chart" id="myChart4" ref="chart4" style="width:1000px;height:460px"></div>
          </div>
          <div class="target-show-1 col-3">
                <div class="target-title-1">2020年业务利润</div>
                <div class="chart" id="myChart5" ref="chart5" style="width:1000px;height:460px"></div>
          </div>
      </div>
  </div>
</template>

<script>
// import ScreenHeader from '../../components/ScreenHeader'
import ScreenMap from '../../components/ScreenMap'
export default {
  name:'fouth-screen',
  components: {
      ScreenMap
  },
  data () {
    return {
        headerImg: require("./assets/jituanyewu/title_top.png"),
        personalImg: require("./assets/jituanyewu/icon_sixth.jpg"),
        enterpriseImg: require("./assets/jituanyewu/icon_seventh.jpg"),
        productImg: require("./assets/jituanyewu/icon_eighth.jpg"),
        config: {
            number: [1002065],
            toFixed: 2,
            content: '{nt}',
            formatter: this.formatter,
            style: {
                fontSize: 90,
                fontWeight: 'bold',
                fill: '#ff9e2b',
                area: [800,121]
            },
            imgSrc: require("../../assets/number-bg.png"),
            imgStyle: "width: 68px; height: 95px"
        },
        configMiddle: {
            number: [142],
            content: '{nt}  亿元',
            style: {
                fontSize: 35,
                fontWeight: 'bolder',
                fill: '#ff9e2b',
                area: [195,55]
            }
        },
        option: {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                show: true,
                left: '50%',
                top: '50%'
            },
            series: [
                {
                name: 'Access From',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 1048, name: 'Search Engine' },
                    { value: 735, name: 'Direct' },
                    { value: 580, name: 'Email' },
                    { value: 484, name: 'Union Ads' },
                    { value: 300, name: 'Video Ads' }
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }   
                    }
                }
            ]
        }
    }
 },
 methods:{
     goNextPage(){
          this.$router.push("/fifth-screen");
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
    },

    setMyChartOne(){
        const chart = this.$refs.chart1
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                title: {
                    text: 'Referer of a Website',
                    subtext: 'Fake Data',
                    left: 'center'
                  },
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    left: 'left'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: '50%',
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ],
                        emphasis: {
                            itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    },

    setMyChartTwo(){
        const chart = this.$refs.chart2
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            { value: 1048, name: 'Search Engine' },
                            { value: 735, name: 'Direct' },
                            { value: 580, name: 'Email' },
                            { value: 484, name: 'Union Ads' },
                            { value: 300, name: 'Video Ads' }
                        ]
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    },

    setMyChartThree(){
        const chart = this.$refs.chart3
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    },

    setMyChartFour(){
        const chart = this.$refs.chart4
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    },

    setMyChartFive(){
        const chart = this.$refs.chart5
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                    data: [120, 200, 150, 80, 70, 110, 130],
                    type: 'bar'
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    },

    setMyChartSix(){
        const chart = this.$refs.chart6
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['2018', '2019', '2020'],
                    axisLabel:{
                      color: '#fff',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                yAxis: {
                    type: 'value',                    
                    axisLine:{
                      show: true,
                      color: 'red'
                    },
                    splitLine:{
                      show: false
                    },
                    axisLabel:{
                      color: '#fff',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                series: [
                    {
                    data: [140, 180, 240],
                    type: 'line',
                    areaStyle:{
                      color: '#a48933'
                    }
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    },

    setMyChartSeven(){
        const chart = this.$refs.chart7
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['2018', '2019', '2020'],
                    axisLabel:{
                      color: '#fff',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine:{
                      show: false
                    },
                    axisLine:{
                      color: 'green'
                    },
                    axisLabel:{
                      color: '#fff',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                series: [
                    {
                    data: [382, 764, 1498],
                    type: 'bar',
                    itemStyle:{
                      color: '#E07E3C'
                    }
                    }
                ]
            }
            thisChart.setOption(option)
            window.addEventListener("resize",function(){
                thisChart.resize()
            })
        }
    }
 },
 mounted(){
    // this.render()

    // this.drawNumBg()
    this.setMyChartOne()
    this.setMyChartTwo()
    this.setMyChartThree()
    this.setMyChartFour()
    this.setMyChartFive()
    this.setMyChartSix()
    this.setMyChartSeven()


    // console.log("this.$refs.chart",this.$refs.chart);
 }
}
</script>

<style scoped lang='css'>
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

.center-map{
    width: 1748px;
    height: 1000px;
    margin: 0 20px 0 20px
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

.chart{
    width: 800px;
    height: 300px;
    margin: auto;
}

.customerNum{
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.personal{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.personalText{
    color:aliceblue;
    margin: 5px 0 5px 0;
}

.personalNum{
    color: #ff9e2b;
    font-weight: bolder;
    font-size: 30px;
    margin: 5px 0 5px 0;
}


.enterprise{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.enterpriseText{
    color:aliceblue;
    margin: 5px 0 5px 0;
}

.enterpriseNum{
    color: #ff9e2b;
    font-weight: bolder;
    font-size: 30px;
    margin: 5px 0 5px 0;
}

.specialProduct{
    display: flex;
    margin: 20px 0 10px 65px;
}

.product{
    display: flex;
    flex-direction: column;
    align-items: center;
}

.productText{
    color:aliceblue;
    font-size: 15px;
    font-weight: bolder;
    margin: 10px 0 5px 0;
}

.productNum{
    color:aquamarine;
    font-size: 35px;
    font-weight: bolder;
    margin: 5px 0 10px 0;
}
</style>


