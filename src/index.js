import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
// Membuat store dengan menggunakan reducer yang sudah di buat
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
// Provider, memberikan akses komponen APP beserta child nya ke redux store
import { Provider } from 'react-redux'

import reducers from './reducers/index'

let _store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={_store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)