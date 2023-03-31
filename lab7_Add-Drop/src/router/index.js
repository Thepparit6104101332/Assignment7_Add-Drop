import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/ประกาศข่าวสาร',
      name: 'Paka',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PakaView.vue')
    },
    {
      path: '/รายชื่อวิชาในแผนการเรียน',
      name: 'Namesubject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Namesubject.vue')
    },
    {
      path: '/การเพิ่มถอนวิชา',
      name: 'Addsubject',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Addsubject.vue')
    }

    
    
  ]
})

export default router
