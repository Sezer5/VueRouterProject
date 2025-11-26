import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue';
import Articles from '@/components/articles/Articles.vue';
import Article from '@/components/articles/Article.vue';
import Contact from '@/components/contact/Contact.vue';
import NotFound from '@/components/404.vue';
import Alert from '@/components/Alert.vue';
import Login from '@/components/Login.vue';


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
      components: {default:Contact,
        warning:Alert
      },
    },
    {
      path: '/:notFound(.*)',
      name: 'NotFound',
      component: NotFound,
    }
    ,
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
    
  ],
  linkActiveClass:'active'
})

router.beforeEach((to,from)=>{
  const isAuth = true;
  if(to.path!=='/login'&&!isAuth){
    return '/login';
  }
  if(to.path==='/login'&&isAuth){
    return '/';
  }
  return true;
})

export default router
