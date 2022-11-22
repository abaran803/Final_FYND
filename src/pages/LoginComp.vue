<template>
    <div>
        <h1>Login Page</h1>
        <form @submit.prevent="loginUser">
            <label v-for="e in formDatas" :key="e.id" :for="e.id">
                {{e.label}}: <input :type="e.type" :id="e.id" v-model="formData[e.model]"><br><br>
            </label>
            <button type="submit">Submit</button>
            <div>Not a customer, register</div>
            <router-link to="/register">Register Here</router-link>
        </form>
    </div>
</template>

<script>

export default {
    name: 'LoginComp',
    data() {
        return {
            formDatas: [
                { label: 'Username', type: 'text', placeholder: 'Enter Username', isRequired: true, id: 'username', model: 'username' },
                { label: 'Password', type: 'password', placeholder: 'Enter Password', isRequired: true, id: 'pass', model: 'password' },
            ],
            formData: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        loginUser() {
            localStorage.setItem('isUserExist', true);
            this.$router.push('/app');
        }
    }
}

</script>