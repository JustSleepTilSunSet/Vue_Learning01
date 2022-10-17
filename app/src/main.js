import Vue from 'vue' //原本的配置
// import Vue from 'vue/dist/vue'// resolve run time error, but what there difference?
import App from './App.vue'

new Vue({
  render: h => h(App),
  el: '#app'
}).$mount('#app');

// new Vue({
//   el: '#a2'
// }).$mount('#a2');
