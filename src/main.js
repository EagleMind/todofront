import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SecondMenu from "@/components/SecondMenu";

Vue.config.productionTip = false
Vue.component('todo-secondmenu',SecondMenu)

new Vue({
  render: h => h(App),
}).$mount('#app')
