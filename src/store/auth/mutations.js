
// export function login (state,details) {
//     return state.loginDetails=details
// }
export function name (state,payload) {
    return state.name=payload
}

export function email (state,payload) {
    return state.email=payload
}

export function token (state,payload) {
    return state.token=payload
}

export function logout (state,paylaod) {
     state.name=''
     state.email=''
     state.token=''
}


