<template>
    <div class="container-fluid">
        <div class="row">
            <FilterContent class="col-md-3 bg bg-primary" />
            <GridItems class="col-md-9 bg bg-secondary" style="min-height: 100vh;" title="Search Results" :items="[]" />
        </div>
    </div>
</template>

<script>
import FilterContent from '@/components/FilterContent.vue';
import GridItems from '@/components/GridItems.vue';


export default {
    name: "SearchResults",
    components: { FilterContent, GridItems }
}

</script>