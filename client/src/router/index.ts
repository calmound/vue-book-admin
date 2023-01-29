import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      redirect: "/borrow_book",
    },
    {
      path: "/borrow_book",
      component: () => import("../views/borrow-book/index.vue"),
    },
    {
      path: "/tag",
      component: () => import("../views/tag/index.vue"),
    },
    {
      path: "/book",
      component: () => import("../views/book/index.vue"),
    },
    {
      path: "/user",
      component: () => import("../views/user/index.vue"),
    },
  ],
});

export default router;
