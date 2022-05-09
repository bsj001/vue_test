<template>
        <li>
            <label>
                <input type="checkbox" :checked='todo.done' @change='check(todo.id)'/>
                <span>{{todo.title}}</span>
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button @click="handleDelete(todo.id)">删除</button>
        </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'MyItem',
    props:['todo'],
    data(){
        return {
        }
    },
    methods:{
        check(id){
            // this.checkTodo(id)
            this.$bus.$emit('checkTodo',id)
        },
        handleDelete(id){
            if(confirm('确定删除吗?')){
            // this.$bus.$emit('deleteTodo',id)
            pubsub.publish('deleteTodoList',id)
                // this.deleteTodo(id)
            }
            //
        }
    }

}
</script>

<style scoped>
li:hover{
    display:flex;
    background-color:#aaa;
}
li:hover button{
    display:block
}
</style>