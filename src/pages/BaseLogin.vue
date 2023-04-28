<template>
  <div class="container">
    <section class="left">
      <!-- <p style="font-size: 18px; font-weight: 500" class="top-text">Ourpass</p> -->
       <q-img src="../assets/inventory-logo.png" alt="company-logo" style="width:100px"/>
      <section class="right top-logo">
        <!-- <div class="circle">
          <span class="login-img"
            ><img src="../assets/ourpass-login.png" alt=""
          /></span>
        </div> -->
        
      </section>
      <main class="main">
        <p style="font-size: 24px; font-weight: 500" class="m-text">
          Welcome back
        </p>
        <p class="m-text">Welcome back! Please enter your details.</p>
        <q-form @submit.prevent="submitForm">
          <div class="q-mb-lg">
            <label class="label">Email</label>
            <q-input
              outlined
              v-model="form.email"
              placeholder="Enter your email"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) =>
                  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(val) ||
                  'Please enter a Valid email address',
              ]"
            />
          </div>
          <div>
            <label class="label">Password</label>
            <q-input
              outlined
              v-model="form.password"
              placeholder="********"
              :rules="[
                (val) => !!val || 'Field is required',
                (val) => val.length > 7 || 'minimum of 8 characters',
              ]"
            />
          </div>
          <div class="flex justify-between q-mt-md">
            <q-checkbox v-model="right" label="Remember for 30 days" color="black" />
            <q-btn flat color="black" label="Forgot password" to="/" style="font-size: 12px;text-transform: capitalize;"/>
          </div>
          <q-btn :loading="loading" label="Sign in" class="full-width login-btn" type="submit" style="box-shadow: none;" />
           
        </q-form>
        <q-btn
          outline
          color="white"
          class="full-width q-mt-md text-grey-10 btn-border google-btn"
        >
          <q-icon>
            <img left src="../assets/google.png" alt="google" />
          </q-icon>
          <div class="q-ml-sm">Sign in with google</div>
        </q-btn>
        <div class="main-footer">
          <a>Don't have an account?</a>
          <a href="/signup" flat style="text-decoration: none;color: #58b4b2;">Sign up</a>
        </div>
      </main>
    </section>

    <section class="right bg flex ">
      <!-- <div class="circle">
        <span class="login-img"
          ><img src="../assets/ourpass-login.png" alt=""
        /></span>
      </div> -->
      <div>
           <p >Take your Inventory To The Next Level</p>
           <p>manage stock levels, monitor sales trends,receive low stock alerts and enjoy simple tools that help you build and grow your business faster.</p>
           <div class="list-items">
           <span><q-icon  class="fa-solid fa-chevron-right" style="color:red"  /></span>   
            <p > Keep track of all your inventory in one place</p>
           
          </div>
          <div class="list-items">
           <span><q-icon  class="fa-solid fa-chevron-right" style="color:red"  /></span>   
            <p > Access inventory information from anywhere, at any time</p>
           
          </div>
          <div class="list-items">
           <span><q-icon  class="fa-solid fa-chevron-right" style="color:red"  /></span>   
            <p > Reduce manual data entry and errors</p>
           
          </div>
          <div class="list-items">
           <span><q-icon  class="fa-solid fa-chevron-right" style="color:red"  /></span>   
            <p > Save time and money by optimizing your inventory management</p>
           
          </div>
         </div>
      <!-- <q-image src="../assets/ourpass-login.png" style="height: 200px; width: 200px;"/> -->
    </section>
  </div>
</template>

<script >
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router';
 export default{
  data(){
      return {
          form:{
              email:'',
              password:''
          },
          right:true,
          router:useRouter(),
          loading:false,
      $q : useQuasar()


      }

  },
  methods:{

    spinner(){
      
    },
  
      submitForm(){
        this.loading=true
        this.$api.post('auth/login',this.form)
        .then(res=>{
            console.log(res)
        this.$store.dispatch('auth/login',res.data)
        this.router.push({ path: '/dashboard' })
            
        })
        .catch(err=>{
        this.loading = false
      this.$q.notify({
          type: 'negative',
          message: err.message,
          position:'top'
        })
        })
          
      },
  
      
 
  },
  

 }
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
.right {
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1100px) {
    display: none;
  }
}
.bg {
  background-color: #e8f8f3;
}
.label {
  display: block;
  margin-bottom: 5px;
}
.left {
  flex-basis: 50%;
  padding: 20px;
  @media (max-width: 1100px) {
    flex-basis: 100%;
  }
}
.circle {
  background-color: #1dbc86;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 1093px) {
    width: 100px;
    height: 100px;
  }
}
.main {
  padding: 2.5rem;
  padding-inline: 5rem;
  @media (max-width: 551px) {
    padding-inline: 1rem;
  }
}
.login-btn {
  /* background-color: #1dbc86; */
  background-color: black;
  color: white;
  border-radius: 8px;
  padding: 10px;
  margin-top: 8px;
}
.google-btn {
  padding: 10px;
  border-radius: 8px;
}
.btn-border {
  outline: none;
}
.main-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  place-content: center;
  margin-top: 2rem;
}
.block {
  display: inline-block;
}
.login-img {
  display: block;
  width: 70%;
  & img {
    width: 100%;
  }
}
.top-logo {
  display: none;
  @media (max-width: 1093px) {
    display: flex;
  }
}
.top-text {
  @media (max-width: 1093px) {
    display: none;
  }
}
.m-text {
  @media (max-width: 1093px) {
    text-align: center;
  }
}
.list-items{
  display: flex;
  align-items: center;

  & p{
    margin-top: 16px;
  }
}
</style>
