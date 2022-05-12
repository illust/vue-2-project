<!-- 碳中和 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
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
    background: url(./assets/tan.jpg) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

</style>
