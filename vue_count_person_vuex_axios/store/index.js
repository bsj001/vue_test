//引入vue
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//使用vuex
Vue.use(Vuex)

import countOptions from './count'
import personOptions from './person'


export default new Vuex.Store({
    modules:{
        countAbout: countOptions,
        personAbout: personOptions
    }
})

// export default store;