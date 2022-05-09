<template>
  <div class="container">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <Category title="food">
      <img slot='center' src="http://s3.ax1x.com/2021/01/16/srJlq0.jpg" alt="美食">
      <a slot='footer' href="https://www.baidu.com">更多美食</a>
    </Category>
    <Category title="games">
        <ul slot="center">
            <li v-for="(item,index) in games" :key='index'>{{item}}</li>
        </ul>
        <div class="foot" slot="footer">
          <a href="#">单机游戏</a>
          <a href="#">网络游戏</a>
        </div>
    </Category>
    <Category title="films">
      <video slot='center' controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
      <template v-slot:footer>
        <div class="foot">
          <a href="#">经典</a>
          <a href="#">热门</a>
          <a href="#">推荐</a>
      </div>
        <h4>欢迎前来观影</h4>
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
  data(){
    return {
      food:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》'],
    }
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
