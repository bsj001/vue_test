<template>
        <li>
            <label>
                <input type="checkbox" :checked='todo.done' @change='check(todo.id)'/>
                <span v-show='!todo.isEdit'>{{todo.title}}</span>
                <input 
                    v-show='todo.isEdit' 
                    type="text" 
                    :value='todo.title'
                    @blur="handleBlur(todo,$event)"
                    ref='inputTitle'
                    >
            </label>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button v-show='!todo.isEdit' @click="handleEdit(todo)">编辑</button>
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
        },
        handleEdit(todo){
            // todo.isEdit = true
            // if(todo.hasOwnProperty('isEdit')){
            if(Object.prototype.hasOwnProperty.call(todo,'isEdit')){
                console.log('todo身上有isEdit')
                todo.isEdit = true
            }else{
                console.log('todo身上没有isEdit')
                this.$set(todo,'isEdit',true)
            }
            this.$nextTick(function(){
                this.$refs.inputTitle.focus()
            })
        },
        handleBlur(todo,e){
            todo.isEdit = false
            if(!e.target.value.trim()) return alert('输入不能为空'   )
            this.$bus.$emit('updateTodo',todo.id,e.target.value)
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