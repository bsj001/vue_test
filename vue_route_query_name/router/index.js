/* 
    该文件用于创建整个文件的路由器
 */
import VueRouter from 'vue-router'
//引入组件
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import Details from '../pages/Details.vue'

//创建并暴露一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[ //通过children 配置子路由
                {
                    path:'news',//此处一定不要写,/news
                    component:News
                },
                {
                    path: 'message',
                    component: Message,
                    children:[
                        {
                            name:'xiangqing',
                            path:'details',
                            component:Details
                        }
                    ]
                },
            ]
        }
    ]
})