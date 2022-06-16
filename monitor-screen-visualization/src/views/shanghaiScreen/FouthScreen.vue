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
                  <number-flop ref='digital-flop' :config="config1"  style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="second-target col-2">
              <div class="decorate">本年业务规模（万元）</div>
              <div class="number-flop" ref='group2'>
                  <number-flop ref='digital-flop' :config="config2" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
          <div class="third-target col-3">
              <div class="decorate">2021年累计业务收入（亿元）</div>
              <div class="number-flop" ref='group3'>
                  <number-flop ref='digital-flop' :config="config3" style="margin:10px 70px 0 80px;width:800px;height:130px;" />
              </div>
          </div>
      </div>
      <div class="middle-content row-3">
          <div class="middle-left col-1">
              <div class="target-show">
                  <div class="target-title left-title">各业务类型交易规模</div>
                  <v-chart class="chart" :options="chartOneOption"></v-chart>
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
                              <number-flop ref='digital-flop' :config="configMiddle1" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                          </div>
                      </div>
                  </div>
                  <div class="target col-1">
                      <div class="icon2"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">融融协同规模</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle2" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
                  <div class="target-bigger col-1">
                      <div class="icon3"></div>
                      <div class="target-num-flop-1">
                        <div class="target-title-2">承保电网设备资产规模</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle3" style="margin:0 0 0 20px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
                  <div class="target col-1">
                     <div class="icon4"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">管理资产总额</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle4" style="margin:0 0 0 -13px;width:195px;height:55px;" />
                        </div>
                      </div>
                  </div>
                  <div class="target col-1">
                     <div class="icon5"></div>
                      <div class="target-num-flop">
                        <div class="target-title-2">服务主业融资</div>
                        <div class="middle-number-flop">
                            <number-flop ref='digital-flop' :config="configMiddle5" style="margin:0 0 0 -13px;width:195px;height:55px;" />
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
                      <div class="productList">
                        <dv-scroll-board :config="configProduct" class="scroll-board" style="width:400px;height:250px" />
                      </div>
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
                <div class="target-title-1">2021年业务规模</div>
                <div class="chart" id="myChart3" ref="chart3" style="width:1200px;height:460px"></div>
          </div>
          <div class="target-show-1 col-2">
                <div class="target-title-1">2021年营业收入</div>
                <div class="chart" id="myChart4" ref="chart4" style="width:1200px;height:460px"></div>
          </div>
          <div class="target-show-1 col-3">
                <div class="target-title-1">2021年业务利润</div>
                <div class="chart" id="myChart5" ref="chart5" style="width:1200px;height:460px"></div>
          </div>
      </div>
  </div>
</template>

<script>
// import ScreenHeader from '../../components/ScreenHeader'
/* eslint-env node */
import ScreenMap from '../../components/ScreenMap'
import { getThisYearScale, getMultiTypeScale, getSpecialProductScale, getMap } from '../../request/api_screen';
export default {
  name:'fouth-screen',
  components: {
      ScreenMap
  },
  data () {
    return {
        headerImg: require("./assets/jituanyewu/title_top.png"),
        personalImg: require("./assets/jituanyewu/icon_sixth.png"),
        enterpriseImg: require("./assets/jituanyewu/icon_seventh.png"),
        productImg: require("./assets/jituanyewu/icon_eighth.png"),
        chart1Data: [],
        config1: {
            number: [8420.13],
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
        config2: {
            number: [],
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
        config3: {
            number: [527.66],
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
        configMiddle1: {
            number: [249],
            content: '{nt}  亿元',
            style: {
                fontSize: 35,
                fontWeight: 'bolder',
                fill: '#ff9e2b',
                area: [195,55]
            },
            formatter: this.formatter1
        },
        configMiddle2: {
            number: [2507],
            content: '{nt}  亿元',
            style: {
                fontSize: 35,
                fontWeight: 'bolder',
                fill: '#ff9e2b',
                area: [195,55]
            },
            formatter: this.formatter1
        },
        configMiddle3: {
            number: [70000],
            content: '{nt}  亿元',
            style: {
                fontSize: 35,
                fontWeight: 'bolder',
                fill: '#ff9e2b',
                area: [195,55]
            },
            formatter: this.formatter1
        },
        configMiddle4: {
            number: [1.6],
            content: '{nt}  万亿',
            toFixed: 1,
            style: {
                fontSize: 35,
                fontWeight: 'bolder',
                fill: '#ff9e2b',
                area: [195,55]
            },
            formatter: this.formatter1
        },
        configMiddle5: {
            number: [8201],
            content: '{nt}  亿元',
            style: {
                fontSize: 35,
                fontWeight: 'bolder',
                fill: '#ff9e2b',
                area: [195,55]
            },
            formatter: this.formatter1
        },
        configProduct:{
            data: [],
            index: true,
            columnWidth: [50],
            align: ['center']
        },
        chartOneOption: {
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    orient: 'vertical',
                    bottom: '10%',
                    right: '10%',
                    textStyle:{
                        color: '#fff'
                    }
                },
                label:{
                    color: '#fff',
                    fontWeight: 'bolder',
                    fontSize: 15,
                    formatter: '{b}\n{d}'
                },
                series: [
                    {
                        name: '',
                        type: 'pie',
                        radius: '70%',
                        data: [],
                        emphasis: {
                            itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        },
                        labelLine: {
                            show: true,
                            length2: 50
                        },
                        itemStyle: {
                            color: function (colors) {
                                var colorList = [
                                '#a6faf6',
                                '#5e83dd',
                                '#fe6666'
                                ];
                                return colorList[colors.dataIndex];
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
    formatter1 (number) {
        const numbers = number.toString().split('').reverse()
        const segs = []

        while (numbers.length) segs.push(numbers.splice(0, 3).join(''))

        return segs.join(',').split('').reverse().join('')
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

    setMyChartOne(){
        const chart = this.$refs.chart1
        if(chart){
            const thisChart = this.$echarts.init(chart)
            console.log("thisChart",thisChart);
            thisChart.setOption(this.chartOneOption)
            console.log("thisChartAfter",thisChart);
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
                color: ['#fe8d42','#75e1a5'],
                colorBy: 'data',
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '80%',
                    right: '5%',
                    textStyle:{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 15
                    }
                },
                series: [
                    {
                        name: 'Access From',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            show: true,
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 15,
                            position: 'outside',
                            formatter:'{d}%\n{b}'
                        },
                        emphasis: {
                            label: {
                            show: true,
                            fontSize: '40',
                            fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: true,
                            length2: 100
                        },
                        data: [
                            { value: 2, name: '个人' },
                            { value: 98, name: '企业' },
                        ],
                        itemStyle: {
                            color: function (colors) {
                                var colorList = [
                                '#7af7b2',
                                '#ff4738'
                                ];
                                return colorList[colors.dataIndex];
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

    setMyChartThree(){
        const chart = this.$refs.chart3
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['中国电财', '英大基金', '国网租赁', '英大人寿', '英大资产', '英大长安', '英大财险','英大产业基金','英大投资','英大保理'],
                    axisLabel: {
                        color: '#64feba',
                        fontWeight: 'bold',
                        fontSize: 20,
                        interval: 0
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine:{
                        show: false
                    },
                    axisLabel: {
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: 20
                    }
                },
                series: [
                    {
                    data: [3289.44, 788.2, 567.63, 229.78, 170.33, 148.71, 118.32, 112, 79.49, 47.47],
                    type: 'bar',
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 20
                    },
                    itemStyle:{
                        color: '#64feba'
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

    setMyChartFour(){
        const chart = this.$refs.chart4
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['英大人寿','中国电财','英大财险', '国网租赁', '英大资产', '英大长安', '英大基金','英大保理','英大产业基金','英大投资'],
                    axisLabel: {
                        color: '#ffdd26',
                        fontWeight: 'bold',
                        fontSize: 20,
                        interval: 0
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine:{
                        show: false
                    },
                    axisLabel: {
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: 20
                    }
                },
                series: [
                    {
                        data: [177.35,122.38,81.23,53.08,23.64,12.93,1.5,1.04,0.76,0.26],
                        type: 'bar',
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                        itemStyle:{
                            color: '#ffdd26'
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

    setMyChartFive(){
        const chart = this.$refs.chart5
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['中国电财','英大财险','国网租赁', '英大长安','英大人寿',  '英大资产', '英大产业基金','英大基金','英大保理','英大投资'],
                    axisLabel: {
                        color: '#7fe036',
                        fontWeight: 'bold',
                        fontSize: 20,
                        interval: 0
                    }
                },
                yAxis: {
                    type: 'value',
                    splitLine:{
                        show: false
                    },
                    axisLabel: {
                        color: '#fff',
                        fontWeight: 'bolder',
                        fontSize: 20
                    }
                },
                series: [
                    {
                        data: [67.88,14.52,10,7.4,3.3,1.25,0.86,0.76,0.12,0.11],
                        type: 'bar',                    
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#fff',
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                        itemStyle:{
                            color: '#7fe036'
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

    setMyChartSix(){
        const chart = this.$refs.chart6
        if(chart){
            const thisChart = this.$echarts.init(chart)
            const option = {
                xAxis: {
                    type: 'category',
                    data: ['2018', '2019', '2020', '2021'],
                    axisLabel:{
                      color: '#1be611',
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
                      color: '#1be611',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                series: [
                    {
                    data: [0.82,1.01,1.36,1.59],
                    type: 'line',
                    label: {
                        show: true,
                        position: 'outside',
                        color: '#1be611',
                        fontWeight: 'bold',
                        fontSize: 20
                    },
                    lineStyle:{
                        color: '#1be611'
                    },
                    itemStyle:{
                        color: '#1be611'
                    },
                    areaStyle:{
                      color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                {
                                    offset: 0,
                                    color: "rgba(21,168,31,0)",
                                },
                                {
                                    offset: 1,
                                    color: "rgba(21,168,31,1)",
                                },
                            ])

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
                    data: ['2018', '2019', '2020','2021'],
                    axisLabel:{
                      color: '#E07E3C',
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
                      color: '#E07E3C',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                series: [
                    {
                        data: [245, 314,453,528],
                        type: 'line',
                        label: {
                            show: true,
                            position: 'outside',
                            color: '#E07E3C',
                            fontWeight: 'bold',
                            fontSize: 20
                        },
                        itemStyle:{
                        color: '#E07E3C'
                        },
                        areaStyle:{
                            color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                                        {
                                            offset: 0,
                                            color: "rgba(122,77,43,0)",
                                        },
                                        {
                                            offset: 1,
                                            color: "rgba(122,77,43)",
                                        },
                                    ])
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

    getThisYearScale(){
        getThisYearScale({}).then(res => {
            // console.log("parseFloat(res.bnywgm)",parseFloat(res.bnywgm))
            this.$set(this.config2.number,0, parseFloat(res.bnywgm))
            // console.log("this.config2.number",this.config2.number[0]);
            this.config2 = {...this.config2}
        })
    },

    getMultiTypeScale(){
        getMultiTypeScale({}).then(res => {
            this.chartOneOption.series[0].data = res.map(e => {
                e.value = parseFloat(e.value)
                return e
            })
            this.chartOneOption = {...this.chartOneOption}
            // console.log("this.chartOneOption",this.chartOneOption);
        })
    },

    getSpecialProductScale(){
        getSpecialProductScale({}).then(res => {
            res.map((e,index) =>{
                this.$set(this.configProduct.data, index, [e.product_name])
            })
            this.configProduct = {...this.configProduct}
            // console.log("this.configProduct.data",this.configProduct.data);
        })
    },

    getMap(){
        getMap({}).then(res => {
            console.log("res-map",res[0]);
        })
    }
 },
 created(){
    
 },

 mounted(){
    this.getThisYearScale();
    this.getMultiTypeScale();
    this.getSpecialProductScale();
    // this.getMap();

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
    font-family: 'SourceHanSansCN-Heavy';
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
    font-family: 'SourceHanSansCN-Heavy';
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
    font-family: 'SourceHanSansCN-Heavy';
}

.target-title-2{
    font-size: 25px;
    color: #00f6ff;
    text-align: start;
    font-family: 'SourceHanSansCN-Bold';
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
    justify-content: space-around;
    margin: 20px 90px 10px 65px;
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


