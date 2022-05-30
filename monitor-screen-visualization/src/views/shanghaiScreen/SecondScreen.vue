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
      <div class="first-right">
        <div class="first-1">
          <span class="first-1-text">线上-电e金服</span>
        </div>
        <div class="first-2">
          <span class="first-2-text">线下代理人渠道</span>
        </div>
      </div>
      <div class="split-line-1"></div>

      <div class="second-left">
        <div class="second-left-text">应用</div>
      </div>
      <div class="second-right">
        <div class="second-1">
          <span class="second-1-text">保险支付</span>
        </div>
        <div class="second-2">
          <span class="second-2-text">供应链融资</span>
        </div>
        <div class="second-3">
          <span class="second-3-text">碳普惠应用</span>
        </div>
      </div>
      <div class="split-line-2"></div>   

      <div class="third-left">
        <div class="third-left-text">&nbsp;&nbsp;&nbsp;2.5层<br/>运营能力</div>
      </div>
      <div class="third-right">
        <div class="third-1">
          <span class="third-1-header">支付</span>
          <div class="third-1-bottom">
            <div class="third-1-bottom-1">
              <span class="third-1-bottom-1-text">对公支付</span>
            </div>
            <div class="third-1-bottom-2">
              <span class="third-1-bottom-2-text">个人支付</span>
            </div>
          </div>
        </div>
        <div class="split-symbol-1"></div>
        <div class="third-2">
          <span class="third-2-header">智能合约</span>
          <div class="third-2-bottom">
            <div class="third-2-bottom-1">
              <span class="third-2-bottom-1-text">合约管理</span>
            </div>
            <div class="third-2-bottom-2">
              <span class="third-2-bottom-2-text">运营节点</span>
            </div>
          </div>
        </div>
        <div class="split-symbol-2"></div>
        <div class="third-3">
          <span class="third-3-header">钱包开立</span>
          <div class="third-3-bottom">
            <div class="third-3-bottom-1">
              <span class="third-3-bottom-1-text">企业钱包</span>
            </div>
            <div class="third-3-bottom-2">
              <span class="third-3-bottom-2-text">个人支付</span>
            </div>
          </div>
        </div>
      </div>
      <div class="split-line-3"></div>
      
      <div class="fouth-left">
        <div class="fouth-left-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2层<br/>运营机构</div>
      </div>
      <div class="fouth-right">
        <div class="four">
          <span class="four-text">中国工商银行</span>
        </div>
        <div class="four">
          <span class="four-text">中国建设银行</span>
        </div>
        <div class="four">
          <span class="four-text">中国农业银行</span>
        </div>
        <div class="four">
          <span class="four-text">交通银行</span>
        </div>
        <div class="four">
          <span class="four-text">中国银行</span>
        </div>
        <div class="four">
          <span class="four-text">中国邮政储蓄银行</span>
        </div>
        
      </div>
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.first-1{
  width: 574px;
  height: 130px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-1-text{
  width: 280px;
  height: 66px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.first-2{
  width: 574px;
  height: 130px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.first-2-text{
  width: 325px;
  height: 66px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.second-1{
  width: 454px;
  height: 130px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-1-text{
  width: 198px;
  height: 66px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.second-2{
  width: 454px;
  height: 130px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-2-text{
  width: 248px;
  height: 66px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.second-3{
  width: 454px;
  height: 130px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.second-3-text{
  width: 244px;
  height: 66px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
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
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.third-1{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.third-1-header{
  width: 94px;
  height: 76px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #94FFF9;
  line-height: 60px;
}

.third-1-bottom{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.third-1-bottom-1{
  width: 274px;
  height: 88px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.third-1-bottom-1-text{
  width: 170px;
  height: 46px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.third-1-bottom-2{
  width: 274px;
  height: 88px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.third-1-bottom-2-text{
  width: 170px;
  height: 46px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.third-2{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.third-2-header{
  width: 154px;
  height: 76px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #94FFF9;
  line-height: 60px;
}

.third-2-bottom{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.third-2-bottom-1{
  width: 274px;
  height: 88px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.third-2-bottom-1-text{
  width: 170px;
  height: 46px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.third-2-bottom-2{
  width: 274px;
  height: 88px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.third-2-bottom-2-text{
  width: 170px;
  height: 46px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.third-3{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.third-3-header{
  width: 154px;
  height: 76px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #94FFF9;
  line-height: 60px;
}

.third-3-bottom{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.third-3-bottom-1{
  width: 274px;
  height: 88px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
}

.third-3-bottom-1-text{
  width: 170px;
  height: 46px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.third-3-bottom-2{
  width: 274px;
  height: 88px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
}

.third-3-bottom-2-text{
  width: 170px;
  height: 46px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
}

.split-symbol-1{
  width: 3px;
  height: 169px;
  border: 3px solid #8BF1EE;
  opacity: 0.24;
}

.split-symbol-2{
  width: 3px;
  height: 169px;
  border: 3px solid #8BF1EE;
  opacity: 0.24;
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
  display: flex;
  flex-direction: column;
  align-content: space-around;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.four{
  width: 474px;
  height: 86px;
  background: rgba(90, 168, 218, 0.6);
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.four-text{
  width: 328px;
  height: 56px;
  font-size: 38px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 400;
  color: #CFF7FF;
  line-height: 60px;
  text-align: center
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
