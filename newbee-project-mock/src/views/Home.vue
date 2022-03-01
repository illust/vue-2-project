<!--  -->
<template>
  <div>
      <header>
          <router-link tag="i" to="./category"><i class="nbicon nbmenu2"></i></router-link>
          <div class="header-search">
              <span class="app-name">文昊商城</span>
              <i class="iconfont icon-search"></i>
              <router-link tag="span" class="search-title" to="./product_list?from=home">面朝大海，春暖花开</router-link>
          </div>
          <router-link class="login" tag="span" to="./login" v-if="!isLogin">登录</router-link>
          <router-link class="login" tag="span" to="./about" v-else>
              <van-icon name="manager-o" />
          </router-link>
      </header>
      <nav-bar></nav-bar>
      <swiper></swiper>
      <div class="category-list"></div>
      <div class="good">新品上线</div>
      <div class="good">热门商品</div>
      <div class="good">最新推荐</div>

  </div>
</template>

<script>
import {Toast} from 'vant'

export default {
  name: 'home',
  data () {
    return {
        isLogin: false,
        headerScroll: false
    }
  },
  async mounted(){
      window.addEventListener('scroll',this.pageScroll)
      Toast.loading({
          message: '加载中...',
          forbidClick: true
      })
  },
  methods:{
      pageScroll(){
          let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
          console.log(scrollTop);
          scrollTop > 100 ? this.headerScroll = true : this.headerScroll = false
      }
  }
}
</script>

<style lang="less" scoped>
.home-header{
    position: fixed;
    left: 0;
    top: 0;
    line-height: 50px;
    padding: 0 15px;
    font-size: 15px;
    color: #fff;
    .nbmenu2{
        color: #1baeae
    }
}
</style>
