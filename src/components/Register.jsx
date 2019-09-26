import React, { Component } from 'react'

class Register extends Component {


    onSubmitClick = () => {
        // Ambil data dari text box
        let username = this.username.value
        let email = this.email.value
        let password = this.sandi.value

        console.log(username, email, password)

        // Simpan data di json

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