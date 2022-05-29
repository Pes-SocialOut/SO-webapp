import { createWebHistory, createRouter } from "vue-router";
import ReportedUsers from '@/views/ReportedUsers.vue'
import EventReviews from '@/views/EventReviews.vue'
import Login from '@/views/Login.vue'
import BannedUsers from '@/views/BannedUsers.vue'

const routes = [
    {
        path: '/',
        name: 'ReportedUsers',
        component: ReportedUsers
    },
    {
        path: '/eventReviews/:id',
        name: 'EventReviews',
        component: EventReviews
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/bannedUsers',
        name: 'BannedUsers',
        component: BannedUsers
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
export default router;