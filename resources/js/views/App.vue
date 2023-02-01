<template>

<!-- scrivo un template vue  -->

<div>

<h1>Work in progress</h1>

<!-- dati dei post  -->
<!-- <div>
    <ul>
        <li v-for="elem in posts" :key="elem.id">{{}}</li>
    </ul>
</div> -->

</div>


</template>



<script>


export default {

components:{
 //qui metterai i componenti
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
            //console.log(response.data)
            this.posts = response.data
        } )
    }
}

}

</script>

