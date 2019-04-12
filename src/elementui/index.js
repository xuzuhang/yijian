//管理element组件
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css';
import { Button,Row, Col,Container, Header,
    Aside,
    Main,
    Footer,Slider } from 'element-ui';
export default  function (){
    Vue.use(Button)
    Vue.use(Row)
    Vue.use(Col)
    Vue.use(Slider)
    Vue.use(Container)
    Vue.use(Header)
    Vue.use(Aside)
    Vue.use(Main)
    Vue.use(Footer)
}