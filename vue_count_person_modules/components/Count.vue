<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
        <h3 style="color:red">Person组件的人数为:{{personList.length}}</h3>
        <h2>当前求和放大10倍为：{{bigSum}}</h2>
        <h2>我在{{school}}学习{{subject}}</h2>
        <select v-model.number='n'>
            <option :value="1">1</option>
            <option :value="2">2</option>
            <option :value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click='incrementIsOdd(n)'>和为奇数时再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>

<script>
    import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
    export default {
        name: "Count",
        data(){
            return{
                n:1 //要加的数
            }
        },
        computed:{
            ...mapState('countAbout',['sum','school','subject']),
            ...mapState('personAbout',['personList']),
            ...mapGetters('countAbout',['bigSum'])
        },
        methods:{
            ...mapMutations('countAbout',{increment:'INCREMENT',decrement:'DECREMENT'}),
            ...mapActions('countAbout',{incrementIsOdd:'incrementIsOdd',incrementWait:'incrementWait'}),
            // ...mapActions(['incrementIsOdd',"incrementWait"])
        }
        
    }
</script>

<style>
    button{
        margin-left: 6px;
    }
</style>
