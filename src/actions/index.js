// ACTION CREATORS

export const sendData = (username, _id) => {
    
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            username, _id
        }
    }

}

export const onLougoutUser = () => {

    // Hapus data di localStorage
    localStorage.removeItem('user')

    // Hapus data di redux state
    return {
        type: "LOGOUT_SUCCESS"
    }
}

export const keepLogin = (user) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            _id: user._id,
            username: user.username
        }
    }
}