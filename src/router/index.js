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
const router = new VueRouter({
    // mode:'hash',
    mode:'history',
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            meta:{title:"主页"},
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
                            // path:'details/:id/:title',
                            path:'details',
                            component:Details,

                            //props的第一种写法，值为对象，该对象中的所有key-value都会以props
                            //的形式传给Details组件
                            // props:{a:1,b:'hello'}

                            //props的第二种写法，值为布尔值，若布尔值为真，就会把该路由组件收到的所有params参数，以props
                            //的形式传给Details组件
                            // props:true

                            //props的第三种写法
                            /* props($route){
                                return {
                                    id: $route.query.id,
                                    title: $route.query.title
                                }
                            } */
                            /* props({query}) {
                                return {
                                    id: query.id,
                                    title: query.title
                                }
                            } */
                            props({ query:{id,title} }) {
                                return {id,title}
                            },
                            //独享路由守卫
                            /* beforeEnter(to,from,next){
                                console.log('我是details组件，我即将进入')
                                console.log(to,from,next)
                                if(localStorage.getItem('school') === 'atguigu'){
                                    next()
                                }else{
                                    alert('学校名不对')
                                }
                            } */
                        }
                    ]
                },
            ]
        }
    ]
})

//全局前置路由守卫----初始化的时候被调用，每次路由切换之前被调用
/* router.beforeEach((to, from, next) => {
    // to and from are both route objects. must call `next`.
    console.log('我是全局前置路由')
    console.log(to,from)
    if(localStorage.getItem('school') === 'atguigu'){
        console.log('通过验证学校是atguigu')
        next()
    }else{
        alert('学校名不对，不能通过')
    }
}) */


//全局后置路由守卫----离开的时候被调用，每次路由切换之后被调用
/* router.afterEach((to,from)=>{
    console.log('我是全局后置路由')
    console.log(to,from)
    document.title = to.meta.title || '硅谷系统'
})
 */
export default router