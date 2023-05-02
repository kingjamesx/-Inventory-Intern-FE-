<template>
  <div class="container">
    <section class="left">
      <AuthText />
    </section>
    <section class="right">
      <div class="right__content">
        <p class="right__title">Forgot Password?</p>
        <p class="right__text">
          No worries! We will send you instruction to create a new one.
        </p>
        <q-form @submit.prevent="submitForm">
          <AuthField
            label="Email"
            :rules="emailRules"
            placeholder="Enter your email"
            v-model="form.email"
          />
          <AuthButton :loading="loading" label="Submit"  />
        </q-form>
        <div class="auth-footer">
          <p>Don't have an account?</p>
          <router-link to="/signup" flat>Sign up here</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AuthText from "./AuthText.vue";
import AuthField from "./AuthField.vue";
import AuthButton from "./AuthButton.vue";
import { useQuasar } from "quasar";

export default {
  components: { AuthText, AuthButton, AuthField },
  data() {
    return {
      form: {
        email: "",
      },
      loading:false,
      emailRules: [
        (val) => !!val || "Field is required",
        (val) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
          "Please enter a Valid email address",
      ],
      $q: useQuasar(),
    };
  },
  methods: {
    submitForm(email) {
        this.loading=true
        setTimeout(() => {
        // we're done, we reset loading state
        this.loading = false
      }, 2000)
      setTimeout(() => {
        this.positiveToast(this.form.email)
        
      }, 2000)
      
    
    },
     positiveToast(email){
        this.$q.notify({
        type: "positive",
        message: `A reset link has been sent to ${email}`,
        position: "top-right",
      })
     }
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  height: 100vh;
}
.left {
  flex-basis: 45%;
  background-color: #e8f8f3;
  @media (max-width: 1044px) {
    display: none;
  }
}

.right {
  flex-basis: 55%;

  &__content {
    max-width: 500px;
    margin: 0 auto;
    margin-top: 8rem;
  }
  &__title {
    font-size: 1.25rem;
    font-weight: 500;
    margin-bottom: 0;
  }
  &__text {
    font-size: 0.8rem;
    margin-top: 0.5rem;
    margin-bottom: 1.6rem;
  }
  @media (max-width: 1044px) {
    flex-basis: 100%;
    padding-inline: 2rem;
  }
}
</style>
