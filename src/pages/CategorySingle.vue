<template>
    <div>
        <LoadingOverlay :active="loading" />
        <AlertComp :error="error" :hideAlert="hideAlert" />
        <!-- <AlertComp :error="error" :hideAlert="hideAlert" /> -->
        <div class="col-md-10 m-auto text text-center mt-3" v-if="!items.length && !error">NO ITEM FOUND</div>
        <div class="container mydiv" style="min-height: 80vh;">
            <div class="row justify-content-center gap-3">
                <router-link v-for="e in items" :to="`/app/product/${e.id}`" :key="e.id" class="col-md-4 mb-3 text-decoration-none text text-black h-100" style="width: 18rem;">
                    <div class="card w-100">
                        <img :src="e.image.split('|')[0]" height="250px" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">{{ e.name.slice(0, 20) }}... </h5>
                            <p class="card-text text-muted">{{ $route.params.catName }}</p>
                            <a href="#" class="btn btn-success">₹ {{ Math.floor(e.price * 81) }}</a>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {getProductByCategoryName} from '../services/api';

import AlertComp from '@/components/AlertComp.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';

export default {
    name: "CategorySingle",
    data() {
        return {
            items: [],
            loading: true,
            error: false
        };
    },
    methods: {
        hideAlert() {
            this.error = false;
        }
    },
    async mounted() {
        try {
            const data = await getProductByCategoryName(this.$route.params.catName);
            this.items = data;
        }
        catch (e) {
            this.error = true;
            console.log("Error:", e.message);
        }
        this.loading = false;
    },
    components: { LoadingOverlay, AlertComp }
}

</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');

html,
body {
    height: 100%
}

body {
    display: grid;
    background: #fff;
    font-family: 'Manrope', sans-serif
}

.mydiv {
    margin-top: 50px;
    margin-bottom: 50px
}
</style>