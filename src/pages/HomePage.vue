<template>
    <div>
        <h1>Homepage Component</h1>
        <header>
            <!-- Search Box Here -->
            <BannerVue />
            <FeaturedProducts />
        </header>
    </div>
</template>

<script>
import BannerVue from '@/components/Banner.vue';
import FeaturedProducts from '@/components/FeaturedProducts.vue';


export default {
    name: "HomePage",
    components: { BannerVue, FeaturedProducts }
}

</script>