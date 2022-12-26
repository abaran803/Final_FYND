<template>
    <div class="my-0">
        <header>
            <!-- Search Box Here -->
            <BannerVue :scrollToFeatured="scrollToFeatured" />
            <div ref="featured"></div>
            <FeaturedProducts />
        </header>
    </div>
</template>

<script>
import BannerVue from '@/components/Banner.vue';
import FeaturedProducts from '@/components/FeaturedProducts.vue';


export default {
    name: "HomePage",
    components: { BannerVue, FeaturedProducts },
    methods: {
        scrollToFeatured() {
            this.$refs["featured"].scrollIntoView({ behavior: "smooth" })
        }
    }
}

</script>