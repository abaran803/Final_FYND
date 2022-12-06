<template>
    <div>
        <div class="container mt-5" id="featured">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <span>Featured Products</span>
                <span class="custom-badge text-uppercase">See More</span>
            </div>
            <div v-if="loading">Loading...</div>
            <div v-if="items.length" class="row g-3">
                <div v-for="item in items" :key="item.id" class="col-md-4">
                    <router-link style="text-decoration: none; color: inherit;" :to="`/app/product/${item.id}`" class="card bg">
                        <div class="d-flex justify-content-between align-items-center">
                            <div class="d-flex flex-row align-items-center time">
                                <i class="fa fa-clock-o"></i>
                                <small class="ml-1">{{(Math.floor(Math.random()*6)+1)}} Days</small>
                            </div>
                            <img src="https://i.imgur.com/suuFVrQ.png" width="20">
                        </div>
                        <div class="text-center p-3">
                            <img :src="item.image" width="250" height="280px">
                            <!-- <img src="https://i.imgur.com/TbtwkyW.jpg" width="250"> -->
                        </div>
                        <div class="text-center">
                            <h5>{{item.name.substr(0, 20)}}{{(item.name.length > 20 ? '...' : '')}}</h5>
                            <span class="text-success">₹{{Math.floor(item.price*81)}} value</span>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getNumberOfProducts } from '@/services/api';


export default {
    name: 'FeaturedProducts',
    data() {
        return {
            items: [],
            loading: true
        }
    },
    async mounted() {
        try {
            const res = await getNumberOfProducts(6);
            this.items = res.data;
        } catch (e) {
            console.log("Error:", e.message);
        }
        this.loading = false;
    }
}

</script>

<style scoped>
body {
    background-color: #f6f7f9;
}

.custom-badge {

    background-color: #343a40 !important;
    color: #fff;
    font-size: 11px;
    padding: 5px;
    padding-left: 11px;
    padding-right: 11px;
    border-radius: 7px;
}


.card {

    border: none;
    padding: 15px;
    cursor: pointer;
}


.time i {

    color: #cacacaa3;
}
</style>