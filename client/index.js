import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/app.js'
import { Provider } from 'react-redux'
import store from '../store.js'

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.querySelector('#content')
)
