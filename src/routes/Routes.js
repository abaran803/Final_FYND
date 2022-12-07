import Vue from 'vue';
import VueRouter from 'vue-router'
import LoginCompVue from '../pages/LoginComp.vue'
import UserApp from '../components/UserApp.vue'
import RegistrationCompVue from '../pages/RegistrationComp.vue'
import CategoriesCompVue from '../pages/CategoriesComp.vue';
import ProductsCompVue from '../pages/ProductsComp.vue';
import SearchResultsVue from '../pages/SearchResults.vue';
import HomePage from '../pages/HomePage.vue';
import UploadDataVue from '@/components/UploadData.vue';
import UploadSingleVue from '@/pages/UploadSingle.vue';
import UploadBulkDataVue from '@/pages/UploadBulkData.vue';
import ProfileFullVue from '@/pages/ProfileFull.vue';
import ProfileOverviewVue from '@/pages/ProfileOverview.vue';
import CategorySingleVue from '@/pages/CategorySingle.vue';
import ProductDetailsVue from '@/pages/ProductDetails.vue';
import AccountPersonVue from '@/pages/AccountPerson.vue';
import CheckoutPageVue from '@/pages/CheckoutPage.vue';
import CartPage from '@/pages/CartPage.vue';

Vue.use(VueRouter);

const checkTrustedUser = (to, from, next) => {

    let isAuthenticated = false;

    // Check login Here
    // if(localStorage.getItem('isUserExist')) {
    //     isAuthenticated = true;
    // }

    if(isAuthenticated) {
        next();
    } else {
        next('/app/profile/overview/'+to.params.id)
    }

}

const checkLocalOfficeOwner = (to, from, next) => {

    let isAuthenticated = true;

    // Check login Here
    // if(localStorage.getItem('isUserExist')) {
    //     isAuthenticated = true;
    // }

    if(isAuthenticated) {
        next();
    } else {
        next('/app')
    }

}

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
    { path: '/', redirect: '/login' },
    {
        path: '/app', component: UserApp, beforeEnter: checkAuthForApp, 
        children: [
            {path: '', component: HomePage},
            {path: 'categories', component: CategoriesCompVue}, 
            {path: 'products', component: ProductsCompVue}, 
            {path: 'search/:id', component: SearchResultsVue},
            {path: 'upload', component: UploadDataVue, children: [
                {path: 'single', component: UploadSingleVue},
                {path: 'bulk', component: UploadBulkDataVue, beforeEnter: checkLocalOfficeOwner}
            ]},
            {path: 'profile/full/:id', component: ProfileFullVue, beforeEnter: checkTrustedUser},
            {path: 'profile/overview/:id', component: ProfileOverviewVue},
            {path: 'category/:catName', component: CategorySingleVue},
            {path: 'product/:id', component: ProductDetailsVue},
            {path: 'account', component: AccountPersonVue},
            {path: 'checkout', component: CheckoutPageVue},
            {path: 'cart', component: CartPage}
        ]
    }
]

const router = new VueRouter({
    linkActiveClass: 'active',
    routes
})

export default router