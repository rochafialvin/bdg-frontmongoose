import React, { Component } from 'react'

class Login extends Component {

    render() {
        return (
            <div className='card'>
                <div className='card-body'>
                    <div className='border-bottom border-secondary card-title'>
                        <h1>Login</h1>
                    </div>
                    <form >
                        <div>
                            <h4>Username</h4>
                        </div>
                        <input type='text'/>

                        <div>
                            <h4>Password</h4>
                        </div>
                        <input type='password'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login