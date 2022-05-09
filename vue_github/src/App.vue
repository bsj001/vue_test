<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Search/>
    <List/>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import List from './components/List.vue'
export default {
  name: 'App',
  components: {
    Search,
    List
  },
  data(){
    return {
    }
  },

}
</script>
