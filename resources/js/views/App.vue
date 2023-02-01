<template>
    <!-- scrivo un template vue  -->

    <div>
        <PostList/>
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
            // posts: [],
            // isloading: false,
            // pagination:{},
        }
    },
    mounted() {

       // this.getPosts()

    },
    methods: {

        // getPosts(page = 1) {

        //     this.isloading = true
        //     axios.get('http://localhost:8000/api/posts?page=' +  page)
        //         .then(response => {

        //             this.posts = response.data.data
        //             console.log(this.posts)

        //             //destrutturizzazione
        //             const {data, current_page, last_page} = response.data;
        //             //salva dentro a tre costanti i valori delle chiavi corrispondenti nell'oggetto
        //           this.posts = data;
        //           //creo un oggetto  ha delle chiavi inventate da noi e come valori le chiavi dell'oggetto estrapolato.
        //           this.pagination = {
        //             lastPage:last_page,
        //             currentPage: current_page
        //           }

        //         }).catch(error => {
        //             console.log(error);
        //         }).then(() => {
        //             this.isloading = false
        //         });


        // }
    }

}
</script>

