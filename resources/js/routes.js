import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

//import dei componenti che fungono da pagine
import AboutUs from './views/pages/AboutUs.vue'
import Postsindex from './views/pages/posts/Postsindex.vue'
import HomePage from './views/pages/HomePage.vue'
import PostShow from './views/pages/posts/PostShow.vue'

const router = new VueRouter({
    //scrivo tutti i path per le pagine
    mode: 'history',
    routes:[
        {
            path:'/',
            name:'home',
            component:HomePage
        },

        {
            path:'/about-us',
            name:'about-us',
            component:AboutUs
        },
        {
            path:'/posts',
            name:'posts',
            component:Postsindex

        },
        {
            path:'/posts/:id',
            name:'singlePost',
            component:PostShow

        }
    ]

});

export default router;


//history crea una cronologia di pagine, cioe' ci permette di andare vanati e indietro con le freccette
