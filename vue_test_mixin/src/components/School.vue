<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学生地址：{{address}}</h2>
        <button @click="show">点我显示姓名</button>
    </div>
</template>

<script>
// import {hunru} from '../mixin'
export default {
    name:'School',
    data(){
        return {
            name:'尚硅谷',
            address:'北京'
        }
    },
    // mixins:[hunru]

}
</script>