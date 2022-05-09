<template>
    <div>
        <h2>我是Home组件</h2>
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link replace class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
                <li>
                    <router-link replace class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
            </ul>
            <keep-alive :include="['News','Message']">
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        beforeDestroy(){
            // console.log("Home组件即将被销毁了")
        }
    }
</script>