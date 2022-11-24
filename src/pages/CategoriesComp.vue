<template>
    <div>

        <!-- Items on the Page -->
        <GridItems title="Categories" :items="categories" />

    </div>
</template>

<script>
import GridItems from '@/components/GridItems.vue';


export default {
    name: "CategoriesComp",
    data() {
        return {
            categories: [
                { id: 1, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/QC/lapdesk_440x460.png", name: "Name Here" },
                { id: 2, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/QC/lapdesk_440x460.png", name: "Name Here" },
                { id: 3, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/QC/lapdesk_440x460.png", name: "Name Here" },
                { id: 4, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/QC/lapdesk_440x460.png", name: "Name Here" },
                { id: 5, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/QC/lapdesk_440x460.png", name: "Name Here" },
                { id: 6, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/WFH/QC/lapdesk_440x460.png", name: "Name Here" }
            ]
        };
    },
    components: { GridItems }
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