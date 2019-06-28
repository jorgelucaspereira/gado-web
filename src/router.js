import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        // {path: '/home', component: () => import('./App')},
        {path: '/spent', component: () => import('./pages/spent/List')},
        {path: '/output', component: () => import('./pages/output/List')},
        {path: '/input', component: () => import('./pages/input/List')},
        {path: '/animal', component: () => import('./pages/animal/List')},
        {path: '/animal-type', component: () => import('./pages/animalType/List')},
        {path: '/medicine', component: () => import('./pages/medicine/List')},
        {path: '/medicine-type', component: () => import('./pages/medicineType/List')},
        {path: '/stock', component: () => import('./pages/stock/List')},
        {path: '/product', component: () => import('./pages/product/List')},
        {path: '/lot', component: () => import('./pages/lot/List')},
        {path: '/terrain', component: () => import('./pages/terrain/List')},
        {path: '/user', component: () => import('./pages/user/List')},
        {path: '/seller', component: () => import('./pages/seller/List')},
    ]
})
