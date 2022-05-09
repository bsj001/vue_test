<template>
  <div>
    <!-- <img src="./assets/logo.png"> -->
    <Count></Count>
  </div>
</template>


<script>
  //引入组件
  import Count from './components/Count.vue'

  export default {
    name:'App',
    components:{
      Count
    },
    data(){
      return{
      }
    },
  }
</script>