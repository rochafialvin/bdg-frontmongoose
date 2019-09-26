import React, { Component } from 'react'

class Register extends Component {

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
                        <input className='form-control' type='text'/>

                        <div className='card-title'>
                            <h4>Email</h4>
                        </div>
                        <input className='form-control' type='email'/>

                        <div className='card-title'>
                            <h4>Password</h4>
                        </div>
                        <input className='form-control' type='password'/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Register