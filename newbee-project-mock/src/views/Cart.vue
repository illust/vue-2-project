<!--  -->
<template>
  <div class="cart">
    <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cart',
  data () {
    return {
    }
  }
}
</script>

<style  lang="less" scoped>
.cart{
  margin:0;
  padding:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #89179e;
}
.loader{
  position: relative;
  width: 250px;
  height: 250px;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(70deg);

  span{
    position:absolute;
    display: block;
    border: 4px solid rgb(255, 255, 255);
    box-sizing: border-box;
    border-radius: 50%;
  }
  span:nth-child(1){
    top:0;
    left:0;
    right:0;
    bottom:0;
  }
  span:nth-child(2){
    top:10px;
    left:10px;
    right:10px;
    bottom:10px;
    border: 4px solid rgb(231, 87, 87);

  }
  span:nth-child(3){
    top:20px;
    left:20px;
    right:20px;
    bottom:20px;
    border: 4px solid rgb(63, 60, 231);
  }
  span:nth-child(4){
    top:30px;
    left:30px;
    right:30px;
    bottom:30px;
    border: 4px solid rgb(0, 248, 95);
  }
  span:nth-child(5){
    top:70px;
    left:70px;
    right:70px;
    bottom:70px;
    border: 6px solid rgb(252, 165, 3);
    transform-style: preserve-3d;
    transform: perspective(300px) rotateX(30deg);
  }
}

</style>
