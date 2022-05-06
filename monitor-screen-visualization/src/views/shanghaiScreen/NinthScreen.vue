<!-- 产融协同收入 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <div class="first-row">
      <div class="chart one" ref="chart1" style="width:734px;height:738px"></div>
      <div class="chart two" ref="chart2"></div>
      <div class="chart three" ref="chart3"></div>
      <div class="chart four" ref="chart4"></div>
      <div class="chart five" ref="chart5"></div>
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
    }
  },

  mounted(){
    this.setMyChartFirst()
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