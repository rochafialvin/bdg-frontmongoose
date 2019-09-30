import { combineReducers } from 'redux'

let initState = {
    id: 0,
    username: ""
}

let authReducer = (state = initState, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            // do something
            break;
        
        case "LOGOUT_SUCCES":
            // do something
    
        default:
            return state
    }
}

let reducers = combineReducers(
    {
        auth: authReducer
    }
)

export default reducers

// Action adalah object yang memiliki dua properties
    // type: untuk menentukan reducer mana yang akan mengolah
    //  payload: berisi data yang dibuthkan untuk di olah
    // {
    //     type: "LOGIN_SUCCESS",
    //     payload: { id: 32 , username: "Steve" }
    // }
