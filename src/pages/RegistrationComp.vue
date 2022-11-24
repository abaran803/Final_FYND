<template>
    <div>
        <h1>Registration Page</h1>
        <form @submit.prevent="register">
            <label v-for="e in formDatas" :key="e.id" :for="e.id">
                {{e.label}}: <input v-if="e.type != 'radio'" :type="e.type" :id="e.id" v-model="formData[e.model]">
                <input v-if="e.type == 'radio'" :type="e.type" :id="e.id" selected="false" :value="e.value" v-model="formData[e.model]"><br><br>
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
                { label: 'Aadhar No.', type: 'text', placeholder: 'Enter Aadhar No.', isRequired: true, id: 'aadhar', model: 'password' },
                { label: 'Pan No.', type: 'text', placeholder: 'Enter PAN no.', isRequired: true, id: 'pan', model: 'password' },
                { label: 'Date of Birth', type: 'date', placeholder: 'Enter DOB', isRequired: true, id: 'dob', model: 'password' },
                { label: 'Ph no.', type: 'number', placeholder: 'Enter Phone Number', isRequired: true, id: 'phno', model: 'password' },
                { label: 'Male', type: 'radio', isRequired: false, name: 'gen', id: 'gen', value: 'male', model: 'gender' },
                { label: 'Female', type: 'radio', isRequired: false, name: 'gen', id: 'gen2', value: 'female', model: 'gender' },
            ],
            formData: {
                username: '',
                email: '',
                password: '',
                gender: ''
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