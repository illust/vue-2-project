<!-- 英大集团 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <!-- <header class="title row-1">
        <img src="./assets/ydjt_one/ydjt_one/header-bg.png" alt="">
      </header>
    <div class="subtitle row-2"></div>
    <div class="main-content row-3">
      <div class="main-left col-1">
        <div class="left-1">
          <div class="title-area-1"><span class="title-1">坚守初心——实现“一个目标”</span></div>
          <div class="content-area-1"></div>
        </div>
        <div class="left-2"></div>
      </div>
      <div class="main-center col-2">
        <div class="center-1"></div>
        <div class="center-2"></div>
      </div>
      <div class="main-right col-3">
        <div class="right-1"></div>
        <div class="right-2"></div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  name: 'first-screen',
  data() {
    return {
      constants: {},
    };
  },
  methods: {
    goNextPage(){
          this.$router.push("/second-screen");
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
@import '../../assets/styles/font.css';

.container{
    background: url(./assets/ydjt_one.jpg) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.subtitle{
  background: url(./assets/ydjt_one/ydjt_one/subtitle.png) 100% no-repeat;
  width: 3094px;
  height: 120px;
  position: fixed;
  top: 186px;
  left: 366px;
}

.main-content{
  display: flex;
}

.title-area-1{
  background: url(./assets/ydjt_one/ydjt_one/title-area-1.png) 100% no-repeat;
  width: 1321px;
  height: 101px;
  position: fixed;
  top: 323px;
  left: 102px;
}

.title-1{
  width: 718px;
  height: 59px;
  font-size: 60px;
  font-family: 'SourceHanSansCN-Medium';
  font-weight: 800;
  color: #4CFE9B;
  line-height: 18px;

  background: linear-gradient(0deg, #FF3D30 0%, #FFAA90 99.1455078125%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  margin-left: 20px;
  margin-top: 10px;
}
</style>