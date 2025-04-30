import { createRouter, createWebHistory } from 'vue-router'

/*************************************************************
 /* SYSTEM NAME      : scripts
 /* PROGRAM NAME     : router.js
 /* DESCRIPTION      : vue.js에서 페이지 간 이동을 위한 라우터 설정
 https://velog.io/@yjyoo/vue.js-Vue-Router-%EC%A0%95%EB%A6%AC
 /* MODIFIVATION LOG :
 /* DATA         AUTHOR          DESC.
 /*--------     ---------    ----------------------
 /*2025.03.21   KIMDONGMIN   INITIAL RELEASE
 /*2025.03.21   KIMDONGMIN   Vue Router Add
 *************************************************************/

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/VueHome.vue')
    },
    {
        path: '/loginpage',
        name: 'Login',
        component: () => import('@/pages/VueLogin.vue')
    },
    {
        path: '/join',
        name: 'Join',
        component: () => import('@/pages/VueJoin.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

console.log('[Router] initialized')

export default router
