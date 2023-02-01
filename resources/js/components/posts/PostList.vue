<template>
    <div>


        <!-- dati dei post  -->
        <h2>Lista dei Post</h2>
        <div>
            <Loader v-if='loading' />
            <ul v-else-if='postsApp.length'>
                <li v-for="elem in postsApp" :key="elem.id">{{elem.title}}</li>
            </ul>
            <p v-else>Non sono presenti Post</p>
        </div>

<Pagination/>
    </div>
</template>

<script>
 import Loader from '../Loader.vue'
 import Pagination from '../Pagination.vue'

export default {

    name: 'PostList',
    props: {
        postsApp: Array,
        loading:Boolean,
    },
    //props: ['posts', 'isLoading'],

    components: {
        Loader,
        Pagination,
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


