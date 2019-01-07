import Vue from 'vue'
import Router from 'vue-router'
import Person from '../components/persons/Person.vue'
import Pair from '../components/pairs/Pair.vue'
import homepage from '../components/homepage.vue'
import talkpage from '../components/talkpage/talkpage.vue'
import otherpage from '../components/talkpage/otherpage.vue'
import city from '../components/shouye/city.vue'
import register from '../components/shouye/register.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'homepage',
			component: homepage
		},
		{
			path: '/register',
			name: 'register',
			component: register
		},
		{
			path: '/city',
			name: 'city',
			component: city
		},
		//{
		//    path: '/shouye',
		//    name: 'index',
		//    component: index
		// },
		{
			path: '/persons',
			name: 'Person',
			component: Person
		},
		{
			path: '/pairs',
			name: 'Pair',
			component: Pair
		},
		{
			path: '/talkpage',
			name: 'pair',
			component: talkpage
		},
		{
			path: '/otherpage',
			name: 'otherpage',
			component: otherpage
		},
	]
})