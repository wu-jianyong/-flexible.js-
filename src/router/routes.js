import Msite from '../components/msite.vue'
import Detail from '../components/detail.vue'
import Personal from '../components/personal.vue'
import Shop from '../components/shop.vue'
export default [
  {
    path:'/msite',
    component:Msite,
  },
  {
    path:'/detail',
    component:Detail,
  },
  {
    path:'/personal',
    component:Personal,
  },
  {
    path:'/shop',
    component:Shop,
  },
  {
    path: '/',
    redirect: '/msite'
  }
]

