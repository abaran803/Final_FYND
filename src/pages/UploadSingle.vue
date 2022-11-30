<template>
    <div>

        <link href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.0/css/bootstrap.min.css" rel="stylesheet"
            id="bootstrap-css">
        <!------ Include the above in your HEAD tag ---------->

        <div class="container">
            <h1 class="well">Upload Product</h1>
            <div class="col-lg-12 well">
                <div class="row">
                    <form @submit.prevent="submitForm">
                        <div class="col-sm-12">
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <label>Name</label>
                                    <input type="text" v-model="formData.name" placeholder="Enter Name Here.."
                                        class="form-control">
                                </div>
                                <div class="col-sm-6 form-group">
                                    <label>Category</label>
                                    <input type="text" v-model="formData.category" placeholder="Enter Email Here.."
                                        class="form-control">
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-sm-6 form-group">
                                    <label>Price</label>
                                    <input type="number" v-model="formData.price" placeholder="Enter Name Here.."
                                        class="form-control">
                                </div>
                                <div class="col-sm-6 form-group">
                                    <label>Area</label>
                                    <input type="text" v-model="formData.area" placeholder="Enter Email Here.."
                                        class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea type="email" v-model="formData.description" placeholder="Enter Email Here.."
                                    rows=5 class="form-control"></textarea>
                            </div>
                            <div class="form-group mb-4" style="height: 150px;">
                                <label>Image</label>
                                <div @click="$refs.file.click()" class="w-100 h-100 bg bg-white"
                                    style="display: flex; justify-content: center; cursor: pointer;">
                                    <div style="display: flex; align-items: center;">
                                        <button class="btn btn-light btn-lg">Upload File</button>
                                    </div>
                                    <input id="files" multiple @change="putImage" ref="file" type="file" class="form-control"
                                        style="display: none;" />
                                        <div style="position: absolute;">{{ imageName }}</div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-lg btn-info mt-5">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
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
            } catch(e) {
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