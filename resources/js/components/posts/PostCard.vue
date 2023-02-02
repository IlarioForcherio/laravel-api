<template>
    <div>
        <h2>Pagina del singolo post {{post.title}}</h2>
        <p>
            <!--testo della colonna body  -->
            {{post.body}}
        </p>
    </div>
</template>

<script>


export default {

    name: 'PostCard',
    props: {
        // postsApp: Array,
        // loading:Boolean,
        // paginationApp:Array
    },
    //props: ['posts', 'isLoading'],

    components: {

    },
    data(){
        return{
            post: null,

        }
    },
    mounted(){
    this.getPost();
    },
    methods:{
             getPosts() {


            axios.get('http://localhost:8000/api/posts/' + this.$route.params.id)
                .then(response => {

                    console.log(response.data);
                   this.post = response.data;

                }).catch(error => {
                    console.log(error);
                })

        }
    }
}
</script>

<style scoped lang='scss'>

</style>

