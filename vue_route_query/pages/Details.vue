<template>
    <div>
        <ul>
            <li>消息ID:{{$route.query.id}}</li>
            <li>消息内容:{{$route.query.title}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Details",
    }
</script>