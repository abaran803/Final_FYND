<template>
    <div>
        <form class="bg bg-white mx-auto my-4 rounded border w-75 pb-3" @submit.prevent="submitForm">
            <h3 class="bg bg-primary w-100 px-3 py-2 text text-white">Upload Product</h3>
            <div class="p-3">
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-6 form-group mb-3">
                            <label>Name</label>
                            <input type="text" v-model="formData.name" placeholder="Enter Name Here.."
                                class="form-control">
                        </div>
                        <div class="col-sm-6 form-group mb-3">
                            <label>Category</label>
                            <input type="text" v-model="formData.category" placeholder="Enter Category Here.."
                                        class="form-control">
                        </div>
                    </div>
                </div>
                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-sm-6 form-group mb-3">
                            <label>Price</label>
                            <input type="number" v-model="formData.price" placeholder="Enter Price Here.."
                                class="form-control">
                        </div>
                        <div class="col-sm-6 form-group mb-3">
                            <label>Area</label>
                            <input type="text" v-model="formData.area" placeholder="Enter Area Here.."
                                class="form-control">
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 mb-3">
                    <label>Description</label>
                    <textarea type="email" v-model="formData.description" placeholder="Product Description..."
                        rows=5 class="form-control"></textarea>
                </div>
                <div class="col-sm-12 mb-3">
                    <label>Image</label>
                    <div @click="$refs.file.click()" class="w-100 border"
                        style="display: flex; justify-content: center; cursor: pointer; height: 150px;">
                        <div style="display: flex; align-items: center;">
                            <button class="btn btn-light btn-lg">Upload File</button>
                        </div>
                        <input id="files" multiple @change="putImage" ref="file" type="file" class="form-control"
                            style="display: none;" />
                        <div style="position: absolute;">{{ imageName }}</div>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Register</button>
            </div>
        </form>
    </div>
</template>

<script>
import { uploadSingleProduct } from '@/services/api';


export default {

    name: 'UploadSingle',
    data() {
        return {
            formData: {
                name: '',
                category: '',
                price: '',
                area: '',
                description: '',
                image: {}
            },
            imageName: ''
        }
    },
    methods: {
        putImage(event) {
            const newImage = new FormData();
            newImage.append('file', event.target.files);
            this.formData.image = newImage;
            this.imageName = event.target.value.split('\\').pop();
        },
        async submitForm() {
            this.formData.sellerId = '63849de5014bcb9a04387825';
            // Extract the seller id from localstorage
            try {
                const data = await uploadSingleProduct(this.formData);
                console.log("Uploaded", data);
            } catch (e) {
                console.log("Error:", e.message);
            }
        }
    }

}

</script>

<style scoped>
/* Space out content a bit */
body {
    padding-top: 20px;
    padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
    padding-right: 15px;
    padding-left: 15px;
}

/* Custom page header */
.header {
    border-bottom: 1px solid #e5e5e5;
}

/* Make the masthead heading the same height as the navigation */
.header h3 {
    padding-bottom: 19px;
    margin-top: 0;
    margin-bottom: 0;
    line-height: 40px;
}

/* Custom page footer */
.footer {
    padding-top: 19px;
    color: #777;
    border-top: 1px solid #e5e5e5;
}

/* Customize container */
@media (min-width: 768px) {
    .container {
        max-width: 730px;
    }
}

.container-narrow>hr {
    margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
    text-align: center;
    border-bottom: 1px solid #e5e5e5;
}

.jumbotron .btn {
    padding: 14px 24px;
    font-size: 21px;
}

/* Supporting marketing content */
.marketing {
    margin: 40px 0;
}

.marketing p+h4 {
    margin-top: 28px;
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {

    /* Remove the padding we set earlier */
    .header,
    .marketing,
    .footer {
        padding-right: 0;
        padding-left: 0;
    }

    /* Space out the masthead */
    .header {
        margin-bottom: 30px;
    }

    /* Remove the bottom border on the jumbotron for visual effect */
    .jumbotron {
        border-bottom: 0;
    }
}
</style>