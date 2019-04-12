<template>
  <div class="login" :style="{height:heights}">
      <div class="login-main">
           <div class="flexbet">
              <router-link to="/"><img class="login-logo" src="../assets/common/header-logo.png" alt=""></router-link>
              <router-link to="/" class="backs">返回首页</router-link>
             
          </div>
          <div class="login-scan">
               <div class="scan-title">
                   扫一扫
               </div>
               <div class="login-show">
                   <div v-if="suc==0">
                       <img class="erweima" src="../assets/login/login_weixin.png" alt=""> 
                         <p>微信扫一扫，直接登录</p> 
                   </div>
                    <div v-else>
                        <img class="success" src="../assets/login/login-success.png" alt="">
                        <p class="suc">微信登录成功！</p>
                    </div>
                   
               </div>
          </div>
          
      </div>
      <p class="login-bot">@自控智能设计   糯米广告  （浙江宁波宝乐信息科技有限公司）</p>
  </div>
</template>

<script>
import { setInterval, clearInterval } from 'timers';
export default {
  name: 'login',
  mounted() {
      this.heights = document.documentElement.clientHeight  + "px"
      var time = 0
      this.times = setInterval(()=>{
          time++
          if(time == 5){
              this.suc = 1
              clearInterval(this.times)
          }
      },1000)
  },
  data () {
    return {
        heights:0,
        suc:0
    }
  }
}
</script>
<style scoped>
    .login{
        background: #f4f4f4;
        & .login-main{
            width: 1120px;
            margin:0 auto;
            & .login-logo{
                width: 234px;
                height: 60px;
                margin: 77px 0 20px;
            }
             & .backs{
                color: #f81801;
                font-size:14px;
                margin: 117px 0 20px;
                font-weight: 600;
            }
            & .scan-title{
                width: 1120px;
                height: 80px;
                background-color: var(--maincolor);
                line-height: 80px;
                text-align: center;
                color: #fff;
                font-size: 24px;
            }
            & .login-show{
                height: 504px;
                background: #fff;
                text-align: center;
                font-size: 14px;
                color: var(--mainbgblack);
                & .erweima{
                    width: 250px;
                    height: 250px;
                    margin:91px 0 21px;
                }
                & .success{
                    width: 105px;
                    height: 105px;
                    margin: 160px 0 53px;
                }
                & .suc{
                    font-weight: 600;
                    font-size: 18px;
                    color: #797979;
                }
            }
        }
        & .login-bot{
            text-align: center;
            color: var(--mainbgblack);
            font-size: 12px;
            margin-top: 47px;
        }
    }
</style>