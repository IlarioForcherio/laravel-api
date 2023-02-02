<template>
    <!-- paginate -->
    <div>
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <!-- prima pagina -->
                <li @click="$emit('clicked_page',paginationPost.currentPage - 1  )" v-if="paginationPost.currentPage > 1" class="page-item">
                    <span role="button" class="page-link">Previous</span>
                </li>
                <!-- pagine mediane -->
                <li @click="$emit('clicked_page', n )" v-for="n in paginationPost.lastPage" :key="n" class="page-item" role="button">
                    <span role="button" class="page-link">{{n}}</span>
                </li>
                <!-- ultima pagina -->
                <li @click="$emit('clicked_page', paginationPost.currentPage + 1  )" v-if="paginationPost.currentPage != paginationPost.lastPage" class="page-item" role="button">
                    <span role="button" class="page-link">Next</span>
                </li>
            </ul>
        </nav>
    </div>

    <!-- role='button' trasforma il puntatore in manina -->
</template>

<script>
export default {
    name: 'Pagination',
    props: {
        paginationPost: Object
    }
}
</script>

