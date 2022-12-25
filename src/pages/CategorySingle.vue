<template>
    <div>
        <div class="container mydiv">
            <div class="row justify-content-center gap-3">
                <router-link v-for="e in items" :to="`/app/product/${e.id}`" :key="e.id" class="col-md-4 mb-3 text-decoration-none text text-black h-100" style="width: 18rem;">
                    <div class="card w-100">
                        <img :src="e.image" height="250px" class="card-img-top" alt="...">
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

export default {

    name: 'CategorySingle',
    data() {
        return {
            items: [],
            loading: true
        }
    },
    async mounted() {
        try {
            const data = await getProductByCategoryName(this.$route.params.catName);
            this.items = data;
        } catch(e) {
            console.log("Error:", e.message);
        }
        this.loading = false;
    },

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