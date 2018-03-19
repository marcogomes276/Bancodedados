import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Bancodedados from '@/components/Bancodedados'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
    	path:'/Bank',
    	name:'Bancodedados',
    	component: Bancodedados
    }
  ]
})