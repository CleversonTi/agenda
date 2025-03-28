export default [
    {
        path: '/login',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        
        children: [
            {
                name: 'login',
                path: '',
                component: () => import('@/views/auth/Login.vue')
            },
        ]
    },
    {
        path: '/cadastrar',
        component: () => import('@/layouts/blank/BlankLayout.vue'),
        
        children: [
            {
                name: 'register',
                path: '',
                component: () => import('@/views/auth/Login.vue')
            },
            
        ]
    }
]


