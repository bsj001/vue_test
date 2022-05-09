<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 v-text='msg' ref="title"></h2>
    <button @click="getStudents">点我显示上方的DOM元素</button>
  </div>
</template>


/* 
  请求的方式：
    1,xhr new XMLHttpRequest xhr.send() xhr.open()
    2,jquery $.get $.post
    3,axios
    4,fetch
 */


/* 
  跨域:
    1,cors
    2,jsonp
    3,代理服务器

 */
<script>
// npm i axios
import axios from 'axios'
export default {
  name: 'App',
  components: {
  },
  data(){
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    getStudents(){
      axios.get('http://localhost:8080/atguigu/students').then(
        response =>{
          console.log('请求成功了',response.data)
        },
        error =>{
          console.log('请求失败了',error.message)
        }
      )
    }
  }
}
</script>

<style>
</style>
