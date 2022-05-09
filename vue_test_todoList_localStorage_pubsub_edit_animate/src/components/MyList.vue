<template>
    <div>
        <ul>
            <transition-group name='todo' appear>
            <my-item 
                v-for="todoObj in todoList" 
                :key='todoObj.id' 
                :todo='todoObj' 
            />
            </transition-group>

        </ul>
    </div>
</template>

<script>
import MyItem from './MyItem.vue'
export default {
  components: { MyItem },
    name:'MyList',
    props:['todoList'],
    data(){
        return {
            //
        }
    },

}
</script>

<style scoped>
    /* .v-enter-active{ */
    .todo-enter-active{
        animation: atguigu 1s linear;
    }

    /* .v-leave-active{ */
    .todo-leave-active{
        animation:atguigu 1s reverse;
    }

    @keyframes atguigu {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
        
    }
</style>