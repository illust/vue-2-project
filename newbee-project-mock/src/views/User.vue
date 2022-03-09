<!--  -->
<template>
      <section>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </section>
</template>

<script>
export default {
  name: "user",
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import '../common/style/mixin';

section{
    .wh(200px,200px);
    display: block;
    margin: 0 auto;
}

div{
    position: absolute;
    left: 50%;
    top: 50%;
    display: block;
    background-color: transparent;
    border: 10px solid rgb(66,246,256,1.0);
    border-radius: 50%;
}

div:first-child{
    margin-left: -10px;
    margin-top: 10px;
    width: 260px;
    height: 260px;
    border-color: #e000c9;
    border-left-color: transparent;
    border-right-color: transparent;
}

div:nth-child(2){
    margin-left: -3px;
    margin-top: 20px;
    width: 240px;
    height: 240px;
    border-color: #bdeb34;
    border-top-color: transparent;
    border-bottom-color: transparent;
}

div:nth-child(3){
    margin-left: 7px;
    margin-top: 28px;
    width: 220px;
    height: 220px;
    border-color: #7400ad;
    border-top-color: transparent;
    border-left-color: transparent;
}

div:nth-child(4){
    margin-left: 18px;
    margin-top: 38px;
    width: 200px;
    height: 200px;
    border-color: #0049d8;
    border-top-color: transparent;
    border-bottom-color: transparent;
}

div:nth-child(5){
    margin-left: 7px;
    margin-top: 28px;
    width: 180px;
    height: 180px;
    border-color: #0089ed;
    border-right-color: transparent;
    border-left-color: transparent;
}

div:nth-child(6){
    margin-left: 28px;
    margin-top: 48px;
    width: 160px;
    height: 160px;
    border-color: #f51238;
    border-top-color: transparent;
    border-left-color: transparent;
}

div:last-child{
    margin-left: 38px;
    margin-top: 58px;
    width: 140px;
    height: 140px;
    border-color: #f3630f;
    border-top-color: transparent;
    border-bottom-color: transparent;
}
</style>
