import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { sendData } from '../actions/index'


class Login extends Component {

    onSignInClick = () => {
        // Data from user
        let _username = this.username.value
        let _password = this.password.value

        this.props.sendData(_username, _password)

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
                                <h4>Username</h4>
                            </div>
                            <input className='form-control' ref={ (input) => {this.username = input} } type='text'/>
    
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