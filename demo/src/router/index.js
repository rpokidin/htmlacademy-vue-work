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
      name: 'Counter Base',
      component: () => import("../demo0/DemoCounter.vue"),
    },
    ...routes,
  ],
});

export default router;
