<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <my-header :addTodo='addTodo'/>
    <my-list :todoList='todoList'/>
    <my-footer :todoList='todoList' :checkAllTodo='checkAllTodo' :clearAllTodo='clearAllTodo'/>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
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
      todoList:JSON.parse(localStorage.getItem('todoList')) || []
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
    deleteTodo(_,id){
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
  },
  watch:{
/*     todoList(value){
      localStorage.setItem('todoList',JSON.stringify(value))
    } */
    todoList:{
      deep:true,
      handler(value){
        localStorage.setItem('todoList',JSON.stringify(value))
      }
    }
  },
  mounted(){
    this.$bus.$on('checkTodo',this.checkTodo)
    // this.$bus.$on('deleteTodo',this.deleteTodo)
    this.pubId = pubsub.subscribe('deleteTodoList',this.deleteTodo)
  },
  beforeDestroy(){
    this.$bus.$off('checkTodo','deleteTodo')
    pubsub.unsubscribe(this.pubId)
  }
}
</script>

<style>
</style>
