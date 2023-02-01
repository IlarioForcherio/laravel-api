<template>
    <div>


        <!-- dati dei post  -->
        <div>
            <Loader v-if='isLoading' />
            <ul v-else-if='posts.length'>
                <li v-for="elem in posts" :key="elem.id">{{elem.title}}</li>
            </ul>
            <p v-else>Non sono presenti Post</p>
        </div>

    </div>
</template>

<script>
 import Loader from '../Loader.vue'

export default {

    name: 'PostList',
    props: {
        posts: Array,
        loading:Boolean,
    },
    //props: ['posts', 'isLoading'],

    components: {
        Loader,
    },
    // data(){
    //     console.log(this.posts)

    //     return{

    //     }
    // }
}
</script>

<style scoped lang='scss'>

</style>


