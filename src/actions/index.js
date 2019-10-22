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
    localStorage.removeItem('userData')

    // Hapus data di redux state
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