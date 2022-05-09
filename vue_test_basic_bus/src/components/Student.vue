<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click='sendStudentName'>给school传递数据</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'张三',
            age:18
        }
    },
    methods:{
        sendStudentName(){
            this.$bus.$emit('hello',this.name)
        }
    }
    
}
</script>

<style>
    .demo{
        background-color:orange;
    }
</style>