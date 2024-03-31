import { createRouter, createWebHistory } from 'vue-router';
import Alpha from '../components/Alpha/Alpha.vue';
import Failure from '../components/Failure/Failure.vue';

const routes = [
    { path: '/', 
    name: 'Alpha',
    component: Alpha },
    { path: '/:catchAll(.*)', 
    name: 'Failure',
    component: Failure },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;