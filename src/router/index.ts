import { dashboardRoute } from '@/layouts/dashboard/router'
import { UserEntity } from '@/modules/core/users/entities/user.entity';
import { useAuthStore } from '@/modules/ui/auth/store/AuthStore';
import { userRoute } from '@/modules/users/routers'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login.index',
      component: () => import('../modules/ui/auth/views/LoginView.vue') 
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../layouts/MainLayout.vue') ,
      children: [
        ...dashboardRoute,
        ...userRoute
      ]
    },
    {
      path: '/topbar',
      name: 'topbar',
      component: () => import('../layouts/AppTopbar.vue') ,
    },
  ]
})
// router.beforeEach((to, from, next) => {
//   const userDataString = localStorage.getItem('auth')
//   if (!userDataString) {
//       if (to.name !== 'login.index' && !to.meta.skipAuthCheck) {
//           next({name: 'login.index'})
//       } else {
//           next()
//       }
//       return
//   }
//   const user = JSON.parse(userDataString) as UserEntity
//   const isAdmin = user.roles.some((role) => role.name === 'super-admin' || role.name === 'admin')
//   if (isAdmin) {
//       next()
//       return
//   }
//   const requiredPermissions = to.meta.permissions as string[]
//   if (!requiredPermissions) {
//       next()
//       return
//   }
//   const hasPermission = user.roles.some((role) => {
//       return role.permissions.some((permission) => requiredPermissions.includes(permission.name))
//   })
//   if (hasPermission) {
//       next()
//   } else {
//       next({name: 'none-permission.index'})
//   }
// })
export default router
