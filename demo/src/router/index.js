import { createRouter, createWebHistory } from "vue-router";
import routes from '../routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../components/DemoMenu.vue"),
    },
    {
      path: '/counter-0',
      name: 'Counter Base 0',
      component: () => import("../demo0/DemoCounter.vue"),
    },
    {
      path: '/counter-1',
      name: 'Counter Base 1',
      component: () => import("../demo1/DemoCounter.vue"),
    },
    ...routes,
  ],
});

export default router;
