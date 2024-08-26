import type { RouteRecordRaw } from 'vue-router'

export const userRoute: RouteRecordRaw[] = [
  {
    path: '/findAllUser',
    name: 'findAllUser',
    component: () => import('../views/UserView.vue'),
  },
]
