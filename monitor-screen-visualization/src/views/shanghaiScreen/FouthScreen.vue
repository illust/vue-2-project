<!-- 集团业务发展 -->
<template>
  <div class="container">
      <header class="title row-1">
        <img src="./assets/jituanyewu/组_30.png" alt="">
      </header>
      <div class="main-target row-2">
          <div class="first-target col-1">
              <div class="decorate">2020年累计业务规模（亿元）</div>
              <div class="number-flop"></div>
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
              <div class="target-show row-1">
                  <div class="target-title">各业务类型交易规模</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show row-2">
                  <div class="target-title">业务客群规模</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show row-3">
                  <div class="target-title">累计服务客户数据</div>
                  <div class="chart"></div>
              </div>
          </div>
          <div class="middle-center col-2">
              <div class="center-top row-1">
                  <div class="target col-1">
                      <div class="target-title">产融协同收入</div>
                      <div class="number-flop"></div>
                  </div>
                  <div class="target col-1">
                      <div class="target-title">融融协同规模</div>
                      <div class="number-flop"></div>
                  </div>
                  <div class="target col-1">
                      <div class="target-title">承保电网设备资产规模</div>
                      <div class="number-flop"></div>
                  </div>
                  <div class="target col-1">
                      <div class="target-title">管理资产总额</div>
                      <div class="number-flop"></div>
                  </div>
                  <div class="target col-1">
                      <div class="target-title">服务主业融资</div>
                      <div class="number-flop"></div>
                  </div>
              </div>
              <div class="center-map row-2"></div>
          </div>
          <div class="middle-right col-3">
              <div class="target-show row-1">
                  <div class="target-title">特色产品累计规模</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show row-2">
                  <div class="target-title">管理资产总额</div>
                  <div class="chart"></div>
              </div>
              <div class="target-show row-3">
                  <div class="target-title">营业收入</div>
                  <div class="chart"></div>
              </div>
          </div>
      </div>
      <div class="footer-content row-4">
          <div class="target-show-1 col-1">
                <div class="target-title">2020年业务规模</div>
                <div class="chart"></div>
          </div>
          <div class="target-show-1 col-2">
                <div class="target-title">2020年营业收入</div>
                <div class="chart"></div>
          </div>
          <div class="target-show-1 col-3">
                <div class="target-title">2020年业务利润</div>
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
    }
  }
}
</script>

<style scoped lang='css'>
.container{
    background: url(./assets/img/ps02hn02femmkzylfka3n70rjz6x43y3nkqg82f7ceed-e6d0-4905-b185-c21def1b380b.png) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.title{
    width: 100%;
    height: 173px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.target-title{
    font-size: 40px;
    color: #00f6ff;
    text-align: center;
}

.decorate{
    font-size: 40px;
    color: #00f6ff;
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
    height: 1177px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.middle-left{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.target-show{
    width: 100%;
    height: 360px;
}

.middle-center{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.footer-content{
    width: 100%;
    height: 601px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.target-show-1{
    flex: 1;
    height: 514px;
}
</style>


