<!-- 产融协同收入 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <div class="first-row">
      <div class="chart one" ref="chart1" style="width:730px;height:738px"></div>
      <div class="chart two" ref="chart2" style="width:720px;height:738px"></div>
      <div class="chart three" ref="chart3" style="width:730px;height:738px"></div>
      <div class="chart four" ref="chart4" style="width:720px;height:738px"></div>
      <div class="chart five" ref="chart5" style="width:720px;height:738px"></div>
    </div>
    <div class="second-row">
      <div class="text first"><span>产融协同收入</span></div>
      <div class="text second"><span>融融协同规模</span></div>
      <div class="text third"><span>管理资产总额</span></div>
      <div class="text fouth"><span>服务主业融资</span></div>
      <div class="text fifth"><span>承保电网资产规模</span></div>
    </div>    
  </div>
</template>
<script>
export default {
  data() {
    return {
      constants: {},
    };
  },
  methods: {
     goNextPage(){
          this.$router.push("/");
      },

      setMyChartFirst(){
        const chart = this.$refs.chart1
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

    setMyChartSecond(){
        const chart = this.$refs.chart2
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
    },

    setMyChartThird(){
        const chart = this.$refs.chart3
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
                      color: 'blue'
                    },
                    axisLabel:{
                      color: '#fff',
                      fontWeight: 'bolder',
                      fontSize: 20
                    }
                },
                series: [
                    {
                    data: [0.82, 1.01, 1.36],
                    type: 'line',
                    areaStyle:{
                      color: '#00ae9d'
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

    setMyChartFouth(){
        const chart = this.$refs.chart4
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
                      color: '#86F95D'
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

    setMyChartFifth(){
        const chart = this.$refs.chart5
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
                      color: '#E06554'
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
    this.setMyChartFirst()
    this.setMyChartSecond()
    this.setMyChartThird()
    this.setMyChartFouth()
    this.setMyChartFifth()
  }
};
</script>
<style src="./common.css" />
<style scoped>
button{
    position: absolute;
    width: 100%;
    height: 100%;
    background: transparent;
    z-index: 100;
}

.container{
    background: url(./assets/slide_screen/background.png) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.first-row{
  display: flex;
  flex-direction: row;
  margin: 572px auto 0 auto;
}

.chart{
  width: 734px;
  height: 738px;
  background: url(./assets/slide_screen/chartBg.png) 100% no-repeat;
  display: flex;
  justify-content: space-around;
}

.second-row{
  display: flex;
  flex-direction: row;
  margin: 63px 73px auto 81px;
  justify-content: space-around;

}

.text{
  width: 624px;
  height: 140px;
  background: url(./assets/slide_screen/textBg.png) 100% no-repeat;
  display: flex;
}

span{
  width: 636px;
  height: 39px;
  font-size: 57px;
  font-family: 'SourceHanSansCN-Bold';
  font-weight: 800;
  color: #FFFFFF;
  line-height: 43px;
  text-align: center;
  align-self: center;
}
</style>