<template>

    <div>
        <Navbar />
        <router-view class="my-4" :key="$route.path"></router-view>
        <FooterPart class="bg bg-danger" />
    </div>

</template>

<script>
import FooterPart from './FooterPart.vue';
import Navbar from './NavBar.vue';


export default {
    components: { Navbar, FooterPart }
}

</script>