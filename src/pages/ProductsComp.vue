<template>
    <div>

        <GridItems title="Products" :items="products" />
        
    </div>
</template>

<script>
import GridItems from '@/components/GridItems.vue';
import products from '../data/products.json'

export default {
    name: "ProductsComp",
    data() {
        return {
            products
        };
    },
    components: { GridItems }
}

</script>