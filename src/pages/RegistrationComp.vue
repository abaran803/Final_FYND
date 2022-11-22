<template>
    <div>
        <h1>Registration Page</h1>
        <form @submit.prevent="register">
            <label v-for="e in formDatas" :key="e.id" :for="e.id">
                {{e.label}}: <input :type="e.type" :id="e.id" v-model="formData[e.model]"><br><br>
            </label>
            <button type="submit">Register</button><br>
            <div>Already a customer, login</div>
            <router-link to="/login">Login Here</router-link>
        </form>
    </div>
</template>

<script>

export default {
    name: 'RegistrationComp',
    data() {
        return {
            formDatas: [
                { label: 'Username', type: 'text', placeholder: 'Enter Username', isRequired: true, id: 'username', model: 'username' },
                { label: 'Email', type: 'email', placeholder: 'Enter Emil', isRequired: true, id: 'email', model: 'email' },
                { label: 'Password', type: 'password', placeholder: 'Enter Password', isRequired: true, id: 'pass', model: 'password' },
            ],
            formData: {
                username: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        register() {
            console.log(this.formData)
        }
    }
}

</script>