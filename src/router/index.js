import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import Articles from '@/components/articles/Articles.vue';
import Article from '@/components/articles/Article.vue';
import Contact from '@/components/contact/Contact.vue';
import NotFound from '@/components/404.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/articles',
      name: 'articles',
      component: Articles,
      children:[
        {
          path: ':articleId',
          name: 'article',
        
        }
      ]
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/:notFound(.*)',
      name: 'contact',
      component: NotFound,
    }
    
  ],
  linkActiveClass:'active'
})

export default router
