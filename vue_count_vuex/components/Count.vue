<template>
    <div>
        <h2>当前求和为：{{$store.state.sum}}</h2>
        <h2>当前求和放大10倍为：{{$store.getters.bigSum}}</h2>
        <select v-model.number='n'>
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click='incrementIsOdd'>和为奇数时再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>

    export default {
        name: "Count",
        data(){
            return{
                n:1 //要加的数
            }
        },
        mounted(){
            console.log('this.$store:',this.$store)
        },
        methods:{
            //加
            increment(){
                //交给actions
                // this.$store.dispatch('increment',this.n)
                //交给mutations
                this.$store.commit('INCREMENT',this.n)
            },
            //减
            decrement(){
                //交给actions
                this.$store.dispatch('decrement',this.n)
                //交给mutations
                this.$store.commit('DECREMENT',this.n)
            },
            //和为奇数再加
            incrementIsOdd(){
                //第一种写法
/*                 if(this.$store.state.sum % 2){
                    this.$store.dispatch('increment',this.n)
                } */
                //第二种写法
                this.$store.dispatch('incrementIsOdd',this.n)
            },
            //等一等再加
            incrementWait(){
                //第一种写法
/*                 setTimeout(()=>{
                    this.$store.dispatch('increment',this.n)
                },1000) */
                //第二种写法
                this.$store.dispatch('incrementWait',this.n)
            }
        }
    }
</script>

<style>
    button{
        margin-left: 6px;
    }
</style>
