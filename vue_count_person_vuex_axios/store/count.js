export default {
    namespaced: true,
    //准备actions-用于响应组件中的动作
    actions: {
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
    mutations: {
        INCREMENT(state, value) {
            state.sum += value
        },
        DECREMENT(state, value) {
            state.sum -= value
        }
    },
    //准备state-用于存储数据
    state: {
        sum: 0,//和
        school: '尚硅谷',
        subject: '前端'
    },
    //准备getters-用于将state中的数据加工
    getters: {
        bigSum(state) {
            return state.sum * 10
        }
    }
}