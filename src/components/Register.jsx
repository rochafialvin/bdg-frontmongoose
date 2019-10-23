import React, { Component } from 'react'
import axios from '../config/axios'

class Register extends Component {

    onSubmitClick = () => {
        // Ambil data dari text box
        let _username = this.username.value // rochafi
        let _name = this.name.value
        let _age = this.age.value
        let _email = this.email.value // rochafi@gmail.com
        let _password = this.sandi.value

        // Register user
        axios.post(
            '/users',
            {
                username: _username,
                name: _name,
                age : _age,
                email: _email,
                password: _password
            }
        ).then(res => {
            if(res.data.error){
                return alert(res.data.error)
            }

            alert('Registrasi berhasil')


        }).catch(err => {
            console.log({err})
            
        })

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
                        <input ref={ (input) => {this.username = input} } className='form-control' type='text'/>
                        
                        <div className='card-title'>
                            <h4>Name</h4>
                        </div>
                        <input ref={ (input) => {this.name = input} } className='form-control' type='text'/>
                        
                        <div className='card-title'>
                            <h4>Age</h4>
                        </div>
                        <input ref={ (input) => {this.age = input} } className='form-control' type='text'/>

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