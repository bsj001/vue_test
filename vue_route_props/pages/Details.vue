<template>
    <div>
        <ul>
            <li>消息ID:{{id}}</li>
            <li>消息内容:{{title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Details",
        props:['id','title'],
        // computed:{
        //     id(){
        //         return this.$route.query.id
        //     },
        //     title(){
        //         return this.$route.query.title
        //     }
        // },
        // mounted(){
        //     console.log('this.$route',this.$route)
        // }
    }
</script>