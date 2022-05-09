<template>
    <div class='demo'>
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="title" @keyup.enter="add">
    </div>
</template>

<script>
import {nanoid} from 'nanoid';
export default {
    name:'MyHeader',
    props:['addTodo'],
    data(){
        return {
            title:''
        }
    },
    methods:{
        add(){
            if(!this.title.trim()) return alert('输入不能为空')
            // console.log(e.target.value)
            const todoObj = {id:nanoid(),title:this.title,done:false}
            // console.log(todoObj)
            this.addTodo(todoObj)
            this.title = ''
        }
    }

}
</script>

<style scoped>

input{
    width:300px;
}
</style>