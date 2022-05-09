<template>
    <div>
        <ul>
            <li>
                News
            </li>
        </ul>
        <h2 :style="{opacity}">欢迎学习Vue</h2>
    </div>
</template>

<script>
    export default {
        name: "News",
        data(){
            return{
                opacity:1
            }
        },
        beforeDestroy(){
            console.log("News组件即将被销毁了")
        },
        deactivated(...params){
            console.log('我是News组件,我即将失活',...params)
            clearInterval(this.timer)
        },
        activated(...params){
            console.log('我是News组件,我即将激活',...params)
            this.timer = setInterval(()=>{
                console.log('@')
                this.opacity -= 0.01
                if(this.opacity <= 0){
                    this.opacity = 1
                }
            },16)
        }
    }
</script>