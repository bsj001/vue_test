<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <my-header :addTodo='addTodo'/>
    <my-list :todoList='todoList' :checkTodo='checkTodo' :deleteTodo='deleteTodo'/>
    <my-footer :todoList='todoList' :checkAllTodo='checkAllTodo' :clearAllTodo='clearAllTodo'/>
  </div>
</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'

export default {
  name: 'App',
  components: {
    MyHeader,
    MyFooter,
    MyList
  },
  data(){
    return {
      todoList:[
        {id:'001',title:"吃饭",done:true},
        {id:'002',title:"学习",done:false},
        {id:'003',title:"睡觉",done:true},
      ]
    }
  },
  methods:{
    addTodo(x){
      // console.log(x)
      this.todoList.unshift(x)
    },
    checkTodo(id){
      this.todoList.forEach((todo) =>{
        if(todo.id === id) todo.done = !todo.done
      })
    },
    deleteTodo(id){
      this.todoList = this.todoList.filter((todo) =>{
        return todo.id !== id
      })
    },
    checkAllTodo(done){
      this.todoList.forEach((todo) => {
        return todo.done = done
      })
    },
    clearAllTodo(){
      this.todoList = this.todoList.filter((todo) => {
        return !todo.done
      })
    }
  }
}
</script>

<style>
</style>
