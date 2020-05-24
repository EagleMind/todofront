import Vue from 'vue'
import App from './App.vue'
import Menu from "@/components/Menu";
import NoteBox from "@/components/NoteBox";
import SecondMenu from "@/components/SecondMenu";

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
Vue.config.productionTip = false
Vue.component('menu',Menu)
Vue.component('secondmenu',SecondMenu)
Vue.component('notebox',NoteBox)
new Vue({
  render: h => h(App),
}).$mount('#app')
