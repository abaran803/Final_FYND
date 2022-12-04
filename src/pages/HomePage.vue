<template>
    <div class="vh-100 my-0">
        <header>
            <!-- Search Box Here -->
            <BannerVue />
            <FeaturedProducts />
        </header>
        <FooterPartVue />
    </div>
</template>

<script>
import FooterPartVue from '@/components/FooterPart.vue';
import BannerVue from '@/components/Banner.vue';
import FeaturedProducts from '@/components/FeaturedProducts.vue';


export default {
    name: "HomePage",
    components: { BannerVue, FeaturedProducts, FooterPartVue }
}

</script>