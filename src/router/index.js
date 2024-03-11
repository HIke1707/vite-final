import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/admin/Admin_Layout.vue'),
    children: [
      {
        path: '',
        name: 'LoginVue',
        component: () => import('../views/admin/LoginVue.vue')
      },
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
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  linkActiveClass: 'active',
  routes
});

export default router;
