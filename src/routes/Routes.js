import Vue from 'vue';
import VueRouter from 'vue-router'
import LoginCompVue from '../pages/LoginComp.vue'
import UserApp from '../components/UserApp.vue'
import RegistrationCompVue from '../pages/RegistrationComp.vue'
import CategoriesCompVue from '../pages/CategoriesComp.vue';
import ProductsCompVue from '../pages/ProductsComp.vue';
import SearchResultsVue from '../pages/SearchResults.vue';
import HomePage from '../pages/HomePage.vue';

Vue.use(VueRouter);

const checkAuthForApp = (to, from, next) => {

    let isAuthenticated = false;

    if(localStorage.getItem('isUserExist')) {
        isAuthenticated = true;
    }

    if(isAuthenticated) {
        next();
    } else {
        next('/login')
    }

}

const checkAuthBeforeApp = (to, from, next) => {

    let isAuthenticated = false;

    if(localStorage.getItem('isUserExist')) {
        isAuthenticated = true;
    }

    if(!isAuthenticated) {
        next();
    } else {
        next('/app')
    }

}

const routes = [
    { path: '/register', component: RegistrationCompVue, beforeEnter: checkAuthBeforeApp },
    { path: '/login', component: LoginCompVue, beforeEnter: checkAuthBeforeApp },
    {
        path: '/app', component: UserApp, beforeEnter: checkAuthForApp, 
        children: [
            {path: '', component: HomePage},
            {path: 'categories', component: CategoriesCompVue}, 
            {path: 'products', component: ProductsCompVue}, 
            {path: 'search', component: SearchResultsVue}
        ]
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})

export default router