<template>
    <!-- scrivo un template vue  -->

    <div>

        <h1>Work in progress</h1>

        <PostList :postsApp="posts" :loading='isloading' />
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
            isloading: false,
        }
    },
    mounted() {

        this.getPosts()

    },
    methods: {

        getPosts() {

            this.isloading = true
            axios.get('http://localhost:8000/api/posts')
                .then(response => {

                    this.posts = response.data
                    //console.log(this.posts)
                }).catch(error => {
                    console.log(error);
                }).then(() => {
                    this.isloading = false
                });


        }
    }

}
</script>

