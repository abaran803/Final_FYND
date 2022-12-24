<template>
  <div>
    <!------ Include the above in your HEAD tag ---------->


    <div>
      <form class="bg bg-white mx-auto my-4 rounded border w-75" @submit.prevent="register">
        <h3 class="bg bg-primary w-100 px-3 py-2 text text-white">Registration Form</h3>
        <div class="p-3">
          <div class="col-sm-12">
            <div class="row">
              <div class="col-sm-6 form-group mb-3">
                <label>Name</label>
                <input type="text" v-model="formData.name" placeholder="Enter Name Here.." class="form-control">
              </div>
              <div class="col-sm-6 form-group mb-3">
                <label>Email</label>
                <input type="email" v-model="formData.email" placeholder="Enter Email Here.." class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-4 form-group mb-3">
                <label>City</label>
                <input type="text" v-model="formData.city" placeholder="Enter City Name Here.." class="form-control">
              </div>
              <div class="col-sm-4 form-group mb-3">
                <label>Pin Code</label>
                <input type="number" v-model="formData.pincode" placeholder="Enter Pin Code Here.."
                  class="form-control">
              </div>
              <div class="col-sm-4 form-group mb-3">
                <label>Mobile Number</label>
                <input type="number" v-model="formData.mob_no" placeholder="Enter Mobile Number Here.."
                  class="form-control">
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 form-group mb-3">
                <label>Pan Number</label>
                <input type="text" v-model="formData.pan" placeholder="Enter Pan Number Here.." class="form-control">
              </div>
              <div class="col-sm-6 form-group mb-3">
                <label>Aadhar Number</label>
                <input type="number" v-model="formData.aadhar" placeholder="Enter Aadhar Number Here.."
                  class="form-control">
              </div>
            </div>
            <div class="row mb-3">
              <label>Gender</label>
                <div class="form-group col-lg-6">
                  <input class="form-check-input" type="radio" name="gen" v-model="formData.gender" value="Female" aria-label="...">
                  <label class="form-check-label mx-2" for="flexRadioDefault1">
                    Female
                  </label>
                </div>
                <div class="form-group col-lg-6">
                  <input class="form-check-input"  type="radio" name="gen" v-model="formData.gender" value="Male" aria-label="..." checked>
                  <label class="form-check-label mx-2" for="flexRadioDefault2">
                    Male
                  </label>
                </div>
            </div>
            <div class="row">
              <div class="col-sm-6 form-group mb-3">
                <label>Date of Birth</label>
                <input type="date" v-model="formData.dob" placeholder="Enter Designation Here.." class="form-control">
              </div>
              <div class="col-sm-6 form-group mb-3">
                <label>User Type</label>
                <select v-model="formData.userType" class="form-control">
                  <option value="basic">Basic</option>
                  <option value="localShopOwner">Local Shpp Owner</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-3">
              <label>Password</label>
              <input type="password" v-model="formData.password" placeholder="Enter Password Here.."
                class="form-control">
            </div>
          </div>
          <div class="my-2">
            <div class="form-text small"><router-link to="/login">Already a member | Sign In</router-link></div>
          </div>
          <button type="submit" class="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {register} from '../services/api';

export default {
    name: 'RegistrationComp',
    data() {
        return {
            formData: {
              name: '',
              email: '',
              city: '',
              pincode: '',
              mob_no: '',
              aadhar: '',
              pan: '',
              dob: '',
              gender: '',
              userType: ''
            }
        }
    },
    methods: {
        async register() {
            console.log(this.formData)
            try {
                await register(this.formData);
                console.log("Registered");
            } catch(e) {
                console.log("Error:", e.message);
            }
            // localStorage.setItem('isUserExist', true);
            // this.$router.push('/app');
        }
    }
}

</script>

<style scoped>
/* Space out content a bit */
body {
  padding-top: 20px;
  padding-bottom: 20px;
}

/* Everything but the jumbotron gets side spacing for mobile first views */
.header,
.marketing,
.footer {
  padding-right: 15px;
  padding-left: 15px;
}

/* Custom page header */
.header {
  border-bottom: 1px solid #e5e5e5;
}

/* Make the masthead heading the same height as the navigation */
.header h3 {
  padding-bottom: 19px;
  margin-top: 0;
  margin-bottom: 0;
  line-height: 40px;
}

/* Custom page footer */
.footer {
  padding-top: 19px;
  color: #777;
  border-top: 1px solid #e5e5e5;
}

/* Customize container */
@media (min-width: 768px) {
  .container {
    max-width: 730px;
  }
}

.container-narrow>hr {
  margin: 30px 0;
}

/* Main marketing message and sign up button */
.jumbotron {
  text-align: center;
  border-bottom: 1px solid #e5e5e5;
}

.jumbotron .btn {
  padding: 14px 24px;
  font-size: 21px;
}

/* Supporting marketing content */
.marketing {
  margin: 40px 0;
}

.marketing p+h4 {
  margin-top: 28px;
}

/* Responsive: Portrait tablets and up */
@media screen and (min-width: 768px) {

  /* Remove the padding we set earlier */
  .header,
  .marketing,
  .footer {
    padding-right: 0;
    padding-left: 0;
  }

  /* Space out the masthead */
  .header {
    margin-bottom: 30px;
  }

  /* Remove the bottom border on the jumbotron for visual effect */
  .jumbotron {
    border-bottom: 0;
  }
}
</style>