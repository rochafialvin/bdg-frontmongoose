import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import axios from '../config/axios'

import { sendData } from '../actions/index'


class Login extends Component {

    onSignInClick = () => {
        // GEt data from user
        let _email = this.email.value
        let _password = this.password.value

        // Login
        axios.post(
            '/users/login',
            {
                email: _email,
                password: _password
            }
        ).then(res => {
            if(res.data.error){
                return alert(res.data.error)
            }

            let {username, _id} = res.data

            // Simpan username dan id di localStorage
            localStorage.setItem('user', JSON.stringify({username, _id}))

            // Simpan username dan id ke redux
            // res.data = {_id, username, name, email, ...}
            this.props.sendData(
                username,
                _id
            )



        }).catch(err => {
            console.log({err})

        })

    }

    render() {
        // jika belum login, username di state kosong
        if(!this.props._username){
            // Tampilkan halaman login
            return (
                <div className='col-6 mx-auto mt-5 card'>
                    <div className='card-body'>
                        <div className='border-bottom border-secondary card-title'>
                            <h1>Login</h1>
                        </div>
                        <form className='form-group' >
                            <div className='card-title'>
                                <h4>Email</h4>
                            </div>
                            <input className='form-control' ref={ (input) => {this.email = input} } type='email'/>
    
                            <div className='card-title'>
                                <h4>Password</h4>
                            </div>
                            <input className='form-control' ref={ (input) => {this.password= input} } type='password'/>
                        </form>
                        <button onClick={this.onSignInClick} className='btn btn-outline-primary btn-block'>Sign In</button>
                    </div>
                </div>
            )
        } else {
            // Arahkan ke halaman home
            return <Redirect to="/"/>
        }

    }
}

// Function yang akan mengakses data di redux state
const mapStateToProps = (state) => {
    return {
        _username : state.auth.username
    }
}

export default connect(mapStateToProps, {sendData})(Login)