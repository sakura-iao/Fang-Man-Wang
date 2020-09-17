import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("../views/Main.vue")
  },
  {
    path: "/building",
    name: "Building",
    component: () => import("../views/Building/Building.vue")
  },
  {
    path: "/message",
    name: "Message",
    component: () => import("../views/Message/Message.vue")
  },
  {
    path: "/header",
    name: "Header",
    component: () => import("../components/Header.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
