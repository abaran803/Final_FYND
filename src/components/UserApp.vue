<template>

    <div>
        <Navbar />
        <router-view class="container my-4"></router-view>
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