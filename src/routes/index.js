import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from '@/pages/home/HomePage';

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        name: 'recordList',
        path: '/records',
        component: () => import('@/pages/records/list/RecordListPage')
    },
    {
        name: 'recordItem',
        path: '/records/:id',
        component: () => import('@/pages/records/item/RecordItemPage')
    }
];

export default new VueRouter({
    routes,
    mode: 'history'
});