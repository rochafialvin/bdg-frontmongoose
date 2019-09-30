import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducers from './reducers/index'

let _store = createStore(reducers)

ReactDOM.render(
    <Provider store={_store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)