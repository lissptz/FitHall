import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/Property',
		name: 'Property',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Property.vue'),
	},
	{
		path: '/Contacts',
		name: 'Contacts',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
	},
	{
		path: '/Blog',
		name: 'Blog',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Blog.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
