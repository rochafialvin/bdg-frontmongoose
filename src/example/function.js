let state = {
    id: 0,
    username: ""
}

// state tidak boleh kosongs
let authReducer = (state  , action) => {

    console.log(state)
}

authReducer("Hallo")


