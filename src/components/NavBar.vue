<template>
    <div class="bg bg-warning p-2 position-sticky top-0" style="z-index: 9999">
        <div class="navbar-content m-0">
            <ul type="none">
                <li class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;" to="/app">Home</router-link>
                </li>
                <li class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;" to="/app/categories">Categories</router-link>
                </li>
                <li class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;" to="/app/products">Products</router-link>
                </li>
            </ul>
            <ul type="none">
                <li>
                    <button @click="userLogout">Logout</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    methods: {
        userLogout() {
            localStorage.clear();
            this.$router.push('/login');
        }
    }
}

</script>

<style scoped>
ul {
    margin: 0;
    display: flex;
    align-items: center;
}

.navbar-content {
    display: flex;
    align-items: center;
    margin: 10px;
    justify-content: space-between;
}

a:hover {
    background-color: orange;
}
</style>