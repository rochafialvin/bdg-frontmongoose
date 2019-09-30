// ACTION CREATORS

export const sendData = (_id, _username) => {
    // _id = res.data[0].id
    // _username = res.data[0].username
    
    // Action
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: _id,
            username: _username
        }
    }
}