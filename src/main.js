import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './Routes';
import store from './store'
Vue.config.productionTip = false

Vue.directive('rainbow', {
  bind(el, binding, vnode){
    console.log(binding)
    console.log(vnode)
    el.style.color = "#" + Math.random().toString().slice(2,8);
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
});