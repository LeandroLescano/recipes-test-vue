import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../views/ListView.vue"),
  },
  {
    path: "/recipes",
    name: "Recipes",
    component: () => import("../views/ListRecipes.vue"),
  },
  {
    path: "/recipe/:id",
    name: "Recipe",
    component: () => import("../views/RecipeView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
