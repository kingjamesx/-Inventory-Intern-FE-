// const token=localStorage.getItem('token')
const routes = [
  {
    path: "/",
    component: () => import("src/pages/BaseLogin.vue"),
  },
  {
    path: "/signup",
    component: () => import("src/pages/BaseRegister.vue"),
  },
  ,
  {
    path: "/forgot-password", 
    component: () => import("src/pages/ForgetPassword.vue"),
  },
  {
    path: "/dashboard",
    component: () => import("layouts/MainLayout.vue"),
    beforeEnter: (to, from, next) => {
      if(true){
        next()
      }else{
        next('/')
      }
    },
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "/inventory",
        component: () => import("pages/BaseInventory.vue"),
      },
      {
        path: "/createinventory",
        component: () => import("pages/BaseCreateInventory.vue"),
      },
    ],
  },
 
 

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;