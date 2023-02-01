<template>
    <div>


        <!-- dati dei post  -->
        <div>
            <Loader v-if='loading' />
            <ul v-else-if='postsApp.length'>
                <li v-for="elem in postsApp" :key="elem.id">{{elem.title}}</li>
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
        postsApp: Array,
        loading:Boolean,
    },
    //props: ['posts', 'isLoading'],

    components: {
        Loader,
    },
    data(){


        return{
        //isloading:true
        }
    }
}
</script>

<style scoped lang='scss'>

</style>


