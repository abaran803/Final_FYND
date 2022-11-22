<template>
    <div>
        <h1>Categories</h1>

        <!-- List of Categories -->
        <div class="categories">

            <!-- Each Category -->
            <div v-for="e in categories" :key="e.id" class="category">

                <!-- Category Image -->
                <div class="category-image">{{e.image}}</div>
                <!-- Category Name -->
                <div class="category-name">{{e.name}}</div>

            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CategoriesComp',
    data() {
        return {
            categories: [
                {id: 1,image: 'Image Here', name: 'Name Here'},
                {id: 2,image: 'Image Here', name: 'Name Here'},
                {id: 3,image: 'Image Here', name: 'Name Here'},
                {id: 4,image: 'Image Here', name: 'Name Here'},
                {id: 5,image: 'Image Here', name: 'Name Here'},
                {id: 6,image: 'Image Here', name: 'Name Here'}
            ]
        }
    }
}

</script>

<style scoped>
.categories {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
    justify-content: center;
    gap: 15px;
}
.category {
    width: 250px;
    height: 250px;
    background-color: lightblue;
}
.category-image {
    height: 80%;
    background-color: lightgreen;
}
</style>