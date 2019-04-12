<template>
  <div class="footer">
      <div class="w1200">
          <div class="footer-left">
             <div class="footer-nav">
                <router-link to="/aa">软件介绍</router-link><span>|</span><router-link to="/aa">关于自控</router-link><span>|</span><router-link to="/aa">常见问题 </router-link><span>|</span><router-link to="/aa"> 网站声明 </router-link><span>|</span><router-link to="/aa">关于我们</router-link> 
             </div>
             <div class="information">
                <ul class="information-top flexbet">
                    <li> <img src="../../assets/common/footer-icon1.jpg" alt=""> 132-5666-6266 </li>
                    <li> <img src="../../assets/common/footer-icon2.jpg" alt=""> 78072356 </li>
                    <li> <img src="../../assets/common/footer-icon3.jpg" alt=""> 132-5666-6266 </li>
                </ul>
                <p class="information-mid"><img src="../../assets/common/footer-icon4.jpg" alt="">浙江省宁波市象山县天安路1111号大目湾开发管理委员会</p>
                <p class="information-bot">@自控智能设计 糯米广告（浙江宁波宝乐信息科技有限公司）</p>
             </div>
          </div>
          <div class="footer-logo">
              <img src="../../assets/common/footer-logo.png" alt="">
          </div>
          <div class="footer-right">
              <img src="../../assets/common/footer-wexin.jpg" alt="">
              <p>扫一扫，加入我们</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .footer{
       
         background-color: var(--mainbgblack);
         height: 270px;
         color: #fff;
        overflow: hidden;
         & .w1200{
            display: flex;
             & .footer-nav{
                  margin:84px 0 20px; 
                 font-size:14PX;
                 & span{
                    margin: 0 25px;
                 }
             }
             & .information{
                width: 407px;
                  font-size: 12px;
                  & img{
                    vertical-align: middle;
                    width:20px;
                    height:20px;
                    margin-top:-2px;
                  }  
                & .information-mid{
                  margin: 10px 0;
                }
                & .information-bot{
                  font-size: 10px;
                }
             }
             & .footer-logo{
               margin: 110px 225px 0 134px;
                & img{
                  width: 215px;
                  height: 65px;
                }
             }
             & .footer-right{
                font-size:10px;
                margin-top: 86px;
                text-align: center;
                & img{
                  width: 80px;
                  height: 80px;
                  margin-bottom:10px;
                } 
             }
         }
      
    }
</style>