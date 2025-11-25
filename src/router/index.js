import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import Articles from '@/components/articles/Articles.vue';
import Article from '@/components/articles/Article.vue';
import Contact from '@/components/contact/Contact.vue';


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
    },
    {
      path: '/articles/:articleId',
      name: 'article',
      component: Article,
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
    },
    
  ],
  linkActiveClass:'active'
})

export default router
