<!--  -->
<template>
  <div class="login">
    <s-header :name="type == 'login'?'登录':'注册'" :back="'/home'"></s-header>
    <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="" class="logo">
    <div v-if="type == 'login'" class="login-body login">
      
    </div>
    <div v-else class="login-body register">

    </div>
  </div>
</template>

<script>
import sHeader from '@/components/SimpleHeader'
export default {
  components: { sHeader },
  name: 'login',
  data () {
    return {
      type: 'login'
    }
  }
}
</script>

<style  scoped>

</style>
