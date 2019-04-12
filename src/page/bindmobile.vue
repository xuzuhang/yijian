<template>
  <div class="bindmobile" :style="{height:heights}">
      <div class="login-main">
          <div class="flexbet">
              <router-link to="/"><img class="login-logo" src="../assets/common/header-logo.png" alt=""></router-link>
              <router-link to="/" class="backs">返回首页</router-link>
             
          </div>
          
          <div class="login-scan">
               <div class="scan-title">
                   绑定手机
               </div>
               <div class="login-show">
                  <div class="input-groups">
                      <p class="phone"><input  placeholder="请输入手机号" type="text"></p>
                      <p class="yz"><input class="yanzheng" placeholder="输入验证码" type="text"><span>发送验证码</span></p>
                      <p class="btns">注册</p>
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
     
  },
  data () {
    return {
        heights:0
    }
  }
}
</script>
<style scoped>
    .bindmobile{
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
                overflow: hidden;
                & .input-groups{
                    width: 342px;
                    margin:119px auto 0;
                    & input{
                        width: 307px;
                        height: 50px;
                        border:2px soild #e5e5e5;
                        background:#f5f5f5;
                        border-radius:5px;
                        box-sizing: border-box;
                        padding: 0 10px 0 18px;
                        font-size:16px;
                        color: #333;
                    }
                    & input::placeholder{
                        color:#333;
                        
                    }
                    & .yz{
                        margin: 18px 0 81px;
                        & span{
                            display: inline-block;
                            height: 50px;
                            line-height:50px;
                            text-decoration:underline;
                            color:#ffe73d;
                            font-size:15px;
                        }
                    }
                    & .yanzheng{
                        width: 123px;
                        margin-right:26px; 
                    }
                    & .btns{
                        width: 100%;
                        height: 50px;
                        line-height: 50px;
                        color: #fff;
                        border-radius:25px;
                        font-size: 16px;
                        text-align: center;
                        background: #feb201; 
                    }
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