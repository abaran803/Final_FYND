<template>
    <div>

        <div v-if="loading" class="vh-100 d-flex justify-content-center align-items-center">
            Loading ...
        </div>

        <!-- Items on the Page -->
        <GridItems class="my-4" title="Categories" :items="categories" />

    </div>
</template>

<script>
import GridItems from '@/components/GridItems.vue';
import { getAllCategories } from '../services/api.js'

export default {
    name: "CategoriesComp",
    data() {
        return {
            categories: [],
            loading: true
        };
    },
    components: { GridItems },
    async mounted() {
        try {
            this.categories = await getAllCategories();
        } catch (e) {
            console.log("Error:", e.message);
        }
        this.loading = false;
    }
}

</script>

<style scoped>
.categories {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
    gap: 15px;
}

.category {
    width: 250px;
    height: 250px;
    background-color: lightblue;
}

.category-image {
    height: 80%;
    background-color: lightgreen;
}
</style>