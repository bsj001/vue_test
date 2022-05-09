<template>
    <div>
        <h1>当前求和为：{{sum}}</h1>
        <select v-model.number="n">
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click='increment'>+</button>
        <button @click="decrement">-</button>
        <button @click="isOddIncrement">当前求和为奇再加</button>
        <button @click="WaitIncrement">等等再加</button>
    </div>
</template>

<script>
export default {
    name:'Count',
    data(){
        return {
            n:1, //当前选择的数字
            sum:0//求和
        }
    },
    methods:{
        //加
        increment(){
            this.sum = this.sum + this.n
        },
        //减
        decrement(){
            this.sum = this.sum - this.n
        },
        //当前求和为奇再加
        isOddIncrement(){
            if(this.sum % 2){
                this.sum = this.sum + this.n
            }
        },
        //等等再加
        WaitIncrement(){
            setTimeout(()=>{
                this.sum = this.sum + this.n
            },1000)
        },
    },
}
</script>

<style>
    button{
        margin-left:5px;
        padding: 0 4px;
    }

</style>