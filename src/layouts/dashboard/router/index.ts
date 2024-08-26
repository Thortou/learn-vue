import type { RouteRecordRaw } from 'vue-router'

export const dashboardRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'dashboard',
    component: () => import('../view/AppHomePage.vue'),
  },
]
