<template>
    <div>
        <form @submit.prevent="'submitAction'">
            <label for="pName">
                Product Name: <input type="text" id="pName" v-model="formData.name"><br>
            </label>
            <label for="pCat">
                Product Category: <select id="pCat" v-model="formData.category">
                    <option value="Cat1">Category 1</option>
                    <option value="Cat2">Category 2</option>
                    <option value="Cat3">Category 3</option>
                    <option value="Cat4">Category 4</option>
                    <option value="Cat5">Category 5</option>
                </select><br>
            </label>
            <label for="pPrice">
                Product Price: <input type="number" id="pPrice" v-model="formData.price"><br>
            </label>
            <label for="area">
                Product Area: <textarea id="area" cols="30" rows="10" v-model="formData.area"></textarea><br>
            </label>
            <label for="desc">
                Product Description: <textarea id="area" cols="30" rows="10" v-model="formData.description"></textarea><br>
            </label>
            <label for="pImg">
                Product Image: <input type="file" id="pImage" :value="formData.image" @change="putImage"><br>
            </label><br><br><br>
            <button @click="submitForm">Upload</button>
        </form>
    </div>
</template>

<script>

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
                image: ''
            },
            formContent: {

            }
        }
    },
    methods: {
        putImage(event) {
            this.formData.image = event.target.value;
        },
        submitForm() {
            console.log(this.formData);
        }
    }

}

</script>