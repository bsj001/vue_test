<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 v-text='msg' ></h2>
    <School/>
    <Student/>
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
}
</script>

<style>
</style>
