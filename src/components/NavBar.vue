<template>
    <div>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg bg-body-tertiary position-sticky top-0">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">SOX</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 align-items-start">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/app">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/app/categories">Categories</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/app/upload/single">Add Products</router-link>
                        </li>
                        <li v-if="userType !== 'basic'" class="nav-item">
                            <router-link class="nav-link" to="/app/upload/bulk">Add Bulk</router-link>
                        </li>
                    </ul>
                    <div class="d-flex gap-2 right-side">
                        <form class="d-flex mx-1 nav-item" role="search">
                            <div class="input-group">
                                <input v-model="query" @keyup.enter="searchItems" style="max-width: 40vw;" type="text"
                                    class="form-control" placeholder="Search" aria-label="Search">
                                <span :class="`input-group-text btn btn-primary ${!query && 'disabled'}`"
                                    @click="searchItems"><i class="fa-solid fa-magnifying-glass"></i></span>
                            </div>
                        </form>
                        <div class="d-flex">
                            <router-link to="/app/cart" class="mx-1">
                                <button class="btn btn-secondary">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </router-link>
                            <button @click="userLogout" class="btn btn-danger mx-1" type="submit">Log Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
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

.navbar-nav a:hover {
    background-color: rgba(255, 247, 232, 0.301);
    border-radius: 10px;
}

@media screen and (max-width: 768px) {
    .right-side {
        flex-direction: column;
        gap: 2rem;
    }
}
</style>