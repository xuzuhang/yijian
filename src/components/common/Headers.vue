<template>
  <div class="header mainfamily">
      <div class="header-main flexbet" >
          <div class="header-left flexbet">
            <div class="header-logo bgwhite">
              <router-link to="/"><img src="../../assets/common/header-logo.png" alt=""></router-link>
            </div>
            <ul class="header-nav flexbet">
              <li><router-link to="/aa">印刷设计</router-link></li>
              <li><router-link to="/aa">电商素材</router-link></li>
              <li><router-link  to="/aa">LOGO设计</router-link></li>
              <li><router-link  to="/aa">程序开发</router-link></li>
              <li><router-link  to="/aa">加入我们</router-link></li>
            </ul>
          </div>
          <div class="header-right flexbet">
              <div class="header-btn">
                  <router-link class="btns"  to="/aa">登录</router-link>
              </div>
              <div class="header-phone flexbet">
                  <img src="../../assets/common/header-phone.png" alt="">
                  <div class="header-num">
                      <p>0574-6550-9553</p>
                      <p>132 5666 6266</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
    position: fixed;
    width: 100%;
    display: flex;
	  height: 66px;
    background-color: var(--mainbgblack);
    top: 0;
    color:#fff;
    z-index: 10000;
}
.header-main{
    width: 1200px;
    margin: 0 auto;
}
.header-logo{
   width: 154px;
  height: 46px;
  margin-top: 12px;
}
.header-logo img{
  width: 154px;
  height: 46px;
}
.header-nav{
  width: 469px;
}
.header-left{
  width: 694px;
}
.header-nav li a{
  display: block;
  height: 66px;
  line-height: 66px;
  font-size: 16px;
}
.header-right{
  width: 273px;
}
.header-btn{
  width: 100px;
}
.header-btn .btns{
  margin-top: 20px;
  text-align: center;
  width: 100px;
  height: 30px;
  display: block;
  line-height: 30px;
  color: #fff;
	background-image: linear-gradient(0deg, 
		#fea801 0%, 
		#feb901 50%, 
		#fec901 100%), 
	linear-gradient(
		#fec901, 
		#fec901);
	background-blend-mode: normal, 
		normal;
	border-radius: 15px;
  font-size: 12px;
}
.header-phone{
  width: 148px;
}
.header-phone img{
  width: 28px;
  height: 28px;
  margin-top: 22px;
}
.header-num{
  font-size: 14px;
  margin-top: 22px;
}
</style>
