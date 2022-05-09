<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="show">点我显示学校名称</button>
    </div>
</template>

<script>
export default {
    name:'School',
    props:['showSchoolName'],
    data(){
        return {
            name:'尚硅谷',
            address:"北京"
        }
    },
    methods:{
        show(){
            // alert(this.name);
            this.showSchoolName(this.name)
        }
    }
}
</script>

<style>
    .demo{
        background-color:orange;
    }
</style>