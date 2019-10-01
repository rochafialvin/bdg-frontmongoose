import { combineReducers } from 'redux'

// nilai awal yang akan di simpan di label 'auth'
let initState = {
    id: 0,
    username: ""
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return {...state, id: action.payload.id, username: action.payload.username}
        
        case "LOGOUT_SUCCESS":
            return {...state, ...initState}
    
        default:
            return state
    }
}

// Untuk menentukan tempat penyimpanan data dari setiap reducer
// 'authReducer' akan memiliki tempat menyimpan data namanya adalah 'auth'
let reducers = combineReducers(
    {
        auth: authReducer
    }
)

// di export untuk di import di src/index.js
export default reducers

// Action adalah object yang memiliki dua properties
    // type: untuk menentukan reducer mana yang akan mengolah
    //  payload: berisi data yang dibuthkan untuk di olah
    // {
    //     type: "LOGIN_SUCCESS",
    //     payload: { id: 32 , username: "Steve" }
    // }
