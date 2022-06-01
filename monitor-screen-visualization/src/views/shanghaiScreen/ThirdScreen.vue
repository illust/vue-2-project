<!-- 碳中和 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <div class="map">
      <img src="./assets/tan/map.png" class="map" alt="">
      <img src="./assets/tan/map-legend.png" class="map-legend" alt="">
    </div>
    <div class="bar"></div>
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
          this.$router.push("/fouth-screen");
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
    background: url(./assets/tan/tan.jpg) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

.map{
  position: absolute;
  top: 634px;
  left: 163px;
}

.map-legend{
  position: absolute;
  top: 1302px;
  left: 692px;
}

.bar{
  position:absolute;
  top: 1516px;
  left: 1306px;
  background: url(./assets/tan/bar.png) 100% no-repeat;
  width: 1290px;
  height: 577px;
}
</style>
