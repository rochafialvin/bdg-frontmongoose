import React, {Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'
import Header from './Header'
import ManageProducts from './ManageProducts'

class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact  component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/manageproducts" component={ManageProducts} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App