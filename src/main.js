import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import VueCurrencyFilter from 'vue-currency-filter'
import VueTheMask from 'vue-the-mask'
import 'bulma/css/bulma.css'
import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Buefy, {defaultIconPack: 'fas'})
Vue.use(VueTheMask)
Vue.use(require('vue-moment'))
Vue.use(VueCurrencyFilter,
    {
        symbol: 'R$',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: true
    })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
