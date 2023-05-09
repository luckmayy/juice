import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld.vue'
import Log from '../util/Log'
Vue.use(VueRouter)

const commonRoutes = [
    {
        path:'/',
        component:HelloWorld
    }
]

const commonRouter = new VueRouter({
    commonRoutes
})

commonRouter.beforeEach((to,from,next)=>{
    Log.i("on router check","from=" + from + " to=" + to)
    next();
});

export default commonRouter