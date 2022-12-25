<template>
    <div style="min-height: 80vh;">
        <LoadingOverlay :active="loading" />
        <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />
        <!-- Use Dropzone Here -->
        <input class="d-none" type="file" @change="changeFile" ref="input">
        <div class="d-flex flex-column justify-content-center align-items-center vh-100 px-4 w-100">
            <div class="bg bg-white d-flex flex-column align-items-center justify-content-center w-100 border rounded" style="max-width: 400px; height: 300px;">
                <button @click="selectFile" class="btn btn-light">Upload File</button>
                <label v-if="!uploadFile" class="text-muted mt-2">Upload Excel Sheet here</label>
                <label v-if="uploadFile" class="text-muted mt-2">{{uploadFile.name}}</label>
            </div>
            <button v-if="uploadFile" class="btn btn-primary mt-2 w-100" style="max-width: 400px;" @click="submitFile">Submit File</button>
        </div>
    </div>
</template>

<script>
import AlertComp from '@/components/AlertComp.vue';
import LoadingOverlay from '@/components/LoadingOverlay.vue';
import { uploadBulkData } from '@/services/api';


export default {
    name: "UploadBulk",
    data() {
        return {
            uploadFile: "",
            loading: false,
            error: false,
            success: false
        };
    },
    methods: {
        async submitFile() {
            this.hideAlert();
            const formData = new FormData();
            formData.append("file", this.uploadFile);
            this.loading = true;
            try {
                const data = await uploadBulkData(formData);
                this.success = true;
                console.log(data);
            }
            catch (e) {
                this.error = true;
                console.log(e);
            }
            this.loading = false;
        },
        changeFile(event) {
            this.uploadFile = event.target.files[0];
            console.log(this.uploadFile.name);
        },
        selectFile() {
            this.$refs.input.click();
        },
        hideAlert() {
            this.error = false;
            this.success = false;
        }
    },
    components: { LoadingOverlay, AlertComp }
}

</script>