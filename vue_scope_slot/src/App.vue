<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->

    <Category title="games">
      <template scope='atguigu'>
         <ul>
            <li v-for="(item,index) in atguigu.games" :key='index'>{{item}}</li>
        </ul>
      </template>
    </Category>

        <Category title="games">
          <template scope="{games}">
            <ol>
                <li v-for="(item,index) in games" :key='index'>{{item}}</li>
            </ol>
          </template>
    </Category>

        <Category title="games">
          <template slot-scope="{games}">
             <ul slot="center">
                <h4 v-for="(item,index) in games" :key='index'>{{item}}</h4>
            </ul>
          </template>
    </Category>
   
  </div>
</template>

<script>
import Category from './components/Category.vue'
export default {
  name: 'App',
  components: {
    Category,
  },


}
</script>

<style>
  .container,.foot{
    display: flex;
    justify-content: space-around;
  }

  img{
    width: 100%;
  }
  video{
    width: 100%;
  }
  h4{
    text-align: center;
  }
</style>
