<template>
    <div>

        <GridItems title="Products" :items="products" />
        
    </div>
</template>

<script>
import GridItems from '@/components/GridItems.vue';


export default {
    name: "ProductsComp",
    data() {
        return {
            products: [
                { id: 1, image: "https://m.media-amazon.com/images/I/81TEdpSNENL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: true, price: "Price Here" },
                { id: 2, image: "https://m.media-amazon.com/images/I/81cSniN1FHL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: true, price: "Price Here" },
                { id: 3, image: "https://m.media-amazon.com/images/I/71JcKHXSYfL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: false, price: "Price Here" },
                { id: 4, image: "https://m.media-amazon.com/images/I/61I6AZ3Q-bL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: true, price: "Price Here" },
                { id: 5, image: "https://m.media-amazon.com/images/I/81DM22NKVuL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: false, price: "Price Here" },
                { id: 6, image: "https://m.media-amazon.com/images/I/71vp8Lec9JL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: false, price: "Price Here" },
                { id: 7, image: "https://m.media-amazon.com/images/I/71zaAby0-FL._AC_UL480_FMwebp_QL65_.jpg", name: "Name Here", category: "Category Here", seller: "Seller Name", isTrusted: false, price: "Price Here" }
            ]
        };
    },
    components: { GridItems }
}

</script>