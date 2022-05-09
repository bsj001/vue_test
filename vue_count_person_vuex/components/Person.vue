<template>
    <div>
        <h2>人员列表</h2>
        <h3 style="color:red">Count组件的求和为：{{sum}}</h3>
        <input type="text" placeholder="请输入添加的人员" v-model="name" @keyup.enter="addPerson">
        <button @click="addPerson">添加</button>
        <ul>
            <li v-for='p in personList' :key='p.id'>{{p.name}}</li>
        </ul>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    export default {
        data(){
            return{
                name: "",
            }
        },
        computed:{
            personList(){
                return this.$store.state.personList
            },
            sum(){
                return this.$store.state.sum
            }
        },
        methods:{
            addPerson(){
                const personObj = {id:nanoid(),name:this.name}
                this.$store.commit('ADD_PERSON',personObj)
                this.name = ''
            }
        }
        
    }
</script>

<style>
    button{
        margin-left: 6px;
    }
</style>
