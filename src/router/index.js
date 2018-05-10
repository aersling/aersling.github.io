import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '@/components/page/index'//首页
import list from '@/components/page/list'
import brands from '@/components/page/brands'//品牌 
import jewelryDesign from '@/components/page/jewelryDesign'//设计 
import Kgold from '@/components/page/Kgold'//k金
import silverware from '@/components/page/silverware'//银饰
import interactive from '@/components/page/interactive'//互动
Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/brands',
      name: 'brands',
      component: brands
    },
    {
      path: '/jewelryDesign',
      name: 'jewelryDesign',
      component: jewelryDesign
    }, {
      path: '/Kgold',
      name: 'Kgold',
      component: Kgold
    }
    , {
      path: '/silverware',
      name: 'silverware',
      component: silverware
    }
    , {
      path: '/interactive',
      name: 'interactive',
      component: interactive
    }
  ]
})
