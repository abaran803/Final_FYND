<template>

    <div>
        <Navbar />
        <router-view :key="$route.path"></router-view>
        <!-- <FooterPart class="bg bg-danger" /> -->
    </div>

</template>

<script>
// import FooterPart from './FooterPart.vue';
import Navbar from './NavBar.vue';


export default {
    components: { Navbar }
}

</script>