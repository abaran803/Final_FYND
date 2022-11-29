<template>
    <div class="container">
        <div class="row">
            <FilterContent class="col-md-3 bg bg-primary" style="min-height: 100vh;" />
            <div class="col-md-10 m-auto text text-center" v-if="loading">Loading...</div>
            <SearchResultItems v-if="!loading" class="col-md-9" style="min-height: 100vh;" title="Search Results" :items="items" />
        </div>
    </div>
</template>

<script>
import FilterContent from '@/components/FilterContent.vue';
import SearchResultItems from '@/components/SearchResultItems.vue';
import { getSellerData, searchProducts } from '@/services/api';

export default {
    name: "SearchResults",
    data() {
        return {
            query: this.$route.params.id,
            items: [],
            loading: true
        }
    },
    components: { FilterContent, SearchResultItems },
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
                console.log("Error:", e.message);
            }
            this.loading = false;
        }
    },
    mounted() {
        this.fetchResults(); 
    }
}

</script>