import { createRouter, createWebHistory } from 'vue-router';

import Home from './components/Home.vue';
import ProductList from './components/ProductList.vue';
import ProductForm from './components/ProductForm.vue';
import NotFound from './components/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Home },
        { path: '/products', component: ProductList, name: 'products' },
        { path: '/products/add', component: ProductForm },
        { path: '/products/export', component: ProductList, name: 'export' },
        { path: '/:catchAll(.*)', component: NotFound }
    ]
});

export default router;