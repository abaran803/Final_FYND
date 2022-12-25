<template>
    <div>

        <div class="mt-5 mb-5">
            <div class="d-flex justify-content-center row">
                <div class="col-md-11">
                    <div v-for="e in items" :key="e.name" class="row p-2 bg-white border rounded mb-2">
                        <div class="col-md-3 mt-1"><img class="img-fluid img-responsive rounded product-image"
                                :src="e.image.split('|')[0]"></div>
                        <div class="col-md-6 mt-1">
                            <h5>{{ e.name }}</h5>
                            <div class="d-flex flex-row text text-muted small">
                                Seller:&nbsp;<span>{{ e.sellerId }}</span>
                            </div>
                            <div class="mt-1 mb-1 spec-1"><span>{{ e["Product Brand"] }}</span></div>
                            <p class="text-justify text-truncate para mb-0">{{ e.description }}<br><br>
                            </p>
                        </div>
                        <div class="align-items-center align-content-center col-md-3 border-left mt-1">
                            <div class="d-flex flex-row align-items-center">
                                <h4 class="mr-1">₹{{ Math.floor(e.price*81) }}</h4>
                                <!-- <span class="strike-text">$20.99</span> -->
                            </div>
                            <h6 class="text-success">Free shipping</h6>
                            <div class="d-flex flex-column mt-4">
                                <router-link :to="`/app/product/${e.id}`" class="text text-white"
                                    style="text-decoration: none; color: inherit;">
                                    <button class="btn btn-primary btn-sm w-100" type="button">
                                        Details
                                    </button>
                                </router-link>
                                <button class="btn btn-outline-primary btn-sm mt-2" type="button">Add to
                                    wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>

export default {
    name: 'GridItems',
    props: {
        items: []
    }
}

</script>

<style scoped>
body {
    background: #eee
}

.ratings i {
    font-size: 16px;
    color: red
}

.strike-text {
    color: red;
    text-decoration: line-through
}

.product-image {
    width: 100%
}

.dot {
    height: 7px;
    width: 7px;
    margin-left: 6px;
    margin-right: 6px;
    margin-top: 3px;
    background-color: blue;
    border-radius: 50%;
    display: inline-block
}

.spec-1 {
    color: #938787;
    font-size: 15px
}

h5 {
    font-weight: 400
}

.para {
    font-size: 16px
}
</style>