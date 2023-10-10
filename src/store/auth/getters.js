
// export function getloginDetails (state) {
//    return state.loginDetails
// }


// to get the stored authdata in your code call the code below 
// {...this.$store.getters['auth/getloginDetails'].loginData}

export function getName (state) {
   return state.name
}

export function getEmail (state) {
   return state.email
}
export function getToken (state) {
   return state.token
}