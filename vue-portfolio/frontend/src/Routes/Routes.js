import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue'
import Failure from '../components/Failure/Failure.vue';

const routes = [
    { path: '/', component: App},
    { path: '/:catchAll(.*)', component: Failure },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;