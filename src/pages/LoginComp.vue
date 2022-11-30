<template>
    <div>
        <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet"
            id="bootstrap-css">
        <div class="container d-flex" style="margin-top:30px">
            <div class="col-md-4" style="margin: auto;">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title"><strong>Sign In </strong></h3>
                    </div>
                    <div class="panel-body">
                        <form role="form" @submit.prevent="loginUser">
                            <div class="form-group" v-for="e in formDatas" :key="e.id">
                                <label :for="e.id">{{e.label}}</label>
                                <input :type="e.type" v-model="formData[e.model]" class="form-control" :id="e.id"
                                    :placeholder="e.placeholder">
                            </div>
                            <div><a href="/sessions/forgot_password">forgot password</a></div>
                            <div><router-link to="/register">Not a member | Sign Up</router-link></div>
                            <button type="submit" class="btn btn-sm btn-success mt-4">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script src="//netdna.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>

<script>
import {login} from '../services/api';

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

                if(!res) {
                    throw new Error('No user found');
                }
                
                localStorage.setItem('isUserExist', data.token);
                localStorage.setItem('userData', JSON.stringify(data));
                this.$router.push('/app');
            } catch(e) {
                console.log("Error:", e.message);
            }
        }
    }
}

</script>