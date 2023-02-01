<template>
    <!-- scrivo un template vue  -->

    <div>

        <h1>Work in progress</h1>

        <PostList :posts="posts" :loading='isLoading' />
    </div>
</template>



<script>
import PostList from '../components/posts/PostList'

export default {

    components: {
        //qui metterai i componenti
        PostList,
    },
    data() {
        return {
            posts: [],
            isLoading: false,
        }
    },
    mounted() {

        this.getPosts()

    },
    methods: {

        getPosts() {
            console.log('diomerda')
            this.isLoading = true
            axios.get('http://localhost:8000/api/posts')
                .then(response => {

                    this.posts = response.data
                    //console.log(this.posts)
                }).catch(error => {
                    console.log(error);
                }).then(() => {
                    this.isLoading = false
                });


        }
    }

}
</script>

