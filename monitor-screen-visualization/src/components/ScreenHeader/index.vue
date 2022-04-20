<!--  -->
<template>
  <div class="header-container" :style="headerBg">
      <img :src="imgSrc" alt="">
  </div>
</template>

<script>
export default {
  name: "screen-header",
  props: ['imgSrc','headerBg'],
  data () {
    return {
    }
  }
}
</script>

<style  scoped>
.header-container{
    width: 93.23%;
    height: 213px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
}

</style>
