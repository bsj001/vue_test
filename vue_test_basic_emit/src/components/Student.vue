<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentName">点我显示学生姓名</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁VC</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    // props:['showStudentName'],
    data(){
        return {
            name:'张三',
            age:18
        }
    },
    methods:{
        sendStudentName(){
            this.$emit('atguigu',this.name,1,2,3)
            this.$emit('demo')
            this.$emit('click') //当ref上不加native时调用
        },
        unbind(){
            this.$off('atguigu')//解绑一个事件
            // this.$off(['atguigu','demo']) //解绑多个事件
            // this.$off() //解绑所有事件
        },
        death(){
            this.$destroy();
        }
    }
}
</script>

<style>
    .demo{
        background-color:orange;
    }
</style>