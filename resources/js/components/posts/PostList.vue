<template>
    <div>
        <!-- dati dei post  -->
<div>
    <ul>

        <li v-for="elem in posts" :key="elem.id">{{elem.title}}</li>
    </ul>
</div>
    </div>
</template>

<script>


export default {
name:'PostList',

// props:{
// arrayPosts:Object
// },
props: ['posts'],

components:{

},
data(){

    return{

    }
}
}
</script>

