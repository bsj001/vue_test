<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Test3/>
    <Test2/>
    <Test/>
  </div>
</template>

<script>
import Test from './components/Test.vue'
import Test2 from './components/Test2.vue'
import Test3 from './components/Test3.vue'
export default {
  name: 'App',
  components: {
    Test,
    Test2,
    Test3
  },
  data(){
    return {
    }
  },
}
</script>

<style>
</style>