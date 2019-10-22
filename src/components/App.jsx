import React, {Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import {connect} from 'react-redux'


import Register from './Register'
import Login from './Login'
import Header from './Header'


import {keepLogin} from '../actions/index'

class App extends Component{

    state = {
        check: false
    }

    componentDidMount() {
        // backup user dari localStorage ke redux state
        // akan mengubah object string menjadi object sebenarnya
        let userData = JSON.parse(localStorage.getItem('userData'))

        if(userData){
            // Kirim ke redux
            this.props.keepLogin(userData)

        }

        this.setState({check: true})

    }

    render() {
        if(this.state.check){
            return (
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                    </div>
                </BrowserRouter>
            )
        }

        return <h1>LOADING</h1>
    }
}

export default connect(null, {keepLogin})(App)
// titik dua pada path merupakan sebuah variable yang menyimpan data
    // data pada variable dapat berubah - ubah