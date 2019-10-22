import Vue from 'vue'
import Router from 'vue-router'
import news from './components/news.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',

    },
    {
      path: '/news',
      name: 'news',
      component: news
    }

  ]
})
