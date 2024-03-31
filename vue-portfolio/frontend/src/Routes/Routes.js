import { createRouter, createWebHistory } from 'vue-router';
import Alpha from '../components/Alpha/Alpha.vue';
import Projectinfo from '../components/Main/Project/Projectinfo.vue';
import Failure from '../components/Failure/Failure.vue';

const routes = [
    { 
        path: '/', 
        component: Alpha,
        props: true
    },
    { 
        path: '/projectinfo/:id',
        name: 'Projectinfo',
        component: Projectinfo,
        props: true
    },
    { 
        path: '/:catchAll(.*)',
        component: Failure,
        name: 'Failure',
        props: true
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;