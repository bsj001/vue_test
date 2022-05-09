<template>
        <li>
            <label>
                <input type="checkbox" :checked='todo.done' @change='check(todo.id)'/>
                <span>{{todo.title}}</span>
            </label>
            <button @click="handleDelete(todo.id)">删除</button>
        </li>
</template>

<script>
export default {
    name:'MyItem',
    props:['todo','checkTodo','deleteTodo'],
    data(){
        return {
        }
    },
    methods:{
        check(id){
            this.checkTodo(id)
        },
        handleDelete(id){
            if(confirm('确定删除吗?')){
                this.deleteTodo(id)
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