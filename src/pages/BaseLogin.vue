<template>
<div class="container ">
    <section class="left">
     <p style="font-size: 18px; font-weight: 500;" class="top-text">Ourpass</p>
        <section class=" right top-logo">
        <div class="circle">
           <span class="login-img"><img src="../assets/ourpass-login.png" alt=""></span> 
        </div>

    </section>
        <main class="main">
         <p style="font-size: 24px; font-weight: 500;" class="m-text">Welcome back</p>
         <p class="m-text">Welcome back! Please enter your details.</p>
         <div class="q-mb-lg">
                <q-label class="label">Email</q-label>
                <q-input outlined v-model="ph" placeholder="Enter your email"  :dense="dense" />

         </div>
         <div>
                <q-label class="label">Password</q-label>
                <q-input outlined v-model="ph" placeholder="********"  :dense="dense" />
              </div>
              <div class="flex justify-between q-mt-md">
                <q-checkbox v-model="right" label="Remember for 30 days" />
                <q-btn flat color="primary" label="Forgot password" to="/"/>
              </div>
              <q-btn  label="Sign in" class="full-width login-btn" />
              <q-btn outline  color="white" class="full-width q-mt-md text-grey-10 btn-border google-btn">
               <q-icon>
                <img left src="../assets/google.png" alt="google">
               </q-icon>
                 <div class="q-ml-sm">Sign in with google</div>
            </q-btn>
            <div class="main-footer">
           
         
             <a>Don't have an account?</a>
              <a href="">Sign up</a>
    
            </div>

        </main>
    </section>

    <section class="bg-grey-10 right ">
        <div class="circle">
           <span class="login-img"><img src="../assets/ourpass-login.png" alt=""></span> 
        </div>
        <!-- <q-image src="../assets/ourpass-login.png" style="height: 200px; width: 200px;"/> -->

    </section>
 </div>
</template>

<script setup>
import { ref } from 'vue'
let right=ref(false)
</script>

<style lang="scss" scoped>
.container{
    
    height: 100vh;
    display: flex;
    justify-content: space-between;
    @media (min-width:1500px) {
        max-width: 1200px;
    margin: auto;
    }
    @media (min-width:1800px) {
    height: auto;
    }
}
.right{
    flex-basis: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1100px) {
        display: none;
    }
}
.label{
    display: block;
    margin-bottom: 5px;
}
.left{
    flex-basis: 50%;
    padding: 20px;
    @media (max-width:1100px) {
       flex-basis: 100%;
    }
  
}
.circle{
    background-color: purple;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width:1093px) {
        width: 100px;
        height:100px;
    }
}
.main{
    padding: 2.5rem;
    padding-inline: 5rem;
    @media (max-width:551px) {
      padding-inline: 1rem;
    }
  
}
.login-btn{
    background-color: purple;
    color: white;
    border-radius: 8px;
    padding: 10px;
    margin-top: 8px;
}
.google-btn{
    padding:10px;
    border-radius: 8px;

}
.btn-border{
   outline:none;
}
.main-footer{
    display: flex;
    justify-content: center;
    align-items: center;
    place-content: center;
    margin-top: 2rem;
}
.block{
    display: inline-block;

}
.login-img{
    display: block;
    width: 70%;
    & img{
        width: 100%;
    }
}
.top-logo{
    display: none;
    @media (max-width:1093px) {
        display: flex;
    }
}
.top-text{
    @media (max-width:1093px) {
        display: none;
    }
}
.m-text{
    @media (max-width:1093px) {
        text-align: center;
    }
}
</style>