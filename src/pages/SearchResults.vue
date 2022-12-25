<template>
    <div class="container" style="min-height: 100vh;">
        <LoadingOverlay :active="loading" />
        <AlertComp :error="error" :hideAlert="hideAlert" />
        <div class="row justify-content-center">
            <!-- <FilterContent class="col-md-3 bg bg-primary" style="min-height: 100vh;" /> -->
            <div class="col-md-10 m-auto text text-center mt-3" v-if="!items.length && !error">NO ITEM FOUND</div>
            <SearchResultItems v-if="!loading" class="col-md-9" style="min-height: 100vh;" title="Search Results" :items="items" />
        </div>
    </div>
</template>

<script>
// import FilterContent from '@/components/FilterContent.vue';
import AlertComp from '@/components/AlertComp.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import SearchResultItems from '@/components/SearchResultItems.vue';
import { getSellerData, searchProducts } from '@/services/api';

export default {
    name: "SearchResults",
    data() {
        return {
            query: this.$route.params.id,
            items: [],
            loading: true,
            error: false
        }
    },
    components: { SearchResultItems, LoadingOverlay, AlertComp },
    methods: {
        async fetchResults() {
            try {
                this.loading = true;
                this.items = await searchProducts(this.query);
                for(const item of this.items) {
                    const userData = await getSellerData(item.sellerId);
                    item.sellerId = userData.data.name;
                }
            } catch(e) {
                this.error = true;
                console.log("Error:", e.message);
            }
            this.loading = false;
        },
        hideAlert() {
          this.error = false;
        }
    },
    mounted() {
        this.fetchResults(); 
    }
}

</script>