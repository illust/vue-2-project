<!--  -->
<template>
  <div class="login">
    <s-header :name="type == 'login'?'登录':'注册'" :back="'/home'"></s-header>
    <img src="//s.weituibao.com/1582958061265/mlogo.png" alt="" class="logo">
    <div v-if="type == 'login'" class="login-body login">
      <van-form @submit="onSubmit">
        <van-field 
          v-model="username"
          name="username"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required:true,message:'请填写用户名'}]"
          />
        <van-field 
          v-model="password"
          type="password"
          name="password1"
          label="密码"
          placeholder="密码"
          :rules="[{ required:true,message:'请填写密码'}]"
          />
          <div class="verify">
            <Verify ref="loginVerifyRef" @success="success" @error="error" :showButton="false" :width="'100%'" :height="'40px'" :fontSize="'16px'" :type="2"></Verify>
          </div>
          <div style="margin: 16px">
            <div class="link-login" @click="toggle('register')">立即注册</div>
            <van-button round block type="info" color="#1baeae" native-type="submit">登录</van-button>
          </div>
      </van-form>
    </div>
    <div v-else class="login-body register">
      <van-form @submit="onSubmit">
        <van-field
          v-model="username1"
          name="username1"
          label="用户名"
          placeholder="用户名"
          :rules="[{required: true, message:'请填写用户名'}]"
          />
        <van-field
          v-model="password1"
          type="password"
          name="password1"
          label="密码"
          placeholder="密码"
          :rules="[{required:true,message:'请填写密码'}]"
        />
        <div class="verify">
            <Verify ref="loginVerifyRef" @success="success" @error="error" :showButton="false" :width="'100%'" :height="'40px'" :fontSize="'16px'" :type="2"></Verify>
        </div>
        <div style="margin: 16px;">
          <div class="link-login" @click="toggle('login')">已有登录账户</div>
          <van-button round block type="info" color="#1baeae" native-type="submit">注册</van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import {login, register} from '../service/user'
import {setLocal} from '../common/js/utils'
import sHeader from '@/components/SimpleHeader'
import Verify from 'vue2-verify'
import {Toast} from 'vant'
export default {
  components: { sHeader,Verify },
  name: 'login',
  data () {
    return {
      type: 'login',
      verify: false
    }
  },
  methods:{
    dealTriVer(){
      // 执行验证码的验证
      this.$refs.loginVerifyRef.$refs.instance.checkCode()
    },
    toggle(v){
      this.type = v;
      this.verify = false;
    },
    async onSubmit(values){
      this.dealTriVer();
      if(!this.verify){
        Toast.fail('验证码未填或填写错误！')
        return
      }
      if(this.type == 'login'){
        const {data, responseCode} = await login({
          "loginName": values.username,
          "passwordMd5": this.$md5(values.password)
        })
        setLocal("token",data)
        window.location.href = '/'
        console.log(responseCode);
      }else{
        const {data, responseCode} = await register({
          "loginName": values.username1,
          "password": values.password1
        })
        Toast.success('注册成功')
        this.type = 'login'
        console.log(data);
        console.log(responseCode);
      }
    }
  }
}
</script>

<style  scoped>

</style>
