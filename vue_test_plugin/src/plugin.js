export default {
    // install(Vue){
    //     console.log('install')
    //     console.log(Vue)
    // }

    install(Vue){
        //全局过滤器
        //定义全局指令
        //定义混入
        Vue.mixin({
            mounted(){
                console.log('mounted')
            }
        })
        //给Vue原型上添加一个方法
        Vue.prototype.hello = ()=>{alert('你好啊')}
    }
}