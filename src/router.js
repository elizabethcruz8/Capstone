import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: Index
    },

    {
      path: "/Signup",
      name: "signup",
      component: Signup
    },

    {
      path: "/Login",
      name: "Login",
      component: Login
    }
  ]
});
