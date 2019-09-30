// ACTION CREATORS

export const sendData = (_id, _username) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: {
            id: _id,
            username: _username
        }
    }
}