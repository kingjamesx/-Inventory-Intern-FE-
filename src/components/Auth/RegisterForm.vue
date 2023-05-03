<template>
  <div class="container">
    <section class="left bg">
      <AuthText />
    </section>
    <section class="right">
      <main class="main">
        <p style="font-size: 24px; font-weight: 500" class="m-text">
          Create an account
        </p>
        <p class="m-text">Sign into your account to get started</p>
        <q-form @submit="submitForm">
          <AuthField
            label="Full Name"
            v-model="form.name"
            placeholder="Enter your Full Name"
            :rules="nameRule"
          />
          <AuthField
            label="Business Name"
            v-model="form.businessName"
            placeholder="Enter your Business Name"
            :rules="businessRule"
          />
          <AuthField
            label="Email Address"
            v-model="form.email"
            placeholder="Enter your Email Address"
            :rules="emailRule"
          />
          <AuthField
            label="Phone Number"
            v-model="form.phoneNumber"
            placeholder="Enter your Phone Number"
            :rules="businessRule"
            mask="###########"
          />
          <AuthFieldPassword
            label="Password"
            v-model="form.password"
            placeholder="*******"
            :rules="passwordRule"
          />
          <AuthFieldPassword
            label="Confirm Password"
            v-model="form.confirmPassword"
            placeholder="*******"
            :rules="confirmPasswordRule"
          />
          <AuthButton label="Create Account" :loading="loading" />
        </q-form>
        <div class="auth-footer">
          <p>Have an account?</p>
          <router-link to="/">Sign in</router-link>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AuthField from "./AuthField.vue";
import AuthFieldPassword from "./AuthFieldPassword.vue";
import AuthText from "./AuthText.vue";
import AuthButton from "./AuthButton.vue";
export default {
  data() {
    return {
      form: {
        name: "",
        businessName: "",
        email: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
      },

      loading: false,
      router: useRouter(),
      $q: useQuasar(),
      nameRule: [
        (val) => !!val || "Field is required",
        (val) => /^([^0-9]*)$/.test(val) || "Please enter a valid name",
      ],
      businessRule: [(val) => !!val || "Field is required"],
      emailRule: [
        (val) => !!val || "Field is required",
        (val) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
          "Please enter a Valid email address",
      ],
      passwordRule: [
        (val) => !!val || "Field is required",
        (val) => val.length > 7 || "minimum of 8 characters",
      ],
      confirmPasswordRule: [
        (val) => !!val || "Field is required",
        (val) => val == this.form.password || "Password is not matched",
      ],
      
    };
  },
  methods: {
    async submitForm() {
      try {
        this.loading = true;
        const response = await this.$api.post("auth/register", this.form);
        const data= await response.data
        const {message:message,
         data:{
           newBusiness:{
             name:name,
             email:email
           },
           access_token:token
         }
      }=data
        this.positiveToast(message)  
        this.$store.commit('auth/name',name)
        this.$store.commit('auth/email',email)
        this.$store.commit('auth/token',token)
        localStorage.setItem('token',token )
        this.router.push({ path: "/dashboard" });
      } catch (error) {
        this.loading = false;
         this.negativeToast(error.message)
      }
       
    
    },
    
    positiveToast(message){
        this.$q.notify({
          type: "positive",
          message: message,
          position: "top-right",
        });
    },
    negativeToast(message){
        this.$q.notify({
          type: "negative",
          message: message,
          position: "top-right",
        });
    }
  },
  components: { AuthField, AuthFieldPassword, AuthButton, AuthText },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1800px) {
    max-width: 1200px;
    margin: auto;
  }
  @media (min-width: 1800px) {
    height: auto;
  }
}
.left {
  flex-basis: 45%;
  @media (max-width: 1100px) {
    display: none;
  }
}
.bg {
  background-color: #f3f5f9;
}

.right {
  flex-basis: 55%;
  padding: 20px;
  overflow-y: auto;
  @media (max-width: 1100px) {
    flex-basis: 100%;
  }
}

.main {
  padding: 2.5rem;
  padding-inline: 8rem;
  @media (max-width: 551px) {
    padding-inline: 1rem;
  }
}

.m-text {
  @media (max-width: 1093px) {
    text-align: center;
  }
}
</style>
