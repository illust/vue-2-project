<template>
  <div id="app">
    <ThirdScreen msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import SecondScreen from './views/shanghaiScreen/SecondScreen.vue'
import ThirdScreen from './views/shanghaiScreen/ThirdScreen.vue'

export default {
  name: 'App',
  components: {
    ThirdScreen
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
</style>
