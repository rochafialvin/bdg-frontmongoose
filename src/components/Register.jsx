import React, { Component } from 'react'

import axios from 'axios'

class Register extends Component {



    onSubmitClick = () => {
        // Ambil data dari text box
        let _username = this.username.value // rochafi
        let _email = this.email.value // rochafi@gmail.com
        let _password = this.sandi.value

        axios.get('http://localhost:2099/users')
            .then((res) => {
                /*
                    res.data = [
                        {username: alex , email: alex19@gmail.com},
                        {username: rochafi, email: rochafi@gmail.com},
                        {username: rexy , email: rexytofa@gmail.com}
                    ]
                */
                // user = {id, username, email, password}
                let takenUsername = res.data.filter((user) => {
                    return user.username === _username // rochafi === rochafi
                })
                /*
                    [
                        {username: rochafi, email: rochafi@gmail.com}
                    ]
                */


                if(takenUsername.length > 0){
                    return console.log("Username has been taken")
                }

                let takenEmail = res.data.filter((user) => {
                    return user.email === _email // rochafi === rochafi
                })

                if(takenEmail.length > 0){
                    return console.log("Email has been taken")
                }

                axios.post(
                    'http://localhost:2099/users',
                    {
                        username: _username,
                        email: _email,
                        password: _password
                    }
                ).then(() => {
                    alert("Berhasil terdaftar")
                })

                
            })

        // axios.get('http://localhost:2099/users', {params:{ username:_username }})
        //     .then((res) => {
        //         if(res.data.length > 0){
        //             alert("Username has been taken")
        //         } else {
        //             axios.get('http://localhost:2099/users', {params: {email: _email}})
        //                 .then((res) => {
        //                     if(res.data.length > 0){
        //                         alert("Email has been taken")
        //                     } else {
                                // axios.post(
                                //     'http://localhost:2099/users',
                                //     {
                                //         username: _username,
                                //         email: _email,
                                //         password: _password
                                //     }
                                // ).then(() => {
                                //     alert("Berhasil terdaftar")
        //                         })
        //                     }
        //                 })
        //         }

        //     })


        // POST data
        // axios.post(
        //     'http://localhost:2099/users', 
        //     {
        //         username: _username,
        //         email: _email,
        //         password: _password
        //     }
        // )

    }

    render() {
        return (
            <div className='col-6 mx-auto mt-5 card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Register</h1>
                    </div>
                    <form className='form-group' >
                        <div className='card-title'>
                            <h4>Username</h4>
                        </div>
                        <input ref={ (asdf) => {this.username = asdf} } className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Email</h4>
                        </div>
                        <input ref={ (input) => {this.email = input} } className='form-control' type='email'/>

                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input ref={ (input) => {this.sandi = input} } className='form-control' type='password'/>
                    </form>
                    <button onClick={this.onSubmitClick} className='btn btn-outline-primary btn-block'>Submit</button>
                </div>
            </div>
        )
    }
}

export default Register

// Untuk memberikan referensi ke suatu tag input, kita menggunakan attribute 'ref'
    // akan menerima function, function yg di terima akan memiliki satu inputan
    // nama inputan tersebut bebas, biasanya akan di beri nama 'input'