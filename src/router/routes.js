import Home from '../pages/home'

const routes = [
    { path: '/login', component: () => import('@/pages/auth/login'), name: 'login', meta: { requiresVisitor: true, layout: 'auth-layout' } },
    {
        path: '/', component: Home, name: 'home', children: [
            { path: '/home', component: Home }
        ], meta: { requiresAuth: true }
    },
    { path: '/projects', component: Home, meta: { requiresAuth: true } },
    { path: '/projects/:projectId/tasks', component: Home, meta: { requiresAuth: true } },
    { path: '/projects/:projectId/tasks/:taskId', component: () => import('@/pages/taskDetail'), meta: { requiresAuth: true } }
]

export default routes