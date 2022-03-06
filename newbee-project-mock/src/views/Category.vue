<template>
  <div class="category">
    <header class="category-header wrap">
      <i class="nbicon nbfanhui" @click="goHome"></i>
      <div class="header-search">
        <i class="nbicon nbSearch"></i>
        <router-link tag="span" class="search-title" to="./product-list?from=category">全场50元起步</router-link>
      </div>
    </header>
    <nav-bar></nav-bar>
    <div class="search-wrap"></div>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'

export default {
  name: 'category',

  components:{
    NavBar
  },

  props: {
  },

  computed: {
    
  },

  methods: {
    goHome(){
      this.$router.push({path:'home'})
    }
  },
}
</script>

<style lang="less" scoped>
  @import '../common/style/mixin';
  .category{
    .category-header{
      background: #fff;
      position: fixed;
      left: 0;
      top: 0;
      .fj();
      .wh(100%, 50px);
      line-height: 50px;
      padding: 0 15px;
      box-sizing: border-box;
      font-size: 15px;
      color: #656771;
      z-index: 10000;
      &.active{
        color: @primary;
      }
      .header-search{
        display: flex;
        width: 80%;
        height: 20px;
        line-height: 20px;
        margin: 10px 0;
        padding: 5px 0;
        color: #232326;
        background: #F7F7F7;
        border-radius: 20px;
        .nbSearch{
          padding: 0 10px 0 20px;
          font-size: 17px;
        }
        .search-title{
          font-size: 12px;
          color: #666;
        }
      }
    }
  }

</style>