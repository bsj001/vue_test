<template>
    <div class="category">
        <h3>{{title}}分类</h3>
        <!-- 定义一个插槽 -->
        <slot>我是一些默认值，当使用者没有传递具体结构时，我会出现</slot>
    </div>
</template>

<script>
export default {
    name:'Category',
    props:['title'],
    data(){
        return {
        }
    },
    methods:{
    },
}
</script>

<style>
    .category{
        background-color: aqua;
        width: 300px;
        height: 1000px;
        padding:0 50px;

    }

    h3{
        text-align: center;
        background-color: orange;
    }
</style>

