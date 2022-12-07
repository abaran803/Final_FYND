<template>
    <div class="bg bg-dark p-2 position-sticky top-0" style="z-index: 9999">
        <div class="navbar-content m-0">
            <ul type="none">
                <li class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;" to="/app">Home
                    </router-link>
                </li>
                <li class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;"
                        to="/app/categories">Categories</router-link>
                </li>
                <li class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;"
                        to="/app/upload/single">Add Products</router-link>
                </li>
                <li v-if="userType !== 'basic'" class="mx-2">
                    <router-link class="text text-white px-2 py-1 rounded" style="text-decoration: none;"
                        to="/app/upload/bulk">Add Bulk</router-link>
                </li>
            </ul>
            <ul type="none" class="d-flex gap-2">
                <li>
                    <div class="input-group input-group-sm flex-nowrap">
                        <input type="text" class="form-control" v-model="query" @keyup.enter="searchItems"
                            placeholder="Search" aria-label="Search" aria-describedby="addon-wrapping">
                        <span :class="`input-group-text btn btn-primary text text-white ${!query && 'disabled'}`"
                            @click="searchItems" id="addon-wrapping">
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </li>
                <li>
                    <router-link to="/app/cart">
                        <button class="btn btn-sm btn-secondary">
                            <i class="fa-solid fa-cart-shopping"></i>
                        </button>
                    </router-link>
                </li>
                <li>
                    <button @click="userLogout" class="btn btn-sm btn-danger">Logout</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    name: 'NavBar',
    data() {
        return {
            query: '',
            userType: ''
        }
    },
    methods: {
        userLogout() {
            localStorage.clear();
            this.$router.push('/login');
        },
        searchItems() {
            if (!this.query) {
                return;
            }
            this.$router.push('/app/search/' + this.query);
        }
    },
    created() {
        this.userType = JSON.parse(localStorage.getItem('userData'))._doc.userType;
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