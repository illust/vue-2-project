<!-- 英大集团 -->
<template>
  <div class="container">
    <button @click="goNextPage"></button>
    <dv-scroll-board :config="config" class="scroll-board" style="width:400px;height:170px" />
  </div>
</template>
<script>
export default {
  name: 'first-screen',
  data() {
    return {
      config:{
        data: [
          ['华夏银行'],
          ['广发银行'],
          ['华泰保险'],
          ['长江养老'],
          ['湘财证券'],
          ['中债信用'],
          ['上海环交所'],
          ['建信融通'],
          ['国网雄安金融科技集团'],
          ['国网科转集成电路股权投资基金']
        ],
        columnWidth: [400],
        align: ['center']
      }
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

.scroll-board{
  position: relative;
  top: 1070px;
  left: 426px;
}
</style>