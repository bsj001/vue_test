<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 v-text='msg' ref="title"></h2>
    <button @click="showDOM">点我显示上方的DOM元素</button>
    <School ref="sch"></School>
    <Student></Student>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    School,
    Student
  },
  data(){
    return {
      msg:'欢迎学习Vue'
    }
  },
  methods:{
    showDOM(){
      // console.log(this.$refs)
      console.log(this.$refs.sch)
    }
  }
}
</script>

<style>
</style>
