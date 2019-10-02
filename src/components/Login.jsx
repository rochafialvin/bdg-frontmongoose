import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sendData } from '../actions/index'

import axios from 'axios'

class Login extends Component {

    onSignInClick = () => {
        // Data from user
        let _username = this.username.value
        let _password = this.password.value

        this.props.sendData(_username, _password)

    }

    render() {
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
    }
}

export default connect(null, {sendData})(Login)