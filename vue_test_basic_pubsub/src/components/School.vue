<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data(){
        return {
            name:'尚硅谷',
            address:"北京"
        }
    },
    mounted(){
/*         this.$bus.$on('hello',(data)=>{
            console.log('我是school组件，收到了数据',data)
        }) */
        this.pubID = pubsub.subscribe('hello',function(msgName,data){
            //此处的this是undefine，可以写成箭头函数，也可以写成this.demo，然后在methods中写具体实现
            // console.log(this)
            console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data)
        })
    },
    beforDestroy(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubID)
    }
}
</script>

<style>
    .demo{
        background-color:orange;
    }
</style>