// ACTION CREATORS

export const sendData = (_id, _username) => {
    // _id = res.data[0].id
    // _username = res.data[0].username
    
    // Menyimpan data user di local storage
    localStorage.setItem('userData', JSON.stringify({id: _id, username: _username}))
    
    // Action
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: _id,
            username: _username
        }
    }
}

export const onLougoutUser = () => {
    return {
        type: "LOGOUT_SUCCESS"
    }
}

export const keepLogin = (userData) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: userData.id,
            username: userData.username
        }
    }
}