<template>
  <div class="index">
      <Headers></Headers>
      <Return></Return>
      <div class="banner">
          <img src="../assets/index/index-banner.png" alt="">
      </div>
      <div class="index-main w1200">
          <div class="index-printing">
             <h3 class="index-title">印刷设计</h3>
             <ul class="printing-content flexdes">
                  <li v-for="(item,index) in listdata" :key="index">
                      <div class="main-item-img">
                         <img class="juzhong" :src="item.img" alt="">
                      </div>
                      <p class="main-item-str">{{item.title}}</p>
                  </li>
                  <li class="add">
                      <div class="main-item-img" style="background:#fff;">
                         <img class="juzhong" src="../assets/index/home_add.png" alt="">
                      </div>
                      <p class="main-item-str">自定义尺寸</p>
                  </li>
             </ul>
          </div>
      </div>

      <div class="index-officebg">
           <div class="index-office w1200">
             <h3 class="index-title" style="color:#6f6767;">电商办公素材</h3>
             <ul class="printing-content flexdes" >
                  <li v-for="(item,index) in listdata" :key="index">
                      <div class="main-item-img" style="background:#fff;">
                         <img class="juzhong" :src="item.img" alt="">
                      </div>
                      <p class="main-item-str">{{item.title}}</p>
                  </li>
                  <li class="btns">
                      查看更多>
                  </li>
             </ul>
          </div>
      </div>

      <div class="index-main w1200">
          <div class="index-printing">
             <h3 class="index-title" style="margin-top:65px;">LOGO</h3>
             <ul class="printing-content flexdes">
                  <li v-for="(item,index) in listdata" :key="index">
                      <div class="main-item-img">
                         <img class="juzhong" :src="item.img" alt="">
                      </div>
                      <p class="main-item-str">{{item.title}}</p>
                  </li>
             </ul>
          </div>
      </div>

      <div class="index-officebg" style="margin-bottom:90px;">
           <div class="index-office w1200">
             <h3 class="index-title" style="color:#6f6767;">程序开发</h3>
             <ul class="printing-content flexdes" >
                  <li v-for="(item,index) in listdata" :key="index">
                      <div class="main-item-img" style="background:#fff;">
                         <img class="juzhong" :src="item.img" alt="">
                      </div>
                      <p class="main-item-str">{{item.title}}</p>
                  </li>
             </ul>
          </div>
      </div>

       <Footers></Footers>
  </div>
</template>

<script>
import Headers from "../components/common/Headers"
import Return from "../components/common/returntotop"
import Footers from "../components/common/Footers"
export default {
  name: 'index',
  components:{
   Headers,
   Return,
   Footers
  },
  data () {
    return {
      listdata:[{
         img:require("../assets/index/p1.png"),
         title:"名片"
      },{
         img:require("../assets/index/p2.png"),
         title:"宣传页"
      },
      {
         img:require("../assets/index/p3.png"),
         title:"名片"
      },
      {
         img:require("../assets/index/p2.png"),
         title:"大数据"
      },{
         img:require("../assets/index/p2.png"),
         title:"名片"
      },
      {
         img:require("../assets/index/p3.png"),
         title:"收到v阿娇"
      },
      {
         img:require("../assets/index/p2.png"),
         title:"都会片"
      },{
         img:require("../assets/index/p1.png"),
         title:"名片"
      },
      {
         img:require("../assets/index/p1.png"),
         title:"但撒谎片"
      },
      {
         img:require("../assets/index/p1.png"),
         title:"名片"
      },{
         img:require("../assets/index/p2.png"),
         title:"宣传页"
      },
      {
         img:require("../assets/index/p3.png"),
         title:"名片"
      },
      {
         img:require("../assets/index/p2.png"),
         title:"大数据"
      },{
         img:require("../assets/index/p2.png"),
         title:"名片"
      },
      {
         img:require("../assets/index/p3.png"),
         title:"收到v阿娇"
      },
      {
         img:require("../assets/index/p2.png"),
         title:"都会片"
      },{
         img:require("../assets/index/p1.png"),
         title:"名片"
      },
      {
         img:require("../assets/index/p1.png"),
         title:"但撒谎片"
      }]
    }
  }
}
</script>
<style scoped>
    .banner{
      overflow: hidden;
      text-align: center;
      margin: 106px auto 50px;
    }
    .banner img{
      width: 1200px;
      height: 360px;
    }
    .index-title{
      font-family: MicrosoftYaHei-Bold;
      font-size: 24px;
      font-weight: 600;
      font-stretch: normal;
      line-height: 48px;
      letter-spacing: -0.1px;
      color: #333333;
      margin-bottom: 30px;
    }
    .index-printing{
      margin-bottom: 70px;
    }
    .printing-content li{
      text-align: center;
      font-family: MicrosoftYaHei-Bold;
      font-size: 18px;
      font-weight:600;
      letter-spacing: -0.1px;
      color: #333333;
      margin-right:24px; 
    }
    .printing-content li:nth-of-type(6n){
      margin-right: 0;
    }
    .main-item-img{
      width: 180px;
	    height: 162px;
      background-color: #f4f4f4;
      position: relative;
    }
    .main-item-str{
      margin: 24px 0 36px;
    }
    .flexdes{
      display: flex;
      flex-wrap: wrap;
    }
    .index-officebg{
        background-color: #f4f4f4;
        padding: 45px 0 72px;
    }
    .printing-content .btns{
      width: 150px;
      height: 50px;
      background-image: linear-gradient(0deg, 
        #fea801 0%, 
        #feb901 50%, 
        #fec901 100%), 
      linear-gradient(
        #fec901, 
        #fec901);
      background-blend-mode: normal, 
        normal;
      border-radius: 25px;
      color: #fff;
      line-height: 48px;
      font-size: 16px;
      margin:36px auto 0; 
    }
</style>