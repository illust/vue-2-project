<!--  -->
<template>
  <!-- <div class="cart"> -->
    <!-- <div class="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div> -->
    <div id="lopp">
      <div class="rectangle rec1">上市公司</div>
      <div class="rectangle rec2">主体运营</div>
      <div class="rectangle rec3">业务经营</div>
      <div class="rectangle rec4">金融单位</div>
    </div>
  <!-- </div> -->
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



@keyframes animX{
	0% {left: 0px;}
	100% {left: 300px;}
}

@keyframes animY{
	0% {top: 0px;}
	100% {top: 180px;}
}
 @keyframes scale {

    0% {
      transform: scale(0.7)
    }
    50% {
      transform: scale(1)
    }
    100% {
      transform: scale(0.7)
   }
}

 
.rectangle {
	width: 60px;
	height: 60px;
	background-color: #f66;
	border-radius: 90%;
	position: absolute;
  color:#fff;
  font-size:16px;
  display:flex;
  align-items:center;
  justify-content:center;
}
//7个圆,x和y轴动画加起来是20s , 20s/7 约等于 2.857s
//每个球y轴动画延迟 从0递减2.857s,x轴与y相差动画时长的一半（10s/2）
 .rec1 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -5s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) 0s infinite alternate;

  }

  .rec2 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -7.857s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -2.857s infinite alternate;
  }

  .rec3 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -10.714s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -5.714s infinite alternate;
  }

  .rec4 {
    animation: animX 10s cubic-bezier(0.36, 0, 0.64, 1) -13.571s infinite alternate,
    animY 10s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate,
    scale 20s cubic-bezier(0.36, 0, 0.64, 1) -8.571s infinite alternate;
  }

#lopp {
	width: 300px;
	height: 160px;
	border: 2px solid #999;
	border-radius: 50%;
	position: absolute;
	left: 50px;
	top: 80px;
}



</style>
