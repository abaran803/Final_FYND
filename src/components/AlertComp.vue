<template>
    <div>
        <div v-if="error" class="alert alert-danger alert-dismissible show m-auto fade w-75" style="top: 10px;"
            role="alert">
            <strong>Sorry!</strong> Some error occurred, please try again
            <button type="button" class="btn-close" @click="hideAlert"></button>
        </div>
        <div v-if="success" class="alert alert-success alert-dismissible show m-auto fade w-75" style="top: 10px;"
            role="alert">
            <strong>Hey!</strong> Action Performed Successfully
            <button type="button" class="btn-close" @click="hideAlert"></button>
        </div>
    </div>
</template>

<script>

export default {
    name: "AlertComp",
    props: {
        error: Boolean,
        success: Boolean,
        hideAlert: Function
    }
}

</script>