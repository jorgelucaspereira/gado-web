import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/home', component: () => import('./pages/home/Home')},
        {path: '/tabs-financial', component: () => import('./pages/financialMenu/Tabs')},
        {path: '/tabs-animal', component: () => import('./pages/animalMenu/Tabs')},
    ]
})
