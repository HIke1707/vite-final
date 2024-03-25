import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'User',
    component: () => import('../views/user/UserLayout.vue'),
    children: [
      {
        path: '',
        name: 'UserHome',
        component: () => import('../views/user/UserHome.vue')
      },
      {
        path: '/products',
        name: 'UserProducts',
        component: () => import('../views/user/UserProducts.vue')
      },
      {
        path: '/productsdetail/:id',
        name: 'ProductDetail',
        component: () => import('../views/user/ProductDetail.vue'),
        props: true
      },
      {
        path: '/cart',
        name: 'cart',
        component: () => import('../views/user/CartPage.vue')
      },
      {
        path: '/love',
        name: 'love',
        component: () => import('../views/user/LoveProducts.vue')
      },
      {
        path: '/checkout',
        name: 'checkout',
        component: () => import('../views/user/OrderPage.vue')
      },
      {
        path: '/payment/:id',
        name: 'payment',
        component: () => import('../views/user/PaymentPage.vue'),
        props: true
      },
      {
        path: '/checkout_success',
        name: 'checkout_success',
        component: () => import('../views/user/CheckoutSuccess.vue')
      }
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin_Layout.vue'),
    children: [
      {
        path: 'products',
        name: 'Product',
        component: () => import('../views/admin/AdminProductList.vue')
      },
      {
        path: 'uploadpic',
        name: 'UploadPic',
        component: () => import('../views/admin/UpLoadPic.vue')
      },
      {
        path: 'order',
        name: 'OrderManagement',
        component: () => import('../views/admin/OrderManagement.vue')
      },
      {
        path: 'coupon',
        name: 'CouponManagement',
        component: () => import('../views/admin/CouponManagement.vue')
      },
      {
        path: 'article',
        name: 'ArticleManagement',
        component: () => import('../views/admin/ArticleManagement.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'LoginVue',
    component: () => import('../views/LoginVue.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
});

export default router;
