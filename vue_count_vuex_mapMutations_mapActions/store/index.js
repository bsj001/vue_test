//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

//准备actions-用于响应组件中的动作
const actions = {
    increment(context, value) {
        context.commit('INCREMENT', value)
    },
    decrement(context, value) {
        context.commit('DECREMENT', value)
    },
    incrementIsOdd(context, value){
        if (context.state.sum % 2) {
            context.commit('INCREMENT', value)
        }
    },
    incrementWait(context, value){
        setTimeout(() => {
            context.commit('INCREMENT', value)
        }, 1000)
    }
}
//准备mutations-用于操作数据(state)
const mutations = {
    INCREMENT(state, value) {
        state.sum += value
    },
    DECREMENT(state, value) {
        state.sum -= value
    }
}
//准备state-用于存储数据
const state = {
    sum: 0 ,//和
    school:'尚硅谷',
    subject:'前端'
}
//准备getters-用于将state中的数据加工
const getters = {
    bigSum(state){
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

// export default store;