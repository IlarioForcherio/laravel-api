<template>
    <div>
        <!-- dati dei post  -->
        <h2>Lista dei Post</h2>
        <div>
            <Loader v-if='isloading' />
            <ul v-else-if='posts.length'>
                <li v-for="elem in posts" :key="elem.id">
                    <router-link :to="` /posts/${elem.id} `">
                    {{elem.title}}
                    <span v-if='elem.category'>
                        {{elem.category.name}}
                    </span>
                    <ol>
                        <li v-for='tag in elem.tags' :key="tag">{{tag.name}}</li>
                    </ol>
                    </router-link>
                </li>
            </ul>
            <p v-else>Non sono presenti Post</p>
        </div>

<Pagination
:paginationPost='pagination'
 @clicked_page='getPosts'
/>
    </div>
</template>

<script>
 import Loader from '../Loader.vue'
 import Pagination from '../Pagination.vue'

export default {

    name: 'PostList',
    props: {
        // postsApp: Array,
        // loading:Boolean,
        // paginationApp:Array
    },
    //props: ['posts', 'isLoading'],

    components: {
        Loader,
        Pagination,
    },
    data(){
        return{
            posts: [],
            isloading: false,
            pagination:{},
        //isloading:true
        }
    },
    mounted(){
    this.getPosts(this.clicked_element);
    },
    methods:{
             getPosts(page = this.clicked_element) {

            this.isloading = true
            axios.get('http://localhost:8000/api/posts?page=' +  page)
                .then(response => {

                    this.posts = response.data.data
                    console.log(this.posts)

                    //destrutturizzazione
                    const {data, current_page, last_page} = response.data;
                    //salva dentro a tre costanti i valori delle chiavi corrispondenti nell'oggetto
                  this.posts = data;
                  //creo un oggetto  ha delle chiavi inventate da noi e come valori le chiavi dell'oggetto estrapolato.
                  this.pagination = {
                    lastPage:last_page,
                    currentPage: current_page
                  }

                }).catch(error => {
                    console.log(error);
                }).then(() => {
                    this.isloading = false
                });


        }
    }
}
</script>

<style scoped lang='scss'>

</style>


