<template>
    <div>
        <h2>我是About组件</h2>
    </div>
</template>

<script>
    export default {
        name: "About",
        beforeDestroy(){
            // console.log("About组件即将被销毁了")
        },
        //组件内路由
        beforeRouteEnter (to, from, next) {
            // ...
            console.log('进入About组件')
            console.log(to,from)
            next()
        },
        //组件内路由--
        beforeRouteLeave (to, from, next) {
            // ...
            console.log("离开About组件")
            console.log(to,from)
            next()
        }
    }
</script>