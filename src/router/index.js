import {createRouter,createWebHashHistory} from 'vue-router'


const routes=[
    {
        path:'/',
        redirect:'/login'
        
    },
    {
        path:'/login',
        name:'login',
        component:()=>import('@/views/LoginPage.vue')
    },
    {
        path:'/index',
        name:'index',
        component:()=>import('@/views/IndexPage.vue')
    }
]


const router=createRouter({
    history:createWebHashHistory(),
    routes
})

export default router