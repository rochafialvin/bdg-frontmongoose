import React, {Component} from 'react'
import {BrowserRouter , Route} from 'react-router-dom'

import Home from './Home'
import Register from './Register'
import Login from './Login'

class App extends Component{

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Route path="/" exact  component={Home} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                </div>
            </BrowserRouter>
        )
    }
}

export default App