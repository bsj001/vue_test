<template>
    <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button class="btn btn-warning" @click="back">后退</button>
        <button class="btn btn-danger" @click="forward">前进</button>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        mounted(){
            console.log('this.$router:', this.$router)
            console.log('this.$route:', this.$route)
        },
        methods:{
            back(){
                this.$router.back()
            },
            forward(){
                this.$router.forward()
                // this.$router.go(-1)
            }
        }
    }
</script>