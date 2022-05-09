<template>
    <div class="demo">
        <h2 v-text='msg'></h2>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生年龄：{{age+1}}</h2>
        <h2>学生性别：{{gender}}</h2>
        <button @click="test">点我测试一下hello方法</button>
    </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg:'我是一名学生'
        }
    },
    methods:{
        test(){
            this.hello()
        }
    },
    // props:['name','age','gender']  //简单接收
    // 接收的同时进行类型限制
/*     props:{
        name:String``,
        age:Number,
        gender:String
    } */

    //
    props:{
        name:{
            type:String,
            require:true
        },
        age:{
            type:Number,
            default:99
        },
        gender:{
            type:String,
            require:true
        }
    }
}
</script>