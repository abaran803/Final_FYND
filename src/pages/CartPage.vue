<template>
    <div class="card my-4">
        <LoadingOverlay :active="loading" />
        <div class="row">
            <div class="col-md-8 cart">
                <div class="title">
                    <div class="row">
                        <div class="col">
                            <h4><b>Shopping Cart</b></h4>
                        </div>
                        <div class="col align-self-center text-right text-muted">{{ itemData.length }} items</div>
                    </div>
                </div>
                <AlertComp :error="error" :hideAlert="hideAlert" />
                <div class="col-md-10 m-auto text text-center mt-3" v-if="!itemData.length && !error">NO ITEM FOUND
                </div>
                <div v-if="itemData && !error">
                    <div v-for="item in itemData" :key="item._id" class="row border-top border-bottom">
                        <div class="row main align-items-center">
                            <div class="col-2"><img class="img-fluid" :src="item.image.split('|')[0]"></div>
                            <div class="col">
                                <div class="row text-muted">Shirt</div>
                                <div class="row">{{ item.name.slice(0, 15) }}{{ (item.name.length > 15 ? '...' : '') }}
                                </div>
                            </div>
                            <div class="col">
                                <button class="bg bg-danger px-2 rounded border text text-white"
                                    @click="decCnt(item.productId)">-</button><a href="#" class="border">{{ item.count
                                    }}</a><button class="bg bg-success px-2 rounded border text text-white"
                                    @click="incCnt(item.productId)">+</button>
                            </div>
                            <div class="col">₹{{ (Math.floor(item.price * 81)) }}<span class="close">&#10005;</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="back-to-shop"><router-link to="/app">&leftarrow;</router-link><span class="text-muted">Back to shop</span></div>
            </div>
            <div class="col-md-4 summary">
                <div>
                    <h5><b>Summary</b></h5>
                </div>
                <hr>
                <div class="row">
                    <div class="col" style="padding-left:0;">ITEMS 3</div>
                    <div class="col text-right">&euro; 132.00</div>
                </div>
                <form>
                    <p>SHIPPING</p>
                    <select>
                        <option class="text-muted">Standard-Delivery- &euro;5.00</option>
                    </select>
                    <p>GIVE CODE</p>
                    <input id="code" placeholder="Enter your code">
                </form>
                <div class="row" style="border-top: 1px solid rgba(0,0,0,.1); padding: 2vh 0;">
                    <div class="col">TOTAL PRICE</div>
                    <div class="col text-right">&euro; 137.00</div>
                </div>
                <router-link to="/app/checkout">
                    <button class="btn">CHECKOUT</button>
                </router-link>
            </div>
        </div>

    </div>
</template>

<script>
import AlertComp from '@/components/AlertComp.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import { getProductDetails } from '@/services/api';


export default {
    name: "CartPage",
    data() {
        return {
            itemData: [],
            loading: true,
            error: false
        };
    },
    methods: {
        async fetchItemData(items) {
            console.log(items);
            const itemsData = [];
            try {
                for (let i = 0; i < items.length; i++) {
                    const data = await getProductDetails(items[i].productId);
                    data.count = items[i].count;
                    data.productId = items[i].productId;
                    itemsData.push(data);
                }
            }
            catch (err) {
                this.error = true;
                console.log(err.message);
            }
            this.itemData = itemsData;
            this.loading = false;
        },
        async changeCnt(prodId, cnt) {
            this.loading = true;
            const res = await this.$store.dispatch("addToCart", {
                productId: prodId,
                count: cnt,
                buyerId: JSON.parse(localStorage.getItem("userData"))._doc._id
            });
            if (!res)
                throw new Error("Some error occurred");
            const items = await this.$store.dispatch("fetchCart", JSON.parse(localStorage.getItem("userData"))._doc._id);
            this.fetchItemData(items);
            return true;
        },
        async incCnt(prodId) {
            try {
                const res = await this.changeCnt(prodId, 1);
                if (!res)
                    throw new Error("Some error occurred");
            }
            catch (e) {
                this.error = true;
                alert(e.message);
            }
            this.loading = false;
        },
        async decCnt(prodId) {
            try {
                const res = await this.changeCnt(prodId, -1);
                if (!res)
                    throw new Error("Some error occurred");
            }
            catch (e) {
                this.error = true;
                alert(e.message);
            }
            this.loading = false;
        },
        hideAlert() {
            this.error = false;
        }
    },
    async mounted() {
        try {
            const items = await this.$store.dispatch("fetchCart", JSON.parse(localStorage.getItem("userData"))._doc._id);
            this.fetchItemData(items);
        } catch (err) {
            this.error = true;
            console.log(err.message);
        }
        this.loading = false;
    },
    components: { LoadingOverlay, AlertComp }
}

</script>

<style scoped>
body {
    background: #ddd;
    min-height: 100vh;
    vertical-align: middle;
    display: flex;
    font-family: sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
}

.title {
    margin-bottom: 5vh;
}

.card {
    margin: auto;
    max-width: 950px;
    width: 90%;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 1rem;
    border: transparent;
}

@media(max-width:767px) {
    .card {
        margin: 3vh auto;
    }
}

.cart {
    background-color: #fff;
    padding: 4vh 5vh;
    border-bottom-left-radius: 1rem;
    border-top-left-radius: 1rem;
}

@media(max-width:767px) {
    .cart {
        padding: 4vh;
        border-bottom-left-radius: unset;
        border-top-right-radius: 1rem;
    }
}

.summary {
    background-color: #ddd;
    border-top-right-radius: 1rem;
    border-bottom-right-radius: 1rem;
    padding: 4vh;
    color: rgb(65, 65, 65);
}

@media(max-width:767px) {
    .summary {
        border-top-right-radius: unset;
        border-bottom-left-radius: 1rem;
    }
}

.summary .col-2 {
    padding: 0;
}

.summary .col-10 {
    padding: 0;
}

.row {
    margin: 0;
}

.title b {
    font-size: 1.5rem;
}

.main {
    margin: 0;
    padding: 2vh 0;
    width: 100%;
}

.col-2,
.col {
    padding: 0 1vh;
}

a {
    padding: 0 1vh;
}

.close {
    margin-left: auto;
    font-size: 0.7rem;
}

img {
    width: 3.5rem;
}

.back-to-shop {
    margin-top: 4.5rem;
}

h5 {
    margin-top: 4vh;
}

hr {
    margin-top: 1.25rem;
}

form {
    padding: 2vh 0;
}

select {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1.5vh 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}

input {
    border: 1px solid rgba(0, 0, 0, 0.137);
    padding: 1vh;
    margin-bottom: 4vh;
    outline: none;
    width: 100%;
    background-color: rgb(247, 247, 247);
}

input:focus::-webkit-input-placeholder {
    color: transparent;
}

.btn {
    background-color: #000;
    border-color: #000;
    color: white;
    width: 100%;
    font-size: 0.7rem;
    margin-top: 4vh;
    padding: 1vh;
    border-radius: 0;
}

.btn:focus {
    box-shadow: none;
    outline: none;
    box-shadow: none;
    color: white;
    -webkit-box-shadow: none;
    transition: none;
}

.btn:hover {
    color: white;
}

a {
    color: black;
}

a:hover {
    color: black;
    text-decoration: none;
}

#code {
    background-image: linear-gradient(to left, rgba(255, 255, 255, 0.253), rgba(255, 255, 255, 0.185)), url("https://img.icons8.com/small/16/000000/long-arrow-right.png");
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: center;
}
</style>