// ACTION CREATORS
import axios from 'axios'

export const sendData = (_username, _password) => {
    
    return (dispatch) => {

        
        axios.get(
            'http://localhost:2099/users',
            {
                params: {
                    username: _username,
                    password: _password
                }
            }
        ).then( (res) => {
            // red.data akan dalam bentuk array
            // jika tidak ditemukan, arraynya kosong, length = 0
            if(res.data.length === 0){
                alert('Tidak dapat login')
    
            } else {
                // res.data[0] = {id, username, email, password}
                let {id, username} = res.data[0]
    
                // Menyimpan data user di local storage
                localStorage.setItem('userData', JSON.stringify({id: id, username: username}))
                
                // Kirim id dan username ke reducer
                 dispatch(
                    {
                        type: "LOGIN_SUCCESS",
                        payload: {
                            id: id,
                            username: username
                        }
                    }
                 )
                
            }
    
        } )
        
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