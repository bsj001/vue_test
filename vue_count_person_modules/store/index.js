//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

const countOptions = {
    namespaced:true,
    //准备actions-用于响应组件中的动作
    actions:{
        increment(context, value) {
            context.commit('INCREMENT', value)
        },
        decrement(context, value) {
            context.commit('DECREMENT', value)
        },
        incrementIsOdd(context, value) {
            if (context.state.sum % 2) {
                context.commit('INCREMENT', value)
            }
        },
        incrementWait(context, value) {
            setTimeout(() => {
                context.commit('INCREMENT', value)
            }, 1000)
        }
    },
    //准备mutations-用于操作数据(state)
    mutations:{
            INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        }
    },
    //准备state-用于存储数据
    state:{
        sum: 0,//和
        school: '尚硅谷',
        subject: '前端'
    },
    //准备getters-用于将state中的数据加工
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    }
}

const personOptions = {
    namespaced:true,
    //准备actions-用于响应组件中的动作
     actions:{
        addWang(context, value) {
        if (value.name.indexOf('王') === 0) {
            context.commit('ADD_PERSON',value)
        }
    }
     },
    //准备mutations-用于操作数据(state)
     mutations:{
        ADD_PERSON(state, value) {
            state.personList.unshift(value)
        }
    },
    //准备state-用于存储数据
    state:{
        personList: [
            { id: '001', name: '张三' }
        ]
    },
    //准备getters-用于将state中的数据加工
    getters:{
        firstPersonName(state){
            return state.personList[0].name
        }
    }
}

export default new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})

// export default store;