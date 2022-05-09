<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2 v-text='msg' ref="title"></h2>
    <button @click="showDOM">点我显示上方的DOM元素</button>
    <!-- 通过父组件给子组件传递函数类型的props实现，子给父传递数据 -->
    <School ref="sch" :showSchoolName='showSchoolName'></School>
    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（第一种写法，使用@或v-on） -->
    <h2>v-bind实现：</h2>
    <Student @atguigu.once='showStudentName'  @demo='m1'></Student>
    <!-- <Student v-bind:atguigu='showStudentName'></Student> -->
    <!-- 通过父组件给子组件绑定一个自定义事件实现，子给父传递数据（第二种写法，使用ref） -->
    <h2>ref实现：</h2>
    <Student ref='student' @click='show'></Student>
    <!-- <Student ref='student' @click.native='show'></Student> -->
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
    },
    showSchoolName(schoolName){
      console.log('App收到了学校名：',schoolName)
    },
    showStudentName(studentName,...params){
      console.log('App收到了学生姓名',studentName,params)
    },
    m1(){
      console.log('demo被触发了')
    },
    show(){
      alert('123')
    }
  },
  mounted(){
    this.$refs.student.$on('atguigu',this.showStudentName) 
    this.$refs.student.$on('demo',this.m1) 
      // this.$refs.student.$once('atguigu',this.showStudentName(this.name))
  }
}
</script>

<style>
</style>
