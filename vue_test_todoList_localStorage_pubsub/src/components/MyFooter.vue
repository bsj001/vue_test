<template>
    <div v-show="total">
        <label>
            <!-- <input type="checkbox" :checked='isAll' @click='checkAll(checked)'/> -->
            <input type="checkbox" v-model='isAll'/>
        </label>
        <span>
            <span>已完成{{doneTotal}}</span> / 全部{{total}}
        </span>
        <button @click="clearAll">清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:'MyFooter',
    props:['todoList','checkAllTodo','clearAllTodo'],
    data(){
        return {
            //
        }
    },
    computed:{
        total(){
            return this.todoList.length
        },
        doneTotal(){
/*             return this.todoList.filter((todo) => {
                return todo.done
            }).length */
            return this.todoList.reduce((pre,current) => pre + (current.done ? 1:0),0)
        },
        isAll:{
            get(){
            return this.total === this.doneTotal && this.total > 0
            },
            set(value){
                this.checkAllTodo(value)
            }
        }
    },
    methods:{
/*         checkAll(done){
            this.checkAllTodo(done)
        }, */
        clearAll(){
            this.clearAllTodo()
        }
    }

}
</script>