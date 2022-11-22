<template>
    <div>

        <h1>Products</h1>

        <!-- List of Products -->
        <div class="products">
            
            <!-- Each Product -->
            <div class="product" v-for="e in products" :key="e.id">

                <!-- Product Image -->
                <div class="product-image">{{e.image}}</div>

                <!-- Product Name -->
                <div class="product-name">{{e.name}}</div>

                <!-- Product Category -->
                <div>{{e.category}}</div>

                <!-- Seller Name -->
                <div class="seller-info" style="display: flex; justify-content: space-between; width: 80%; margin: auto;">
                    <div>{{e.seller}}</div>
                    <div>
                        <div v-if="e.isTrusted">B</div>
                    </div>
                </div>

                <!-- Product Price -->
                <div>Price Here</div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ProductsComp',
    data() {
        return {
            products: [
                {  id: 1, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: true, price: 'Price Here' },
                {  id: 2, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: true, price: 'Price Here' },
                {  id: 3, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: false, price: 'Price Here' },
                {  id: 4, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: true, price: 'Price Here' },
                {  id: 5, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: false, price: 'Price Here' },
                {  id: 6, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: false, price: 'Price Here' },
                {  id: 6, image: 'Image Here', name: 'Name Here', category: 'Category Here', seller: 'Seller Name', isTrusted: false, price: 'Price Here' }
            ]
        }
    }
}

</script>

<style scoped>
.products {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
    gap: 15px;
}

.product {
    width: 220px;
    height: 250px;
    background-color: lightblue;
}

.product-image {
    height: 70%;
    background-color: lightgreen;
}
</style>