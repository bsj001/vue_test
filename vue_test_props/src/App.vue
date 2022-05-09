<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!-- <Student name='张三' gender='男' :age=19></Student> -->
    <Student name='张三' gender='男'></Student>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
  name: 'App',
  components: {
    Student
  },
}
</script>

<style>
</style>
