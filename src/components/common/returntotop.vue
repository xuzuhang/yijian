<template>
  <div class="return">
      <div class="return-top">
          <img class="juzhong" src="../../assets/common/top-phone.png" alt="">
      </div>
      <div class="return-bottom" @click="gotop">
          <img class="juzhong" src="../../assets/common/top-top.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
  name: 'return',
  data () {
    return {
      
    }
  },
  methods: {
      gotop(){
           //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
            window.scrollBy(0,-800);
            //延时递归调用，模拟滚动向上效果
            this.scrolldelay = setTimeout(this.gotop,100);
            //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
            var sTop=document.documentElement.scrollTop+document.body.scrollTop;
            //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
            if(sTop==0) {
                clearTimeout(this.scrolldelay)
            }
      }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .return{
        position: fixed;
        z-index: 10000;
        right: 40px;
        top: 450px;
        box-shadow: 0 0 5px #cccccc; 
        border: 1px solid #cccccc;
    }
    .return>div{
        width: 85px;
        height: 85px;
        position: relative;
    }
    .return-top{
        border-bottom:1px solid #ccc; 
    }
</style>
