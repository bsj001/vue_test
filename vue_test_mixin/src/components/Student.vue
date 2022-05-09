<template>
    <div class="demo">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="show">点我显示姓名</button>
    </div>
</template>

<script>
// import {hunru} from '../mixin'
export default {
    name:'Student',
    data(){
        return {
            name:'张三',
            age:19
        }
    },
    // mixins:[hunru]
    
}
</script>