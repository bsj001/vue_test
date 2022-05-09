<template>
    <div>
        <h2>当前求和为：{{sum}}</h2>
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
            //自己亲自写的
/*             he(){
                return this.$store.state.sum
            },
            xuexiao(){
                return this.$store.state.school
            },
            xueke(){
                return this.$store.state.subject
            }, */
            //使用mapSate自动生成,从sate中读取数据(对象写法)
            // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),
            //使用mapSate自动生成,从sate中读取数据(数组写法)
            ...mapState(['sum','school','subject']),


  /*           dahe(){
                return this.$store.getters.bigSum
            } */

            // ...mapGetters({bigSum:'bigSum'}),
            ...mapGetters(['bigSum'])
        },
/*         mounted(){
            console.log('this.$store:',this.$store)
        }, */
        methods:{
            // increment(){
            //     交给mutations
            //     this.$store.commit('INCREMENT',this.n)
            // },
            // decrement(){
            //     this.$store.commit('DECREMENT',this.n)
            // },
            ...mapMutations({increment:'INCREMENT',decrement:'DECREMENT'}),
            // ...mapMutations(['INCREMENT','DECREMENT']),
            // ...mapMutations([])
            // incrementIsOdd(){
            //     this.$store.dispatch('incrementIsOdd',this.n)
            // },
            // incrementWait(){
            //     第二种写法
            //     this.$store.dispatch('incrementWait',this.n)
            // },
            // ...mapActions({incrementIsOdd:'incrementIsOdd',incrementWait:'incrementWait'}),
        ...mapActions(['incrementIsOdd',"incrementWait"])
        }
        
    }
</script>

<style>
    button{
        margin-left: 6px;
    }
</style>
