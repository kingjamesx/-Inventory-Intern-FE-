<template>
  <div class="container">
    <section class="left">
      <main class="main">
        <p style="font-size: 24px; font-weight: 500" class="m-text">
          Welcome back
        </p>
        <p class="m-text">Welcome back! Please enter your details.</p>
        <q-form @submit.prevent="submitForm">
          <AuthField
            label="Email"
            placeholder="Enter your Email"
            v-model="form.email"
            :rules="emailRules"
          />
          <AuthFieldPassword
            label="Password"
            v-model="form.password"
            placeholder="*******"
            :rules="passwordRules"
          />
          <div class="flex justify-between q-mt-md">
            <q-checkbox
              v-model="right"
              label="Remember for 30 days"
              color="black"
            />
            <q-btn
              flat
              color="black"
              label="Forgot password"
              to="/forgot-password"
              style="font-size: 12px; text-transform: capitalize"
            />
          </div>
          <AuthButton :loading="loading" label="Sign in" />
        </q-form>
        <q-btn
          outline
          color="white"
          class="full-width q-mt-md text-grey-10 btn-border google-btn"
        >
          <q-icon>
            <img left src="../../assets/google.png" alt="google" />
          </q-icon>
          <div class="q-ml-sm">Sign in with google</div>
        </q-btn>
        <div class="auth-footer">
          <p>Don't have an account?</p>
          <router-link to="/signup" flat>Sign up</router-link>
        </div>
      </main>
    </section>

    <section class="right bg">
      <AuthText />
    </section>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";
import AuthText from "./AuthText.vue";
import AuthButton from "./AuthButton.vue";
import AuthField from "./AuthField.vue";
import AuthFieldPassword from "./AuthFieldPassword.vue";
export default {
  components: { AuthText, AuthField, AuthFieldPassword, AuthButton },
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      right: true,
      router: useRouter(),
      loading: false,
      $q: useQuasar(),
      passwordRules: [
        (val) => !!val || "Field is required",
        (val) => val.length > 7 || "minimum of 8 characters",
      ],
      emailRules: [
        (val) => !!val || "Field is required",
        (val) =>
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
          "Please enter a Valid email address",
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        this.loading = true;
        const response = await this.$api.post("auth/login", this.form);
        const data = await response.data;
        const {
          payload: { fullName: name, email: email },
          access_token: token,
        } = data;
        this.$api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        this.$store.commit("auth/name", name);
        this.$store.commit("auth/email", email);
        this.$store.commit("auth/token", token);
        localStorage.setItem("token", token);
        this.router.push({ path: "/dashboard" });
      } catch (error) {
        console.log(error);
        this.loading = false;
        this.negativeToast(error);
      }
    },
    negativeToast(error) {
      this.$q.notify({
        type: "negative",
        message: error.message,
        position: "top",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  display: flex;
  justify-content: space-between;
  @media (min-width: 1500px) {
    max-width: 1200px;
    margin: auto;
  }
  @media (min-width: 1800px) {
    height: auto;
  }
}
.left {
  flex-basis: 55%;
  @media (max-width: 1100px) {
    flex-basis: 100%;
  }
}
.right {
  flex-basis: 45%;
  @media (max-width: 1100px) {
    display: none;
  }
}
.bg {
  background-color: #e8f8f3;
}

.main {
  padding: 2.5rem;
  padding-inline: 10rem;
  margin-top: 0.7rem;
  @media (max-width: 551px) {
    padding-inline: 1rem;
  }
}

.google-btn {
  padding: 10px;
  border-radius: 8px;
}
.btn-border {
  outline: none;
}

.m-text {
  @media (max-width: 1093px) {
    text-align: center;
  }
}
</style>
