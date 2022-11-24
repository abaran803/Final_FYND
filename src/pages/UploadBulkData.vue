<template>
    <div>
        <!-- Use Dropzone Here -->
        Upload JSON File/Excel Sheet here <br>
        <input type="file" :value="uploadFile" @change="changeFile"><br>
        <button @click="submitFile">Submit File</button>
    </div>
</template>

<script>

export default {
    name: 'UploadBulk',
    data() {
        return {
            uploadFile: ''
        }
    },
    methods: {
        submitFile() {
            console.log(this.uploadFile);
        },
        changeFile(event) {
            this.uploadFile = event.target.value;
        }
    }
}

</script>