<template>
    <div>
        <!-- Use Dropzone Here -->
        Upload JSON File/Excel Sheet here <br>
        <input type="file" @change="changeFile"><br><br>
        <button @click="submitFile">Submit File</button>
    </div>
</template>

<script>
import { uploadBulkData } from '@/services/api';


export default {
    name: 'UploadBulk',
    data() {
        return {
            uploadFile: ''
        }
    },
    methods: {
        async submitFile() {
            const formData = new FormData();
            formData.append('file', this.uploadFile);
            try {
                const data = await uploadBulkData(formData);
                console.log(data);
            } catch(e) {
                console.log(e);
            }
        },
        changeFile(event) {
            this.uploadFile = event.target.files[0];
            console.log(this.uploadFile);
        }
    }
}

</script>