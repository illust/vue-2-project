<!--  -->
<template>
  <div class="container">
      <screen-header 
        :imgSrc="imageSrc" 
        :headerBg="headerBg"
      />
  </div>
</template>

<script>
import ScreenHeader from '../../components/ScreenHeader'
export default {
  name: "fifth-screen",
  components:{
      ScreenHeader
  },
  data () {
    return {
        imageSrc: require('./assets/jituanyewu/title_top.png'),
        headerBg: { 
            backgroundImage:'url(' + require('./assets/jituanyewu/bg_top.png') + ')'
        }
    }
  }
}
</script>

<style  scoped>
.container{
    background: url(./assets/jituanyewu/bg_page.png) 100% no-repeat;
    width: 3840px;
    height: 2160px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between
}
</style>
