<!-- 数字人民币 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <header class="header-title">
      <img src="./assets/rmb/title.png" alt="" class="title-text">
    </header>
    <div class="main-content">
      <div class="first-left">
        <div class="first-left-text">渠道</div>
      </div>
      <div class="first-right"></div>
      <div class="split-line-1"></div>

      <div class="second-left">
        <div class="second-left-text">应用</div>
      </div>
      <div class="second-right"></div>
      <div class="split-line-2"></div>   

      <div class="third-left">
        <div class="third-left-text">&nbsp;&nbsp;&nbsp;2.5层<br/>运营能力</div>
      </div>
      <div class="third-right"></div>
      <div class="split-line-3"></div>
      
      <div class="fouth-left">
        <div class="fouth-left-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2层<br/>运营机构</div>
      </div>
      <div class="fouth-right"></div>
    </div>
    <div class="footer">
      <div class="footer-text">
         在数字人民币方面，英大集团先行先试，积极推进数字人民币试点应用，与工行、农行、交行和邮储银行建立战略合作关系。
          构建对公支付能力，实现基于数字人民币的企业保险保单支付和融资资金用途监管，相关成果亮相数字中国建设成果展览会。
      </div>
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
          this.$router.push("/third-screen");
      }
  },
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
    background: url(./assets/rmb/bg-page.png) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.header-title{
    background: url(./assets/rmb/header-bg.png) 100% no-repeat;
    width: 2064px;
    height: 116px;
    position: absolute;
    top: 163px;
    left: 918px;
}

.title-text{
  position: absolute;
  top: 25px;
  left: 572px;
}

.main-content{
    background: url(./assets/rmb/background.png) 100% no-repeat;
    width: 2648px;
    height: 1356px;
    position: absolute;
    top: 270px;
    left: 595px;

}

.first-left{
  width: 458px;
  height: 230px;
  position: absolute;
  top: 117px;
  left: 109px;
  background: rgba(133, 255, 248, 0.46);
}

.first-left-text{
  width: 126px;
  height: 62px;
  position: absolute;
  left: 166px;
  top: 83px;
  font-size: 62px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: bold;
  color: #CFF7FF;
  line-height: 60px;
}

.first-right{
  width: 1937px;
  height: 230px;
  position: absolute;
  top: 117px;
  left: 592px;
  background: rgba(133, 255, 248, 0.3);
}

.split-line-1{
  background: url(./assets/rmb/split-line.png) 100% no-repeat;
  width: 2421px;
  height: 14px;
  position: absolute;
  top: 379px;
  left: 109px;
}

.second-left{
  width: 458px;
  height: 230px;
  position: absolute;
  top: 425px;
  left: 109px;
  background: rgba(133, 255, 248, 0.46);
}

.second-left-text{
  width: 121px;
  height: 63px;
  font-size: 60px;
  position: absolute;
  left: 168px;
  top: 83px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: bold;
  color: #CFF7FF;
  line-height: 60px;
}

.second-right{
  width: 1937px;
  height: 230px;
  position: absolute;
  top: 425px;
  left: 592px;
  background: rgba(133, 255, 248, 0.3);
}

.split-line-2{
  background: url(./assets/rmb/split-line.png) 100% no-repeat;
  width: 2421px;
  height: 14px;
  position: absolute;
  top: 687px;
  left: 109px;
}

.third-left{
  width: 458px;
  height: 230px;
  position: absolute;
  top: 732px;
  left: 109px;
  background: rgba(133, 255, 248, 0.46);
}

.third-left-text{
  width: 256px;
  height: 132px;
  font-size: 64px;
  position: absolute;
  left: 104px;
  top: 44px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: bold;
  color: #CFF7FF;
  line-height: 72px;
}

.third-right{
  width: 1937px;
  height: 230px;
  position: absolute;
  top: 732px;
  left: 592px;
  background: rgba(133, 255, 248, 0.3);
}

.split-line-3{
  background: url(./assets/rmb/split-line.png) 100% no-repeat;
  width: 2421px;
  height: 14px;
  position: absolute;
  top: 994px;
  left: 109px;
}

.fouth-left{
  width: 458px;
  height: 230px;
  position: absolute;
  top: 1040px;
  left: 109px;
  background: rgba(133, 255, 248, 0.46);
}

.fouth-left-text{
  width: 256px;
  height: 134px;
  font-size: 64px;
  position: absolute;
  left: 102px;
  top: 48px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: bold;
  color: #CFF7FF;
  line-height: 74px;
  white-space:pre-wrap;
}

.fouth-right{
  width: 1937px;
  height: 230px;
  position: absolute;
  top: 1042px;
  left: 592px;
  background: rgba(133, 255, 248, 0.3);
}


.footer{
    background: url(./assets/rmb/footer-bg.png) 100% no-repeat;
    width: 2648px;
    height: 330px;
    position: absolute;
    top: 1617px;
    left: 595px;
}

.footer-text{
  width: 2423px;
  height: 174px;
  font-size: 48px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #A5E2FA;
  line-height: 64px;
  position: absolute;
  left: 92px;
  top: 103px;
}
</style>
