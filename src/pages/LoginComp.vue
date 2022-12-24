<template>
    <div>
        <form class="bg bg-white mx-auto my-4 rounded border" style="max-width: 22rem;" @submit.prevent="loginUser">
            <h3 class="bg bg-primary w-100 px-3 py-2 text text-white">Sign In</h3>
            <div class="p-3">

                <div class="mb-3" v-for="e in formDatas" :key="e.id">
                    <label :for="e.id" class="form-label">{{ e.label }}</label>
                    <input :type="e.type" class="form-control" v-model="formData[e.model]" :id="e.id"
                        :placeholder="e.placeholder">
                </div>
                <div class="mb-2">
                    <div class="form-text small"><a href="/sessions/forgot_password">forgot password</a></div>
                    <div class="form-text small"><router-link to="/register">Not a member | Sign Up</router-link></div>
                </div>
                <div class="mb-3 form-check">
                    <input type="checkbox" class="form-check-input" id="exampleCheck1">
                    <label class="form-text" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" class="btn btn-success">Sign In</button>
            </div>
        </form>
    </div>
</template>

<script>
import { login } from '../services/api';

export default {
    name: 'LoginComp',
    data() {
        return {
            formDatas: [
                { label: 'Username/Email', type: 'text', placeholder: 'Enter Username', isRequired: true, id: 'username', model: 'username' },
                { label: 'Password', type: 'password', placeholder: 'Enter Password', isRequired: true, id: 'pass', model: 'password' },
            ],
            formData: {
                username: '',
                password: ''
            }
        }
    },
    methods: {
        async loginUser() {
            try {
                const res = await login(this.formData);
                const data = res.data;

                if (!res) {
                    throw new Error('No user found');
                }

                localStorage.setItem('isUserExist', data.token);
                localStorage.setItem('userData', JSON.stringify(data));
                this.$router.push('/app');
            } catch (e) {
                console.log("Error:", e.message);
            }
        }
    }
}

</script>