<template>
    <div style="min-height: 100vh;">

        
        <LoadingOverlay :active="loading" />
        <AlertComp :error="error" :hideAlert="hideAlert" />
        <div class="col-md-10 m-auto text text-center mt-3" v-if="!categories.length && !error">NO ITEM FOUND</div>

        <!-- Items on the Page -->
        <GridItems class="my-4" title="Categories" :items="categories" />

    </div>
</template>

<script>
import AlertComp from '@/components/AlertComp.vue';
import GridItems from '@/components/GridItems.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import { getAllCategories } from '../services/api.js'

export default {
    name: "CategoriesComp",
    data() {
        return {
            categories: [],
            loading: true,
            error: false
        };
    },
    methods: {
        hideAlert() {
            this.error = false;
        }
    },
    components: { GridItems, LoadingOverlay, AlertComp },
    async mounted() {
        try {
            this.categories = await getAllCategories();
        } catch (e) {
            this.error = true;
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