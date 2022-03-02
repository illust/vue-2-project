<!--  -->
<template>
  <div>
      <header class="home-header wrap" :class="{'active': headerScroll}">
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
      <swiper :list="swiperList"></swiper>
      <div class="category-list"></div>
      <div class="good">新品上线</div>
      <div class="good">热门商品</div>
      <div class="good">最新推荐</div>

  </div>
</template>

<script>
import {Toast} from 'vant'
import NavBar from '@/components/NavBar'
import Swiper from '@/components/Swiper'
import { getHome } from '../service/home'

export default {
  name: 'home',
  components:{
      NavBar,
      Swiper
  },
  data () {
    return {
        swiperList: [],
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
    const { data } = await getHome()
    console.log("data",data)
    this.swiperList = data.carousels
    console.log("swiperList",this.swiperList)
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
@import '../common/style/mixin';
.home-header{
    position: fixed;
    left: 0;
    top: 0;
    .wh(100%,50px);
    .fj();
    line-height: 50px;
    padding: 0 15px;
    font-size: 15px;
    .boxSizing();
    color: #fff;
    z-index: 10000;
    .nbmenu2{
        color: @primary;
    }
    &.active{
        background: @primary;
        .nbmenu2{
            color: #fff;
        }
        .login{
            color: #fff;
        }
    }

    .header-search{
        display: flex;
        .wh(74%,20px);
        line-height: 20px;
        margin: 10px 0;
        padding: 5px 0; 
        color: #232326;
        background: rgba(255,255,255,.7);
        .borderRadius(20px);
        .app-name{
            padding: 0 10px;
            .sc(20px,@primary);
            font-weight: bold;
            border-right: 1px solid #666;
        }
        .icon-search{
            padding: 0 10px;
            font-size: 17px;
        }
        .search-title{
            .sc(12px,#666);
            line-height: 21px;
        }
    }
    .icon-iconyonghu{
        .sc(22px,#fff);
    }
    .login{
        color: @primary;
        line-height: 52px;
        .van-icon-manager-o{
            font-size: 20px;
            vertical-align: -3px;
        }
    }
}
</style>
