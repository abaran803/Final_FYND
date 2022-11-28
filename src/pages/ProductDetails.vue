<template>
    <div>
        <link href='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css' rel='stylesheet'>
        <link href='' rel='stylesheet'>
        <div class="container-fluid" style="max-width: 1200px">
            <div class="col-lg-10 border p-3 main-section bg-white">
                <div class="hedding m-0 pl-3 pt-0 pb-3">
                    Home <i class="fa-solid fa-chevron-right"></i> Skirts <i class="fa-solid fa-chevron-right"></i> Women's Velvet Dress
                </div>
                <div class="row m-0">
                    <div class="col-lg-4 left-side-product-box pb-3">
                        <img :src='banner' class="border p-3">
                        <span class="sub-img">
                            <img v-for="e in allImages" :key="e" :src="e" @click="changeBanner(e)" class="border p-2">
                        </span>
                    </div>
                    <div class="col-lg-8">
                        <div class="right-side-pro-detail border p-3 m-0">
                            <div class="row">
                                <div class="col-lg-12">
                                    <span>{{product.category}}</span>
                                    <p class="m-0 p-0">{{product.name}}</p>
                                    <span>
                                        <router-link to="/app/profile/full" class="seller-name">
                                            Seller: {{product.sellerName}}
                                            <span v-if="isTrusted" class="text text-primary">
                                                <i class="fa-solid fa-circle-check fa-xs"></i>
                                            </span>
                                        </router-link>
                                    </span>
                                </div>
                                <div class="col-lg-12">
                                    <p class="m-0 p-0 price-pro">₹{{product.price}}</p>
                                    <hr class="p-0 m-0">
                                </div>
                                <div class="col-lg-12 pt-2">
                                    <h5>Product Detail</h5>
                                    <span>{{product.description}}</span>
                                    <hr class="m-0 pt-2 mt-2">
                                </div>
                                <div class="col-lg-12 mt-3">
                                    <div class="row">
                                        <div class="col-lg-6 pb-2">
                                            <a href="#" class="btn btn-danger w-100">Add To Cart</a>
                                        </div>
                                        <div class="col-lg-6">
                                            <a href="#" class="btn btn-success w-100">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-12 pt-2 mt-3">
                                    <h5>Key Features</h5>
                                    <span>
                                        <div class="d-flex align-items-center gap-2 ml-2">
                                            <i class="fa-solid fa-check text text-success"></i>
                                            <div>Verified Seller</div>
                                        </div>
                                        <div v-if="isTrusted" class="d-flex align-items-center gap-2 ml-2">
                                            <i class="fa-solid fa-check text text-success"></i>
                                            <div>Trusted Seller</div>
                                        </div>
                                    </span>
                                    <hr class="m-0 pt-2 mt-2">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 text-center pt-3">
                        <h4>More Product</h4>
                    </div>
                </div>
                <div class="row mt-3 p-0 text-center pro-box-section">
                    <div class="col-lg-3 pb-2">
                        <div class="pro-box border p-0 m-0">
                            <img src="http://nicesnippets.com/demo/pd-b-image1.jpg">
                        </div>
                    </div>
                    <div class="col-lg-3 pb-2">
                        <div class="pro-box border p-0 m-0">
                            <img src="http://nicesnippets.com/demo/pd-b-images2.jpg">
                        </div>
                    </div>
                    <div class="col-lg-3 pb-2">
                        <div class="pro-box border p-0 m-0">
                            <img src="http://nicesnippets.com/demo/pd-b-images3.jpg">
                        </div>
                    </div>
                    <div class="col-lg-3 pb-2">
                        <div class="pro-box border p-0 m-0">
                            <img src="http://nicesnippets.com/demo/pd-b-images4.jpg">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js'></script>
<script type='text/javascript' src='https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js'></script>
<script type='text/javascript' src='https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js'></script>

<script>
import { getProductDetails, getSellerData } from '@/services/api';


export default {

    name: 'ProductDetails',
    data() {
        return {
            product: {},
            loading: true,
            isTrusted: false,
            banner: '',
            allImages: []
        }
    },
    methods: {
        async fetchProduct(id) {
            try {
                const data = await getProductDetails(id);
                const seller = await getSellerData(data.sellerId);
                this.product = data;
                this.allImages = data.image.split('|');
                this.banner = this.allImages[0];
                this.product.sellerName = seller.data.name;
                this.isTrusted = seller.data.isTrusted;
            } catch (e) {
                console.log("Error:", e.message);
            }
            this.loading = false;
        },
        changeBanner(newBanner) {
            this.banner = newBanner;
        }
    },
    created() {
        this.fetchProduct(this.$route.params.id);
    }

}

</script>

<style scoped>
body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: #f5f5f5
}

.hedding {
    font-size: 15px;
    color: #ab8181;
    display: flex;
    align-items: center;
}

.hedding i {
    font-size: 10px;
    margin: 0 5px;
}

.main-section {
    margin: auto;
}

.left-side-product-box img {
    width: 100%;
}

.left-side-product-box .sub-img img {
    margin-top: 5px;
    width: 83px;
    height: 100px;
}

.right-side-pro-detail span {
    font-size: 15px;
}

.right-side-pro-detail p {
    font-size: 25px;
}

.right-side-pro-detail .price-pro {
    color: #E45641;
}

.right-side-pro-detail .tag-section {
    font-size: 18px;
    color: #5D4C46;
}

.pro-box-section .pro-box img {
    width: 100%;
    height: 200px;
}

.seller-name {
    color: grey;
}

.seller-name:hover {
    color: blue
}

@media (min-width:360px) and (max-width:640px) {
    .pro-box-section .pro-box img {
        height: auto;
    }
}
</style>