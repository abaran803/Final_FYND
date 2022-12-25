<template>
    <div style="min-height: 80vh;">
        <LoadingOverlay :active="loading" />
        <AlertComp :error="error" :success="success" :hideAlert="hideAlert" />
        <!-- Use Dropzone Here -->
        Upload JSON File/Excel Sheet here <br>
        <input type="file" @change="changeFile"><br><br>
        <button @click="submitFile">Submit File</button>
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
            console.log(this.uploadFile);
        },
        hideAlert() {
            this.error = false;
            this.success = false;
        }
    },
    components: { LoadingOverlay, AlertComp }
}

</script>