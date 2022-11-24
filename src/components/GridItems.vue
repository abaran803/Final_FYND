<template>
    <div>

        <h1>{{ title }}</h1>

        <!-- List of Items -->
        <div class="row justify-content-center gap-3 m-4">

            <!-- Each Item -->
            <div class="card col-lg-4 col-md-3 col-sm-6" v-for="e in items" :key="e.id" style="width: 18rem;">

                <!-- Item Image -->
                <img :src="e.image" class="card-img-top" style="max-height: 300px; height: 100%; object-fit: cover; object-position: top;" alt="product-image">
                <div class="card-body">

                    <!-- Item Name -->
                    <h5 class="card-title">{{ e.name }}</h5>

                    <!-- Item Category -->
                    <h6 v-if="e.category" class="card-subtitle mb-2 text-muted">{{ e.category }}</h6>

                    <!-- Seller Name -->
                    <h6 v-if="e.seller" class="card-subtitle mb-2 text-muted">{{ e.seller }}</h6>
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
</style>