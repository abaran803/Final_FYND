<template>
    <div>
        <div class="navbar-content">
            <ul type="none">
                <li>
                    <router-link to="/app">Home</router-link>
                </li>
                <li>
                    <router-link to="/app/categories">Categories</router-link>
                </li>
                <li>
                    <router-link to="/app/products">Products</router-link>
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
    display: flex;
}

li {
    margin-right: 10px;
}

.navbar-content {
    display: flex;
    margin: 10px;
    justify-content: space-between;
}
</style>