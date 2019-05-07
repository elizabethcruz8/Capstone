import Vue from "vue";
import Router from "vue-router";
import Signup from "./views/Signup.vue";
import Login from "./views/Login.vue";
import Logout from "./views/Logout.vue";
import Index from "./views/Index.vue";
import Posts from "./views/Posts.vue";
import HobbiesShow from "./views/HobbiesShow.vue";
import UserShow from "./views/UserShow.vue";
import Chat from "vue-beautiful-chat";

Vue.use(Chat);

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
    },

    {
      path: "/Logout",
      name: "Logout",
      component: Logout
    },

    {
      path: "/hobbies/:id",
      name: "HobbiesShow",
      component: HobbiesShow
    },

    {
      path: "/Posts",
      name: "Posts",
      component: Posts
    },

    {
      path: "/users/:id",
      name: "UserShow",
      component: UserShow
    }
  ]
});
