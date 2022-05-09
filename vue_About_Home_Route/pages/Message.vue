<template>
    <div>
        <ul>
            <li v-for='n in messageList' :key="n.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/details/${n.id}/${n.title}`">{{n.title}}</router-link> -->
                <!-- 跳转路由并携带query参数，to的对象写法----推荐写法 -->
                <!-- <router-link
                 :to="{
                     name:'xiangqing',
                     params:{
                         id:n.id,
                         title:n.title
                     }
                 }">
                 {{n.title}}
                 </router-link> -->
                <router-link
                 :to="{
                     name:'xiangqing',
                     query:{
                         id:n.id,
                         title:n.title
                     }
                 }">
                 {{n.title}}
                 </router-link>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "Message",
        data(){
            return {
                messageList:[
                    {id:'001',title:'message001'},
                    {id:'002',title:'message002'},
                    {id:'003',title:'message003'},
                ]
            }
        }
    }
</script>