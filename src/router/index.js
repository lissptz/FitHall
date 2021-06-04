import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/Treners',
		name: 'Treners',
		component: ()=>import("../views/Treners.vue"),
	},
	{
		path: '/Price',
		name: 'Price',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Price.vue'),
	},
	{
		path: '/Contacts',
		name: 'Contacts',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Contacts.vue'),
	},
	{
		path: '/Opmode',
		name: 'Opmode',
		
		component: () => import(/* webpackChunkName: "about" */ '../views/Opmode.vue'),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
