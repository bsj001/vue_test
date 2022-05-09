<template>
    <div>
        <ul>
            <my-item 
            v-for="todoObj in todoList" 
            :key='todoObj.id' 
            :todo='todoObj' 
            :checkTodo='checkTodo'
            :deleteTodo='deleteTodo'
            />
        </ul>
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  components: { MyItem },
    name:'MyList',
    props:['todoList','checkTodo','deleteTodo'],
    data(){
        return {
            //
        }
    },

}
</script>