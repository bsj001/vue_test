<template>
    <div>
        <ul>
            <my-item 
            v-for="todoObj in todoList" 
            :key='todoObj.id' 
            :todo='todoObj' 
            />
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