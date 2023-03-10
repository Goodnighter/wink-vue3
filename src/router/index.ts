import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path:'/login',
    name: 'Ligon',
    meta: {
      title: 'login',
      keepAlive: true,
    },
    component: () => {
      console.log();
      
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;