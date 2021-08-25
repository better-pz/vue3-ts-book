// import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import todoList from './views/todoList.vue';

// const routerHistory = createWebHistory()
// const router = createRouter({
//   history: routerHistory,
//   routes: [
//     {
//       path: '/home',
//       name: 'home',
//       component: Home
//     },
    
//   ]
// })


// export default router
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/list",
    name: "list",
    component: todoList,
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
