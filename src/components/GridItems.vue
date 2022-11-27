<template>
    <div>

        <!-- <h1>{{ title }}</h1> -->

        <!-- List of Items -->
        <div class="row justify-content-center gap-3">

            <!-- Each Item -->
            <div :class="`card p-0 col-lg-4 col-md-3 col-sm-6`" v-for="e in items" :key="e.id" style="width: 18rem;">

                <!-- Item Image -->
                <img :src="e.image" class="card-img-top m-0 p-2 border"
                    style="height: 350px; object-fit: cover; object-position: top;" alt="product-image">
                <div class="card-body bg bg-light">

                    <!-- Item Name -->
                    <h5 class="card-title">
                        <router-link :to="`/app/${title === 'Categories' ? 'category' : 'product'}/${e.id}`">
                            {{ e.name }}
                        </router-link>
                    </h5>

                    <!-- Price -->
                    <h6 v-if="e.price" class="card-subtitle mb-3">₹ {{ e.price }}</h6>

                    <!-- Item Category -->
                    <h6 v-if="e.category" class="card-subtitle mb-2 text-muted small">{{ e.category }}</h6>

                    <!-- Seller Name -->
                    <h6 v-if="e.sellerId" class="card-subtitle mb-3 text-muted small">{{ e.sellerId }}</h6>

                </div>
            </div>

        </div>
    </div>

</template>

<script>

export default {
    name: 'GridItems',
    props: {
        title: String,
        items: []
    }
}

</script>

<style scoped>
.items {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
    gap: 15px;
}

.item {
    width: 220px;
    height: 250px;
    background-color: lightblue;
}

.item-image {
    height: 70%;
    background-color: lightgreen;
}

.card-title:hover {
    color: yellowgreen;
}
</style>