<!-- 国网英大集团 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <header class="title row-1">
      <img src="./assets/ydjt_two/header.png" alt="">
    </header>
    <div class="two-target row-2"></div>
    <div class="two-main-slogan row-3">
      <div class="left-slogan">
        <div class="left-icon1"></div>
        <div class="left-icon2">
          <div class="left-icon2-text">培育一到两个旗舰金融企业</div>
          <div class="left-icon2-pic"></div>
        </div>
      </div>
      <div class="center-arrow"></div>
      <div class="right-slogan">
         <div class="right-icon1"></div>
        <div class="right-icon2">
          <div class="right-icon2-text">打造两个“千亿级”金融企业</div>
          <div class="right-icon2-pic"></div>
        </div>
      </div>
    </div>
    <div class="four-ball">
      <div class="ball-1">
        <div class="pic-1"></div>
        <div class="slogan-1"></div>
      </div>
      <div class="ball-2">
        <div class="pic-2"></div>
        <div class="slogan-2"></div>
      </div>
      <div class="ball-3">
        <div class="pic-3"></div>
        <div class="slogan-3"></div>
      </div>
      <div class="ball-4">
        <div class="pic-4"></div>
        <div class="slogan-4"></div>
      </div>
    </div>
    <div class="middle-slogan">
      <div class="middle-decorate-1"></div>
      <div class="middle-center-slogan">
        <div class="slogan-line1"></div>
        <div class="slogan-line2">
          <img src="./assets/ydjt_two/holdon-text.png" alt="">
          <img src="./assets/ydjt_two/holdon-text-2.png" alt="">
        </div>
      </div>
      <div class="middle-decorate-2"></div>
    </div>
    <div class="bottom">
      <div class="bottom-left">
        <div class="bottom-left-title"></div>
        <div class="bottom-left-content">
          <div class="bottom-left-one"></div>
          <div class="bottom-left-two"></div>
          <div class="bottom-left-three"></div>
        </div>
      </div>
      <div class="bottom-right">
        <div class="bottom-right-title">
          <div class="bottom-right-title-text">主要经营目标</div>
        </div>
        <div class="bottom-right-content">
          <div class="bottom-right-one">
            <img src="./assets/ydjt_two/bottom-right-icon1.png" alt="" class="br-icon">
            <div class="br-text">
              <div class="profit-title">利润总额</div>
              <div class="content">
                <span class="profit-num"> 1&nbsp;9&nbsp;0 <span class="p">亿元</span></span>
                <span class="profit-rate"><span class="p">同比增长</span> 1&nbsp;3&nbsp;.&nbsp;1 <span class="p">%</span></span>
              </div>
            </div>
          </div>
          <div class="bottom-right-two">
            <img src="./assets/ydjt_two/bottom-right-icon2.png" alt="" class="br-icon">
            <div class="br-text">
              <div class="income-title">营业收入</div>
              <div class="content">
                <span class="income-num"> 4&nbsp;7&nbsp;3 <span class="p">亿元</span></span>
                <span class="income-rate"><span class="p">同比增长</span> 4&nbsp;.&nbsp;3 <span class="p">%</span></span>
              </div>
            </div>
          </div>
          <div class="bottom-right-three">
            <img src="./assets/ydjt_two/bottom-right-icon3.png" alt="" class="br-icon">
            <div class="br-text">
              <div class="scale-title">管理资产规模</div>
              <div class="content">
                <span class="scale-num"> 1&nbsp;.&nbsp;4&nbsp;5 <span class="p">万亿</span></span>
                <span class="scale-rate"><span class="p">同比增长</span> 6&nbsp;.&nbsp;1 <span class="p">%</span></span>
              </div>
            </div>
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
      constants: {},
    };
  },
  methods: {
    goNextPage(){
          this.$router.push("/eighth-screen");
      }
  },
};
</script>
<style src="./common.css" />

<style  scoped>
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

.two-target{
  width: 1631px; 
  height: 312px;
  margin-top: -60px;
  background: url(./assets/ydjt_two/two-targets.png) 100% no-repeat;
}

.two-main-slogan{
  display: flex;
  flex-direction: row;
}

.left-slogan{
  background: url(./assets/ydjt_two/bigger-stronger.png) 100% no-repeat;
  width: 1542px;
  height: 306px;
  margin-right: -340px;
  display: inline-flex;
  flex-direction: row;
  }

.left-icon1{
  background: url(./assets/ydjt_two/bs-icon-1.png) 100% no-repeat;
  width: 31px;
  height: 30px;
  margin-left: 514px;
  margin-top: 10px;
}

.left-icon2-text{
  width: 289px;
  height: 32px;
  font-size: 23px;
  font-family: 'SourceHanSansCN-Bold';
  font-weight: bold;
  color: #EEEEEE;
  line-height: 31px;
  background: linear-gradient(0deg, #5D95F9 0%, #FFFFFF 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.left-icon2-pic{
  background: url(./assets/ydjt_two/bs-icon-2.png) 100% no-repeat;
  width: 289px;
  height: 32px;
}

.center-arrow{
  background: url(./assets/ydjt_two/arrow.png) 100% no-repeat;
  width: 796px;
  height: 493.6px;
  margin: -72px 0 -291px 0;
}

.right-slogan{
  background: url(./assets/ydjt_two/nice-professional.png) 100% no-repeat;
  width: 1542px;
  height: 308px;
  margin-left: -247px;
  display: inline-flex;
  flex-direction: row;
}

.right-icon1{
  background: url(./assets/ydjt_two/np-icon-1.png) 100% no-repeat;
  width: 31px;
  height: 30px;
  margin-left: 514px;
  margin-top: 10px;
}

.right-icon2-text{
  width: 300px;
  height: 32px;
  font-size: 23px;
  font-family: 'SourceHanSansCN-Bold';
  font-weight: bold;
  color: #EEEEEE;
  line-height: 31px;

  background: linear-gradient(0deg, #0EFFD2 0%, #83FFED 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.right-icon2-pic{
  background: url(./assets/ydjt_two/np-icon-2.png) 100% no-repeat;
  width: 289px;
  height: 32px;
}

.four-ball{
  width: 90%;
  height: 586px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-top: -53px;
}

.ball-1{
  width: 751px;
  height: 586px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.pic-1{
  width: 633px;
  height: 494px;
  background: url(./assets/ydjt_two/ball-1.png) 100% no-repeat;
}

.slogan-1{
  width: 751px;
  height: 89px;
  background: url(./assets/ydjt_two/ball-1-slogan.png) 100% no-repeat;
}

.ball-2{
  width: 751px;
  height: 586px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.pic-2{
  width: 631px;
  height: 496px;
  background: url(./assets/ydjt_two/ball-2.png) 100% no-repeat;
}

.slogan-2{
  width: 751px;
  height: 89px;
  background: url(./assets/ydjt_two/ball-2-slogan.png) 100% no-repeat;
}

.ball-3{
  width: 751px;
  height: 586px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.pic-3{
  width: 635px;
  height: 494px;
  background: url(./assets/ydjt_two/ball-3.png) 100% no-repeat;
}

.slogan-3{
  width: 751px;
  height: 89px;
  background: url(./assets/ydjt_two/ball-3-slogan.png) 100% no-repeat;
}

.ball-4{
  width: 751px;
  height: 586px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.pic-4{
  width: 641px;
  height: 494px;
  background: url(./assets/ydjt_two/ball-4.png) 100% no-repeat;
}

.slogan-4{
  width: 751px;
  height: 89px;
  background: url(./assets/ydjt_two/ball-4-slogan.png) 100% no-repeat;
}

.middle-slogan{
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.middle-decorate-1{
  width: 707px;
  height: 129px;
  background: url(./assets/ydjt_two/middle-decorate-1.png) 100% no-repeat;
}

.middle-decorate-2{
  width: 707px;
  height: 129px;
  background: url(./assets/ydjt_two/middle-decorate-2.png) 100% no-repeat;
}

.slogan-line1{
  width: 1979px;
  height: 57px;
  background: url(./assets/ydjt_two/2021-text.png) 100% no-repeat;
}

.slogan-line2{
  display:inline-block;
}

.bottom{
  width: 100%;
  height: 694px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.bottom-left{
  display: flex;
  flex-direction: column;
}

.bottom-left-title{
  background: url(./assets/ydjt_two/bottom-left-title.png) 100% no-repeat;
  width: 1031px;
  height: 101px;
}

.bottom-left-content{
  background: url(./assets/ydjt_two/bottom-left-background.png) 100% no-repeat;
  width: 1844px;
  height: 546px;
}

.bottom-left-one{
  position: relative;
  left: 20px;
  top: 80px;
  background: url(./assets/ydjt_two/bottom-left-comp1.png) 100% no-repeat;
  width: 887px;
  height: 200px;
}

.bottom-left-two{
  position: relative;
  left: 846px;
  top: -122px;
  background: url(./assets/ydjt_two/bottom-left-comp2.png) 100% no-repeat;
  width: 1129px;
  height: 200px;
}

.bottom-left-three{
  position: relative;
  left: 20px;
  top: -156px;
  background: url(./assets/ydjt_two/bottom-left-comp3.png) 100% no-repeat;
  width: 1932px;
  height: 299px;
}

.bottom-right{
  display: flex;
  flex-direction: column;
}

.bottom-right-title{
  background: url(./assets/ydjt_two/bottom-right-title.png) 100% no-repeat;
  width: 1031px;
  height: 101px;
}

.bottom-right-title-text{
  position: relative;
  top: 22px;
  left: 85px;
  width: 421px;
  height: 53px;
  font-size: 54px;
  font-family: 'SourceHanSansCN-Heavy';
  font-weight: 1800;
  color: #00FFD2;
  line-height: 60px;

  background: linear-gradient(0deg, #00FFD2 0%, #6CFFE5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.bottom-right-content{
  background: url(./assets/ydjt_two/bottom-right-background.png) 100% no-repeat;
  width: 1704px;
  height: 546px;
}

.bottom-right-one{
  position: relative;
  top: 106px;
  left: 71px;
  background: url(./assets/ydjt_two/bottom-right-comp1.png) 100% no-repeat;
  width: 803px;
  height: 131px;
  display: flex;
}


.bottom-right-two{
  position: relative;
  top: -23px;
  left: 870px;
  background: url(./assets/ydjt_two/bottom-right-comp2.png) 100% no-repeat;
  width: 803px;
  height: 131px;
  display: flex;
}

.bottom-right-three{
  position: relative;
  top: 61px;
  left: 76px;
  background: url(./assets/ydjt_two/bottom-right-comp3.png) 100% no-repeat;
  width: 803px;
  height: 131px;
  display: flex;
}

.br-icon{
  width: 92px;
  height: 92px;
  position: relative;
  top: 22px;
  left: 55px;
}

.br-text{
  display: flex;
  flex-direction: column;
}

.content{
  display: flex;
}

.profit-title{
  width: 319px;
  height: 60px;
  font-size: 36px;
  font-family: 'SourceHanSansCN-Light';
  font-weight: 500;
  color: #00FFD2;
  line-height: 57px;
  margin-top: 10px;
  margin-left: 80px;
}

.profit-num{
  width: 202px;
  height: 36px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Heavy';
  font-weight: 800;
  color: #00FFD2;
  line-height: 54px;
  margin-left: 80px;
}

.profit-rate{
  width: 335px;
  height: 36px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Heavy';
  font-weight: 800;
  color: #00FFD2;
  line-height: 54px;
}

.p{
  font-size: 36px !important;
  font-family: 'SourceHanSansCN-Light' !important;

}

.income-title{
  width: 319px;
  height: 60px;
  font-size: 36px;
  font-family: 'SourceHanSansCN-Light';
  font-weight: 500;
  color: #FF8512;
  line-height: 57px;
  margin-top: 10px;
  margin-left: 80px;
}

.income-num{
  width: 202px;
  height: 36px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 800;
  color: #FF8512;
  line-height: 54px;
  margin-left: 80px;
}

.income-rate{
  width: 302px;
  height: 36px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 800;
  color: #FF8512;
  line-height: 54px;
}

.scale-title{
  width: 319px;
  height: 60px;
  font-size: 36px;
  font-family: 'SourceHanSansCN-Light';
  font-weight: 500;
  color: #8BE2FF;
  line-height: 57px;
  margin-top: 10px;
  margin-left: 80px;
}

.scale-num{
  width: 242px;
  height: 36px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 800;
  color: #8BE2FF;
  line-height: 54px;
  margin-left: 80px;
}

.scale-rate{
  width: 286px;
  height: 36px;
  font-size: 46px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 800;
  color: #8BE2FF;
  line-height: 54px;
}
</style>
