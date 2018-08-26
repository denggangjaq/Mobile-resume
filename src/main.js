import Vue from "vue"
import app from "./App.vue"
// 导入bootstrap样式
import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css'

// 导入 MUI 的样式表， 和 Bootstrap 用法没有差别
import './lib/mui/css/mui.min.css'
// 导入所有的 MIntUI 组件
// 导入 Mint-UI
// import MintUI from 'mint-ui' //把所有的组件都导入进来
// // 这里 可以省略 node_modules 这一层目录
// import 'mint-ui/lib/style.css'
// // 将 MintUI 安装到 Vue 中
// Vue.use(MintUI) // 把所有的组件，注册为全局的组件

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
// console.log(Button.name)

var vm = new Vue({
	el:'#app',
	render:c => c(app) 
})