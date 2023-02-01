<template>

<!-- scrivo un template vue  -->

<div>

<h1>Work in progress</h1>



<PostList :arrayPosts="posts"/>
</div>


</template>



<script>

 import PostList from '../components/posts/PostList'

export default {

components:{
 //qui metterai i componenti
 PostList,
},
data(){
return {
    posts: [],
}
},
mounted(){

this.getPosts()

},
methods:{
    getPosts(){
        axios.get('http://localhost:8000/api/posts').then( response =>{

            this.posts = response.data
            //console.log(this.posts)
        } )
    }
}

}

</script>

