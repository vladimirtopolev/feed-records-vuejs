import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '@/pages/home/HomePage';
import LoginPage from '@/pages/login/LoginPage';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        name: 'login',
        path: '/login',
        component: LoginPage
    },
    {
        name: 'recordList',
        path: '/records',
        component: () => import('@/pages/records/list/RecordListPage'),
        meta: {
            requiresAuth: true
        }
    },
    {
        name: 'recordItem',
        path: '/records/:id',
        component: () => import('@/pages/records/item/RecordItemPage'),
        meta: {
            requiresAuth: true
        }
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

// AUTHORIZATION CHECK
router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'))
    if (to.meta.requiresAuth && !user) {
        return next({ name: 'login' })
    }
    if (to.name === 'login' && user) {
        return next({ name: 'recordList' });
    }
    next();
});

export default router;