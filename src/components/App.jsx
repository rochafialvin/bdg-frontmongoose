import React, {Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom'
import {connect} from 'react-redux'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Header from './Header'
import ManageProducts from './ManageProducts'
import DetailProduct from './DetailProduct'

import {keepLogin} from '../actions/index'

class App extends Component{

    componentDidMount() {
        // backup user dari localStorage ke redux state
        // akan mengubah object string menjadi object sebenarnya
        let userData = JSON.parse(localStorage.getItem('userData'))

        if(userData){
            // Kirim ke redux
            this.props.keepLogin(userData)

        }

    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact  component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/manageproducts" component={ManageProducts} />
                    <Route path="/detail/:purwadhika" component={DetailProduct}/>
                </div>
            </BrowserRouter>
        )
    }
}

export default connect(null, {keepLogin})(App)
// titik dua pada path merupakan sebuah variable yang menyimpan data
    // data pada variable dapat berubah - ubah