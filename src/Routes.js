import Vue from 'vue';
import Router from 'vue-router';
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'
import Login from './components/Login'
import Secure from './components/Secure'
import store from './store'
//import VueRouter from 'vue-router';

Vue.use(Router);

const ROUTES = [{
    path: '/',
    redirect : {
        name: 'login'
    }

},
{
    path : '/login',
    name : 'login',
    component : Login
},
{
    path : '/secure',
    name : 'secure',
    component : Secure,
    beforeEnter : (to, from, next) => {
       console.log(store,'==Store')
        if(store.state.authenticated == false) {
            next('/login'); // don't proceed for the next route
        } else {
            next();
        }

    }
},
{
    path : '/page-one',
    name : 'page-one',
    component : PageOne
},
{
    path : '/page-two',
    name : 'page-two',
    component : PageTwo
}]


export default new Router({
    mode: 'history',
    routes: ROUTES
})

// Router.beforeEach((to, from, next) => {
//   next()
// })

// or we can write below
// const router  = new VueRouter({
//     mode: 'history',
//     base: '',
//     routes:ROUTES
// })

// export default router