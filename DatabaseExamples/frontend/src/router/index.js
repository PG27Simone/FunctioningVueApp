import {createRouter, createWebHistory} from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import AboutPage from '../views/AboutPage.vue';
import LeaderboardPage from '../views/LeaderboardPage.vue'
import GalleryPage from '../views/GalleryPage.vue';
import ContactPage from '../views/ContactPage.vue';

const routes = [
    {
        path:'/',
        name: 'Landing',
        component: LandingPage
    },
    {
        path: '/about',
        name: 'About',
        component: AboutPage
    },
    {
        path: '/leaderboard',
        name: 'Leaderboard',
        component: LeaderboardPage
    },
    {
        path: '/gallery',
        name: 'Gallery',
        component: GalleryPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;