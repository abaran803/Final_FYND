import Vue from 'vue'
import App from './App.vue'
import router from './routes/Routes'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')







// Remaining Tasks
// Delete ProductComp
// Seller id while uploading single product
// Images of the product